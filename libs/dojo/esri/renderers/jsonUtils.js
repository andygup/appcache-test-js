//>>built
define("esri/renderers/jsonUtils","dojo/_base/lang dojo/has esri/kernel esri/renderers/SimpleRenderer esri/renderers/UniqueValueRenderer esri/renderers/ClassBreaksRenderer".split(" "),function(c,e,f,g,h,k){var d={fromJson:function(a){var b;switch(a.type||""){case "simple":b=new g(a);break;case "uniqueValue":b=new h(a);break;case "classBreaks":b=new k(a)}return b}};e("extend-esri")&&c.mixin(c.getObject("renderer",!0,f),d);return d});
//@ sourceMappingURL=jsonUtils.js.map