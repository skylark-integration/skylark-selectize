/**
 * skylark-selectize - A version of jquery.appendgrid that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-selectize/
 * @license MIT
 */
define([],function(){var n={mixin:function(n){n.plugins={},n.prototype.initializePlugins=function(n){var i,e,s,t=[];if(this.plugins={names:[],settings:{},requested:{},loaded:{}},Array.isArray(n))for(i=0,e=n.length;i<e;i++)"string"==typeof n[i]?t.push(n[i]):(this.plugins.settings[n[i].name]=n[i].options,t.push(n[i].name));else if(n)for(s in n)n.hasOwnProperty(s)&&(this.plugins.settings[s]=n[s],t.push(s));for(;t.length;)this.require(t.shift())},n.prototype.loadPlugin=function(i){var e=this.plugins,s=n.plugins[i];if(!n.plugins.hasOwnProperty(i))throw new Error('Unable to find "'+i+'" plugin');e.requested[i]=!0,e.loaded[i]=s.fn.apply(this,[this.plugins.settings[i]||{}]),e.names.push(i)},n.prototype.require=function(n){var i=this.plugins;if(!this.plugins.loaded.hasOwnProperty(n)){if(i.requested[n])throw new Error('Plugin has circular dependency ("'+n+'")');this.loadPlugin(n)}return i.loaded[n]},n.define=function(i,e){n.plugins[i]={name:i,fn:e}}}};return n});
//# sourceMappingURL=../sourcemaps/contrib/MicroPlugin.js.map
