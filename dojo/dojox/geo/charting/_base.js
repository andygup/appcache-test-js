//>>built
define("dojox/geo/charting/_base","dojo/_base/lang dojo/_base/array ../../main dojo/_base/html dojo/dom-geometry dojox/gfx/matrix dijit/Tooltip dojo/_base/NodeList dojo/NodeList-traverse".split(" "),function(d,k,l,n,g,m,e,h,p){var c=d.getObject("geo.charting",!0,l);c.showTooltip=function(a,b,f){b=c._normalizeArround(b);return e.show(a,b,f)};c.hideTooltip=function(a){return e.hide(a)};c._normalizeArround=function(a){var b=c._getRealBBox(a),f=a._getRealMatrix()||{xx:1,xy:0,yx:0,yy:1,dx:0,dy:0},d=m.multiplyPoint(f,
b.x,b.y),e=c._getGfxContainer(a);a.x=g.position(e,!0).x+d.x;a.y=g.position(e,!0).y+d.y;a.w=b.width*f.xx;a.h=b.height*f.yy;return a};c._getGfxContainer=function(a){return a.surface?(new h(a.surface.rawNode)).parents("div")[0]:(new h(a.rawNode)).parents("div")[0]};c._getRealBBox=function(a){var b=a.getBoundingBox();b||(a=a.children,b=d.clone(c._getRealBBox(a[0])),k.forEach(a,function(a){a=c._getRealBBox(a);b.x=Math.min(b.x,a.x);b.y=Math.min(b.y,a.y);b.endX=Math.max(b.x+b.width,a.x+a.width);b.endY=Math.max(b.y+
b.height,a.y+a.height)}),b.width=b.endX-b.x,b.height=b.endY-b.y);return b};return c});
//@ sourceMappingURL=_base.js.map