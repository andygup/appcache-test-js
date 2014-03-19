"use strict"

define([
    "dojo/_base/declare",
    "libs/offline-editor-js/tiles/offlineTilesEnabler"],
    function(declare,OfflineTilesEnabler){
        return declare(null, {

            _map: null,

            constructor: function(map)
            {
                this._map = map;
                this._initOfflineTiles(map);
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