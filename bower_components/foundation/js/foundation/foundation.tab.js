!function(t,a,e,n){"use strict";Foundation.libs.tab={name:"tab",version:"5.3.0",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(t,a,e){var n=this,i=this.S;this.bindings(a,e),this.handle_location_hash_change(),i("["+this.attr_name()+"] > .active > a",this.scope).each(function(){n.default_tab_hashes.push(this.hash)})},events:function(){var t=this,e=this.S;e(this.scope).off(".tab").on("click.fndtn.tab","["+this.attr_name()+"] > * > a",function(a){var n=e(this).closest("["+t.attr_name()+"]").data(t.attr_name(!0)+"-init");(!n.is_hover||Modernizr.touch)&&(a.preventDefault(),a.stopPropagation(),t.toggle_active_tab(e(this).parent()))}).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(){var a=e(this).closest("["+t.attr_name()+"]").data(t.attr_name(!0)+"-init");a.is_hover&&t.toggle_active_tab(e(this).parent())}),e(a).on("hashchange.fndtn.tab",function(a){a.preventDefault(),t.handle_location_hash_change()})},handle_location_hash_change:function(){var a=this,e=this.S;e("["+this.attr_name()+"]",this.scope).each(function(){var i=e(this).data(a.attr_name(!0)+"-init");if(i.deep_linking){var s=a.scope.location.hash;if(""!=s){var o=e(s);if(o.hasClass("content")&&o.parent().hasClass("tab-content"))a.toggle_active_tab(t("["+a.attr_name()+"] > * > a[href="+s+"]").parent());else{var r=o.closest(".content").attr("id");r!=n&&a.toggle_active_tab(t("["+a.attr_name()+"] > * > a[href=#"+r+"]").parent(),s)}}else for(var c in a.default_tab_hashes)a.toggle_active_tab(t("["+a.attr_name()+"] > * > a[href="+a.default_tab_hashes[c]+"]").parent())}})},toggle_active_tab:function(e,i){var s=this.S,o=e.closest("["+this.attr_name()+"]"),r=e.children("a").first(),c="#"+r.attr("href").split("#")[1],h=s(c),l=e.siblings(),_=o.data(this.attr_name(!0)+"-init");if(s(this).data(this.data_attr("tab-content"))&&(c="#"+s(this).data(this.data_attr("tab-content")).split("#")[1],h=s(c)),_.deep_linking){var d=t("body,html").scrollTop();a.location.hash=i!=n?i:c,_.scroll_to_content?i==n||i==c?e.parent()[0].scrollIntoView():s(c)[0].scrollIntoView():(i==n||i==c)&&t("body,html").scrollTop(d)}e.addClass(_.active_class).triggerHandler("opened"),l.removeClass(_.active_class),h.siblings().removeClass(_.active_class).end().addClass(_.active_class),_.callback(e),h.triggerHandler("toggled",[e]),o.triggerHandler("toggled",[h])},data_attr:function(t){return this.namespace.length>0?this.namespace+"-"+t:t},off:function(){},reflow:function(){}}}(jQuery,window,window.document);