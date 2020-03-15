/**
 * skylark-selectize - A version of jquery.appendgrid that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-selectize/
 * @license MIT
 */
define(["skylark-jquery","../../Selectize"],function(t,e){e.define("restore_on_backspace",function(t){var e,i=this;t.text=t.text||function(t){return t[this.settings.labelField]},this.onKeyDown=(e=i.onKeyDown,function(i){var s,n;return i.keyCode===KEY_BACKSPACE&&""===this.$control_input.val()&&!this.$activeItems.length&&(s=this.caretPos-1)>=0&&s<this.items.length?(n=this.options[this.items[s]],this.deleteSelection(i)&&(this.setTextboxValue(t.text.apply(this,[n])),this.refreshOptions(!0)),void i.preventDefault()):e.apply(this,arguments)})})});
//# sourceMappingURL=../../sourcemaps/plugins/restore_on_backspace/plugin.js.map
