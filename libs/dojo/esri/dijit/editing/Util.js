//>>built
define("esri/dijit/editing/Util",["dojo/_base/lang","dojo/_base/array","dojo/has","esri/kernel"],function(e,d,f,g){var c={},c={findFeatures:function(c,a,b){var h=a.objectIdField;a=d.filter(a.graphics,function(a){return d.some(c,function(b){return a.attributes[h]===b.objectId})});if(b)b(a);else return a},getSelection:function(c){var a=[];d.forEach(c,function(b){b=b.getSelectedFeatures();d.forEach(b,function(b){a.push(b)})});return a}};f("extend-esri")&&e.setObject("dijit.editing.Util.LayerHelper",
c,g);return c});
//@ sourceMappingURL=Util.js.map