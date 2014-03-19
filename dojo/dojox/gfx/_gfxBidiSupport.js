//>>built
define("dojox/gfx/_gfxBidiSupport","./_base dojo/_base/lang dojo/_base/sniff dojo/dom dojo/_base/html dojo/_base/array ./utils ./shape ./path dojox/string/BidiEngine".split(" "),function(b,k,m,q,n,r,g,f,t,s){function p(a,h){var e=l(h);e&&b.utils.forEach(a,function(a){if(a instanceof b.Surface||a instanceof b.Group)a.textDir=e;a instanceof b.Text&&a.setShape({textDir:e});a instanceof b.TextPath&&a.setText({textDir:e})},a);return a}function l(a){var b=["ltr","rtl","auto"];return a&&(a=a.toLowerCase(),
0>r.indexOf(b,a))?null:a}k.getObject("dojox.gfx._gfxBidiSupport",!0);switch(b.renderer){case "vml":b.isVml=!0;break;case "svg":b.isSvg=!0;b.svg.useSvgWeb&&(b.isSvgWeb=!0);break;case "silverlight":b.isSilverlight=!0;break;case "canvas":case "canvasWithEvents":b.isCanvas=!0}var d=new s;k.extend(b.shape.Surface,{textDir:"",setTextDir:function(a){p(this,a)},getTextDir:function(){return this.textDir}});k.extend(b.Group,{textDir:"",setTextDir:function(a){p(this,a)},getTextDir:function(){return this.textDir}});
k.extend(b.Text,{textDir:"",formatText:function(a,h){if(h&&a&&1<a.length){var e="ltr",c=h;if("auto"==c){if(b.isVml)return a;c=d.checkContextual(a)}if(b.isVml)return e=d.checkContextual(a),c!=e?"rtl"==c?!d.hasBidiChar(a)?d.bidiTransform(a,"IRNNN","ILNNN"):"\u200f\u200f"+a:"\u200e"+a:a;if(b.isSvgWeb)return"rtl"==c?d.bidiTransform(a,"IRNNN","ILNNN"):a;if(b.isSilverlight)return"rtl"==c?d.bidiTransform(a,"IRNNN","VLYNN"):d.bidiTransform(a,"ILNNN","VLYNN");if(b.isCanvas)return"rtl"==c?"\u202b"+a+"\u202c":
"\u202a"+a+"\u202c";if(b.isSvg)return 4>m("ff")?"rtl"==c?d.bidiTransform(a,"IRYNN","VLNNN"):d.bidiTransform(a,"ILYNN","VLNNN"):"\u200e"+("rtl"==c?"\u202b":"\u202a")+a+"\u202c"}return a},bidiPreprocess:function(a){return a}});k.extend(b.TextPath,{textDir:"",formatText:function(a,h){if(h&&a&&1<a.length){var e="ltr",c=h;if("auto"==c){if(b.isVml)return a;c=d.checkContextual(a)}if(b.isVml)return e=d.checkContextual(a),c!=e?"rtl"==c?!d.hasBidiChar(a)?d.bidiTransform(a,"IRNNN","ILNNN"):"\u200f\u200f"+a:
"\u200e"+a:a;if(b.isSvgWeb)return"rtl"==c?d.bidiTransform(a,"IRNNN","ILNNN"):a;b.isSvg&&(a=m("opera")||4<=m("ff")?"\u200e"+("rtl"==c?"\u202b":"\u202a")+a+"\u202c":"rtl"==c?d.bidiTransform(a,"IRYNN","VLNNN"):d.bidiTransform(a,"ILYNN","VLNNN"))}return a},bidiPreprocess:function(a){a&&"string"==typeof a&&(this.origText=a,a=this.formatText(a,this.textDir));return a}});g=function(a,b,e,c){var d=a.prototype[b];a.prototype[b]=function(){var a;e&&(a=e.apply(this,arguments));a=d.call(this,a);c&&(a=c.call(this,
a,arguments));return a}};f=function(a){a&&(a.textDir&&(a.textDir=l(a.textDir)),a.text&&a.text instanceof Array&&(a.text=a.text.join(",")));if(a&&(void 0!=a.text||a.textDir)&&(this.textDir!=a.textDir||a.text!=this.origText))this.origText=void 0!=a.text?a.text:this.origText,a.textDir&&(this.textDir=a.textDir),a.text=this.formatText(this.origText,this.textDir);return this.bidiPreprocess(a)};g(b.Text,"setShape",f,null);g(b.TextPath,"setText",f,null);f=function(a){if((a=k.clone(a))&&this.origText)a.text=
this.origText;return a};g(b.Text,"getShape",null,f);g(b.TextPath,"getText",null,f);f=function(a,b){var e;b&&b[0]&&(e=l(b[0]));a.setTextDir(e?e:this.textDir);return a};g(b.Surface,"createGroup",null,f);g(b.Group,"createGroup",null,f);f=function(a){if(a){var b=a.textDir?l(a.textDir):this.textDir;b&&(a.textDir=b)}return a};g(b.Surface,"createText",f,null);g(b.Surface,"createTextPath",f,null);g(b.Group,"createText",f,null);g(b.Group,"createTextPath",f,null);b.createSurface=function(a,d,e,c){d=b[b.renderer].createSurface(a,
d,e);c=l(c);if(b.isSvgWeb)return d.textDir=c?c:n.style(q.byId(a),"direction"),d;if(b.isVml||b.isSvg||b.isCanvas)d.textDir=c?c:n.style(d.rawNode,"direction");b.isSilverlight&&(d.textDir=c?c:n.style(d._nodes[1],"direction"));return d};return b});
//@ sourceMappingURL=_gfxBidiSupport.js.map