//>>built
require({cache:{"url:esri/dijit/templates/LocateButton.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\n    \x3cdiv class\x3d"${_css.container}"\x3e\n            \x3cdiv data-dojo-attach-point\x3d"_locateNode" role\x3d"button" class\x3d"${_css.locate}"\x3e\x3cspan\x3e${_i18n.widgets.locateButton.locate.button}\x3c/span\x3e\x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e\n'}});
define("esri/dijit/LocateButton","dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has esri/kernel dijit/_WidgetBase dijit/a11yclick dijit/_TemplatedMixin dojo/on dojo/Deferred dojo/text!esri/dijit/templates/LocateButton.html dojo/i18n!esri/nls/jsapi dojo/dom-class dojo/dom-style dojo/dom-attr esri/geometry/Point esri/SpatialReference esri/graphic esri/symbols/PictureMarkerSymbol esri/layers/GraphicsLayer".split(" "),function(f,m,d,n,p,q,r,s,g,h,t,u,e,l,k,v,w,x,y,z){f=m([q,s,f],{declaredClass:"esri.dijit.LocateButton",
templateString:t,options:{theme:"LocateButton",map:null,visible:!0,highlightLocation:!0,symbol:new y(require.toUrl("esri/dijit")+"/images/blue-dot.png",21,21),infoTemplate:null,scale:null,useTracking:!1,setScale:!0,centerAt:!0,geolocationOptions:{maximumAge:0,timeout:15E3,enableHighAccuracy:!0}},constructor:function(a,c){var b=d.mixin({},this.options,a);this.domNode=c;this._i18n=u;navigator.geolocation||(b.visible=!1);this.set("map",b.map);this.set("theme",b.theme);this.set("visible",b.visible);this.set("scale",
b.scale);this.set("highlightLocation",b.highlightLocation);this.set("symbol",b.symbol);this.set("infoTemplate",b.infoTemplate);this.set("geolocationOptions",b.geolocationOptions);this.set("useTracking",b.useTracking);this.set("setScale",b.setScale);this.set("centerAt",b.centerAt);this.watch("theme",this._updateThemeWatch);this.watch("visible",this._visible);this.watch("tracking",this._locate);this.watch("useTracking",d.hitch(this,function(){this.get("tracking")&&!this.get("useTracking")&&this._stopTracking();
this._setTitle()}));this._css={container:"locateContainer",locate:"zoomLocateButton",loading:"loading",tracking:"tracking"}},postCreate:function(){this.inherited(arguments);this.own(g(this._locateNode,r,d.hitch(this,this.locate)))},startup:function(){this.get("map")||this.destroy();this.set("graphicsLayer",new z);this.get("map").addLayer(this.get("graphicsLayer"));this._graphicsEvent=g(this.get("graphicsLayer"),"graphics-clear",d.hitch(this,function(){this.set("highlightGraphic",null)}));if(this.get("map").loaded)this._init();
else g.once(this.get("map"),"load",d.hitch(this,function(){this._init()}))},destroy:function(){this._graphicsEvent&&this._graphicsEvent.remove();this.get("graphicsLayer")&&this.get("map")&&this.get("map").removeLayer(this.get("graphicsLayer"));this._removeWatchPosition();this.inherited(arguments)},clear:function(){this.get("graphicsLayer").clear()},locate:function(){this.get("useTracking")&&this.set("tracking",!this.get("tracking"));return this._locate()},show:function(){this.set("visible",!0)},hide:function(){this.set("visible",
!1)},_setTitle:function(){this.get("useTracking")?this.get("tracking")?k.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.stopTracking):k.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.tracking):k.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.title)},_removeWatchPosition:function(){this.get("watchId")&&(navigator.geolocation.clearWatch(this.get("watchId")),this.set("watchId",null))},_stopTracking:function(){e.remove(this._locateNode,this._css.tracking);
this._removeWatchPosition();this._hideLoading()},_startTracking:function(){e.add(this._locateNode,this._css.tracking);this._removeWatchPosition();var a=navigator.geolocation.watchPosition(d.hitch(this,function(a){this._setPosition(a).then(d.hitch(this,function(b){this._locateEvent(b)}),d.hitch(this,function(b){b||(b=Error("LocateButton::Error setting the position."));this._locateError(b)}))}),d.hitch(this,function(a){a||(a=Error("LocateButton::Could not get tracking position."));this._locateError(a)}),
this.get("geolocationOptions"));this.set("watchId",a)},_getCurrentPosition:function(){var a=new h;navigator.geolocation.getCurrentPosition(d.hitch(this,function(c){this._setPosition(c).then(d.hitch(this,function(b){a.resolve(b)}),d.hitch(this,function(b){b||(b=Error("LocateButton::Error setting map position."));a.reject(b)}))}),d.hitch(this,function(c){c||(c=Error("LocateButton::Could not get current position."));a.reject(c)}),this.get("geolocationOptions"));return a.promise},_locate:function(){var a=
new h;this._showLoading();if(navigator.geolocation)this.get("useTracking")?this.get("tracking")?(this._startTracking(),a.resolve({tracking:!0})):(this._stopTracking(),a.resolve({tracking:!1})):this._getCurrentPosition().then(d.hitch(this,function(b){this._locateEvent(b);a.resolve(b)}),d.hitch(this,function(b){b||(b=Error("LocateButton::Could not get current position."));this._locateError(b);a.reject(b)}));else{var c=Error("LocateButton::geolocation unsupported");this._locateError(c);a.reject(c)}this._setTitle();
return a.promise},_setPosition:function(a){var c=new h;if(a&&a.coords){var b=a.coords.latitude,e=a.coords.longitude,f=this.get("scale")||a.coords.accuracy||5E4;if(b=new v([e,b],new w({wkid:4326}))){var g=this._createEvent(b,f,a);this.get("setScale")&&this.get("map").setScale(f);this.get("centerAt")?this.get("map").centerAt(b).then(d.hitch(this,function(){c.resolve(g)}),d.hitch(this,function(a){a||(a=Error("LocateButton::Could not center map."));c.reject(a)})):c.resolve(g)}else a=Error("LocateButton::Invalid point"),
c.reject(a)}else a=Error("LocateButton::Invalid position"),c.reject(a);return c.promise},_createEvent:function(a,c,b){var d={position:b};return{graphic:new x(a,this.get("symbol"),d,this.get("infoTemplate")),scale:c,position:b}},_locateEvent:function(a){if(a.graphic){var c=this.get("highlightGraphic");c?(c.setGeometry(a.graphic.geometry),c.setAttributes(a.graphic.attributes),c.setInfoTemplate(a.graphic.infoTemplate),c.setSymbol(a.graphic.symbol)):(c=a.graphic,this.get("highlightLocation")&&this.get("graphicsLayer").add(c));
this.set("highlightGraphic",c)}this._hideLoading();this.emit("locate",a)},_locateError:function(a){this._hideLoading();this.emit("locate",{graphic:null,scale:null,position:null,error:a})},_showLoading:function(){this.get("useTracking")||e.add(this._locateNode,this._css.loading)},_hideLoading:function(){this.get("useTracking")||e.remove(this._locateNode,this._css.loading)},_init:function(){this._visible();this._setTitle();this.set("loaded",!0);this.emit("load",{})},_updateThemeWatch:function(a,c,b){e.remove(this.domNode,
c);e.add(this.domNode,b)},_visible:function(){this.get("visible")?l.set(this.domNode,"display","block"):l.set(this.domNode,"display","none")}});n("extend-esri")&&d.setObject("dijit.LocateButton",f,p);return f});
//@ sourceMappingURL=LocateButton.js.map