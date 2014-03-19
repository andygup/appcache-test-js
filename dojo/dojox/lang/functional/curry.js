//>>built
define("dojox/lang/functional/curry",["dojo","dijit","dojox","dojo/require!dojox/lang/functional/lambda"],function(f,n,m){f.provide("dojox.lang.functional.curry");f.require("dojox.lang.functional.lambda");(function(){var g=m.lang.functional,k=Array.prototype,l=function(a){return function(){var b=a.args.concat(k.slice.call(arguments,0));return arguments.length+a.args.length<a.arity?l({func:a.func,arity:a.arity,args:b}):a.func.apply(this,b)}};f.mixin(g,{curry:function(a,b){a=g.lambda(a);b="number"==
typeof b?b:a.length;return l({func:a,arity:b,args:[]})},arg:{},partial:function(a){var b=arguments,c=b.length,d=Array(c-1),e=[],h=1,f;for(a=g.lambda(a);h<c;++h)f=b[h],d[h-1]=f,f===g.arg&&e.push(h-1);return function(){for(var b=k.slice.call(d,0),c=0,f=e.length;c<f;++c)b[e[c]]=arguments[c];return a.apply(this,b)}},mixer:function(a,b){a=g.lambda(a);return function(){for(var c=Array(b.length),d=0,e=b.length;d<e;++d)c[d]=arguments[b[d]];return a.apply(this,c)}},flip:function(a){a=g.lambda(a);return function(){for(var b=
arguments,c=b.length-1,d=Array(c+1),e=0;e<=c;++e)d[c-e]=b[e];return a.apply(this,d)}}})})()});
//@ sourceMappingURL=curry.js.map