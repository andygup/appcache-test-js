//>>built
require({cache:{"url:esri/dijit/templates/AttributeInspector.html":'\x3cdiv class\x3d"esriAttributeInspector"\x3e\n    \x3cdiv class\x3d"atiLayerName" dojoAttachPoint\x3d"layerName"\x3e\x3c/div\x3e\n    \x3cdiv class\x3d"atiAttributes" dojoAttachPoint\x3d"attributeTable"\x3e\x3c/div\x3e\n    \x3cdiv dojoAttachPoint\x3d"attachmentEditor"\x3e\x3c/div\x3e\n    \x3cdiv class\x3d"atiEditorTrackingInfo" dojoAttachPoint\x3d"editorTrackingInfoDiv"\x3e\x3c/div\x3e\n    \x3cdiv class\x3d"atiButtons" dojoAttachPoint\x3d"editButtons"\x3e\n        \x3cbutton  dojoType\x3d"dijit.form.Button" class\x3d"atiButton atiDeleteButton"  dojoAttachPoint\x3d"deleteBtn" dojoAttachEvent\x3d"onClick: onDeleteBtn" showLabel\x3d"true" type\x3d"button"\x3e${NLS_deleteFeature}\x3c/button\x3e\n        \x3cdiv class\x3d"atiNavButtons" dojoAttachPoint\x3d"navButtons"\x3e\n            \x3cdiv class\x3d"atiNavMessage" dojoAttachPoint\x3d"navMessage"\x3e\x3c/div\x3e\n            \x3cbutton  dojoType\x3d"dijit.form.Button" iconClass\x3d"atiButton atiFirstIcon" dojoAttachPoint\x3d"firstFeatureButton" dojoAttachEvent\x3d"onClick: onFirstFeature" showLabel\x3d"false" type\x3d"button"\x3e${NLS_first}\x3c/button\x3e\n            \x3cbutton  dojoType\x3d"dijit.form.Button" iconClass\x3d"atiButton atiPrevIcon" dojoAttachPoint\x3d"prevFeatureButton" dojoAttachEvent\x3d"onClick: onPreviousFeature" showLabel\x3d"false" type\x3d"button"\x3e${NLS_previous}\x3c/button\x3e\n            \x3cbutton  dojoType\x3d"dijit.form.Button" iconClass\x3d"atiButton atiNextIcon" dojoAttachPoint\x3d"nextFeatureButton" dojoAttachEvent\x3d"onClick: onNextFeature" showLabel\x3d"false" type\x3d"button"\x3e${NLS_next}\x3c/button\x3e\n            \x3cbutton  dojoType\x3d"dijit.form.Button" iconClass\x3d"atiButton atiLastIcon" dojoAttachPoint\x3d"lastFeatureButton" dojoAttachEvent\x3d"onClick: onLastFeature" showLabel\x3d"false" type\x3d"button"\x3e${NLS_last}\x3c/button\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e\n'}});
define("esri/dijit/AttributeInspector","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/sniff dojo/_base/kernel dojo/has dojo/dom-style dojo/dom-construct esri/kernel esri/lang esri/domUtils esri/layers/InheritedDomain esri/layers/FeatureLayer dojo/i18n!esri/nls/jsapi dojo/fx dojox/gfx dijit/_Widget dijit/_Templated dijit/Editor dijit/_editor/plugins/LinkDialog dijit/_editor/plugins/TextColor esri/dijit/_EventedWidget esri/dijit/editing/AttachmentEditor esri/dijit/editing/Util esri/tasks/query dijit/form/DateTextBox dijit/form/TextBox dijit/form/NumberTextBox dijit/form/FilteringSelect dijit/form/NumberSpinner dijit/form/Button dijit/form/SimpleTextarea dijit/Tooltip dojo/data/ItemFileReadStore dojox/date/islamic dojox/date/islamic/Date dojox/date/islamic/locale dojo/text!esri/dijit/templates/AttributeInspector.html".split(" "),
function(u,k,g,p,O,v,w,n,h,x,m,q,r,y,z,P,Q,A,B,C,R,S,D,E,F,T,G,H,s,t,I,U,J,K,L,V,W,X,M){var l=u([D,A,B],{declaredClass:"esri.dijit.AttributeInspector",widgetsInTemplate:!0,templateString:M,_navMessage:"( ${idx} ${of} ${numFeatures} )",onUpdate:function(){},onDelete:function(){},onAttributeChange:function(){},onNext:function(){},onReset:function(){},onCancel:function(){},_eventMap:{update:!0,"delete":["feature"],"attribute-change":["feature","fieldName","fieldValue"],next:["feature"],reset:!0,cancel:!0},
constructor:function(a,b){k.mixin(this,z.widgets.attributeInspector);a=a||{};!a.featureLayer&&!a.layerInfos&&console.error("esri.AttributeInspector: please provide correct parameter in the constructor");this._datePackage=this._getDatePackage(a);this._layerInfos=a.layerInfos||[{featureLayer:a.featureLayer,options:a.options||[]}];this._layerInfos=g.filter(this._layerInfos,function(a){return!a.disableAttributeUpdate});this._aiConnects=[];this._selection=[];this._toolTips=[];this._featureIdx=this._numFeatures=
0;this._currentFeature=this._currentLInfo=null;this._hideNavButtons=a.hideNavButtons||!1},postCreate:function(){if(g.every(this._layerInfos,function(a){return a.featureLayer.loaded}))this._initLayerInfos(),this._createAttachmentEditor(),this.onFirstFeature();else{var a=this._layerInfos.length;g.forEach(this._layerInfos,function(b){b=b.featureLayer;if(b.loaded)a--;else var c=p.connect(b,"onLoad",this,function(b){p.disconnect(c);c=null;a--;a||(this._initLayerInfos(),this._createAttachmentEditor(),this.onFirstFeature())})},
this)}},destroy:function(){this._destroyAttributeTable();g.forEach(this._aiConnects,p.disconnect);delete this._aiConnects;this._attachmentEditor&&(this._attachmentEditor.destroy(),delete this._attachmentEditor);delete this._layerInfos;this._selection=this._currentFeature=this._currentLInfo=this._attributes=this._layerInfos=null;this.inherited(arguments)},refresh:function(){this._updateSelection()},first:function(){this.onFirstFeature()},last:function(){this.onLastFeature()},next:function(){this.onNextFeature()},
previous:function(){this.onPreviousFeature()},showFeature:function(a,b){b&&(this._createOnlyFirstTime=!0);this._updateSelection([a],b);this._updateUI()},onLayerSelectionChange:function(a,b,c){this._createOnlyFirstTime=!1;this._featureIdx=c===y.SELECTION_NEW?0:this._featureIdx;this._updateSelection();this._updateUI()},onLayerSelectionClear:function(){this._selection&&!(0>=this._selection.length)&&(this._featureIdx=this._numFeatures=0,this._selection=[],this._currentLInfo=this._currentFeature=null,
this._updateUI())},onLayerEditsComplete:function(a,b,c,d){d=d||[];if(d.length){var e=this._selection,f=a.featureLayer.objectIdField;g.forEach(d,k.hitch(this,function(a){g.some(e,k.hitch(this,function(b,c){if(b.attributes[f]!==a.objectId)return!1;this._selection.splice(c,1);return!0}))}))}b=b||[];b.length&&(this._selection=F.findFeatures(b,a.featureLayer),this._featureIdx=0);a=this._numFeatures=this._selection?this._selection.length:0;if(b.length&&(b=a?this._selection[this._featureIdx]:null))a=b.getLayer().getEditCapabilities(),
(!a.canCreate||a.canUpdate)&&this._showFeature(b);this._updateUI()},onFieldValueChange:function(a,b){b="undefined"===typeof b?null:b;var c=a.field;"esriFieldTypeDate"===c.type&&(b=b&&b.getTime?b.getTime():b&&b.toGregorian?b.toGregorian().getTime():b);if(this._currentFeature.attributes[c.name]!==b){var d=this._currentLInfo,e=this._currentFeature,f=c.name;if(f===d.typeIdField){var N=this._findFirst(d.types,"id",b);g.forEach(d.fieldInfos,function(a){if((c=a.field)&&c.name!==d.typeIdField)a=a.dijit,this._setFieldDomain(a,
N,c)&&a&&(this._setValue(a,e.attributes[c.name]+""),!1===a.isValid()&&this._setValue(a,null))},this)}this.onAttributeChange(e,f,b)}},onDeleteBtn:function(a){this._deleteFeature()},onNextFeature:function(a){this._onNextFeature(1)},onPreviousFeature:function(a){this._onNextFeature(-1)},onFirstFeature:function(a){this._onNextFeature(-1*this._featureIdx)},onLastFeature:function(a){this._onNextFeature(this._numFeatures-1-this._featureIdx)},_initLayerInfos:function(){var a=this._layerInfos;this._editorTrackingInfos=
{};g.forEach(a,this._initLayerInfo,this)},_initLayerInfo:function(a){var b=a.featureLayer,c,d;this._userIds={};d=b.id;b.credential&&(this._userIds[d]=b.credential.userId);a.userId&&(this._userIds[d]=a.userId);this._connect(b,"onSelectionComplete",k.hitch(this,"onLayerSelectionChange",a));this._connect(b,"onSelectionClear",k.hitch(this,"onLayerSelectionClear",a));this._connect(b,"onEditsComplete",k.hitch(this,"onLayerEditsComplete",a));a.showAttachments=b.hasAttachments?m.isDefined(a.showAttachments)?
a.showAttachments:!0:!1;a.hideFields=a.hideFields||[];a.htmlFields=a.htmlFields||[];a.isEditable=b.isEditable()?m.isDefined(a.isEditable)?a.isEditable:!0:!1;a.typeIdField=b.typeIdField;a.layerId=b.id;a.types=b.types;b.globalIdField&&(c=this._findFirst(a.fieldInfos,"fieldName",b.globalIdField),!c&&!a.showGlobalID&&a.hideFields.push(b.globalIdField));d=this._findFirst(a.fieldInfos,"fieldName",b.objectIdField);!d&&!a.showObjectID&&a.hideFields.push(b.objectIdField);var e=this._getFields(a.featureLayer);
if(e){var f=a.fieldInfos||[],f=g.map(f,function(a){return k.mixin({},a)});f.length?a.fieldInfos=g.filter(g.map(f,k.hitch(this,function(b){var c=b.stringFieldOption||(this._isInFields(b.fieldName,a.htmlFields)?l.STRING_FIELD_OPTION_RICHTEXT:l.STRING_FIELD_OPTION_TEXTBOX);return k.mixin(b,{field:this._findFirst(e,"name",b.fieldName),stringFieldOption:c})})),"return item.field;"):(e=g.filter(e,k.hitch(this,function(b){return!this._isInFields(b.name,a.hideFields)})),a.fieldInfos=g.map(e,k.hitch(this,
function(b){var c=this._isInFields(b.name,a.htmlFields)?l.STRING_FIELD_OPTION_RICHTEXT:l.STRING_FIELD_OPTION_TEXTBOX;return{fieldName:b.name,field:b,stringFieldOption:c}})));a.showGlobalID&&!c&&f.push(this._findFirst(e,"name",b.globalIdField));a.showObjectID&&!d&&f.push(this._findFirst(e,"name",b.objectIdField));c=[];b.editFieldsInfo&&(b.editFieldsInfo.creatorField&&c.push(b.editFieldsInfo.creatorField),b.editFieldsInfo.creationDateField&&c.push(b.editFieldsInfo.creationDateField),b.editFieldsInfo.editorField&&
c.push(b.editFieldsInfo.editorField),b.editFieldsInfo.editDateField&&c.push(b.editFieldsInfo.editDateField));this._editorTrackingInfos[b.id]=c}},_createAttachmentEditor:function(){this._attachmentEditor=null;var a=g.filter(this._layerInfos,function(a){return a.showAttachments});a&&a.length&&(this._attachmentEditor=new E({"class":"atiAttachmentEditor"},this.attachmentEditor),this._attachmentEditor.startup())},_setCurrentLInfo:function(a){var b=this._currentLInfo?this._currentLInfo.featureLayer:null,
c=a.featureLayer;if(b&&(b.id===c.id&&!b.ownershipBasedAccessControlForFeatures)&&(b=c.getEditCapabilities(),!b.canCreate||b.canUpdate))return;this._currentLInfo=a;this._createTable()},_updateSelection:function(a,b){this._selection=a||[];g.forEach(this._layerInfos,this._getSelection,this);var c=(this._numFeatures=this._selection.length)?this._selection[this._featureIdx]:null;this._showFeature(c,b)},_getSelection:function(a){a=a.featureLayer.getSelectedFeatures();this._selection=this._selection.concat(a)},
_updateUI:function(){var a=this._numFeatures,b=this._currentLInfo;this.layerName.innerHTML=!b||0===a?this.NLS_noFeaturesSelected:b.featureLayer?b.featureLayer.name:"";n.set(this.attributeTable,"display",a?"":"none");n.set(this.editButtons,"display",a?"":"none");n.set(this.navButtons,"display",!this._hideNavButtons&&1<a?"":"none");this.navMessage.innerHTML=m.substitute({idx:this._featureIdx+1,of:this.NLS_of,numFeatures:this._numFeatures},this._navMessage);this._attachmentEditor&&n.set(this._attachmentEditor.domNode,
"display",b&&b.showAttachments&&a?"":"none");n.set(this.deleteBtn.domNode,"display",!(b&&!1===b.showDeleteButton)&&this._canDelete?"":"none");this.domNode.parentNode&&0<this.domNode.parentNode.scrollTop&&(this.domNode.parentNode.scrollTop=0)},_onNextFeature:function(a){this._featureIdx+=a;0>this._featureIdx?this._featureIdx=this._numFeatures-1:this._featureIdx>=this._numFeatures&&(this._featureIdx=0);a=this._selection.length?this._selection[this._featureIdx]:null;this._showFeature(a);this._updateUI();
this.onNext(a)},_deleteFeature:function(){this.onDelete(this._currentFeature)},_showFeature:function(a,b){if(a){this._currentFeature=a;var c=b?b:a.getLayer(),d=c.getEditCapabilities({feature:a,userId:this._userIds[c.id]});this._canUpdate=d.canUpdate;this._canDelete=d.canDelete;if(d=this._getLInfoFromFeatureLayer(c)){this._setCurrentLInfo(d);var e=a.attributes,f=this._findFirst(d.types,"id",e[d.typeIdField]),h,k=null;g.forEach(d.fieldInfos,function(a){k=a.field;if(h=a.dijit||null){a=this._setFieldDomain(h,
f,k);var b=e[k.name],b=b&&a&&a.codedValues&&a.codedValues.length?a.codedValues[b]?a.codedValues[b].name:b:b;m.isDefined(b)||(b="");"dijit.form.DateTextBox"===h.declaredClass?b=""===b?null:new Date(b):"dijit.form.FilteringSelect"===h.declaredClass&&(h._lastValueReported=null,b=e[k.name]+"");try{this._setValue(h,b),"dijit.form.FilteringSelect"===h.declaredClass&&!1===h.isValid()&&this._setValue(h,null)}catch(c){h.set("displayedValue",this.NLS_errorInvalid,!1)}}},this);this._attachmentEditor&&d.showAttachments&&
this._attachmentEditor.showAttachments(this._currentFeature);(c=c.getEditSummary(a))?(this.editorTrackingInfoDiv.innerHTML=c,q.show(this.editorTrackingInfoDiv)):q.hide(this.editorTrackingInfoDiv)}}},_setFieldDomain:function(a,b,c){if(!a)return null;var d=c.domain;b&&b.domains&&b.domains[c.name]&&!1===b.domains[c.name]instanceof r&&(d=b.domains[c.name]);if(!d)return null;d.codedValues&&0<d.codedValues.length?(a.set("store",this._toStore(g.map(d.codedValues,function(a){return{id:a.code+="",name:a.name}}))),
this._setValue(a,d.codedValues[0].code)):(a.constraints={min:m.isDefined(d.minValue)?d.minValue:Number.MIN_VALUE,max:m.isDefined(d.maxValue)?d.maxValue:Number.MAX_VALUE},this._setValue(a,a.constraints.min));return d},_setValue:function(a,b){a.set&&(a._onChangeActive=!1,a.set("value",b,!0),a._onChangeActive=!0)},_getFields:function(a){var b=a._getOutFields();if(!b)return null;a=a.fields;return"*"==b?a:g.filter(g.map(b,k.hitch(this,"_findFirst",a,"name")),m.isDefined)},_isInFields:function(a,b){return!a||
!b&&!b.length?!1:g.some(b,function(b){return b.toLowerCase()===a.toLowerCase()})},_findFirst:function(a,b,c){return(a=g.filter(a,function(a){return a.hasOwnProperty(b)&&a[b]===c}))&&a.length?a[0]:null},_getLInfoFromFeatureLayer:function(a){return this._findFirst(this._layerInfos,"layerId",a?a.id:null)},_createTable:function(){this._destroyAttributeTable();this.attributeTable.innerHTML="";this._attributes=h.create("table",{cellspacing:"0",cellpadding:"0"},this.attributeTable);var a=h.create("tbody",
null,this._attributes),b=this._currentLInfo,c=this._findFirst(b.types,"id",this._currentFeature.attributes[b.typeIdField]);g.forEach(b.fieldInfos,k.hitch(this,"_createField",c,a),this);this._createOnlyFirstTime=!1},_createField:function(a,b,c){var d=this._currentLInfo,e=c.field;if(!this._isInFields(e.name,d.hideFields)&&!this._isInFields(e.name,this._editorTrackingInfos[d.featureLayer.id])){var f=h.create("tr",null,b);b=h.create("td",{innerHTML:c.label||e.alias||e.name,"class":"atiLabel"},f);b=h.create("td",
null,f);var f=null,g=!1;if(c.customField)h.place(c.customField.domNode||c.customField,h.create("div",null,b),"first"),f=c.customField;else if(!1===d.isEditable||!1===e.editable||!1===c.isEditable||"esriFieldTypeOID"===e.type||"esriFieldTypeGlobalID"===e.type||!this._canUpdate&&!this._createOnlyFirstTime)g=!0;!f&&d.typeIdField&&e.name.toLowerCase()==d.typeIdField.toLowerCase()?f=this._createTypeField(e,c,b):f||(f=this._createDomainField(e,c,a,b));if(!f)switch(e.type){case "esriFieldTypeString":f=this._createStringField(e,
c,b);break;case "esriFieldTypeDate":f=this._createDateField(e,c,b);break;case "esriFieldTypeInteger":case "esriFieldTypeSmallInteger":f=this._createIntField(e,c,b);break;case "esriFieldTypeSingle":case "esriFieldTypeDouble":f=this._createFltField(e,c,b);break;default:f=this._createStringField(e,c,b)}c.tooltip&&c.tooltip.length&&this._toolTips.push(new K({connectId:[f.id],label:c.tooltip}));f.onChange=k.hitch(this,"onFieldValueChange",c);f.set("disabled",g);c.dijit=f}},_createTypeField:function(a,
b,c){return new t({"class":"atiField",name:a.alias||a.name,store:this._toStore(g.map(this._currentLInfo.types,function(a){return{id:a.id,name:a.name}})),searchAttr:"name"},h.create("div",null,c))},_createDomainField:function(a,b,c,d){b=a.domain;c&&c.domains&&c.domains[a.name]&&!1===c.domains[a.name]instanceof r&&(b=c.domains[a.name]);return!b?null:b.codedValues?new t({"class":"atiField",name:a.alias||a.name,searchAttr:"name",required:a.nullable||!1},h.create("div",null,d)):new I({"class":"atiField"},
h.create("div",null,d))},_createStringField:function(a,b,c){a={"class":"atiField",trim:!0,maxLength:a.length};return b.stringFieldOption===l.STRING_FIELD_OPTION_TEXTAREA?(a["class"]+=" atiTextAreaField",new J(a,h.create("div",null,c))):b.stringFieldOption===l.STRING_FIELD_OPTION_RICHTEXT?(a["class"]+=" atiRichTextField",a.height="100%",a.width="100%",a.plugins=b.richTextPlugins||"bold italic underline foreColor hiliteColor | justifyLeft justifyCenter justifyRight justifyFull | insertOrderedList insertUnorderedList indent outdent | createLink".split(" "),
b=new C(a,h.create("div",null,c)),b.startup(),b):new H(a,h.create("div",null,c))},_createDateField:function(a,b,c){a={"class":"atiField",trim:!0};this._datePackage&&(a.datePackage=this._datePackage);return new G(a,h.create("div",null,c))},_createIntField:function(a,b,c){return new s({"class":"atiField",constraints:{places:0},invalidMessage:this.NLS_validationInt,trim:!0},h.create("div",null,c))},_createFltField:function(a,b,c){return new s({"class":"atiField",trim:!0,invalidMessage:this.NLS_validationFlt},
h.create("div",null,c))},_toStore:function(a){return new L({data:{identifier:"id",label:"name",items:a}})},_connect:function(a,b,c){this._aiConnects.push(p.connect(a,b,c))},_getDatePackage:function(a){if(null!==a.datePackage){if(a.datePackage)return a.datePackage;if("ar"===v.locale)return"dojox.date.islamic"}return null},_destroyAttributeTable:function(){g.forEach(this._layerInfos,function(a){g.forEach(a.fieldInfos,function(a){var c=a.dijit;if(c){c._onChangeHandle=null;if(a.customField)return;c.destroyRecursive?
c.destroyRecursive():c.destroy&&c.destroy()}a.dijit=null},this)},this);g.forEach(this._toolTips,function(a){a.destroy();delete a});this._toolTips=[];this._attributes&&h.destroy(this._attributes)}});k.mixin(l,{STRING_FIELD_OPTION_RICHTEXT:"richtext",STRING_FIELD_OPTION_TEXTAREA:"textarea",STRING_FIELD_OPTION_TEXTBOX:"textbox"});w("extend-esri")&&k.setObject("dijit.AttributeInspector",l,x);return l});
//@ sourceMappingURL=AttributeInspector.js.map