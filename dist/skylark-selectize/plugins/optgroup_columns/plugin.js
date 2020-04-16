/**
 * skylark-selectize - A version of jquery.appendgrid that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-selectize/
 * @license MIT
 */
define(["skylark-jquery","../../Selectize"],function(e,t){t.define("optgroup_columns",function(t){var i,n=this;t=e.extend({equalizeWidth:!0,equalizeHeight:!0},t),this.getAdjacentOption=function(t,i){var n=t.closest("[data-group]").find("[data-selectable]"),o=n.index(t)+i;return o>=0&&o<n.length?n.eq(o):e()},this.onKeyDown=(i=n.onKeyDown,function(e){var t,o,d,h;return!this.isOpen||e.keyCode!==KEY_LEFT&&e.keyCode!==KEY_RIGHT?i.apply(this,arguments):(n.ignoreHover=!0,t=(h=this.$activeOption.closest("[data-group]")).find("[data-selectable]").index(this.$activeOption),void((o=(d=(h=e.keyCode===KEY_LEFT?h.prev("[data-group]"):h.next("[data-group]")).find("[data-selectable]")).eq(Math.min(d.length-1,t))).length&&this.setActiveOption(o)))});var o=function(){var e,t=o.width,i=document;return void 0===t&&((e=i.createElement("div")).innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',e=e.firstChild,i.body.appendChild(e),t=o.width=e.offsetWidth-e.clientWidth,i.body.removeChild(e)),t},d=function(){var i,d,h,a,r,s,l;if((d=(l=e("[data-group]",n.$dropdown_content)).length)&&n.$dropdown_content.width()){if(t.equalizeHeight){for(h=0,i=0;i<d;i++)h=Math.max(h,l.eq(i).height());l.css({height:h})}t.equalizeWidth&&(s=n.$dropdown_content.innerWidth()-o(),a=Math.round(s/d),l.css({width:a}),d>1&&(r=s-a*(d-1),l.eq(d-1).css({width:r})))}};(t.equalizeHeight||t.equalizeWidth)&&(hook.after(this,"positionDropdown",d),hook.after(this,"refreshOptions",d))})});
//# sourceMappingURL=../../sourcemaps/plugins/optgroup_columns/plugin.js.map