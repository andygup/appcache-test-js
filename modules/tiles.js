"use strict"

define([
    "dojo/_base/declare",
    "tiles/offlineTilesEnabler",
    "dojo/_base/lang"],
    function(declare,OfflineTilesEnabler,lang){
        return declare(null, {

            _map: null,
            _btnGetTiles:null,
            _wantToCancel: false,
            globalState:{},

            constructor: function(map)
            {
                this._map = map;
                this._initOfflineTiles(map);
                this._btnGetTiles = document.getElementById("btn-get-tiles");
            },

            saveTilesLocally: function(){
                if( globalState.downloadState == 'downloading')
                {
                    console.log("cancel!");
                    this._wantToCancel = true;
                    this._btnGetTiles.innerHTML = "cancelling..";
                }
                else
                {
                    var minLevel = 0;
                    var maxLevel = 16;
                    var extent = this._map.geometry.getExtent();
                    var buffer = 1500; /* approx meters (webmercator units) */
                    extent.xmin -= buffer; extent.ymin -= buffer;
                    extent.xmax += buffer; extent.ymax += buffer;
                    this._wantToCancel = false;
                    this._map.prepareForOffline(minLevel, maxLevel, extent, lang.hitch(self,self._reportProgress));
                    globalState.downloadState = 'downloading';
                }
            },

            deleteTileCache: function(callback){
                this._map.deleteAllTiles(function(success,err){
                    callback(success,err);
                })
            },

            _reportProgress: function(progress)
            {
                console.log("downloading tiles...");
                var percent = Math.floor(progress.countNow / progress.countMax * 100);
                this._btnGetTiles.value = 'Saving to phone ' + percent + "% - Tap to Cancel";

                if( progress.finishedDownloading )
                {
                    if( progress.cancelRequested )
                    {
                        globalState.downloadState = 'cancelled';
                        this._btnGetTiles.innerHTML = 'Get Tiles';
                    }
                    else
                    {
                        globalState.downloadState = 'downloaded';
                        this._btnGetTiles.innerHTML = 'Delete Tiles';
                    }
                }
                return this._wantToCancel; //determines if a cancel request has been issued
            },

            _initOfflineTiles: function(map){
                OfflineTilesEnabler.extend(map,function(success)
                {
                    if( success )
                    {
                        //using null sets this for CORS
                        map.offline.proxyPath = null; //"libs/offline-editor-js/resource-proxy/proxy.php";
                        console.log("Offline tile lib is enabled");
                    }
                    else
                    {
                        alert("error initializing storage - browser doesn't support indexeddb")
                    }
                });
            }

        })
})