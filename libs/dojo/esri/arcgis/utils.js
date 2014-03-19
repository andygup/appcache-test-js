//>>built
define("esri/arcgis/utils","dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/Deferred dojo/_base/json dojo/_base/url dojo/has dojo/DeferredList dojo/dom-construct esri/kernel esri/config esri/lang esri/request esri/SpatialReference esri/map esri/urlUtils esri/geometry/ScreenPoint esri/geometry/Extent esri/geometry/webMercatorUtils esri/symbols/jsonUtils esri/renderers/jsonUtils esri/dijit/PopupTemplate esri/dijit/Popup esri/tasks/query esri/tasks/GeometryService esri/arcgis/csv esri/layers/ArcGISTiledMapServiceLayer esri/layers/ArcGISDynamicMapServiceLayer esri/layers/ArcGISImageServiceLayer esri/layers/OpenStreetMapLayer esri/layers/WebTiledLayer esri/layers/FeatureLayer esri/layers/WMSLayer esri/layers/KMLLayer esri/layers/GeoRSSLayer esri/virtualearth/VETiledLayer esri/layers/TileInfo esri/layers/DynamicLayerInfo esri/layers/LayerDrawingOptions esri/layers/ImageParameters esri/layers/ImageServiceParameters esri/layers/RasterFunction esri/layers/MosaicRule esri/layers/WMSLayerInfo dojo/i18n!esri/nls/jsapi".split(" "),
function(p,g,s,r,H,ya,Wa,C,za,D,I,h,A,B,Aa,aa,ba,E,Ba,S,Ca,ca,Da,Ea,Fa,J,da,ea,Ga,Ha,Ia,x,Ja,Ka,La,K,Ma,Na,Oa,Pa,Qa,Ra,Sa,Ta,T){function F(a){return A({url:n.arcgisUrl+"/"+a.itemId+"/data",content:{f:"json"},callbackParamName:"callback"},{disableIdentityLookup:!0,_preLookup:!0})}function fa(a){var d={f:"json"};if(D.id){var c=D.id.findCredential(aa.urlToObject(n.arcgisUrl).path);c&&(d.token=c.token)}return A({url:a,content:d,callbackParamName:"callback"},{disableIdentityLookup:!0})}function ga(a){a.itemProperties.layerDefinition&&
(a.layerDefinition?(a.layerDefinition.drawingInfo||(a.layerDefinition.drawingInfo=a.itemProperties.layerDefinition.drawingInfo),h.isDefined(a.layerDefinition.definitionExpression)||(a.layerDefinition.definitionExpression=a.itemProperties.layerDefinition.definitionExpression),h.isDefined(a.layerDefinition.minScale)||(a.layerDefinition.minScale=a.itemProperties.layerDefinition.minScale),h.isDefined(a.layerDefinition.maxScale)||(a.layerDefinition.maxScale=a.itemProperties.layerDefinition.maxScale)):
a.layerDefinition=a.itemProperties.layerDefinition);a.itemProperties.popupInfo&&(!a.popupInfo&&!a.disablePopup)&&(a.popupInfo=a.itemProperties.popupInfo);h.isDefined(a.itemProperties.showLegend)&&!h.isDefined(a.showLegend)&&(a.showLegend=a.itemProperties.showLegend);h.isDefined(a.itemProperties.refreshInterval)&&!h.isDefined(a.refreshInterval)&&(a.refreshInterval=a.itemProperties.refreshInterval)}function L(a,d){var c=new r,f=a.itemData,e=[],b=[];g.forEach(f.operationalLayers,function(a){if(a.itemId&&
!a.type){var c=a.url.toLowerCase();-1<c.indexOf("/featureserver")||-1<c.indexOf("/mapserver/")?(b.push(a),e.push(F(a))):-1<c.indexOf("/mapserver")&&-1===c.indexOf("/mapserver/")&&(!a.layers||!h.isDefined(a.minScale)&&!h.isDefined(a.maxScale))?(b.push(a),e.push(F(a))):-1<c.indexOf("/imageserver")&&(!h.isDefined(a.minScale)&&!h.isDefined(a.maxScale))&&(b.push(a),e.push(F(a)))}});f.baseMap&&f.baseMap.baseMapLayers&&g.forEach(f.baseMap.baseMapLayers,function(a){("BingMapsAerial"===a.type||"BingMapsRoad"===
a.type||"BingMapsHybrid"===a.type)&&a.portalUrl?(delete d.bingMapsKey,b.push(a),e.push(fa(a.portalUrl))):a.itemId&&(b.push(a),e.push(F(a)))});0<e.length?(new C(e)).addCallback(function(e){g.forEach(b,function(a,c){if(("BingMapsAerial"===a.type||"BingMapsRoad"===a.type||"BingMapsHybrid"===a.type)&&a.portalUrl)e[c][1].bingKey?d.bingMapsKey=e[c][1].bingKey:(a.errors=a.errors||[],a.errors.push({message:"The owner of the map has not provided a Bing Key for the Bing Map it includes. [type:"+a.type+"]"}));
else{var b=e[c][1];if(b&&!a.type){var f=a.url.toLowerCase();(-1<f.indexOf("/featureserver")||-1<f.indexOf("/mapserver/"))&&b.layers?g.forEach(b.layers,function(b){if(f.endsWith("/featureserver/"+b.id)||f.endsWith("/mapserver/"+b.id))a.itemProperties=b,ga(a)}):-1<f.indexOf("/mapserver")?(b.layers&&!a.layers&&(a.layers=b.layers),h.isDefined(b.minScale)&&!h.isDefined(a.minScale)&&(a.minScale=b.minScale),h.isDefined(b.maxScale)&&!h.isDefined(a.maxScale)&&(a.maxScale=b.maxScale),h.isDefined(b.refreshInterval)&&
!h.isDefined(a.refreshInterval)&&(a.refreshInterval=b.refreshInterval)):-1<f.indexOf("/imageserver")&&(h.isDefined(b.minScale)&&!h.isDefined(a.minScale)&&(a.minScale=b.minScale),h.isDefined(b.maxScale)&&!h.isDefined(a.maxScale)&&(a.maxScale=b.maxScale),h.isDefined(b.refreshInterval)&&!h.isDefined(a.refreshInterval)&&(a.refreshInterval=b.refreshInterval),b.popupInfo&&(!a.popupInfo&&!a.disablePopup)&&(a.popupInfo=b.popupInfo),b.renderingRule&&!a.renderingRule&&(a.renderingRule=b.renderingRule,b.renderingRule.functionName&&
(a.renderingRule.rasterFunction=b.renderingRule.functionName)),b.bandIds&&!a.bandIds&&(a.bandIds=b.bandIds),b.mosaicRule&&!a.mosaicRule&&(a.mosaicRule=b.mosaicRule),b.format&&!a.format&&(a.format=b.format),h.isDefined(b.compressionQuality)&&!h.isDefined(a.compressionQuality)&&(a.compressionQuality=b.compressionQuality))}}});c.callback(a)}):c.callback(a);return c}function U(a,d){var c=a.dynamicLayerInfos||a.layerInfos,f=d.layers;if(f&&c){var e=[],b=[],k=[],l=[],m=[],w=[];g.forEach(c,function(c){var d=
c.id;if(!c.subLayerIds&&-1!==g.indexOf(a.visibleLayers,d))for(c=0;c<f.length;c++){var v=f[c];if(v.id===d){b.push(d);e.push(v.popupInfo);k.push(v.layerUrl||"");v.layerDefinition&&v.layerDefinition.definitionExpression?l.push(v.layerDefinition.definitionExpression):l.push("");m.push(h.isDefined(v.minScale)?v.minScale:null);w.push(h.isDefined(v.maxScale)?v.maxScale:null);break}}});e.length&&(a.__popups=e,a.__popupIds=b,a.__popupUrls=k,a.__popupWhereClauses=l,a.__popupMinScales=m,a.__popupMaxScales=w,
a.__resourceInfo=d.resourceInfo)}}function ha(a){if(!a)return!1;var d=(new ya(n.arcgisUrl)).authority;return-1!==a.indexOf(".arcgis.com/")||-1!==a.indexOf(d)}function ia(a){return!a?!1:-1!==a.indexOf("/services.arcgisonline.com/")||-1!==a.indexOf("/server.arcgisonline.com/")}function y(a){if("https:"===location.protocol&&(ha(a)||ia(a)))a=a.replace("http:","https:");return a}function V(a){var d=[];a.displayLevels||(d=g.map(a.resourceInfo.tileInfo.lods,function(a){return a.level}));d=new da(y(a.url),
{resourceInfo:a.resourceInfo,opacity:a.opacity,visible:a.visibility,displayLevels:a.displayLevels||d,id:a.id,minScale:a.minScale,maxScale:a.maxScale,refreshInterval:a.refreshInterval});U(d,a);return d}function W(a,d){if(!a||!d||0===d.length)return[];var c=","+d+",",f=[],e,b=",";for(e=0;e<a.length;e++)if(null!==a[e].subLayerIds){if(-1===c.indexOf(","+a[e].id+",")||-1<b.indexOf(","+a[e].id+","))b+=a[e].subLayerIds.toString()+","}else-1<c.indexOf(","+a[e].id+",")&&-1===b.indexOf(","+a[e].id+",")&&f.push(a[e].id);
return f}function ja(a){var d=new Pa;d.format="png24";a.resourceInfo&&(a.resourceInfo.supportedImageFormatTypes&&-1<a.resourceInfo.supportedImageFormatTypes.indexOf("PNG32"))&&(d.format="png32");var d=new ea(y(a.url),{resourceInfo:a.resourceInfo,opacity:a.opacity,visible:a.visibility,id:a.id,imageParameters:d,minScale:a.minScale,maxScale:a.maxScale,refreshInterval:a.refreshInterval}),c=a.visibleLayers;if(!a.visibleLayers){var f="";g.forEach(d.layerInfos,function(a){a.defaultVisibility&&(f+=(0<f.length?
",":"")+a.id)});c=f}if(a.layers&&0<a.layers.length){var e=[],b=[],k,l=[],m;g.forEach(a.layers,function(c){c.layerDefinition&&c.layerDefinition.definitionExpression&&(e[c.id]=c.layerDefinition.definitionExpression);if(c.layerDefinition&&c.layerDefinition.source){k=new Na(p.mixin(c,c.layerDefinition));delete k.layerDefinition;k.id=c.id;if(a.visibleLayers){var d="string"==typeof a.visibleLayers?a.visibleLayers.split(","):a.visibleLayers;-1<g.indexOf(d,c.id)?k.defaultVisibility=!0:k.defaultVisibility=
!1}b.push(k)}c.layerDefinition&&(c.layerDefinition.source&&c.layerDefinition.drawingInfo)&&(m=new Oa(c.layerDefinition.drawingInfo),l[c.id]=m)},this);0<e.length&&d.setLayerDefinitions(e);0<b.length?(d.setDynamicLayerInfos(b,!0),0<l.length&&d.setLayerDrawingOptions(l,!0)):(c=W(d.layerInfos,c),d.setVisibleLayers(c))}else c=W(d.layerInfos,c),d.setVisibleLayers(c);U(d,a);return d}function Ua(a,d){var c=new Qa;c.bandIds=a.bandIds;null!=a.format&&(c.format=a.format,null!=a.compressionQuality&&(c.compressionQuality=
a.compressionQuality));if(a.renderingRule&&a.renderingRule.rasterFunction){var f=new Ra(a.renderingRule);c.renderingRule=f}a.mosaicRule&&(f=new Sa(a.mosaicRule),c.mosaicRule=f);h.isDefined(a.noData)&&(c.noData=a.noData);h.isDefined(a.noDataInterpretation)&&(c.noDataInterpretation=a.noDataInterpretation);h.isDefined(a.interpolation)&&(c.interpolation=a.interpolation);c=new Ga(y(a.url),{resourceInfo:a.resourceInfo,opacity:a.opacity,visible:a.visibility,id:a.id,imageServiceParameters:c,infoTemplate:a.popupInfo&&
new d(a.popupInfo),minScale:a.minScale,maxScale:a.maxScale,refreshInterval:a.refreshInterval});a.layerDefinition&&a.layerDefinition.definitionExpression&&c.setDefinitionExpression(a.layerDefinition.definitionExpression,!0);return c}function X(a,d,c){var f=[102113,102100,3857],e=c||new B(d[0].layerObject.fullExtent.spatialReference),b=new B(a.resourceInfo.fullExtent.spatialReference);return e.wkt==b.wkt&&(e.wkid==b.wkid||h.isDefined(e.latestWkid)&&e.latestWkid==b.wkid||h.isDefined(b.latestWkid)&&e.wkid==
b.latestWkid||h.isDefined(e.latestWkid)&&e.latestWkid==b.latestWkid)||e.wkid&&b.wkid&&g.some(f,function(a){return a===b.wkid})&&g.some(f,function(a){return a===e.wkid})?!0:!1}function Y(a,d){if(!d[0].layerObject.tileInfo)return!1;var c=[];g.forEach(d,function(a){a.baseMapLayer&&a.layerObject.tileInfo&&(c=c.concat(g.map(a.layerObject.tileInfo.lods,function(a){return a.scale})))});return g.some(a.resourceInfo.tileInfo.lods,function(a){return g.some(c,function(c){return c===a.scale})})}function Z(a,
d,c,f,e){var b,k=c._clazz;if("OpenStreetMap"===a.type)b=new Ha({id:a.id,opacity:a.opacity,visible:null!==a.visibility&&void 0!==a.visibility?a.visibility:!0});else if("WMS"===a.type){var l=[],m=[];g.forEach(a.layers,function(a){m.push(new Ta({name:a.name,title:a.title,legendURL:a.legendURL}));l.push(a.name)},this);a.visibleLayers&&(l=a.visibleLayers);f={extent:new E(a.extent[0][0],a.extent[0][1],a.extent[1][0],a.extent[1][1],new B({wkid:4326})),layerInfos:m,version:a.version,maxWidth:a.maxWidth,maxHeight:a.maxHeight,
getMapURL:a.mapUrl,spatialReferences:a.spatialReferences,title:a.title,copyright:a.copyright};b=new Ja(a.url,{id:a.id,visibleLayers:l,format:"png",transparent:a.baseMapLayer?!1:!0,opacity:a.opacity,visible:null!==a.visibility?a.visibility:!0,resourceInfo:f,refreshInterval:a.refreshInterval});b.spatialReference.wkid=f.spatialReferences[0]}else if("KML"===a.type){c=a.url;if(D.id&&(k=D.id.findCredential(aa.urlToObject(n.arcgisUrl).path))){d=n.arcgisUrl.substring(n.arcgisUrl.indexOf("//")+2,n.arcgisUrl.indexOf("/",
n.arcgisUrl.indexOf("//")+3));e=d.split(".");e=e[e.length-2]+"."+e[e.length-1];var w=c.indexOf(e);-1<w&&(c="https://"+d+c.substring(w+e.length));c+="?token\x3d"+k.token}b=new Ka(c,{id:a.id,visible:null!==a.visibility?a.visibility:!0,outSR:f,refreshInterval:a.refreshInterval});s.connect(b,"onLoad",function(){var c=function(b){g.forEach(b,function(b){"esri.layers.FeatureLayer"===b.declaredClass||"esri.layers.MapImageLayer"===b.declaredClass?b.setOpacity(a.opacity):"esri.layers.KMLLayer"===b.declaredClass&&
(b.loaded?c(b.getLayers()):s.connect(b,"onLoad",p.hitch(this,function(a){c(a.getLayers())})))})};(a.opacity||0===a.opacity)&&c(b.getLayers());a.visibleFolders&&g.forEach(b.folders,function(c){-1<g.indexOf(a.visibleFolders,c.id)?b.setFolderVisibility(c,!0):b.setFolderVisibility(c,!1)},this)})}else"WebTiledLayer"===a.type?(b=new Ia(a.templateUrl,{id:a.id,visible:null!==a.visibility?a.visibility:!0,opacity:a.opacity,copyright:a.copyright,fullExtent:a.fullExtent&&new E(a.fullExtent),initialExtent:a.fullExtent&&
new E(a.fullExtent),subDomains:a.subDomains,tileInfo:a.tileInfo?new Ma(a.tileInfo):null,refreshInterval:a.refreshInterval}),s.connect(b,"onLoad",function(){(h.isDefined(a.minScale)||h.isDefined(a.maxScale))&&b.setScaleRange(a.minScale,a.maxScale)})):"GeoRSS"===a.type?(b=new La(a.url,{id:a.id,opacity:a.opacity,outSpatialReference:f,refreshInterval:a.refreshInterval}),s.connect(b,"onLoad",function(){!1===a.visibility&&b.hide();var c=b.getFeatureLayers();g.forEach(c,function(b){a.pointSymbol&&"esriGeometryPoint"===
b.geometryType?b.renderer.symbol=S.fromJson(a.pointSymbol):a.lineSymbol&&"esriGeometryPolyline"===b.geometryType?b.renderer.symbol=S.fromJson(a.lineSymbol):a.polygonSymbol&&"esriGeometryPolygon"===b.geometryType&&(b.renderer.symbol=S.fromJson(a.polygonSymbol));(h.isDefined(a.minScale)||h.isDefined(a.maxScale))&&b.setScaleRange(a.minScale,a.maxScale)})})):"CSV"==a.type&&a.url?b=new x(a.featureCollection,{infoTemplate:new ca(a.popupInfo?a.popupInfo:J.generateDefaultPopupInfo(a.featureCollection)),id:a.id?
a.id:null,outFields:["*"],visible:null!==a.visibility?a.visibility:!0,opacity:a.opacity,autoGeneralize:!0}):a.layerDefinition&&!a.url?(f=H.fromJson(H.toJson(a)),delete f.id,delete f.opacity,delete f.visibility,b=new x(f,{id:a.id,opacity:a.opacity,visible:a.visibility,outFields:["*"],infoTemplate:f.popupInfo&&new k(f.popupInfo),autoGeneralize:!0})):"BingMapsAerial"===a.type||"BingMapsRoad"===a.type||"BingMapsHybrid"===a.type?c.bingMapsKey?(f=K.MAP_STYLE_AERIAL_WITH_LABELS,"BingMapsAerial"===a.type?
f=K.MAP_STYLE_AERIAL:"BingMapsRoad"===a.type&&(f=K.MAP_STYLE_ROAD),b=new K({bingMapsKey:c.bingMapsKey,mapStyle:f,opacity:a.opacity,id:a.id}),s.connect(b,"onError",dojo.hitch(this,function(a){a.errors=a.errors||[];a.errors.push({message:"This application does not have a valid Bing Key for the Bing layer that is included in this map. [type:"+a.type+"]"})},a))):(a.errors=a.errors||[],a.errors.push({message:"This application does not provide a Bing Key for the Bing layer that is included in this map. [type:"+
a.type+"]"})):a.resourceInfo&&a.resourceInfo.mapName?b=!0===a.resourceInfo.singleFusedMapCache&&(a.baseMapLayer||X(a,d,f)&&Y(a,e))?V(a):ja(a):a.resourceInfo&&a.resourceInfo.pixelSizeX?b=!0===a.resourceInfo.singleFusedMapCache&&(a.baseMapLayer||X(a,d,f)&&Y(a,e))?V(a):Ua(a,k):a.resourceInfo&&"Feature Layer"===a.resourceInfo.type&&(b=new x(y(a.url),{resourceInfo:a.resourceInfo,opacity:a.opacity,visible:a.visibility,id:a.id,mode:h.isDefined(a.mode)?a.mode:x.MODE_ONDEMAND,outFields:["*"],infoTemplate:a.popupInfo&&
new k(a.popupInfo),autoGeneralize:!0,refreshInterval:a.refreshInterval}),a.layerDefinition&&(a.layerDefinition.drawingInfo&&a.layerDefinition.drawingInfo.renderer&&(f=Ca.fromJson(a.layerDefinition.drawingInfo.renderer),f.isMaxInclusive=!0,b.setRenderer(f)),a.layerDefinition.definitionExpression&&b.setDefinitionExpression(a.layerDefinition.definitionExpression),h.isDefined(a.layerDefinition.minScale)&&b.setMinScale(a.layerDefinition.minScale),h.isDefined(a.layerDefinition.maxScale)&&b.setMaxScale(a.layerDefinition.maxScale)));
b&&(b.arcgisProps={title:a.title},a.baseMapLayer&&(b._basemapGalleryLayerType=a.isReference?"reference":"basemap"));return b}function M(a,d,c,f){g.forEach(a,function(b,e){if(b.url&&!b.type){if(0===e||a[0].layerObject)b.layerObject=Z(b,a,d,c,f)}else b.layerObject=Z(b,a,d,c,f)});var e=g.filter(a,function(a){return!a.isReference}),b=g.filter(a,function(a){return!!a.isReference});return a=e.concat(b)}function $(a){var d=null;a=a[0];a.url&&!a.type?a.resourceInfo.spatialReference&&(d=new B,a.resourceInfo.spatialReference.wkid&&
(d.wkid=a.resourceInfo.spatialReference.wkid),a.resourceInfo.spatialReference.wkt&&(d.wkt=a.resourceInfo.spatialReference.wkt)):-1<a.type.indexOf("BingMaps")||"OpenStreetMap"==a.type?d=new B({wkid:102100}):"WMS"==a.type&&(d=new B({wkid:a.spatialReferences[0]}));return d}function ka(a,d,c,f,e,b,k){g.forEach(d,function(b,c){b.url&&!b.type?(b.resourceInfo=a[b.deferredsPos][1],delete b.deferredsPos):b.url&&"CSV"==b.type&&(b.featureCollection=f[b.deferredsPos].results[0],delete b.deferredsPos)});b=b||
$(d);var l=[];g.forEach(d,function(a){a.url&&"CSV"==a.type&&(a.deferredsPos=l.length,l.push(J.projectFeatureCollection(a.featureCollection,b)))});0==l.length?(d=M(d,c,b,k),e.callback(d)):(new C(l)).addCallback(function(){g.forEach(d,function(a){a.url&&"CSV"==a.type&&(a.featureCollection=l[a.deferredsPos].results[0],delete a.deferredsPos)});d=M(d,c,b,k);e.callback(d)});return e}function la(a,d){var c=y(a);return A({url:c,content:{f:"json"},callbackParamName:"callback",error:function(a,e){a.message=
a.message?a.message+(" [url:"+c+"]"):"[url:"+c+"]";d.push(a);I.defaults.io.errorHandler(a,e)}})}function ma(a){var d=n.arcgisUrl+"/"+a.itemId+"/data";return A({url:d,content:{f:"json"},callbackParamName:"callback",error:function(c,f){c.message=c.message?c.message+(" [url:"+d+"]"):"[url:"+d+"]";a.errors=a.errors||[];a.errors.push(c);I.defaults.io.errorHandler(c,f)}})}function na(a,d,c){var f=new r;if(!c.featureCollection||!c.featureCollection.layers)return a.errors=a.errors||[],a.errors.push({message:"Invalid Feature Collection item data. [item id: "+
a.itemId+"]"}),f.errback(),f;oa(a,c.featureCollection,d).then(function(d){c.featureCollection=d;a.featureCollection&&a.featureCollection.layers?dojo.forEach(c.featureCollection.layers,function(b,c){var d=a.featureCollection.layers[c];if(!d.poupInfo&&!d.layerDefinition)d.popupInfo=b.popupInfo,d.layerDefinition=b.layerDefinition;else if(d.layerDefinition){if(h.isDefined(d.layerDefinition.minScale)&&h.isDefined(d.layerDefinition.maxScale)&&(d.layerDefinition.minScale!==b.layerDefinition.minScale||d.layerDefinition.maxScale!==
b.layerDefinition.maxScale))delete b.layerDefinition.minscale,delete b.layerDefinition.maxScale;d.layerDefinition.drawingInfo&&H.toJson(d.layerDefinition.drawingInfo)!==H.toJson(b.layerDefinition.drawingInfo)&&delete b.layerDefinition.drawingInfo;d.layerDefinition.showLegend!==b.layerDefinition.showLegend&&delete b.layerDefinition.showLegend;d.layerDefinition=dojo.mixin(d.layerDefinition,b.layerDefinition)}else d.layerDefinition=b.layerDefinition;d.featureSet=b.featureSet;d.nextObjectId=b.nextObjectId}):
(a.featureCollection=a.featureCollection||{},a.featureCollection=dojo.mixin(a.featureCollection,c.featureCollection));f.callback(a)});return f}function oa(a,d,c){var f=new r,e=[];g.forEach(d.layers,function(a){a.featureSet&&(a.featureSet.features&&a.featureSet.features.length&&a.featureSet.features[0].geometry&&a.featureSet.features[0].geometry.spatialReference)&&(a.deferredsPos=e.length,e.push(J.projectFeatureCollection(a,c,a.featureSet.features[0].geometry.spatialReference)))});(new C(e)).addCallback(function(){g.forEach(d.layers,
function(b){esri.isDefined(b.deferredsPos)&&(e[b.deferredsPos].results&&e[b.deferredsPos].results.length?b=e[b.deferredsPos].results[0]:(b.errors=b.errors||[],b.errors.push({message:"Errors projecting feature collection. ["+a.title+" - "+b.layerDefinition.name+"]"})),delete b.deferredsPos)});f.callback(d)});return f}function N(a,d,c,f){var e=new r,b=[];g.forEach(a.operationalLayers,function(a,d){a.itemId&&"Feature Collection"==a.type&&b.push(ma(a).then(p.hitch(null,na,a,c)))});0==b.length?pa(a,d,
c,f,e):(new C(b)).addCallback(function(b){pa(a,d,c,f,e)});return e}function pa(a,d,c,f,e){var b=[],k=[],l=[];g.forEach(a.operationalLayers,function(a,b){a.featureCollection?g.forEach(a.featureCollection.layers,function(c,d){var e=!0;a.visibleLayers&&-1==g.indexOf(a.visibleLayers,d)&&(e=!1);c.visibility=a.visibility&&e;c.opacity=a.opacity;c.id=(a.id||"operational"+b)+"_"+d;l.push(c)},this):l.push(a)});g.forEach(a.baseMap.baseMapLayers,function(a,c){a.baseMapLayer=!0;a.id=a.id||"base"+c;b.push(a)});
g.forEach(l,function(a,c){a.id=a.id||"operational"+c;b.push(a)});g.forEach(b,function(a){a.url&&!a.type?(a.deferredsPos=k.length,a.errors=a.errors||[],k.push(la(a.url,a.errors))):a.url&&"CSV"==a.type&&(a.deferredsPos=k.length,k.push(J.buildCSVFeatureCollection(a)))});0==k.length?(c=c||$(b),b=M(b,d,c,f),e.callback(b)):(new C(k)).addCallback(function(a){ka(a,b,d,k,e,c,f)});return e}function O(a,d,c,f){var e=a.minScale,b=a.maxScale;if(10.1>=c.version&&d)for(a=d.length-1;0<=a;a--){if(d[a].id==f)if(0==
e&&0<d[a].minScale?e=d[a].minScale:0<e&&0==d[a].minScale?e=c.minScale:0<e&&0<d[a].minScale&&(e=Math.min(e,d[a].minScale)),b=Math.max(c.maxScale||0,d[a].maxScale||0),c.setScaleRange(e,b),-1<d[a].parentLayerId)f=d[a].parentLayerId;else break}else 10.1<c.version&&(g.forEach(a.layerInfos,function(a){a.id==f&&(0==e&&0<a.minScale?e=a.minScale:0<e&&0==a.minScale||0<e&&0<a.minScale&&(e=Math.min(e,a.minScale)),b=Math.max(b||0,a.maxScale||0))}),c.setScaleRange(e,b))}function P(a,d,c,f){var e=a.url,b=a.__popupIds,
k=a.__popupUrls,l=a.__popupWhereClauses,m=a.__popupMinScales,w=a.__popupMaxScales,n=a.__resourceInfo,G=[];g.forEach(a.__popups,function(f,q){if(f){var t,p=[];g.forEach(f.fieldInfos,function(a){"shape"!==a.fieldName.toLowerCase()&&p.push(a.fieldName)});if(a.dynamicLayerInfos&&0<a.dynamicLayerInfos.length){var r=g.filter(a.dynamicLayerInfos,function(a){return b[q]==a.id})[0].source;t=new x(e+"/dynamicLayer",{id:a.id+"_"+b[q],source:r,outFields:p,mode:x.MODE_SELECTION,infoTemplate:f&&new c(f),drawMode:!1,
visible:a.visible,autoGeneralize:!0});var u=function(c,e){0<l[c].length&&e.setDefinitionExpression(l[c]);if(!h.isDefined(m[c])&&!h.isDefined(w[c]))O(a,d||n.layers,e,b[c]);else if(h.isDefined(a.minScale)||h.isDefined(a.maxScale)){var f=a.minScale,k=a.maxScale;0==f&&0<m[c]?f=m[c]:0<f&&0==m[c]||0<f&&0<m[c]&&(f=Math.min(f,m[c]));k=Math.max(k||0,w[c]||0);e.setScaleRange(f,k)}else e.setScaleRange(m[c],w[c])};t.loaded?u(q,t):s.connect(t,"onLoad",function(a){u(q,t)})}else{var z,r=null;if(d)for(z=0;z<d.length;z++)if(d[z].id===
b[q]){r=d[z];break}z=e+"/"+b[q];k[q].length&&(z=k[q]);t=new x(y(z),{id:a.id+"_"+b[q],outFields:p,mode:x.MODE_SELECTION,infoTemplate:f&&new c(f),drawMode:!1,visible:a.visible,resourceInfo:r,autoGeneralize:!0});t.loaded?(0<l[q].length&&t.setDefinitionExpression(l[q]),O(a,d||n.layers,t,b[q])):s.connect(t,"onLoad",function(c){0<l[q].length&&t.setDefinitionExpression(l[q]);O(a,d||n.layers,c,b[q])})}G.push(t)}});0<G.length&&(s.connect(a,"onVisibilityChange",p.hitch(this,function(a,c){g.forEach(a,function(a){c?
a.show():a.hide()})},G)),s.connect(f,"onLayerRemove",p.hitch(this,function(a,c,b){a.id===b.id&&g.forEach(c,function(a){f.removeLayer(a)})},a,G)));delete a.__popups;delete a.__popupIds;delete a.__popupUrls;delete a.__popupWhereClauses;delete a.__popupMinScales;delete a.__popupMaxScales;delete a.__resourceInfo;return G}function qa(a){return A({url:y(a.url+"/layers"),content:{f:"json"},callbackParamName:"callback",error:function(){}})}function ra(a,d,c){var f=[];g.forEach(a,function(a){var c=a.__popups;
c&&(1<c.length&&10<=a.version)&&(a.__deferredsPos=f.length,f.push(qa(a)))});var e=[];0<f.length?(new C(f)).addCallback(function(b){g.forEach(a,function(a){a.__popups&&0<a.__popups.length&&(a.__deferredsPos||0===a.__deferredsPos?(e=e.concat(P(a,b[a.__deferredsPos][1].layers,c,d)),delete a.__deferredsPos):e=e.concat(P(a,null,c,d)))});d.addLayers(e)}):(g.forEach(a,function(a){a.__popups&&0<a.__popups.length&&(e=e.concat(P(a,null,c,d)))}),d.addLayers(e))}function sa(a){g.forEach(a,function(a){var c=a.layer;
c.toJson&&(a=c.toJson(),a.featureSet&&-1<c.name.indexOf("Text")&&g.forEach(a.featureSet.features,function(a,d){if(a.attributes.TEXT){var b=c.graphics[d];b.symbol.setText(a.attributes.TEXT);a.symbol.horizontalAlignment&&(b.symbol.align=a.symbol.horizontalAlignment);b.setSymbol(b.symbol);b.setAttributes(a.attributes)}},this))})}function ta(a){var d=6;g.forEach(a,function(a){if(a=a.renderer)"esri.renderer.SimpleRenderer"===a.declaredClass?((a=a.symbol)&&a.xoffset&&(d=Math.max(d,Math.abs(a.xoffset))),
a&&a.yoffset&&(d=Math.max(d,Math.abs(a.yoffset)))):("esri.renderer.UniqueValueRenderer"===a.declaredClass||"esri.renderer.ClassBreaksRenderer"===a.declaredClass)&&g.forEach(a.infos,function(a){(a=a.symbol)&&a.xoffset&&(d=Math.max(d,Math.abs(a.xoffset)));a&&a.yoffset&&(d=Math.max(d,Math.abs(a.yoffset)))})});return d}function Q(a){var d=this,c=d.infoWindow,f=a.graphic;if(d.loaded){c.hide();c.clearFeatures();var e=[];g.forEach(d.graphicsLayerIds,function(a){if((a=d.getLayer(a))&&-1!==a.declaredClass.indexOf("FeatureLayer")&&
a.loaded&&a.visible)a.clearSelection(),a.infoTemplate&&!a.suspended&&e.push(a)});g.forEach(d.layerIds,function(a){(a=d.getLayer(a))&&(-1!==a.declaredClass.indexOf("ArcGISImageServiceLayer")&&a.loaded&&a.visible&&a.infoTemplate)&&e.push(a)});f=f&&f.getInfoTemplate()?f:null;if(e.length||f){var b=ta(e),k=a.screenPoint,l=d.toMap(new ba(k.x-b,k.y+b)),b=d.toMap(new ba(k.x+b,k.y-b)),l=new E(l.x,l.y,b.x,b.y,d.spatialReference),m=new Ea;m.geometry=l;m.timeExtent=d.timeExtent;var h=!0,l=g.map(e,function(a){var c;
-1!==a.declaredClass.indexOf("ArcGISImageServiceLayer")?(h=!1,c=a.queryVisibleRasters(m,{rasterAttributeTableFieldPrefix:"Raster.",returnDomainValues:!0}),c.addCallback(function(){return a.getVisibleRasters()})):(c=a.selectFeatures(m),c.addCallback(function(){return a.getSelectedFeatures()}));return c});f&&(b=new r,b.callback([f]),l.splice(0,0,b));if(!g.some(l,function(a){return-1===a.fired})){var n=f?1:0;g.forEach(e,function(a){n=-1!==a.declaredClass.indexOf("ArcGISImageServiceLayer")?n+a.getVisibleRasters().length:
n+a.getSelectedFeatures().length});if(!n)return}c.setFeatures(l);c.show(a.mapPoint,{closestFirst:h})}}}function Va(a,d){var c=d.mapOptions||{},f;c.infoWindow||(f=new Da({visibleWhenEmpty:!1},za.create("div")),c.infoWindow=f);h.isDefined(c.showInfoWindowOnClick)||(c.showInfoWindowOnClick=!1);c=new Aa(a,c);s.connect(c,"onLayersAddResult",sa);return c}function u(a,d,c,f,e,b){var k,l,m;f.map?(k=f.map,l=f.clickEventHandle,m=f.errors):(k=Va(f,e),!e.ignorePopups&&!e.disableClickBehavior&&(l=s.connect(k,
"onClick",Q)));e.ignorePopups&&g.forEach(a,function(a){delete a.infoTemplate});k.addLayers(a);e.ignorePopups||ra(a,k,e._clazz);var h=m||[];g.forEach(d,function(a){a.errors&&(h=h.concat(a.errors))},this);k.loaded?b.callback({map:k,itemInfo:c,errors:h,clickEventHandle:l,clickEventListener:Q}):s.connect(k,"onLoad",function(){b.callback({map:k,itemInfo:c,errors:h,clickEventHandle:l,clickEventListener:Q})})}function R(a,d,c,f,e){var b=[];g.forEach(e,function(a){p.isArray(a.layerObject)?g.forEach(a.layerObject,
function(a){b.push(a)}):b.push(a.layerObject)});if("BingMapsAerial"===e[0].type||"BingMapsRoad"===e[0].type||"BingMapsHybrid"===e[0].type)var k=setInterval(function(){if(e[0].layerObject&&e[0].layerObject.loaded)clearInterval(k),ua(a,d,c,f,e,b);else if(e[0].errors){clearInterval(k);var g="";e[0].errors&&e[0].errors.length&&(g=" ("+e[0].errors[0].message+")");f.errback(Error(T.arcgis.utils.baseLayerError+g))}},10);else if(!b[0]&&e[0].baseMapLayer){var h="";e[0].errors&&e[0].errors.length&&(h=" ("+
e[0].errors[0].message+")");f.errback(Error(T.arcgis.utils.baseLayerError+h))}else ua(a,d,c,f,e,b)}function ua(a,d,c,f,e,b){try{var k=c.mapOptions||{};c.mapOptions=k;var l=a.item;b=g.filter(b,h.isDefined);if(l)if(l.extent&&l.extent.length)if(k.extent)u(b,e,a,d,c,f);else{var m=new E(l.extent[0][0],l.extent[0][1],l.extent[1][0],l.extent[1][1],new B({wkid:4326})),n=b[0].spatialReference;4326===n.wkid?(k.extent=m,u(b,e,a,d,c,f)):102100===n.wkid||102113===n.wkid||3857===n.wkid?(m.xmin=Math.max(m.xmin,
-180),m.xmax=Math.min(m.xmax,180),m.ymin=Math.max(m.ymin,-89.99),m.ymax=Math.min(m.ymax,89.99),k.extent=Ba.geographicToWebMercator(m),u(b,e,a,d,c,f)):c.geometryServiceURL||I.defaults.geometryService?(c.geometryServiceURL?new Fa(c.geometryServiceURL):I.defaults.geometryService).project([m],n,function(g){g=g[0];k.extent=k.extent||g;u(b,e,a,d,c,f)},function(){u(b,e,a,d,c,f)}):f.errback(Error(T.arcgis.utils.geometryServiceError))}else u(b,e,a,d,c,f);else u(b,e,a,d,c,f)}catch(p){f.errback(p)}}function va(a){var d=
[];a=a.baseMap.baseMapLayers.concat(a.operationalLayers);g.forEach(a,function(a,f){var e={};if(a.featureCollection&&"CSV"!==a.type)!0===a.featureCollection.showLegend&&g.forEach(a.featureCollection.layers,function(b){!1!==b.showLegend&&(e={layer:b.layerObject,title:a.title,defaultSymbol:b.renderer&&b.renderer.defaultSymbol&&b.renderer.defaultLabel?!0:!1},1<a.featureCollection.layers.length&&(e.title+=" - "+b.layerDefinition.name),d.push(e))});else if(a.baseMapLayer&&!0===a.showLegend&&a.layerObject||
!a.baseMapLayer&&!1!==a.showLegend&&a.layerObject){var b=a.layerObject.renderer,b=!b||b&&b.defaultSymbol&&b.defaultLabel?!0:!1;if(10.1>a.layerObject.version&&(a.layerObject instanceof ea||a.layerObject instanceof da)||a.layerObject instanceof esri.layers.ArcGISImageServiceLayer)b=!0;e={layer:a.layerObject,title:a.title,defaultSymbol:b};a.layers&&(b=g.map(g.filter(a.layers,function(a){return!1===a.showLegend}),function(a){return a.id}),b.length&&(e.hideLayers=b));d.push(e)}});return d}function wa(a,
d,c,f){if(!f.itemData.operationalLayers||0===f.itemData.operationalLayers.length)L(f,d).addCallback(function(b){N(b.itemData,d).addCallback(p.hitch(null,R,b,a,d,c))});else{var e=new r,b=f.itemData.baseMap.baseMapLayers.slice(0),k=g.filter(f.itemData.baseMap.baseMapLayers,function(a){return!a.isReference}),h={item:f.item,itemData:{baseMap:{baseMapLayers:k}}};f.itemData.baseMap.baseMapLayers=g.filter(f.itemData.baseMap.baseMapLayers,function(a){return a.isReference});L(h,d).addCallback(function(b){N(b.itemData,
d).addCallback(p.hitch(null,R,b,a,d,e))});e.then(function(a){L(f,d).addCallback(function(e){N(e.itemData,d,a.map.spatialReference,k).addCallback(function(f){e.itemData.baseMap.baseMapLayers=b;R(e,a,d,c,f)})})},p.hitch(c,c.errback))}}function xa(a){n._arcgisUrl&&0<n._arcgisUrl.length&&(n.arcgisUrl=n._arcgisUrl);var d=n.arcgisUrl+"/"+a,c={},f=new r;A({url:d,content:{f:"json"},callbackParamName:"callback",load:function(a){c.item=a;A({url:d+"/data",content:{f:"json"},callbackParamName:"callback",load:function(a){c.itemData=
a;f.callback(c)},error:function(a){f.errback(a)}})},error:function(a){f.errback(a)}});return f}String.prototype.endsWith=function(a){return this.match(a+"$")==a};var n;n={arcgisUrl:location.protocol+"//www.arcgis.com/sharing/rest/content/items",getItem:xa,createMap:function(a,d,c){var f=new r;c=c||{};var e=c.infoTemplateClass;c._clazz=e&&(p.isObject(e)?e:p.getObject(e))||ca;p.isString(a)?xa(a).addCallback(p.hitch(null,wa,d,c,f)).addErrback(p.hitch(f,f.errback)):wa(d,c,f,a);return f},getLegendLayers:function(a){return a&&
a.itemInfo&&a.itemInfo.itemData?va(a.itemInfo.itemData):[]},_arcgisUrl:null,_getItemProps:L,_getItemData:F,_getBingKey:fa,_processFSItemProperties:ga,_getLayers:N,_preBuildLayerObjects:ka,_buildLayerObjects:M,_preCreateMap:R,_getMapSR:$,_createMap:u,_addSelectionLayers:ra,_createSelectionFeatureLayers:P,_getServiceInfo:la,_getFeatureCollectionItem:ma,_mergeFeatureCollectionItem:na,_projectFeatureCollection:oa,_getLayersInfo:qa,_initLayer:Z,_loadAsCached:V,_loadAsDynamic:ja,_processPopups:U,_onLayersAddResult:sa,
_sameSpatialReferenceAsBasemap:X,_sameTilingSchemeAsBasemap:Y,_showPopup:Q,_calculateClickTolerance:ta,_getVisibleFeatureLayers:W,_updateLayerScaleInfo:O,_checkUrl:y,_isHostedService:ha,_isAgolService:ia,_getLegendLayers:va};p.setObject("arcgis.utils",n,D);return n});
//@ sourceMappingURL=utils.js.map