!function(e,t,n,s){"use strict";function i(e){var t=/fade/i.test(e),n=/pop/i.test(e);return{animate:t||n,pop:n,fade:t}}Foundation.libs.reveal={name:"reveal",version:"5.3.0",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},bg:e(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(t,n,s){e.extend(!0,this.settings,n,s),this.bindings(n,s)},events:function(){var e=this,t=e.S;return t(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(n){if(n.preventDefault(),!e.locked){var s=t(this),i=s.data(e.data_attr("reveal-ajax"));if(e.locked=!0,"undefined"==typeof i)e.open.call(e,s);else{var a=i===!0?s.attr("href"):i;e.open.call(e,s,{url:a})}}}),t(n).on("touchend.fndtn.reveal click.fndtn.reveal",this.close_targets(),function(n){if(n.preventDefault(),!e.locked){var s=t("["+e.attr_name()+"].open").data(e.attr_name(!0)+"-init"),i=t(n.target)[0]===t("."+s.bg_class)[0];if(i){if(!s.close_on_background_click)return;n.stopPropagation()}e.locked=!0,e.close.call(e,i?t("["+e.attr_name()+"].open"):t(this).closest("["+e.attr_name()+"]"))}}),t("["+e.attr_name()+"]",this.scope).length>0?t(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):t(this.scope).on("open.fndtn.reveal","["+e.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+e.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+e.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+e.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+e.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+e.attr_name()+"]",this.close_video),!0},key_up_on:function(){var e=this;return e.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(t){var n=e.S("["+e.attr_name()+"].open"),s=n.data(e.attr_name(!0)+"-init");s&&27===t.which&&s.close_on_esc&&!e.locked&&e.close.call(e,n)}),!0},key_up_off:function(){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(t,n){var s,i=this;t?"undefined"!=typeof t.selector?s=i.S("#"+t.data(i.data_attr("reveal-id"))).first():(s=i.S(this.scope),n=t):s=i.S(this.scope);var a=s.data(i.attr_name(!0)+"-init");if(a=a||this.settings,!s.hasClass("open")){var o=i.S("["+i.attr_name()+"].open");if("undefined"==typeof s.data("css-top")&&s.data("css-top",parseInt(s.css("top"),10)).data("offset",this.cache_offset(s)),this.key_up_on(s),s.trigger("open").trigger("open.fndtn.reveal"),o.length<1&&this.toggle_bg(s,!0),"string"==typeof n&&(n={url:n}),"undefined"!=typeof n&&n.url){var r="undefined"!=typeof n.success?n.success:null;e.extend(n,{success:function(t,n,d){e.isFunction(r)&&r(t,n,d),s.html(t),i.S(s).foundation("section","reflow"),i.S(s).children().foundation(),o.length>0&&i.hide(o,a.css.close),i.show(s,a.css.open)}}),e.ajax(n)}else o.length>0&&this.hide(o,a.css.close),this.show(s,a.css.open)}},close:function(e){var e=e&&e.length?e:this.S(this.scope),t=this.S("["+this.attr_name()+"].open"),n=e.data(this.attr_name(!0)+"-init")||this.settings;t.length>0&&(this.locked=!0,this.key_up_off(e),e.trigger("close").trigger("close.fndtn.reveal"),this.toggle_bg(e,!1),this.hide(t,n.css.close,n))},close_targets:function(){var e="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?e+", ."+this.settings.bg_class:e},toggle_bg:function(t,n){0===this.S("."+this.settings.bg_class).length&&(this.settings.bg=e("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var i=this.settings.bg.filter(":visible").length>0;n!=i&&((n==s?i:!n)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(n,s){if(s){var a=n.data(this.attr_name(!0)+"-init")||this.settings,o=a.root_element;if(0===n.parent(o).length){var r=n.wrap('<div style="display: none;" />').parent();n.on("closed.fndtn.reveal.wrapped",function(){n.detach().appendTo(r),n.unwrap().unbind("closed.fndtn.reveal.wrapped")}),n.detach().appendTo(o)}var d=i(a.animation);if(d.animate||(this.locked=!1),d.pop){s.top=e(t).scrollTop()-n.data("offset")+"px";var c={top:e(t).scrollTop()+n.data("css-top")+"px",opacity:1};return setTimeout(function(){return n.css(s).animate(c,a.animation_speed,"linear",function(){this.locked=!1,n.trigger("opened").trigger("opened.fndtn.reveal")}.bind(this)).addClass("open")}.bind(this),a.animation_speed/2)}if(d.fade){s.top=e(t).scrollTop()+n.data("css-top")+"px";var c={opacity:1};return setTimeout(function(){return n.css(s).animate(c,a.animation_speed,"linear",function(){this.locked=!1,n.trigger("opened").trigger("opened.fndtn.reveal")}.bind(this)).addClass("open")}.bind(this),a.animation_speed/2)}return n.css(s).show().css({opacity:1}).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")}var a=this.settings;return i(a.animation).fade?n.fadeIn(a.animation_speed/2):(this.locked=!1,n.show())},hide:function(n,s){if(s){var a=n.data(this.attr_name(!0)+"-init");a=a||this.settings;var o=i(a.animation);if(o.animate||(this.locked=!1),o.pop){var r={top:-e(t).scrollTop()-n.data("offset")+"px",opacity:0};return setTimeout(function(){return n.animate(r,a.animation_speed,"linear",function(){this.locked=!1,n.css(s).trigger("closed").trigger("closed.fndtn.reveal")}.bind(this)).removeClass("open")}.bind(this),a.animation_speed/2)}if(o.fade){var r={opacity:0};return setTimeout(function(){return n.animate(r,a.animation_speed,"linear",function(){this.locked=!1,n.css(s).trigger("closed").trigger("closed.fndtn.reveal")}.bind(this)).removeClass("open")}.bind(this),a.animation_speed/2)}return n.hide().css(s).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")}var a=this.settings;return i(a.animation).fade?n.fadeOut(a.animation_speed/2):n.hide()},close_video:function(t){var n=e(".flex-video",t.target),s=e("iframe",n);s.length>0&&(s.attr("data-src",s[0].src),s.attr("src","about:blank"),n.hide())},open_video:function(t){var n=e(".flex-video",t.target),i=n.find("iframe");if(i.length>0){var a=i.attr("data-src");if("string"==typeof a)i[0].src=i.attr("data-src");else{var o=i[0].src;i[0].src=s,i[0].src=o}n.show()}},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},cache_offset:function(e){var t=e.show().height()+parseInt(e.css("top"),10);return e.hide(),t},off:function(){e(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document);