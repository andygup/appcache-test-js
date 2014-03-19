//>>built
define("dgrid/tree","dojo/_base/declare dojo/_base/array dojo/_base/Deferred dojo/_base/lang dojo/query dojo/on dojo/aspect ./util/has-css3 ./Grid dojo/has!touch?./util/touch put-selector/put".split(" "),function(C,x,y,z,r,A,f,t,B,u,m){function v(b,f,k,e){e=this.grid.isRTL?"right":"left";var a=".dgrid-expando-icon";f&&(a+=".ui-icon.ui-icon-triangle-1-"+(k?"se":"e"));b=m("div"+a+"[style\x3dmargin-"+e+": "+b*(this.indentWidth||9)+"px; float: "+e+"]");b.innerHTML="\x26nbsp;";return b}function w(b){var f=
this,k=this.style.height;k&&(this.style.display="0px"==k?"none":"block");b&&(m(this,".dgrid-tree-resetting"),setTimeout(function(){m(f,"!dgrid-tree-resetting")}));this.style.height=""}function n(b){var n=b.renderCell||B.defaultRenderCell,k,e;b||(b={});b.shouldExpand=b.shouldExpand||function(a,b,g){return g};f.after(b,"init",function(){var a=b.grid,p=".dgrid-content .dgrid-column-"+b.id,g=[];a.cleanEmptyObservers=!1;if(!a.store)throw Error("dgrid tree column plugin requires a store to operate.");b.renderExpando||
(b.renderExpando=v);g.push(a.on(b.expandOn||".dgrid-expando-icon:click,"+p+":dblclick,"+p+":keydown",function(c){var d=a.row(c);(!a.store.mayHaveChildren||a.store.mayHaveChildren(d.data))&&(("keydown"!=c.type||32==c.keyCode)&&!("dblclick"==c.type&&e&&1<e.count&&d.id==e.id&&-1<c.target.className.indexOf("dgrid-expando-icon")))&&a.expand(d);-1<c.target.className.indexOf("dgrid-expando-icon")&&(e&&e.id==a.row(c).id?e.count++:e={id:a.row(c).id,count:1})}));t("touch")&&g.push(a.on(u.selector(p,u.dbltap),
function(){a.expand(this)}));a._expanded||(a._expanded={});g.push(f.after(a,"insertRow",function(a){var d=this.row(a);b.shouldExpand(d,k,this._expanded[d.id])&&this.expand(a,!0,!0);return a}));g.push(f.before(a,"removeRow",function(c,d){var b=c.connected;b&&(r("\x3e.dgrid-row",b).forEach(function(c){a.removeRow(c,!0)}),d||m(b,"!"))}));b.collapseOnRefresh&&g.push(f.after(a,"cleanup",function(){this._expanded={}}));a._calcRowHeight=function(a){var b=a.connected;return a.offsetHeight+(b?b.offsetHeight:
0)};a.expand=function(c,d,g){var l=c.element?c:a.row(c),e=t("transitionend");c=l.element;if((c=-1<c.className.indexOf("dgrid-expando-icon")?c:r(".dgrid-expando-icon",c)[0])&&c.mayHaveChildren&&(g||d!==!!this._expanded[l.id])){var f=void 0===d?!this._expanded[l.id]:d;m(c,".ui-icon-triangle-1-"+(f?"se":"e")+"!ui-icon-triangle-1-"+(f?"e":"se"));var k=c.preloadNode;d=l.element;var h,q,p,n={originalQuery:this.query};if(!k){h=d.connected=m("div.dgrid-tree-container");var k=c.preloadNode=m(d,"+",h,"div.dgrid-preload"),
s=function(b){return a.store.getChildren(l.data,b)};b.allowDuplicates&&(n.parentId=l.id);"level"in c&&(s.level=c.level);y.when(a.renderQuery?a._trackError(function(){return a.renderQuery(s,k,n)}):a.renderArray(s(n),k,"level"in s?{queryLevel:s.level}:{}),function(){if(a._expanded[l.id]&&e){var b=h.scrollHeight;h.style.height=b?b+"px":"auto"}});e?A(h,e,w):w.call(h)}h=d.connected;h.hidden=!f;q=h.style;!e||g?(q.display=f?"block":"none",q.height=""):(f?(q.display="block",p=h.scrollHeight,q.height="0px"):
(m(h,".dgrid-tree-resetting"),q.height=h.scrollHeight+"px"),setTimeout(function(){m(h,"!dgrid-tree-resetting");q.height=f?p?p+"px":"auto":"0px"}));f?this._expanded[l.id]=!0:delete this._expanded[l.id]}};f.after(b,"destroy",function(){x.forEach(g,function(a){a.remove()});delete a.expand;delete a._calcRowHeight})});b.renderCell=function(a,f,g,c){var d=b.grid,e=Number(c&&c.queryLevel)+1,l=!d.store.mayHaveChildren||d.store.mayHaveChildren(a),r=c.parentId,e=k=isNaN(e)?0:e,d=b.renderExpando(e,l,d._expanded[(r?
r+"-":"")+d.store.getIdentity(a)],a);d.level=e;d.mayHaveChildren=l;(a=n.call(b,a,f,g,c))&&a.nodeType?(m(g,d),m(g,a)):g.insertBefore(d,g.firstChild)};return b}n.defaultRenderExpando=v;z.getObject("dgrid.tree",!0);return dgrid.tree=n});
//@ sourceMappingURL=tree.js.map