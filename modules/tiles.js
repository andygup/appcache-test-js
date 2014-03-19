"use strict"

define([
    "dojo/_base/declare",
    "tiles/offlineTilesEnabler"],
    function(declare,OfflineTilesEnabler){
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

            saveTilesLocally: function(evt){
                if( globalState.downloadState == 'downloading')
                {
                    console.log("cancel!");
                    _wantToCancel = true;
                }
                else
                {
                    var minLevel = 0;
                    var maxLevel = 16;
                    var extent = this._map.geometry.getExtent();
                    var buffer = 1500; /* approx meters (webmercator units) */
                    extent.xmin -= buffer; extent.ymin -= buffer;
                    extent.xmax += buffer; extent.ymax += buffer;
                    _wantToCancel = false;
                    this._map.prepareForOffline(minLevel, maxLevel, extent, lang.hitch(self,self._reportProgress));
                    globalState.downloadState = 'downloading';
                }
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
                        this._btnGetTiles.value = 'Get Tiles';
                    }
                    else
                    {
                        globalState.downloadState = 'downloaded';
                        this._btnGetTiles.value = 'Delete Tiles';
                    }
                }
                return _wantToCancel;
            },

            _initOfflineTiles: function(map){
                OfflineTilesEnabler.extend(map,function(success)
                {
                    if( success )
                    {
                        // Please update this path with the path for the proxy - required for ArcGIS Server access
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