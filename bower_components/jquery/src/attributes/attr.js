define(["../core","../var/rnotwhite","../var/strundefined","../core/access","./support","../selector"],function(t,e,r,o,n){var i,a,u=t.expr.attrHandle;t.fn.extend({attr:function(e,r){return o(this,t.attr,e,r,arguments.length>1)},removeAttr:function(e){return this.each(function(){t.removeAttr(this,e)})}}),t.extend({attr:function(e,o,n){var u,c,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?t.prop(e,o,n):(1===s&&t.isXMLDoc(e)||(o=o.toLowerCase(),u=t.attrHooks[o]||(t.expr.match.bool.test(o)?a:i)),void 0===n?u&&"get"in u&&null!==(c=u.get(e,o))?c:(c=t.find.attr(e,o),null==c?void 0:c):null!==n?u&&"set"in u&&void 0!==(c=u.set(e,n,o))?c:(e.setAttribute(o,n+""),n):(t.removeAttr(e,o),void 0))},removeAttr:function(r,o){var n,i,a=0,u=o&&o.match(e);if(u&&1===r.nodeType)for(;n=u[a++];)i=t.propFix[n]||n,t.expr.match.bool.test(n)&&(r[i]=!1),r.removeAttribute(n)},attrHooks:{type:{set:function(e,r){if(!n.radioValue&&"radio"===r&&t.nodeName(e,"input")){var o=e.value;return e.setAttribute("type",r),o&&(e.value=o),r}}}}}),a={set:function(e,r,o){return r===!1?t.removeAttr(e,o):e.setAttribute(o,o),o}},t.each(t.expr.match.bool.source.match(/\w+/g),function(e,r){var o=u[r]||t.find.attr;u[r]=function(t,e,r){var n,i;return r||(i=u[e],u[e]=n,n=null!=o(t,e,r)?e.toLowerCase():null,u[e]=i),n}})});