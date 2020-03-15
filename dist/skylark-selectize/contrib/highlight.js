/**
 * skylark-selectize - A version of jquery.appendgrid that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-selectize/
 * @license MIT
 */
define(["skylark-jquery"],function(e){return e.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;var e=this.parentNode;e.replaceChild(this.firstChild,this),e.normalize()}).end()},function(e,t){if("string"!=typeof t||t.length){var i="string"==typeof t?new RegExp(t,"i"):t,n=function(e){var t=0;if(3===e.nodeType){var a=e.data.search(i);if(a>=0&&e.data.length>0){var h=e.data.match(i),r=document.createElement("span");r.className="highlight";var l=e.splitText(a),s=(l.splitText(h[0].length),l.cloneNode(!0));r.appendChild(s),l.parentNode.replaceChild(r,l),t=1}}else if(1===e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName)&&("highlight"!==e.className||"SPAN"!==e.tagName))for(var d=0;d<e.childNodes.length;++d)d+=n(e.childNodes[d]);return t};return e.each(function(){n(this)})}}});
//# sourceMappingURL=../sourcemaps/contrib/highlight.js.map
