/**
 * skylark-selectize - A version of jquery.appendgrid that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-selectize/
 * @license MIT
 */
define(["skylark-jquery","../../Selectize"],function(e,s){s.define("dropdown_header",function(s){var l,d=this;s=e.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(e){return'<div class="'+e.headerClass+'"><div class="'+e.titleRowClass+'"><span class="'+e.labelClass+'">'+e.title+'</span><a href="javascript:void(0)" class="'+e.closeClass+'">&times;</a></div></div>'}},s),d.setup=(l=d.setup,function(){l.apply(d,arguments),d.$dropdown_header=e(s.html(s)),d.$dropdown.prepend(d.$dropdown_header)})})});
//# sourceMappingURL=../../sourcemaps/plugins/dropdown_header/plugin.js.map
