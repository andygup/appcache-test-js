//>>built
require({cache:{"url:esri/dijit/geoenrichment/templates/BufferOptions.html":'\ufeff\x3ctable\x3e\n    \x3ctr\x3e\n        \x3ctd class\x3d"BufferOptions_StudyAreaLabel"\x3e${nls.studyArea}\x3c/td\x3e\n        \x3ctd\x3e\n            \x3cselect data-dojo-type\x3d"dijit/form/Select"\n                data-dojo-attach-point\x3d"typeSelect"\n                data-dojo-attach-event\x3d"onChange: _typeChange"\n                class\x3d"BufferOptions_TypeSelect"\x3e\n                \x3coption value\x3d"Ring"\x3e${nls.ring}\x3c/option\x3e\n                \x3coption value\x3d"DriveTime"\x3e${nls.driveTime}\x3c/option\x3e\n                \x3coption value\x3d"DriveDistance"\x3e${nls.driveDistance}\x3c/option\x3e\n            \x3c/select\x3e\n        \x3c/td\x3e\n    \x3c/tr\x3e\n    \x3ctr\x3e\n        \x3ctd class\x3d"BufferOptions_RadiusLabel"\x3e${nls.radius}\x3c/td\x3e\n        \x3ctd\x3e\n            \x3cinput data-dojo-type\x3d"dijit/form/NumberSpinner"\n                data-dojo-attach-point\x3d"radiusSpinner"\n                data-dojo-props\x3d"intermediateChanges:true,constraints:{min:0,max:100}"\n                value\x3d"1"\n                class\x3d"BufferOptions_RadiusSpinner"\n                data-dojo-attach-event\x3d"onChange: _radiusChange" /\x3e\n            \x3cselect data-dojo-type\x3d"dijit/form/Select"\n                data-dojo-attach-point\x3d"unitsSelect"\n                data-dojo-attach-event\x3d"onChange: _unitsChange"\n                class\x3d"BufferOptions_UnitsSelect"\x3e\n            \x3c/select\x3e\n            \x3cspan data-dojo-attach-point\x3d"minutesSpan" style\x3d"display: none;"\x3e${nls.units.esriDriveTimeUnitsMinutes}\x3c/span\x3e\n        \x3c/td\x3e\n    \x3c/tr\x3e\n\x3c/table\x3e\n'}});
define("esri/dijit/geoenrichment/BufferOptions","../../declare dojox/mvc/Templated dojo/text!./templates/BufferOptions.html dojo/i18n!../../nls/jsapi ../../tasks/geoenrichment/RingBuffer ../../tasks/geoenrichment/DriveBuffer ../../tasks/geoenrichment/DriveUnits dijit/form/RadioButton dijit/form/NumberSpinner dijit/form/Select".split(" "),function(f,g,h,c,e,d,b){c=c.geoenrichment.dijit.BufferOptions;return f("esri.dijit.geoenrichment.BufferOptions",[g],{templateString:h,nls:c,_buffer:null,_ringBuffer:null,
_driveTimeBuffer:null,_driveDistBuffer:null,constructor:function(){this._ringBuffer=new e;this._driveTimeBuffer=new d;this._driveDistBuffer=new d({radius:1,units:b.MILES});this._buffer=this._ringBuffer},buildRendering:function(){this.inherited(arguments);this._updateUI()},_getBufferAttr:function(){return this._buffer},_setBufferAttr:function(a){if(this._buffer!==a){if(a instanceof e)this._ringBuffer=a;else if(a instanceof d)a.units==b.MINUTES?this._driveTimeBuffer=a:this._driveDistBuffer=a;else throw"Unexpected buffer type";
this._buffer=a;this._updateUI();this._onChange()}},_updateUI:function(){var a;this._buffer instanceof e?a="Ring":this._buffer instanceof d&&(a=this._buffer.units==b.MINUTES?"DriveTime":"DriveDistance");this.typeSelect.set("value",a);this.radiusSpinner.set("value",this._buffer.radii[0]);this._updateUnits()},_typeChange:function(){switch(this.typeSelect.get("value")){case "Ring":this.set("buffer",this._ringBuffer);break;case "DriveTime":this.set("buffer",this._driveTimeBuffer);break;case "DriveDistance":this.set("buffer",
this._driveDistBuffer)}},_updateUnits:function(){this.unitsSelect.removeOption(this.unitsSelect.getOptions());"DriveTime"==this.typeSelect.get("value")?(this.minutesSpan.style.display="",this.unitsSelect.domNode.style.display="none"):(this.minutesSpan.style.display="none",this.unitsSelect.domNode.style.display="",this._addOption(b.MILES),this._addOption(b.KILOMETERS),this._addOption(b.FEET),this._addOption(b.METERS));this.unitsSelect.set("value",this._buffer.units)},_addOption:function(a){this.unitsSelect.addOption({value:a,
label:c.units[a]})},_unitsChange:function(){var a=this.unitsSelect.get("value");a&&(this._buffer.units=a);this._onChange()},_radiusChange:function(){this._buffer.radii=[this.radiusSpinner.get("value")];this._onChange()},_onChange:function(){this.onChange()},onChange:function(){}})});
//@ sourceMappingURL=BufferOptions.js.map