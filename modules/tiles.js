"use strict"
/**
 * Helper class for working with offlineTilesEnabler.js
 */
define([
    "dojo/_base/declare",
    "dojo/Evented",
    "tiles/offlineTilesEnabler",
    "tiles/tilingScheme",
    "dojo/_base/lang"],
    function(declare,Evented,OfflineTilesEnabler,TilingScheme,lang){
        return declare([Evented], {

            _map: null,
            _minZoom: 13,
            _maxZoom: 15,
            _btnGetTiles:null,
            _wantToCancel: false,
            _offlineTilesEnabler:null,
            _baseMapLayer:null,
            globalState:{},
            EXTEND_LAYER_COMPLETE_EVENT:"extendLayerComplete",
            EXTENT_BUFFER:100, //buffers the map extent in meters

            constructor: function(/* Map */ map, /* int */ minZoom, /* int */ maxZoom)
            {
                this._map = map;
                if(typeof minZoom != "undefined" || minZoom != "null")this._minZoom = minZoom;
                if(typeof maxZoom != "undefined" || maxZoom != "null")this._maxZoom = maxZoom;
                this._initOfflineTiles(map);
                this._btnGetTiles = document.getElementById("btn-get-tiles");
            },

            saveTilesLocally: function(evt){

                var self = evt.data;

                if( this.globalState.downloadState == 'downloading')
                {
                    console.log("cancel!");
                    this._wantToCancel = true;
                    this._btnGetTiles.innerHTML = "cancelling..";
                }
                else
                {
                    var minLevel = this._minZoom;
                    var maxLevel = this._maxZoom;
                    var extent = this.getExtentBuffer(this.EXTENT_BUFFER);
                    this._wantToCancel = false;
                    this._baseMapLayer.prepareForOffline(minLevel, maxLevel, extent, lang.hitch(this,this._reportProgress));
                    this.globalState.downloadState = 'downloading';
                }
            },

            deleteTileCache: function(callback){
                this._baseMapLayer.deleteAllTiles(function(success,err){
                    callback(success,err);
                })
            },

            goOnline: function()
            {
                this._baseMapLayer.goOnline();
            },

            goOffline: function()
            {
                this._baseMapLayer.goOffline();
            },

            /**
             * Returns a new extent based on a buffer of meters in web mercator units
             * @param buffer
             * @returns {*}
             */
            getExtentBuffer: function(/* int */ buffer){
                var extent = this._map.extent;
                extent.xmin -= buffer; extent.ymin -= buffer;
                extent.xmax += buffer; extent.ymax += buffer;
                return extent;
            },

            getTileUrls: function(){
                var level = this._minZoom;
                var tilingScheme = new TilingScheme(this._baseMapLayer);
                var level_cell_ids = tilingScheme.getAllCellIdsInExtent(this._map.extent,level);
                var cells = [];

                level_cell_ids.forEach(function(cell_id)
                {
                    cells.push(this._baseMapLayer.getTileUrl(level,cell_id[1],cell_id[0]))
                }.bind(this));

                return cells;
            },

            /**
             * Gets tile count and size estimates. Not perfect.
             * @param callback
             */
            getEstimateTileCount: function(callback)
            {
                var url = this.getTileUrls()[0];
                this._baseMapLayer._lastTileUrl = url;
                this._baseMapLayer.estimateTileSize(function(tileSize){

                    var totalEstimation = {tileCount:0,sizeBytes:0};

                    for(var level=this._minZoom; level<=this._maxZoom; level++)
                    {
                        var levelEstimation = this._baseMapLayer.getLevelEstimation(this.getExtentBuffer(this.EXTENT_BUFFER),level,tileSize);

                        totalEstimation.tileCount += levelEstimation.tileCount;
                        totalEstimation.sizeBytes += levelEstimation.sizeBytes;
                    }

                    console.log("Size estimate: " + totalEstimation.sizeBytes + ", tile count: " + totalEstimation.tileCount)
                    callback(totalEstimation);
                }.bind(this))
            },

            _reportProgress: function(progress)
            {
                console.log("downloading tiles...");
                if(progress.hasOwnProperty("countNow")){
                    var percent = Math.floor(progress.countNow / progress.countMax * 100);
                    this._btnGetTiles.innerHTML = 'Saving to phone ' + percent + "% - Tap to Cancel";
                }

                if( progress.finishedDownloading )
                {
                    this._btnGetTiles.innerHTML = "Saving to phone 100% - Tap to Cancel";

                    if( progress.cancelRequested )
                    {
                        this.globalState.downloadState = 'cancelled';
                        alert("Tile download was cancelled");
                    }
                    else
                    {
                        this.globalState.downloadState = 'downloaded';
                        alert("Tile download complete");
                    }

                    this._btnGetTiles.innerHTML = '1. Download Tiles';
                }
                return this._wantToCancel; //determines if a cancel request has been issued
            },

            _initOfflineTiles: function(map){

                this._offlineTilesEnabler = new OfflineTilesEnabler();
                this._baseMapLayer = this._offlineTilesEnabler.getBasemapLayer(map);

                this._offlineTilesEnabler.extend(this._baseMapLayer,function(success)
                {
                    if( success )
                    {
                        console.log("Offline tile lib is enabled");

                        //using null sets this for CORS
                        this._baseMapLayer.offline.proxyPath = null;

                        this.emit(this.EXTEND_LAYER_COMPLETE_EVENT, {
                            bubbles: true,
                            cancelable: true
                        });
                    }
                    else
                    {
                        alert("error initializing storage - browser doesn't support indexeddb or websql")
                    }
                }.bind(this));
            }

        })
})