/**
 * skylark-selectize - A version of jquery.appendgrid that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-selectize/
 * @license MIT
 */
define(["skylark-langx/langx"],function(t){var r=function(t,r){return"number"==typeof t&&"number"==typeof r?t>r?1:t<r?-1:0:(t=i(String(t||"")))>(r=i(String(r||"")))?1:r>t?-1:0},e=function(t,r,e){if(t&&r){if(!e)return t[r];for(var n=r.split(".");n.length&&(t=t[n.shift()]););return t}},n={a:"[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",b:"[b␢βΒB฿𐌁ᛒ]",c:"[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",d:"[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",e:"[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",f:"[fƑƒḞḟ]",g:"[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",h:"[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",i:"[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",j:"[jȷĴĵɈɉʝɟʲ]",k:"[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",l:"[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",n:"[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",o:"[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",p:"[pṔṕṖṗⱣᵽƤƥᵱ]",q:"[qꝖꝗʠɊɋꝘꝙq̃]",r:"[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",s:"[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",t:"[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",u:"[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",v:"[vṼṽṾṿƲʋꝞꝟⱱʋ]",w:"[wẂẃẀẁŴŵẄẅẆẇẈẉ]",x:"[xẌẍẊẋχ]",y:"[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",z:"[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"},i=function(){var t,r,e,i,o="",s={};for(e in n)if(n.hasOwnProperty(e))for(o+=i=n[e].substring(2,n[e].length-1),t=0,r=i.length;t<r;t++)s[i.charAt(t)]=e;var u=new RegExp("["+o+"]","g");return function(t){return t.replace(u,function(t){return s[t]}).toLowerCase()}}(),o=function(t,r){this.items=t,this.settings=r||{diacritics:!0}};return o.prototype.tokenize=function(r){if(!(r=t.trim(String(r||"").toLowerCase()))||!r.length)return[];var e,i,o,s,u=[],f=r.split(/ +/);for(e=0,i=f.length;e<i;e++){if(o=(f[e]+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),this.settings.diacritics)for(s in n)n.hasOwnProperty(s)&&(o=o.replace(new RegExp(s,"g"),n[s]));u.push({string:f[e],regex:new RegExp(o,"i")})}return u},o.prototype.iterator=function(r,e){(t.isArray(r)?Array.prototype.forEach||function(t){for(var r=0,e=this.length;r<e;r++)t(this[r],r,this)}:function(t){for(var r in this)this.hasOwnProperty(r)&&t(this[r],r,this)}).apply(r,[e])},o.prototype.getScoreFunction=function(t,r){var n,i,o,s;t=this.prepareSearch(t,r),i=t.tokens,n=t.options.fields,o=i.length,s=t.options.nesting;var u,f=function(t,r){var e,n;return t?-1===(n=(t=String(t||"")).search(r.regex))?0:(e=r.string.length/t.length,0===n&&(e+=.5),e):0},c=(u=n.length)?1===u?function(t,r){return f(e(r,n[0],s),t)}:function(t,r){for(var i=0,o=0;i<u;i++)o+=f(e(r,n[i],s),t);return o/u}:function(){return 0};return o?1===o?function(t){return c(i[0],t)}:"and"===t.options.conjunction?function(t){for(var r,e=0,n=0;e<o;e++){if((r=c(i[e],t))<=0)return 0;n+=r}return n/o}:function(t){for(var r=0,e=0;r<o;r++)e+=c(i[r],t);return e/o}:function(){return 0}},o.prototype.getSortFunction=function(t,n){var i,o,s,u,f,c,a,h,p,l,g;if(g=!(t=(s=this).prepareSearch(t,n)).query&&n.sort_empty||n.sort,p=function(t,r){return"$score"===t?r.score:e(s.items[r.id],t,n.nesting)},f=[],g)for(i=0,o=g.length;i<o;i++)(t.query||"$score"!==g[i].field)&&f.push(g[i]);if(t.query){for(l=!0,i=0,o=f.length;i<o;i++)if("$score"===f[i].field){l=!1;break}l&&f.unshift({field:"$score",direction:"desc"})}else for(i=0,o=f.length;i<o;i++)if("$score"===f[i].field){f.splice(i,1);break}for(h=[],i=0,o=f.length;i<o;i++)h.push("desc"===f[i].direction?-1:1);return(c=f.length)?1===c?(u=f[0].field,a=h[0],function(t,e){return a*r(p(u,t),p(u,e))}):function(t,e){var n,i,o;for(n=0;n<c;n++)if(o=f[n].field,i=h[n]*r(p(o,t),p(o,e)))return i;return 0}:null},o.prototype.prepareSearch=function(r,e){if("object"==typeof r)return r;var n=(e=t.extend({},e)).fields,i=e.sort,o=e.sort_empty;return n&&!t.isArray(n)&&(e.fields=[n]),i&&!t.isArray(i)&&(e.sort=[i]),o&&!t.isArray(o)&&(e.sort_empty=[o]),{options:e,query:String(r||"").toLowerCase(),tokens:this.tokenize(r),total:0,items:[]}},o.prototype.search=function(t,r){var e,n,i,o;return n=this.prepareSearch(t,r),r=n.options,t=n.query,o=r.score||this.getScoreFunction(n),t.length?this.iterator(this.items,function(t,i){e=o(t),(!1===r.filter||e>0)&&n.items.push({score:e,id:i})}):this.iterator(this.items,function(t,r){n.items.push({score:1,id:r})}),(i=this.getSortFunction(n,r))&&n.items.sort(i),n.total=n.items.length,"number"==typeof r.limit&&(n.items=n.items.slice(0,r.limit)),n},o});
//# sourceMappingURL=sourcemaps/Sifter.js.map