/**
 * skylark-selectize - A version of jquery.appendgrid that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-selectize/
 * @license MIT
 */
define(["../../Selectize","../../utils"],function(e,t){e.define("remove_button",function(e){e=$.extend({label:"&times;",title:"Remove",className:"remove",append:!0},e);"single"!==this.settings.mode?function(e,n){var a,i=e,s='<a href="javascript:void(0)" class="'+n.className+'" tabindex="-1" title="'+t.escape_html(n.title)+'">'+n.label+"</a>";e.setup=(a=i.setup,function(){if(n.append){var t=i.settings.render.item;i.settings.render.item=function(n){return a=t.apply(e,arguments),i=s,r=a.search(/(<\/[^>]+>\s*)$/),a.substring(0,r)+i+a.substring(r);var a,i,r}}a.apply(e,arguments),e.$control.on("click","."+n.className,function(e){if(e.preventDefault(),!i.isLocked){var t=$(e.currentTarget).parent();i.setActiveItem(t),i.deleteSelection()&&i.setCaret(i.items.length)}})})}(this,e):function(e,n){n.className="remove-single";var a,i=e,s='<a href="javascript:void(0)" class="'+n.className+'" tabindex="-1" title="'+t.escape_html(n.title)+'">'+n.label+"</a>";e.setup=(a=i.setup,function(){if(n.append){var t=$(i.$input.context).attr("id"),r=($("#"+t),i.settings.render.item);i.settings.render.item=function(t){return n=r.apply(e,arguments),a=s,$("<span>").append(n).append(a);var n,a}}a.apply(e,arguments),e.$control.on("click","."+n.className,function(e){e.preventDefault(),i.isLocked||i.clear()})})}(this,e)})});
//# sourceMappingURL=../../sourcemaps/plugins/remove_button/plugin.js.map
