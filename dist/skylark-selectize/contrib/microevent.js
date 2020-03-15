/**
 * skylark-selectize - A version of jquery.appendgrid that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-selectize/
 * @license MIT
 */
define([],function(){var t=function(){};return t.prototype={on:function(t,e){this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(e)},off:function(t,e){var n=arguments.length;return 0===n?delete this._events:1===n?delete this._events[t]:(this._events=this._events||{},void(t in this._events!=!1&&this._events[t].splice(this._events[t].indexOf(e),1)))},trigger:function(t){if(this._events=this._events||{},t in this._events!=!1)for(var e=0;e<this._events[t].length;e++)this._events[t][e].apply(this,Array.prototype.slice.call(arguments,1))}},t.mixin=function(e){for(var n=["on","off","trigger"],s=0;s<n.length;s++)e.prototype[n[s]]=t.prototype[n[s]]},t});
//# sourceMappingURL=../sourcemaps/contrib/microevent.js.map
