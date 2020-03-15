/**
 * skylark-selectize - A version of jquery.appendgrid that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-selectize/
 * @license MIT
 */
define(["skylark-jquery","../../Selectize"],function(e,t){t.define("drag_drop",function(t){if(!e.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===this.settings.mode){var r,a=this;a.lock=(r=a.lock,function(){var e=a.$control.data("sortable");return e&&e.disable(),r.apply(a,arguments)}),a.unlock=function(){var e=a.unlock;return function(){var t=a.$control.data("sortable");return t&&t.enable(),e.apply(a,arguments)}}(),a.setup=function(){var t=a.setup;return function(){t.apply(this,arguments);var r=a.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:a.isLocked,start:function(e,t){t.placeholder.css("width",t.helper.css("width")),r.css({overflow:"visible"})},stop:function(){r.css({overflow:"hidden"});var t=a.$activeItems?a.$activeItems.slice():null,n=[];r.children("[data-value]").each(function(){n.push(e(this).attr("data-value"))}),a.setValue(n),a.setActiveItem(t)}})}}()}})});
//# sourceMappingURL=../../sourcemaps/plugins/drag_drop/plugin.js.map
