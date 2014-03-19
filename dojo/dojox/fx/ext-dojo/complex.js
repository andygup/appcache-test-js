//>>built
define("dojox/fx/ext-dojo/complex","dojo/_base/kernel dojo/_base/lang dojo/_base/array dojo/_base/declare dojo/_base/connect dojo/_base/Color dojo/_base/fx dojo/fx".split(" "),function(e,l,g,m,n,h,k,q){l.getObject("dojox.fx.ext-dojo.complex",!0);var p=k.animateProperty;e.animateProperty=k.animateProperty=function(a){var b=p(a);n.connect(b,"beforeBegin",function(){b.curve.getValue=function(a){var b={},c;for(c in this._properties){var d=this._properties[c],f=d.start;f instanceof e.Color?b[c]=e.blendColors(f,
d.end,a,d.tempColor).toCss():f instanceof dojox.fx._Complex?b[c]=f.getValue(a):e.isArray(f)||(b[c]=(d.end-f)*a+f+("opacity"!=c?d.units||"px":0))}return b};for(var a in this.properties){var d=this.properties[a];"string"==typeof d.start&&/\(/.test(d.start)&&(this.curve._properties[a].start=new dojox.fx._Complex(d))}});return b};return m("dojox.fx._Complex",null,{PROP:/\([\w|,|+|\-|#|\.|\s]*\)/g,constructor:function(a){var b=a.start.match(this.PROP),c=a.end.match(this.PROP),b=g.map(b,this.getProps,this),
d=g.map(c,this.getProps,this);this._properties={};this.strProp=a.start;g.forEach(b,function(a,b){g.forEach(a,function(a,c){this.strProp=this.strProp.replace(a,"PROP_"+b+""+c);this._properties["PROP_"+b+""+c]=this.makePropObject(a,d[b][c])},this)},this)},getValue:function(a){var b=this.strProp,c,d;for(d in this._properties){var e;c=this._properties[d];"isColor"==c.units?(e=h.blendColors(c.beg,c.end,a).toCss(!1),c=""):(e=(c.end-c.beg)*a+c.beg,c=c.units);b=b.replace(d,e+c)}return b},makePropObject:function(a,
b){var c=this.getNumAndUnits(a),d=this.getNumAndUnits(b);return{beg:c.num,end:d.num,units:c.units}},getProps:function(a){a=a.substring(1,a.length-1);/,/.test(a)?(a=a.replace(/\s/g,""),a=a.split(",")):(a=a.replace(/\s{2,}/g," "),a=a.split(" "));return a},getNumAndUnits:function(a){if(!a)return{};if(/#/.test(a))return{num:new h(a),units:"isColor"};var b={num:parseFloat(/-*[\d\.\d|\d]{1,}/.exec(a).join(""))};b.units=/[a-z]{1,}/.exec(a);b.units=b.units&&b.units.length?b.units.join(""):"";return b}})});
//@ sourceMappingURL=complex.js.map