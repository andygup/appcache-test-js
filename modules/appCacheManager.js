/**
 * Helper module for using the application cache.
 * Many thanks to the following blog posts:
 * http://www.html5rocks.com/en/tutorials/this.appCache/beginner/
 */
define([
    "dojo/_base/declare",
    "dojo/Evented",
    "dojo/_base/lang"],
    function(declare,Evented,lang){
        return declare([Evented], {
            UPDATE_READY: "update-ready",
            UPDATE_NONE: "no-update",
            CACHE_EVENT: "cache-event",
            CACHE_ERROR: "cache-error",
            appCache: window.applicationCache,

            constructor: function(/* boolean */autoUpdate, /* boolean */ setListeners)
            {
                if(autoUpdate)this.setUdpateCache();
                if(setListeners)this.setCacheListeners();
                console.log("this.appCacheManager enabled");
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
                                //this.emit(this.UPDATE_READY,null);
                            }
                        } else {
                            // Manifest didn't changed. Nothing new to server.
                            console.log("App cache no change");
                            //this.emit(this.UPDATE_NONE,null);
                        }
                    }, false);

                }, false);
            },

            setCacheListeners:function(){
                this.appCache.addEventListener('cached', this._handleCacheEvents.bind(this), false);

                // Checking for an update. Always the first event fired in the sequence.
                this.appCache.addEventListener('checking', this._handleCacheEvents.bind(this), false);

                // An update was found. The browser is fetching resources.
                this.appCache.addEventListener('downloading', this._handleCacheEvents.bind(this), false);

                // The manifest returns 404 or 410, the download failed,
                // or the manifest changed while the download was in progress.
                this.appCache.addEventListener('error', this._handleCacheErrors.bind(this), false);

                // Fired after the first download of the manifest.
                this.appCache.addEventListener('noupdate', this._handleCacheEvents.bind(this), false);

                // Fired if the manifest file returns a 404 or 410.
                // This results in the application cache being deleted.
                this.appCache.addEventListener('obsolete', this._handleCacheEvents.bind(this), false);

                // Fired for each resource listed in the manifest as it is being fetched.
                this.appCache.addEventListener('progress', this._handleCacheEvents.bind(this), false);

                // Fired when the manifest resources have been newly redownloaded.
                this.appCache.addEventListener('updateready', this._handleCacheEvents.bind(this), false);
            },

            getCacheStatus:function(){

                switch (this.appCache.status) {
                    case this.appCache.UNCACHED: // UNCACHED == 0
                        return 'UNCACHED';
                        break;
                    case this.appCache.IDLE: // IDLE == 1
                        return 'IDLE';
                        break;
                    case this.appCache.CHECKING: // CHECKING == 2
                        return 'CHECKING';
                        break;
                    case this.appCache.DOWNLOADING: // DOWNLOADING == 3
                        return 'DOWNLOADING';
                        break;
                    case this.appCache.UPDATEREADY:  // UPDATEREADY == 4
                        return 'UPDATEREADY';
                        break;
                    case this.appCache.OBSOLETE: // OBSOLETE == 5
                        return 'OBSOLETE';
                        break;
                    default:
                        return 'UKNOWN CACHE STATUS';
                        break;
                };
            },

            _handleCacheEvents:function(evt){
                console.log("App cache event " + evt);
                //this.emit(this.CACHE_EVENT,evt);
            },

            _handleCacheErrors:function(evt){
                console.log("App cache error " + evt);
                //this.emit(this.CACHE_EVENT,evt);
            }
        })
    }
)

