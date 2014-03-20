/**
 * Helper module for using the application cache.
 * Many thanks to the following blog posts:
 * http://www.html5rocks.com/en/tutorials/appcache/beginner/
 */
define([
    "dojo/_base/declare",
    "dojo/Evented",
    "dojo/_base/lang"],
    function(declare,Evented,lang){
        return declare([Evented], {
            self:this,
            UPDATE_READY: "update-ready",
            UPDATE_NONE: "no-update",
            CACHE_EVENT: "cache-event",
            CACHE_ERROR: "cache-error",

            constructor: function()
            {

            },

            setUdpateCache:function(){
                // Check if a new cache is available on page load.
                window.addEventListener('load', function(evt) {

                    window.applicationCache.addEventListener('updateready', function(evt) {
                        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                            // Browser downloaded a new app cache.
                            if (confirm('A new version of this site is available. Load it?')) {
                                window.location.reload();
                                console.log("App cache reloaded");
                                self.emit(self.events.UPDATE_READY,null);
                            }
                        } else {
                            // Manifest didn't changed. Nothing new to server.
                            console.log("App cache no change");
                            self.emit(self.events.UPDATE_NONE,null);
                        }
                    }, false);

                }, false);
            },

            setCacheListeners:function(){
                appCache.addEventListener('cached', _handleCacheEvents, false);

                // Checking for an update. Always the first event fired in the sequence.
                appCache.addEventListener('checking', _handleCacheEvents, false);

                // An update was found. The browser is fetching resources.
                appCache.addEventListener('downloading', _handleCacheEvents, false);

                // The manifest returns 404 or 410, the download failed,
                // or the manifest changed while the download was in progress.
                appCache.addEventListener('error', _handleCacheErrors, false);

                // Fired after the first download of the manifest.
                appCache.addEventListener('noupdate', _handleCacheEvents, false);

                // Fired if the manifest file returns a 404 or 410.
                // This results in the application cache being deleted.
                appCache.addEventListener('obsolete', _handleCacheEvents, false);

                // Fired for each resource listed in the manifest as it is being fetched.
                appCache.addEventListener('progress', _handleCacheEvents, false);

                // Fired when the manifest resources have been newly redownloaded.
                appCache.addEventListener('updateready', _handleCacheEvents, false);
            },

            getCacheStatus:function(){
                var appCache = window.applicationCache;

                switch (appCache.status) {
                    case appCache.UNCACHED: // UNCACHED == 0
                        return 'UNCACHED';
                        break;
                    case appCache.IDLE: // IDLE == 1
                        return 'IDLE';
                        break;
                    case appCache.CHECKING: // CHECKING == 2
                        return 'CHECKING';
                        break;
                    case appCache.DOWNLOADING: // DOWNLOADING == 3
                        return 'DOWNLOADING';
                        break;
                    case appCache.UPDATEREADY:  // UPDATEREADY == 4
                        return 'UPDATEREADY';
                        break;
                    case appCache.OBSOLETE: // OBSOLETE == 5
                        return 'OBSOLETE';
                        break;
                    default:
                        return 'UKNOWN CACHE STATUS';
                        break;
                };
            },

            _handleCacheEvents:function(evt){
                console.log("App cache event " + evt);
                self.emit(self.events.CACHE_EVENT,evt);
            },

            _handleCacheErrors:function(evt){
                console.log("App cache error " + evt);
                self.emit(self.events.CACHE_EVENT,evt);
            }
        })
    }
)

