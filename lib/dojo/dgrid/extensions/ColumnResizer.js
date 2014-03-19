//>>built
define("dgrid/extensions/ColumnResizer","dojo/_base/declare dojo/on dojo/query dojo/_base/lang dojo/dom dojo/dom-geometry dojo/has ../util/misc put-selector/put dojo/_base/html xstyle/css!../css/extensions/ColumnResizer.css".split(" "),function(A,l,p,w,x,B,v,r,e){function y(a){for(var b=a.length,c=b,f=a[0].length,g=Array(b);b--;)g[b]=Array(f);for(var m={},b=0;b<c;b++)for(var h=g[b],C=a[b],n=0,d=0;n<f;n++){var k=C[d],s;if("undefined"==typeof h[n]){h[n]=k.id;if(k.rowSpan&&1<k.rowSpan){s=g;for(var e=
k.rowSpan,p=b,q=n,l=k.id,t=1;t<e;t++)s[p+t][q]=l}if(0<b&&k.colSpan&&1<k.colSpan)for(s=1;s<k.colSpan;s++)if(h[++n]=k.id,k.rowSpan&&1<k.rowSpan)for(var e=g,p=k.rowSpan,q=b,l=n,t=k.id,r=1;r<p;r++)e[q+r][l]=t;m[k.id]=a[0][n].id;d++}}return m}function u(a,b,c,f){if(!(0>=c)){var g=a.columns[b],m={grid:a,columnId:b,width:c,bubbles:!0,cancelable:!0};f&&(m.parentType=f);if(!a._resizedColumns||l.emit(a.headerNode,"dgrid-columnresize",m))return"auto"===c?delete g.width:(g.width=c,c+="px"),(f=a._columnSizes[b])?
f.set("width",c):f=r.addCssRule("#"+r.escapeCssIdentifier(a.domNode.id)+" .dgrid-column-"+b,"width: "+c+";"),a._columnSizes[b]=f,a.resize(),!0}}var d,z=0,q={create:function(){d=e("div.dgrid-column-resizer")},destroy:function(){e(d,"!");d=null},show:function(a){a=B.position(a.domNode,!0);d.style.top=a.y+"px";d.style.height=a.h+"px";e(document.body,d)},move:function(a){d.style.left=a+"px"},hide:function(){d.parentNode.removeChild(d)}};return A("dgrid.extensions.ColumnResizer",null,{resizeNode:null,
minWidth:40,adjustLastColumn:!0,_resizedColumns:!1,buildRendering:function(){this.inherited(arguments);z++||q.create()},destroy:function(){this.inherited(arguments);for(var a in this._columnSizes)this._columnSizes[a].remove();--z||q.destroy()},resizeColumnWidth:function(a,b){return u(this,a,b)},configStructure:function(){var a=this._oldColumnSizes=w.mixin({},this._columnSizes),b;this._resizedColumns=!1;this._columnSizes={};this.inherited(arguments);for(b in a)b in this._columnSizes||a[b].remove();
delete this._oldColumnSizes},_configColumn:function(a){this.inherited(arguments);var b=a.id,c;"width"in a&&((c=this._oldColumnSizes[b])?c.set("width",a.width+"px"):c=r.addCssRule("#"+this.domNode.id+" .dgrid-column-"+b,"width: "+a.width+"px;"),this._columnSizes[b]=c)},renderHeader:function(){this.inherited(arguments);var a=this,b;if(this.columnSets&&this.columnSets.length)for(var c=this.columnSets.length;c--;)b=w.mixin(b||{},y(this.columnSets[c]));else this.subRows&&1<this.subRows.length&&(b=y(this.subRows));
for(var c=p(".dgrid-cell",a.headerNode),f=c.length;f--;){var g=c[f],m=g.columnId,h=a.columns[m],d=g.childNodes;if(h&&!1!==h.resizable){h=e("div.dgrid-resize-header-container");for(g.contents=h;0<d.length;)e(h,d[0]);e(g,h,"div.dgrid-resize-handle.resizeNode-"+m).columnId=b?b[m]:m}}a.mouseMoveListen||(l(a.headerNode,".dgrid-resize-handle:mousedown"+(v("touch")?",.dgrid-resize-handle:touchstart":""),function(b){a._resizeMouseDown(b,this);a.mouseMoveListen.resume();a.mouseUpListen.resume()}),a._listeners.push(a.mouseMoveListen=
l.pausable(document,"mousemove"+(v("touch")?",touchmove":""),r.throttleDelayed(function(b){a._updateResizerPosition(b)}))),a._listeners.push(a.mouseUpListen=l.pausable(document,"mouseup"+(v("touch")?",touchend":""),function(b){a._resizeMouseUp(b);a.mouseMoveListen.pause();a.mouseUpListen.pause()})),a.mouseMoveListen.pause(),a.mouseUpListen.pause())},_resizeMouseDown:function(a,b){a.preventDefault();x.setSelectable(this.domNode,!1);this._startX=this._getResizeMouseLocation(a);this._targetCell=p(".dgrid-column-"+
b.columnId,this.headerNode)[0];this._updateResizerPosition(a);q.show(this)},_resizeMouseUp:function(a){var b=this._columnSizes,c,f,g;this.adjustLastColumn&&(g=this.headerNode.clientWidth-1);this._resizedColumns||(c=p(".dgrid-cell",this.headerNode),this.columnSets&&this.columnSets.length?c=c.filter(function(a){return"0"==a.columnId.split("-")[0]&&!(a.columnId in b)}):this.subRows&&1<this.subRows.length&&(c=c.filter(function(a){return"0"==a.columnId.charAt(0)&&!(a.columnId in b)})),f=c.map(function(a){return a.offsetWidth}),
c.forEach(function(a,b){this.resizeColumnWidth(a.columnId,f[b])},this),this._resizedColumns=!0);x.setSelectable(this.domNode,!0);c=this._targetCell;var d=this._getResizeMouseLocation(a)-this._startX,h=c.offsetWidth+d,e=this._getResizedColumnWidths(),n=e.totalWidth,e=e.lastColId,l=p(".dgrid-column-"+e,this.headerNode)[0].offsetWidth;h<this.minWidth&&(h=this.minWidth);u(this,c.columnId,h,a.type)&&c.columnId!=e&&this.adjustLastColumn&&(n+d<g?u(this,e,"auto",a.type):l-d<=this.minWidth&&u(this,e,this.minWidth,
a.type));q.hide();delete this._startX;delete this._targetCell},_updateResizerPosition:function(a){if(this._targetCell){a=this._getResizeMouseLocation(a);var b=this._targetCell.offsetWidth,c=a;b+(a-this._startX)<this.minWidth&&(c=this._startX-(b-this.minWidth));q.move(c)}},_getResizeMouseLocation:function(a){var b=0;a.pageX?b=a.pageX:a.clientX&&(b=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft);return b},_getResizedColumnWidths:function(){var a=0,b=p(".dgrid-cell",this.headerNode);
this.columnSets&&this.columnSets.length?b=b.filter(function(a){return"0"==a.columnId.split("-")[1]}):this.subRows&&1<this.subRows.length&&(b=b.filter(function(a){return"0"==a.columnId.charAt(0)}));var c=b.length;if(!c)return{};for(var d=b[c-1].columnId;c--;)a+=b[c].offsetWidth;return{totalWidth:a,lastColId:d}}})});
//@ sourceMappingURL=ColumnResizer.js.map