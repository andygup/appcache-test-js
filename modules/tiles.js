"use strict"

define([
    "dojo/_base/declare",
    "tiles/offlineTilesEnabler",
    "dojo/_base/lang"],
    function(declare,OfflineTilesEnabler,lang){
        return declare(null, {

            _map: null,
            _minZoom: 13,
            _maxZoom: 15,
            _btnGetTiles:null,
            _wantToCancel: false,
            _offlineTilesEnabler:null,
            _baseMapLayer:null,
            globalState:{},

            constructor: function(map,minZoom,maxZoom)
            {
                this._map = map;
                if(typeof minZoom != "undefined" || minZoom == "null")this._minZoom = minZoom;
                if(typeof maxZoom != "undefined" || minZoom == "null")this._maxZoom = maxZoom;
                this._maxZoom = maxZoom;
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
                    var extent = this._map.extent;
                    var buffer = 500; /* approx meters (webmercator units) */
                    extent.xmin -= buffer; extent.ymin -= buffer;
                    extent.xmax += buffer; extent.ymax += buffer;
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

            getEstimateTileCount: function()
            {
                this._baseMapLayer.estimateTileSize(function(tileSize){

                    var totalEstimation;

                    for(var level=this._minZoom; level<=this._maxZoom; level++)
                    {
                        var levelEstimation = this._baseMapLayer.getLevelEstimation(this._map.extent,level,tileSize);

                        totalEstimation.tileCount += levelEstimation.tileCount;
                        totalEstimation.sizeBytes += levelEstimation.sizeBytes;
                    }

                    console.log("Size estimate: " + totalEstimation.sizeBytes + ", tile count: " + totalEstimation.tileCount)
                    return totalEstimation;
                })
            },

            _reportProgress: function(progress)
            {
                console.log("downloading tiles...");
                var percent = Math.floor(progress.countNow / progress.countMax * 100);
                this._btnGetTiles.innerHTML = 'Saving to phone ' + percent + "% - Tap to Cancel";

                if( progress.finishedDownloading )
                {
                    if( progress.cancelRequested )
                    {
                        this.globalState.downloadState = 'cancelled';
                        this._btnGetTiles.innerHTML = 'Get Tiles';
                    }
                    else
                    {
                        this.globalState.downloadState = 'downloaded';
                        this._btnGetTiles.innerHTML = 'Delete Tiles';
                    }
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
                        //using null sets this for CORS
                        this._baseMapLayer.offline.proxyPath = null; //"libs/offline-editor-js/resource-proxy/proxy.php";
                        console.log("Offline tile lib is enabled");
                    }
                    else
                    {
                        alert("error initializing storage - browser doesn't support indexeddb")
                    }
                }.bind(this));
            }

        })
})