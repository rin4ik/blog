/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,
e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o,a,l,h,c,u,f,d,_,g,p,m,v,E,T,y,C,I,A,b,D,S,w,N,O,k,P=function(t){var e=!1;function n(e){var n=this,s=!1;return t(this).one(i.TRANSITION_END,function(){s=!0}),setTimeout(function(){s||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||""),"#"===i.charAt(0)&&(n=i,i=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var r=n[s],o=e[s],a=o&&i.isElement(o)?"element":(l=o,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(r).test(a))throw new Error(t.toUpperCase()+': Option "'+s+'" provided type "'+a+'" but expected type "'+r+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(e),L=(a="alert",h="."+(l="bs.alert"),c=(o=e).fn[a],u={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},f="alert",d="fade",_="show",g=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,l),this._element=null},e._getRootElement=function(t){var e=P.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(u.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;o(t).removeClass(_),P.supportsTransitionEnd()&&o(t).hasClass(d)?o(t).one(P.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(u.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(l);i||(i=new t(this),n.data(l,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),o(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),o.fn[a]=g._jQueryInterface,o.fn[a].Constructor=g,o.fn[a].noConflict=function(){return o.fn[a]=c,g._jQueryInterface},g),R=(m="button",E="."+(v="bs.button"),T=".data-api",y=(p=e).fn[m],C="active",I="btn",A="focus",b='[data-toggle^="button"]',D='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+T,FOCUS_BLUR_DATA_API:"focus"+E+T+" blur"+E+T},k=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=p(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&p(this._element).hasClass(C))t=!1;else{var s=p(n).find(w)[0];s&&p(s).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!p(this._element).hasClass(C),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!p(this._element).hasClass(C)),t&&p(this._element).toggleClass(C)},e.dispose=function(){p.removeData(this._element,v),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=p(this).data(v);n||(n=new t(this),p(this).data(v,n)),"toggle"===e&&n[e]()})},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),p(document).on(O.CLICK_DATA_API,b,function(t){t.preventDefault();var e=t.target;p(e).hasClass(I)||(e=p(e).closest(N)),k._jQueryInterface.call(p(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,b,function(t){var e=p(t.target).closest(N)[0];p(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),p.fn[m]=k._jQueryInterface,p.fn[m].Constructor=k,p.fn[m].noConflict=function(){return p.fn[m]=y,k._jQueryInterface},k),j=function(t){var e="carousel",n="bs.carousel",i="."+n,o=t.fn[e],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h="next",c="prev",u="left",f="right",d={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},_="carousel",g="active",p="slide",m="carousel-item-right",v="carousel-item-left",E="carousel-item-next",T="carousel-item-prev",y={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},C=function(){function o(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(y.INDICATORS)[0],this._addEventListeners()}var C=o.prototype;return C.next=function(){this._isSliding||this._slide(h)},C.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},C.prev=function(){this._isSliding||this._slide(c)},C.pause=function(e){e||(this._isPaused=!0),t(this._element).find(y.NEXT_PREV)[0]&&P.supportsTransitionEnd()&&(P.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},C.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},C.to=function(e){var n=this;this._activeElement=t(this._element).find(y.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?h:c;this._slide(s,this._items[e])}},C.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},C._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},C._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},C._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},C._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(y.ITEM)),this._items.indexOf(e)},C._getItemByDirection=function(t,e){var n=t===h,i=t===c,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===c?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},C._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},C._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(g)}},C._slide=function(e,n){var i,s,r,o=this,a=t(this._element).find(y.ACTIVE_ITEM)[0],l=this._getItemIndex(a),c=n||a&&this._getItemByDirection(e,a),_=this._getItemIndex(c),C=Boolean(this._interval);if(e===h?(i=v,s=E,r=u):(i=m,s=T,r=f),c&&t(c).hasClass(g))this._isSliding=!1;else if(!this._triggerSlideEvent(c,r).isDefaultPrevented()&&a&&c){this._isSliding=!0,C&&this.pause(),this._setActiveIndicatorElement(c);var I=t.Event(d.SLID,{relatedTarget:c,direction:r,from:l,to:_});P.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(c).addClass(s),P.reflow(c),t(a).addClass(i),t(c).addClass(i),t(a).one(P.TRANSITION_END,function(){t(c).removeClass(i+" "+s).addClass(g),t(a).removeClass(g+" "+s+" "+i),o._isSliding=!1,setTimeout(function(){return t(o._element).trigger(I)},0)}).emulateTransitionEnd(600)):(t(a).removeClass(g),t(c).addClass(g),this._isSliding=!1,t(this._element).trigger(I)),C&&this.cycle()}},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},a,t(this).data());"object"==typeof e&&(s=r({},s,e));var l="string"==typeof e?e:s.slide;if(i||(i=new o(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof l){if("undefined"==typeof i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(e){var i=P.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(_)){var a=r({},t(s).data(),t(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(t(s),a),l&&t(s).data(n).to(l),e.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(d.CLICK_DATA_API,y.DATA_SLIDE,C._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(y.DATA_RIDE).each(function(){var e=t(this);C._jQueryInterface.call(e,e.data())})}),t.fn[e]=C._jQueryInterface,t.fn[e].Constructor=C,t.fn[e].noConflict=function(){return t.fn[e]=o,C._jQueryInterface},C}(e),H=function(t){var e="collapse",n="bs.collapse",i="."+n,o=t.fn[e],a={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},h={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},c="show",u="collapse",f="collapsing",d="collapsed",_="width",g="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],o=P.getSelectorFromElement(r);null!==o&&t(o).filter(e).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var o=i.prototype;return o.toggle=function(){t(this._element).hasClass(c)?this.hide():this.show()},o.show=function(){var e,s,r=this;if(!this._isTransitioning&&!t(this._element).hasClass(c)&&(this._parent&&0===(e=t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(s=t(e).not(this._selector).data(n))&&s._isTransitioning))){var o=t.Event(h.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){e&&(i._jQueryInterface.call(t(e).not(this._selector),"hide"),s||t(e).data(n,null));var a=this._getDimension();t(this._element).removeClass(u).addClass(f),this._element.style[a]=0,this._triggerArray.length>0&&t(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0);var l=function(){t(r._element).removeClass(f).addClass(u).addClass(c),r._element.style[a]="",r.setTransitioning(!1),t(r._element).trigger(h.SHOWN)};if(P.supportsTransitionEnd()){var _="scroll"+(a[0].toUpperCase()+a.slice(1));t(this._element).one(P.TRANSITION_END,l).emulateTransitionEnd(600),this._element.style[a]=this._element[_]+"px"}else l()}}},o.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(c)){var n=t.Event(h.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",P.reflow(this._element),t(this._element).addClass(f).removeClass(u).removeClass(c),this._triggerArray.length>0)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],o=P.getSelectorFromElement(r);if(null!==o)t(o).hasClass(c)||t(r).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)};this._element.style[i]="",P.supportsTransitionEnd()?t(this._element).one(P.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},o.setTransitioning=function(t){this._isTransitioning=t},o.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},o._getConfig=function(t){return(t=r({},a,t)).toggle=Boolean(t.toggle),P.typeCheckConfig(e,t,l),t},o._getDimension=function(){return t(this._element).hasClass(_)?_:g},o._getParent=function(){var e=this,n=null;P.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},o._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(c);n.length>0&&t(n).toggleClass(d,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=P.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),l=r({},a,s.data(),"object"==typeof e&&e);if(!o&&l.toggle&&/show|hide/.test(e)&&(l.toggle=!1),o||(o=new i(this,l),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),i}();return t(document).on(h.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=P.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();m._jQueryInterface.call(e,s)})}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),W=function(t){var e="dropdown",i="bs.dropdown",o="."+i,a=".data-api",l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+a,KEYDOWN_DATA_API:"keydown"+o+a,KEYUP_DATA_API:"keyup"+o+a},u="disabled",f="show",d="dropup",_="dropright",g="dropleft",p="dropdown-menu-right",m="dropdown-menu-left",v="position-static",E='[data-toggle="dropdown"]',T=".dropdown form",y=".dropdown-menu",C=".navbar-nav",I=".dropdown-menu .dropdown-item:not(.disabled)",A="top-start",b="top-end",D="bottom-start",S="bottom-end",w="right-start",N="left-start",O={offset:0,flip:!0,boundary:"scrollParent"},k={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var l=a.prototype;return l.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u)){var e=a._getParentFromElement(this._element),i=t(this._menu).hasClass(f);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(c.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(d)&&(t(this._menu).hasClass(m)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(v),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(e).closest(C).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(f),t(e).toggleClass(f).trigger(t.Event(c.SHOWN,s))}}}},l.dispose=function(){t.removeData(this._element,i),t(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},l.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},l._getMenuElement=function(){if(!this._menu){var e=a._getParentFromElement(this._element);this._menu=t(e).find(y)[0]}return this._menu},l._getPlacement=function(){var e=t(this._element).parent(),n=D;return e.hasClass(d)?(n=A,t(this._menu).hasClass(p)&&(n=b)):e.hasClass(_)?n=w:e.hasClass(g)?n=N:t(this._menu).hasClass(p)&&(n=S),n},l._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new a(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},a._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(E)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=t(n[s]).data(i),l={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(f)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var u=t.Event(c.HIDE,l);t(r).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(f),t(r).removeClass(f).trigger(t.Event(c.HIDDEN,l)))}}}},a._getParentFromElement=function(e){var n,i=P.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},a._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(y).length)):h.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(u))){var n=a._getParentFromElement(this),i=t(n).hasClass(f);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(I).get();if(0!==s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(E)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return O}},{key:"DefaultType",get:function(){return k}}]),a}();return t(document).on(c.KEYDOWN_DATA_API,E,L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,y,L._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,L._clearMenus).on(c.CLICK_DATA_API,E,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,T,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=l,L._jQueryInterface},L}(e),M=function(t){var e="modal",n="bs.modal",i="."+n,o=t.fn.modal,a={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},h={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},c="modal-scrollbar-measure",u="modal-backdrop",f="modal-open",d="fade",_="show",g={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function o(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(g.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=o.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){P.supportsTransitionEnd()&&t(this._element).hasClass(d)&&(this._isTransitioning=!0);var i=t.Event(h.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(f),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(h.CLICK_DISMISS,g.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(h.MOUSEDOWN_DISMISS,function(){t(n._element).one(h.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(h.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=P.supportsTransitionEnd()&&t(this._element).hasClass(d);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(h.FOCUSIN),t(this._element).removeClass(_),t(this._element).off(h.CLICK_DISMISS),t(this._dialog).off(h.MOUSEDOWN_DISMISS),s?t(this._element).one(P.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},p._showElement=function(e){var n=this,i=P.supportsTransitionEnd()&&t(this._element).hasClass(d);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&P.reflow(this._element),t(this._element).addClass(_),this._config.focus&&this._enforceFocus();var s=t.Event(h.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(P.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(h.FOCUSIN).on(h.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(h.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(h.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(h.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(h.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(f),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(h.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(d)?d:"";if(this._isShown&&this._config.backdrop){var s=P.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(h.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&P.reflow(this._backdrop),t(this._backdrop).addClass(_),!e)return;if(!s)return void e();t(this._backdrop).one(P.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(_);var r=function(){n._removeBackdrop(),e&&e()};P.supportsTransitionEnd()&&t(this._element).hasClass(d)?t(this._backdrop).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(g.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(g.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(g.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(g.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(g.STICKY_CONTENT+", "+g.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=c,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),a=r({},o.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new o(this,a),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new TypeError('No method named "'+e+'"');s[e](i)}else a.show&&s.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(h.CLICK_DATA_API,g.DATA_TOGGLE,function(e){var i,s=this,o=P.getSelectorFromElement(this);o&&(i=t(o)[0]);var a=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(h.SHOW,function(e){e.isDefaultPrevented()||l.one(h.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),a,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=o,p._jQueryInterface},p}(e),U=function(t){var e="tooltip",i="bs.tooltip",o="."+i,a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},f="show",d="out",_={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o},g="fade",p="show",m=".tooltip-inner",v=".arrow",E="hover",T="focus",y="click",C="manual",I=function(){function a(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var I=a.prototype;return I.enable=function(){this._isEnabled=!0},I.disable=function(){this._isEnabled=!1},I.toggleEnabled=function(){this._isEnabled=!this._isEnabled},I.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},I.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},I.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),o=P.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&t(r).addClass(g);var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:v},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d&&e._leave(null,e)};P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(this.tip).one(P.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},I.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==f&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,this._activeTrigger[E]=!1,P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(i).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},I.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},I.isWithContent=function(){return Boolean(this.getTitle())},I.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},I.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},I.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(m),this.getTitle()),e.removeClass(g+" "+p)},I.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},I.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},I._getAttachment=function(t){return c[t.toUpperCase()]},I._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==C){var i=n===E?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===E?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},I._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},I._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?T:E]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===f?n._hoverState=f:(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===f&&n.show()},n.config.delay.show):n.show())},I._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?T:E]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d&&n.hide()},n.config.delay.hide):n.hide())},I._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},I._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},I._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},I._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},I._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},I._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(g),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return o}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),x=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},U.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},U.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",d=".popover-body",_={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},g=function(r){var o,g;function p(){return r.apply(this,arguments)||this}g=r,(o=p).prototype=Object.create(g.prototype),o.prototype.constructor=o,o.__proto__=g;var m=p.prototype;return m.isWithContent=function(){return this.getTitle()||this._getContent()},m.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},m.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},m.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(d),n),e.removeClass(c+" "+u)},m._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},m._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},p._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new p(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(p,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),p}(U);return t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),K=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,o=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},c="dropdown-item",u="active",f={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d="offset",_="position",g=function(){function o(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+f.NAV_LINKS+","+this._config.target+" "+f.LIST_ITEMS+","+this._config.target+" "+f.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var g=o.prototype;return g.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?d:_,i="auto"===this._config.method?n:this._config.method,s=i===_?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n,r=P.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var o=n.getBoundingClientRect();if(o.width||o.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},g.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},g._getConfig=function(n){if("string"!=typeof(n=r({},a,n)).target){var i=t(n.target).attr("id");i||(i=P.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return P.typeCheckConfig(e,n,l),n},g._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},g._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},g._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},g._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},g._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c)?(i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),i.addClass(u)):(i.addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS+", "+f.LIST_ITEMS).addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},g._clear=function(){t(this._selector).filter(f.ACTIVE).removeClass(u)},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new o(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(f.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);g._jQueryInterface.call(i,i.data())}}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),V=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},o="dropdown-menu",a="active",l="disabled",h="fade",c="show",u=".dropdown",f=".nav, .list-group",d=".active",_="> li > .active",g='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",m="> .dropdown-menu .active",v=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(a)||t(this._element).hasClass(l))){var n,i,s=t(this._element).closest(f)[0],o=P.getSelectorFromElement(this._element);if(s){var h="UL"===s.nodeName?_:d;i=(i=t.makeArray(t(s).find(h)))[i.length-1]}var c=t.Event(r.HIDE,{relatedTarget:this._element}),u=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){o&&(n=t(o)[0]),this._activate(this._element,s);var g=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,g):g()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(_):t(n).children(d))[0],o=i&&P.supportsTransitionEnd()&&r&&t(r).hasClass(h),a=function(){return s._transitionComplete(e,r,i)};r&&o?t(r).one(P.TRANSITION_END,a).emulateTransitionEnd(150):a()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(c+" "+a);var s=t(n.parentNode).find(m)[0];s&&t(s).removeClass(a),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(a),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),P.reflow(e),t(e).addClass(c),e.parentNode&&t(e.parentNode).hasClass(o)){var r=t(e).closest(u)[0];r&&t(r).find(p).addClass(a),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new TypeError('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),n}();return t(document).on(r.CLICK_DATA_API,g,function(e){e.preventDefault(),v._jQueryInterface.call(t(this),"show")}),t.fn.tab=v._jQueryInterface,t.fn.tab.Constructor=v,t.fn.tab.noConflict=function(){return t.fn.tab=i,v._jQueryInterface},v}(e);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=P,t.Alert=L,t.Button=R,t.Carousel=j,t.Collapse=H,t.Dropdown=W,t.Modal=M,t.Popover=x,t.Scrollspy=K,t.Tab=V,t.Tooltip=U,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
var WOW;jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,a){return jQuery.easing[jQuery.easing.def](t,e,i,n,a)},easeInQuad:function(t,e,i,n,a){return n*(e/=a)*e+i},easeOutQuad:function(t,e,i,n,a){return-n*(e/=a)*(e-2)+i},easeInOutQuad:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,a){return n*(e/=a)*e*e+i},easeOutCubic:function(t,e,i,n,a){return n*((e=e/a-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,a){return n*(e/=a)*e*e*e+i},easeOutQuart:function(t,e,i,n,a){return-n*((e=e/a-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,a){return n*(e/=a)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,a){return n*((e=e/a-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,a){return-n*Math.cos(e/a*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,a){return n*Math.sin(e/a*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,a){return-n/2*(Math.cos(Math.PI*e/a)-1)+i},easeInExpo:function(t,e,i,n,a){return 0==e?i:n*Math.pow(2,10*(e/a-1))+i},easeOutExpo:function(t,e,i,n,a){return e==a?i+n:n*(1-Math.pow(2,-10*e/a))+i},easeInOutExpo:function(t,e,i,n,a){return 0==e?i:e==a?i+n:(e/=a/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(2-Math.pow(2,-10*--e))+i},easeInCirc:function(t,e,i,n,a){return-n*(Math.sqrt(1-(e/=a)*e)-1)+i},easeOutCirc:function(t,e,i,n,a){return n*Math.sqrt(1-(e=e/a-1)*e)+i},easeInOutCirc:function(t,e,i,n,a){return(e/=a/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,a){var r=1.70158,o=0,s=n;if(0==e)return i;if(1==(e/=a))return i+n;if(o||(o=.3*a),s<Math.abs(n)){s=n;r=o/4}else r=o/(2*Math.PI)*Math.asin(n/s);return-s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/o)+i},easeOutElastic:function(t,e,i,n,a){var r=1.70158,o=0,s=n;if(0==e)return i;if(1==(e/=a))return i+n;if(o||(o=.3*a),s<Math.abs(n)){s=n;r=o/4}else r=o/(2*Math.PI)*Math.asin(n/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-r)*(2*Math.PI)/o)+n+i},easeInOutElastic:function(t,e,i,n,a){var r=1.70158,o=0,s=n;if(0==e)return i;if(2==(e/=a/2))return i+n;if(o||(o=a*(.3*1.5)),s<Math.abs(n)){s=n;r=o/4}else r=o/(2*Math.PI)*Math.asin(n/s);return e<1?s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/o)*-.5+i:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/o)*.5+n+i},easeInBack:function(t,e,i,n,a,r){return void 0==r&&(r=1.70158),n*(e/=a)*e*((r+1)*e-r)+i},easeOutBack:function(t,e,i,n,a,r){return void 0==r&&(r=1.70158),n*((e=e/a-1)*e*((r+1)*e+r)+1)+i},easeInOutBack:function(t,e,i,n,a,r){return void 0==r&&(r=1.70158),(e/=a/2)<1?n/2*(e*e*((1+(r*=1.525))*e-r))+i:n/2*((e-=2)*e*((1+(r*=1.525))*e+r)+2)+i},easeInBounce:function(t,e,i,n,a){return n-jQuery.easing.easeOutBounce(t,a-e,0,n,a)+i},easeOutBounce:function(t,e,i,n,a){return(e/=a)<1/2.75?n*(7.5625*e*e)+i:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,a){return e<a/2?.5*jQuery.easing.easeInBounce(t,2*e,0,n,a)+i:.5*jQuery.easing.easeOutBounce(t,2*e-a,0,n,a)+.5*n+i}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(function(t){function e(t){var e=t.length,n=i.type(t);return"function"!==n&&!i.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t))}if(!t.jQuery){var i=function(t,e){return new i.fn.init(t,e)};i.isWindow=function(t){return null!=t&&t==t.window},i.type=function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?a[o.call(t)]||"object":typeof t},i.isArray=Array.isArray||function(t){return"array"===i.type(t)},i.isPlainObject=function(t){var e;if(!t||"object"!==i.type(t)||t.nodeType||i.isWindow(t))return!1;try{if(t.constructor&&!r.call(t,"constructor")&&!r.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}for(e in t);return void 0===e||r.call(t,e)},i.each=function(t,i,n){var a,r=0,o=t.length,s=e(t);if(n){if(s)for(;o>r&&(a=i.apply(t[r],n),!1!==a);r++);else for(r in t)if(a=i.apply(t[r],n),!1===a)break}else if(s)for(;o>r&&(a=i.call(t[r],r,t[r]),!1!==a);r++);else for(r in t)if(a=i.call(t[r],r,t[r]),!1===a)break;return t},i.data=function(t,e,a){if(void 0===a){var r=(o=t[i.expando])&&n[o];if(void 0===e)return r;if(r&&e in r)return r[e]}else if(void 0!==e){var o=t[i.expando]||(t[i.expando]=++i.uuid);return n[o]=n[o]||{},n[o][e]=a,a}},i.removeData=function(t,e){var a=t[i.expando],r=a&&n[a];r&&i.each(e,function(t,e){delete r[e]})},i.extend=function(){var t,e,n,a,r,o,s=arguments[0]||{},l=1,u=arguments.length,d=!1;for("boolean"==typeof s&&(d=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==i.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(r=arguments[l]))for(a in r)t=s[a],n=r[a],s!==n&&(d&&n&&(i.isPlainObject(n)||(e=i.isArray(n)))?(e?(e=!1,o=t&&i.isArray(t)?t:[]):o=t&&i.isPlainObject(t)?t:{},s[a]=i.extend(d,o,n)):void 0!==n&&(s[a]=n));return s},i.queue=function(t,n,a){if(t){n=(n||"fx")+"queue";var r=i.data(t,n);return a?(!r||i.isArray(a)?r=i.data(t,n,(o=a,l=s||[],null!=o&&(e(Object(o))?function(t,e){for(var i=+e.length,n=0,a=t.length;i>n;)t[a++]=e[n++];if(i!=i)for(;void 0!==e[n];)t[a++]=e[n++];t.length=a}(l,"string"==typeof o?[o]:o):[].push.call(l,o)),l)):r.push(a),r):r||[]}var o,s,l},i.dequeue=function(t,e){i.each(t.nodeType?[t]:t,function(t,n){e=e||"fx";var a=i.queue(n,e),r=a.shift();"inprogress"===r&&(r=a.shift()),r&&("fx"===e&&a.unshift("inprogress"),r.call(n,function(){i.dequeue(n,e)}))})},i.fn=i.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),n=this.offset(),a=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:i(t).offset();return n.top-=parseFloat(e.style.marginTop)||0,n.left-=parseFloat(e.style.marginLeft)||0,t.style&&(a.top+=parseFloat(t.style.borderTopWidth)||0,a.left+=parseFloat(t.style.borderLeftWidth)||0),{top:n.top-a.top,left:n.left-a.left}}};var n={};i.expando="velocity"+(new Date).getTime(),i.uuid=0;for(var a={},r=a.hasOwnProperty,o=a.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)a["[object "+s[l]+"]"]=s[l].toLowerCase();i.fn.init.prototype=i.fn,t.Velocity={Utilities:i}}}(window),function(t){"object"==typeof module&&"object"==typeof module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):t()}(function(){return function(t,e,i,n){function a(t){return p.isWrapped(t)?t=[].slice.call(t):p.isNode(t)&&(t=[t]),t}function r(t){var e=d.data(t,"velocity");return null===e?n:e}function o(t,i,n,a){function r(t,e){return 1-3*e+3*t}function o(t,e){return 3*e-6*t}function s(t){return 3*t}function l(t,e,i){return((r(e,i)*t+o(e,i))*t+s(e))*t}function u(t,e,i){return 3*r(e,i)*t*t+2*o(e,i)*t+s(e)}function d(e){for(var i=0,a=1,r=m-1;a!=r&&x[a]<=e;++a)i+=v;var o=i+(e-x[--a])/(x[a+1]-x[a])*v,s=u(o,t,n);return s>=f?function(e,i){for(var a=0;c>a;++a){var r=u(i,t,n);if(0===r)return i;i-=(l(i,t,n)-e)/r}return i}(e,o):0==s?o:function(e,i,a){var r,o,s=0;do{o=i+(a-i)/2,r=l(o,t,n)-e,r>0?a=o:i=o}while(Math.abs(r)>p&&++s<g);return o}(e,i,i+v)}function h(){w=!0,(t!=i||n!=a)&&function(){for(var e=0;m>e;++e)x[e]=l(e*v,t,n)}()}var c=4,f=.001,p=1e-7,g=10,m=11,v=1/(m-1),b="Float32Array"in e;if(4!==arguments.length)return!1;for(var y=0;4>y;++y)if("number"!=typeof arguments[y]||isNaN(arguments[y])||!isFinite(arguments[y]))return!1;t=Math.min(t,1),n=Math.min(n,1),t=Math.max(t,0),n=Math.max(n,0);var x=b?new Float32Array(m):new Array(m),w=!1,k=function(e){return w||h(),t===i&&n===a?e:0===e?0:1===e?1:l(d(e),i,a)};k.getControlPoints=function(){return[{x:t,y:i},{x:n,y:a}]};var S="generateBezier("+[t,i,n,a]+")";return k.toString=function(){return S},k}function s(t,e){var i=t;return p.isString(t)?b.Easings[t]||(i=!1):i=p.isArray(t)&&1===t.length?function(t){return function(e){return Math.round(e*t)*(1/t)}}.apply(null,t):p.isArray(t)&&2===t.length?y.apply(null,t.concat([e])):!(!p.isArray(t)||4!==t.length)&&o.apply(null,t),!1===i&&(i=b.Easings[b.defaults.easing]?b.defaults.easing:v),i}function l(t){if(t){var e=(new Date).getTime(),i=b.State.calls.length;i>1e4&&(b.State.calls=function(t){for(var e=-1,i=t?t.length:0,n=[];++e<i;){var a=t[e];a&&n.push(a)}return n}(b.State.calls));for(var a=0;i>a;a++)if(b.State.calls[a]){var o=b.State.calls[a],s=o[0],h=o[2],c=o[3],f=!!c,g=null;c||(c=b.State.calls[a][3]=e-16);for(var m=Math.min((e-c)/h.duration,1),v=0,y=s.length;y>v;v++){var w=s[v],S=w.element;if(r(S)){var C=!1;if(h.display!==n&&null!==h.display&&"none"!==h.display){if("flex"===h.display){d.each(["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"],function(t,e){x.setPropertyValue(S,"display",e)})}x.setPropertyValue(S,"display",h.display)}h.visibility!==n&&"hidden"!==h.visibility&&x.setPropertyValue(S,"visibility",h.visibility);for(var M in w)if("element"!==M){var P,A=w[M],I=p.isString(A.easing)?b.Easings[A.easing]:A.easing;if(1===m)P=A.endValue;else{var T=A.endValue-A.startValue;if(P=A.startValue+T*I(m,h,T),!f&&P===A.currentValue)continue}if(A.currentValue=P,"tween"===M)g=P;else{if(x.Hooks.registered[M]){var D=x.Hooks.getRoot(M),F=r(S).rootPropertyValueCache[D];F&&(A.rootPropertyValue=F)}var V=x.setPropertyValue(S,M,A.currentValue+(0===parseFloat(P)?"":A.unitType),A.rootPropertyValue,A.scrollData);x.Hooks.registered[M]&&(r(S).rootPropertyValueCache[D]=x.Normalizations.registered[D]?x.Normalizations.registered[D]("extract",null,V[1]):V[1]),"transform"===V[0]&&(C=!0)}}h.mobileHA&&r(S).transformCache.translate3d===n&&(r(S).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&x.flushTransformCache(S)}}h.display!==n&&"none"!==h.display&&(b.State.calls[a][2].display=!1),h.visibility!==n&&"hidden"!==h.visibility&&(b.State.calls[a][2].visibility=!1),h.progress&&h.progress.call(o[1],o[1],m,Math.max(0,c+h.duration-e),c,g),1===m&&u(a)}}b.State.isTicking&&k(l)}function u(t,e){if(!b.State.calls[t])return!1;for(var i=b.State.calls[t][0],a=b.State.calls[t][1],o=b.State.calls[t][2],s=b.State.calls[t][4],l=!1,u=0,h=i.length;h>u;u++){var c=i[u].element;if(e||o.loop||("none"===o.display&&x.setPropertyValue(c,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(c,"visibility",o.visibility)),!0!==o.loop&&(d.queue(c)[1]===n||!/\.velocityQueueEntryFlag/i.test(d.queue(c)[1]))&&r(c)){r(c).isAnimating=!1,r(c).rootPropertyValueCache={};var f=!1;d.each(x.Lists.transforms3D,function(t,e){var i=/^scale/.test(e)?1:0,a=r(c).transformCache[e];r(c).transformCache[e]!==n&&new RegExp("^\\("+i+"[^.]").test(a)&&(f=!0,delete r(c).transformCache[e])}),o.mobileHA&&(f=!0,delete r(c).transformCache.translate3d),f&&x.flushTransformCache(c),x.Values.removeClass(c,"velocity-animating")}if(!e&&o.complete&&!o.loop&&u===h-1)try{o.complete.call(a,a)}catch(t){setTimeout(function(){throw t},1)}s&&!0!==o.loop&&s(a),r(c)&&!0===o.loop&&!e&&(d.each(r(c).tweensContainer,function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)}),b(c,"reverse",{loop:!0,delay:o.delay})),!1!==o.queue&&d.dequeue(c,o.queue)}b.State.calls[t]=!1;for(var p=0,g=b.State.calls.length;g>p;p++)if(!1!==b.State.calls[p]){l=!0;break}!1===l&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var d,h,c=function(){if(i.documentMode)return i.documentMode;for(var t=7;t>4;t--){var e=i.createElement("div");if(e.innerHTML="\x3c!--[if IE "+t+"]><span></span><![endif]--\x3e",e.getElementsByTagName("span").length)return e=null,t}return n}(),f=(h=0,e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(t){var e,i=(new Date).getTime();return e=Math.max(0,16-(i-h)),h=i+e,setTimeout(function(){t(i+e)},e)}),p={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isNodeList:function(t){return"object"==typeof t&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&t.length!==n&&(0===t.length||"object"==typeof t[0]&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},g=!1;if(t.fn&&t.fn.jquery?(d=t,g=!0):d=e.Velocity.Utilities,8>=c&&!g)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(!(7>=c)){var m=400,v="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:i.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:d,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:m,easing:v,begin:n,complete:n,progress:n,display:n,visibility:n,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){d.data(t,"velocity",{isSVG:p.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==n?(b.State.scrollAnchor=e,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=i.documentElement||i.body.parentNode||i.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var y=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,i,n){var a={x:e.x+n.dx*i,v:e.v+n.dv*i,tension:e.tension,friction:e.friction};return{dx:a.v,dv:t(a)}}return function i(n,a,r){var o,s,l,u,d,h,c,f,p,g,m,v={x:-1,v:0,tension:null,friction:null},b=[0],y=0;for(n=parseFloat(n)||500,a=parseFloat(a)||20,r=r||null,v.tension=n,v.friction=a,(o=null!==r)?s=(y=i(n,a))/r*.016:s=.016;d=s,void 0,void 0,void 0,void 0,void 0,void 0,h={dx:(u=l||v).v,dv:t(u)},c=e(u,.5*d,h),f=e(u,.5*d,c),p=e(u,d,f),g=1/6*(h.dx+2*(c.dx+f.dx)+p.dx),m=1/6*(h.dv+2*(c.dv+f.dv)+p.dv),u.x=u.x+g*d,u.v=u.v+m*d,l=u,b.push(1+l.x),y+=16,Math.abs(l.x)>1e-4&&Math.abs(l.v)>1e-4;);return o?function(t){return b[t*(b.length-1)|0]}:y}}();b.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},d.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(t,e){b.Easings[e[0]]=o.apply(null,e[1])});var x=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var t=0;t<x.Lists.colors.length;t++){var e="color"===x.Lists.colors[t]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[t]]=["Red Green Blue Alpha",e]}var i,n,a;if(c)for(i in x.Hooks.templates){a=(n=x.Hooks.templates[i])[0].split(" ");var r=n[1].match(x.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),r.push(r.shift()),x.Hooks.templates[i]=[a.join(" "),r.join(" ")])}for(i in x.Hooks.templates){a=(n=x.Hooks.templates[i])[0].split(" ");for(var t in a){var o=i+a[t],s=t;x.Hooks.registered[o]=[i,s]}}},getRoot:function(t){var e=x.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return x.RegEx.valueUnwrap.test(e)&&(e=e.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(e)&&(e=x.Hooks.templates[t][1]),e},extractValue:function(t,e){var i=x.Hooks.registered[t];if(i){var n=i[0],a=i[1];return(e=x.Hooks.cleanRootPropertyValue(n,e)).toString().match(x.RegEx.valueSplit)[a]}return e},injectValue:function(t,e,i){var n=x.Hooks.registered[t];if(n){var a,r=n[0],o=n[1];return(a=(i=x.Hooks.cleanRootPropertyValue(r,i)).toString().match(x.RegEx.valueSplit))[o]=e,a.join(" ")}return i}},Normalizations:{registered:{clip:function(t,e,i){switch(t){case"name":return"clip";case"extract":var n;return x.RegEx.wrappedValueAlreadyExtracted.test(i)?n=i:n=(n=i.toString().match(x.RegEx.valueUnwrap))?n[1].replace(/,(\s+)?/g," "):i,n;case"inject":return"rect("+i+")"}},blur:function(t,e,i){switch(t){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var n=parseFloat(i);if(!n&&0!==n){var a=i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);n=a?a[1]:0}return n;case"inject":return parseFloat(i)?"blur("+i+")":"none"}},opacity:function(t,e,i){if(8>=c)switch(t){case"name":return"filter";case"extract":var n=i.toString().match(/alpha\(opacity=(.*)\)/i);return n?n[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(i)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(i),10)+")"}else switch(t){case"name":return"opacity";case"extract":case"inject":return i}}},register:function(){9>=c||b.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var t=0;t<x.Lists.transformsBase.length;t++)!function(){var e=x.Lists.transformsBase[t];x.Normalizations.registered[e]=function(t,i,a){switch(t){case"name":return"transform";case"extract":return r(i)===n||r(i).transformCache[e]===n?/^scale/i.test(e)?1:0:r(i).transformCache[e].replace(/[()]/g,"");case"inject":var o=!1;switch(e.substr(0,e.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(a);break;case"scal":case"scale":b.State.isAndroid&&r(i).transformCache[e]===n&&1>a&&(a=1),o=!/(\d)$/i.test(a);break;case"skew":o=!/(deg|\d)$/i.test(a);break;case"rotate":o=!/(deg|\d)$/i.test(a)}return o||(r(i).transformCache[e]="("+a+")"),r(i).transformCache[e]}}}();for(t=0;t<x.Lists.colors.length;t++)!function(){var e=x.Lists.colors[t];x.Normalizations.registered[e]=function(t,i,a){switch(t){case"name":return e;case"extract":var r;if(x.RegEx.wrappedValueAlreadyExtracted.test(a))r=a;else{var o,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(a)?o=s[a]!==n?s[a]:s.black:x.RegEx.isHex.test(a)?o="rgb("+x.Values.hexToRgb(a).join(" ")+")":/^rgba?\(/i.test(a)||(o=s.black),r=(o||a).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=c||3!==r.split(" ").length||(r+=" 1"),r;case"inject":return 8>=c?4===a.split(" ").length&&(a=a.split(/\s+/).slice(0,3).join(" ")):3===a.split(" ").length&&(a+=" 1"),(8>=c?"rgb":"rgba")+"("+a.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(c||b.State.isAndroid&&!b.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(b.State.prefixMatches[t])return[b.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],i=0,n=e.length;n>i;i++){var a;if(a=0===i?t:e[i]+t.replace(/^\w/,function(t){return t.toUpperCase()}),p.isString(b.State.prefixElement.style[a]))return b.State.prefixMatches[t]=a,[a,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var e;return t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,i,n){return e+e+i+i+n+n}),(e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t))?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(t,i,a,o){function s(t,i){function a(){h&&x.setPropertyValue(t,"display","none")}var l=0;if(8>=c)l=d.css(t,i);else{var u,h=!1;if(/^(width|height)$/.test(i)&&0===x.getPropertyValue(t,"display")&&(h=!0,x.setPropertyValue(t,"display",x.Values.getDisplayType(t))),!o){if("height"===i&&"border-box"!==x.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var f=t.offsetHeight-(parseFloat(x.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(t,"paddingBottom"))||0);return a(),f}if("width"===i&&"border-box"!==x.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var p=t.offsetWidth-(parseFloat(x.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(t,"paddingRight"))||0);return a(),p}}u=r(t)===n?e.getComputedStyle(t,null):r(t).computedStyle?r(t).computedStyle:r(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===i&&(i="borderTopColor"),(""===(l=9===c&&"filter"===i?u.getPropertyValue(i):u[i])||null===l)&&(l=t.style[i]),a()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(i)){var g=s(t,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(i))&&(l=d(t).position()[i]+"px")}return l}var l;if(x.Hooks.registered[i]){var u=i,h=x.Hooks.getRoot(u);a===n&&(a=x.getPropertyValue(t,x.Names.prefixCheck(h)[0])),x.Normalizations.registered[h]&&(a=x.Normalizations.registered[h]("extract",t,a)),l=x.Hooks.extractValue(u,a)}else if(x.Normalizations.registered[i]){var f,p;"transform"!==(f=x.Normalizations.registered[i]("name",t))&&(p=s(t,x.Names.prefixCheck(f)[0]),x.Values.isCSSNullValue(p)&&x.Hooks.templates[i]&&(p=x.Hooks.templates[i][1])),l=x.Normalizations.registered[i]("extract",t,p)}if(!/^[\d-]/.test(l))if(r(t)&&r(t).isSVG&&x.Names.SVGAttribute(i))if(/^(height|width)$/i.test(i))try{l=t.getBBox()[i]}catch(t){l=0}else l=t.getAttribute(i);else l=s(t,x.Names.prefixCheck(i)[0]);return x.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+i+": "+l),l},setPropertyValue:function(t,i,n,a,o){var s=i;if("scroll"===i)o.container?o.container["scroll"+o.direction]=n:"Left"===o.direction?e.scrollTo(n,o.alternateValue):e.scrollTo(o.alternateValue,n);else if(x.Normalizations.registered[i]&&"transform"===x.Normalizations.registered[i]("name",t))x.Normalizations.registered[i]("inject",t,n),s="transform",n=r(t).transformCache[i];else{if(x.Hooks.registered[i]){var l=i,u=x.Hooks.getRoot(i);a=a||x.getPropertyValue(t,u),n=x.Hooks.injectValue(l,n,a),i=u}if(x.Normalizations.registered[i]&&(n=x.Normalizations.registered[i]("inject",t,n),i=x.Normalizations.registered[i]("name",t)),s=x.Names.prefixCheck(i)[0],8>=c)try{t.style[s]=n}catch(t){b.debug&&console.log("Browser does not support ["+n+"] for ["+s+"]")}else r(t)&&r(t).isSVG&&x.Names.SVGAttribute(i)?t.setAttribute(i,n):t.style[s]=n;b.debug>=2&&console.log("Set "+i+" ("+s+"): "+n)}return[s,n]},flushTransformCache:function(t){function e(e){return parseFloat(x.getPropertyValue(t,e))}var i="";if((c||b.State.isAndroid&&!b.State.isChrome)&&r(t).isSVG){var n={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};d.each(r(t).transformCache,function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),n[t]&&(i+=t+"("+n[t].join(" ")+") ",delete n[t])})}else{var a,o;d.each(r(t).transformCache,function(e){return a=r(t).transformCache[e],"transformPerspective"===e?(o=a,!0):(9===c&&"rotateZ"===e&&(e="rotate"),void(i+=e+a+" "))}),o&&(i="perspective"+o+" "+i)}x.setPropertyValue(t,"transform",i)}};x.Hooks.register(),x.Normalizations.register(),b.hook=function(t,e,i){var o=n;return t=a(t),d.each(t,function(t,a){if(r(a)===n&&b.init(a),i===n)o===n&&(o=b.CSS.getPropertyValue(a,e));else{var s=b.CSS.setPropertyValue(a,e,i);"transform"===s[0]&&b.CSS.flushTransformCache(a),o=s}}),o};var w=function(){function t(){return o?P.promise||null:h}var o,h,c,f,g,v,y=arguments[0]&&(arguments[0].p||d.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(o=!1,c=0,f=this,h=this):(o=!0,c=1,f=y?arguments[0].elements||arguments[0].e:arguments[0]),f=a(f)){y?(g=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(g=arguments[c],v=arguments[c+1]);var k=f.length,S=0;if(!/^(stop|finish)$/i.test(g)&&!d.isPlainObject(v)){v={};for(var C=c+1;C<arguments.length;C++)p.isArray(arguments[C])||!/^(fast|normal|slow)$/i.test(arguments[C])&&!/^\d/.test(arguments[C])?p.isString(arguments[C])||p.isArray(arguments[C])?v.easing=arguments[C]:p.isFunction(arguments[C])&&(v.complete=arguments[C]):v.duration=arguments[C]}var M,P={promise:null,resolver:null,rejecter:null};switch(o&&b.Promise&&(P.promise=new b.Promise(function(t,e){P.resolver=t,P.rejecter=e})),g){case"scroll":M="scroll";break;case"reverse":M="reverse";break;case"finish":case"stop":d.each(f,function(t,e){r(e)&&r(e).delayTimer&&(clearTimeout(r(e).delayTimer.setTimeout),r(e).delayTimer.next&&r(e).delayTimer.next(),delete r(e).delayTimer)});var A=[];return d.each(b.State.calls,function(t,e){e&&d.each(e[1],function(i,a){var o=v===n?"":v;return!0!==o&&e[2].queue!==o&&(v!==n||!1!==e[2].queue)||void d.each(f,function(i,n){n===a&&((!0===v||p.isString(v))&&(d.each(d.queue(n,p.isString(v)?v:""),function(t,e){p.isFunction(e)&&e(null,!0)}),d.queue(n,p.isString(v)?v:"",[])),"stop"===g?(r(n)&&r(n).tweensContainer&&!1!==o&&d.each(r(n).tweensContainer,function(t,e){e.endValue=e.currentValue}),A.push(t)):"finish"===g&&(e[2].duration=1))})})}),"stop"===g&&(d.each(A,function(t,e){u(e,!0)}),P.promise&&P.resolver(f)),t();default:if(!d.isPlainObject(g)||p.isEmptyObject(g)){if(p.isString(g)&&b.Redirects[g]){var I=(V=d.extend({},v)).duration,T=V.delay||0;return!0===V.backwards&&(f=d.extend(!0,[],f).reverse()),d.each(f,function(t,e){parseFloat(V.stagger)?V.delay=T+parseFloat(V.stagger)*t:p.isFunction(V.stagger)&&(V.delay=T+V.stagger.call(e,t,k)),V.drag&&(V.duration=parseFloat(I)||(/^(callout|transition)/.test(g)?1e3:m),V.duration=Math.max(V.duration*(V.backwards?1-t/k:(t+1)/k),.75*V.duration,200)),b.Redirects[g].call(e,e,V||{},t,k,f,P.promise?P:n)}),t()}var D="Velocity: First argument ("+g+") was not a property map, a known action, or a registered redirect. Aborting.";return P.promise?P.rejecter(new Error(D)):console.log(D),t()}M="start"}var F,V,_={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},L=[];if(d.each(f,function(t,a){p.isNode(a)&&function(){function t(t){function c(t,e){var i=n,a=n,r=n;return p.isArray(t)?(i=t[0],!p.isArray(t[1])&&/^[\d-]/.test(t[1])||p.isFunction(t[1])||x.RegEx.isHex.test(t[1])?r=t[1]:(p.isString(t[1])&&!x.RegEx.isHex.test(t[1])||p.isArray(t[1]))&&(a=e?t[1]:s(t[1],u.duration),t[2]!==n&&(r=t[2]))):i=t,e||(a=a||u.easing),p.isFunction(i)&&(i=i.call(o,S,k)),p.isFunction(r)&&(r=r.call(o,S,k)),[i||0,a,r]}function m(t,e){var i,n;return n=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(t){return i=t,""}),i||(i=x.Values.getUnitType(t)),[n,i]}function y(){var t={myParent:o.parentNode||i.body,position:x.getPropertyValue(o,"position"),fontSize:x.getPropertyValue(o,"fontSize")},n=t.position===_.lastPosition&&t.myParent===_.lastParent,a=t.fontSize===_.lastFontSize;_.lastParent=t.myParent,_.lastPosition=t.position,_.lastFontSize=t.fontSize;var s={};if(a&&n)s.emToPx=_.lastEmToPx,s.percentToPxWidth=_.lastPercentToPxWidth,s.percentToPxHeight=_.lastPercentToPxHeight;else{var l=r(o).isSVG?i.createElementNS("http://www.w3.org/2000/svg","rect"):i.createElement("div");b.init(l),t.myParent.appendChild(l),d.each(["overflow","overflowX","overflowY"],function(t,e){b.CSS.setPropertyValue(l,e,"hidden")}),b.CSS.setPropertyValue(l,"position",t.position),b.CSS.setPropertyValue(l,"fontSize",t.fontSize),b.CSS.setPropertyValue(l,"boxSizing","content-box"),d.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(t,e){b.CSS.setPropertyValue(l,e,"100%")}),b.CSS.setPropertyValue(l,"paddingLeft","100em"),s.percentToPxWidth=_.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(l,"width",null,!0))||1)/100,s.percentToPxHeight=_.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(l,"height",null,!0))||1)/100,s.emToPx=_.lastEmToPx=(parseFloat(x.getPropertyValue(l,"paddingLeft"))||1)/100,t.myParent.removeChild(l)}return null===_.remToPx&&(_.remToPx=parseFloat(x.getPropertyValue(i.body,"fontSize"))||16),null===_.vwToPx&&(_.vwToPx=parseFloat(e.innerWidth)/100,_.vhToPx=parseFloat(e.innerHeight)/100),s.remToPx=_.remToPx,s.vwToPx=_.vwToPx,s.vhToPx=_.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(s),o),s}if(u.begin&&0===S)try{u.begin.call(f,f)}catch(t){setTimeout(function(){throw t},1)}if("scroll"===M){var w,C,A,I=/^x$/i.test(u.axis)?"Left":"Top",T=parseFloat(u.offset)||0;u.container?p.isWrapped(u.container)||p.isNode(u.container)?(u.container=u.container[0]||u.container,A=(w=u.container["scroll"+I])+d(o).position()[I.toLowerCase()]+T):u.container=null:(w=b.State.scrollAnchor[b.State["scrollProperty"+I]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===I?"Top":"Left")]],A=d(o).offset()[I.toLowerCase()]+T),h={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:A,unitType:"",easing:u.easing,scrollData:{container:u.container,direction:I,alternateValue:C}},element:o},b.debug&&console.log("tweensContainer (scroll): ",h.scroll,o)}else if("reverse"===M){if(!r(o).tweensContainer)return void d.dequeue(o,u.queue);"none"===r(o).opts.display&&(r(o).opts.display="auto"),"hidden"===r(o).opts.visibility&&(r(o).opts.visibility="visible"),r(o).opts.loop=!1,r(o).opts.begin=null,r(o).opts.complete=null,v.easing||delete u.easing,v.duration||delete u.duration,u=d.extend({},r(o).opts,u);var D=d.extend(!0,{},r(o).tweensContainer);for(var F in D)if("element"!==F){var V=D[F].startValue;D[F].startValue=D[F].currentValue=D[F].endValue,D[F].endValue=V,p.isEmptyObject(v)||(D[F].easing=u.easing),b.debug&&console.log("reverse tweensContainer ("+F+"): "+JSON.stringify(D[F]),o)}h=D}else if("start"===M){r(o).tweensContainer&&!0===r(o).isAnimating&&(D=r(o).tweensContainer),d.each(g,function(t,e){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(t)){var i=c(e,!0),a=i[0],r=i[1],o=i[2];if(x.RegEx.isHex.test(a)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(a),u=o?x.Values.hexToRgb(o):n,d=0;d<s.length;d++){var h=[l[d]];r&&h.push(r),u!==n&&h.push(u[d]),g[t+s[d]]=h}delete g[t]}}});for(var O in g){var R=c(g[O]),z=R[0],E=R[1],N=R[2];O=x.Names.camelCase(O);var B=x.Hooks.getRoot(O),W=!1;if(r(o).isSVG||"tween"===B||!1!==x.Names.prefixCheck(B)[1]||x.Normalizations.registered[B]!==n){(u.display!==n&&null!==u.display&&"none"!==u.display||u.visibility!==n&&"hidden"!==u.visibility)&&/opacity|filter/.test(O)&&!N&&0!==z&&(N=0),u._cacheValues&&D&&D[O]?(N===n&&(N=D[O].endValue+D[O].unitType),W=r(o).rootPropertyValueCache[B]):x.Hooks.registered[O]?N===n?(W=x.getPropertyValue(o,B),N=x.getPropertyValue(o,O,W)):W=x.Hooks.templates[B][1]:N===n&&(N=x.getPropertyValue(o,O));var H,j,q,Y=!1;if(N=(H=m(O,N))[0],q=H[1],z=(H=m(O,z))[0].replace(/^([+-\/*])=/,function(t,e){return Y=e,""}),j=H[1],N=parseFloat(N)||0,z=parseFloat(z)||0,"%"===j&&(/^(fontSize|lineHeight)$/.test(O)?(z/=100,j="em"):/^scale/.test(O)?(z/=100,j=""):/(Red|Green|Blue)$/i.test(O)&&(z=z/100*255,j="")),/[\/*]/.test(Y))j=q;else if(q!==j&&0!==N)if(0===z)j=q;else{a=a||y();var $=/margin|padding|left|right|width|text|word|letter/i.test(O)||/X$/.test(O)||"x"===O?"x":"y";switch(q){case"%":N*="x"===$?a.percentToPxWidth:a.percentToPxHeight;break;case"px":break;default:N*=a[q+"ToPx"]}switch(j){case"%":N*=1/("x"===$?a.percentToPxWidth:a.percentToPxHeight);break;case"px":break;default:N*=1/a[j+"ToPx"]}}switch(Y){case"+":z=N+z;break;case"-":z=N-z;break;case"*":z*=N;break;case"/":z=N/z}h[O]={rootPropertyValue:W,startValue:N,currentValue:N,endValue:z,unitType:j,easing:E},b.debug&&console.log("tweensContainer ("+O+"): "+JSON.stringify(h[O]),o)}else b.debug&&console.log("Skipping ["+B+"] due to a lack of browser support.")}h.element=o}h.element&&(x.Values.addClass(o,"velocity-animating"),L.push(h),""===u.queue&&(r(o).tweensContainer=h,r(o).opts=u),r(o).isAnimating=!0,S===k-1?(b.State.calls.push([L,f,u,null,P.resolver]),!1===b.State.isTicking&&(b.State.isTicking=!0,l())):S++)}var a,o=this,u=d.extend({},b.defaults,v),h={};switch(r(o)===n&&b.init(o),parseFloat(u.delay)&&!1!==u.queue&&d.queue(o,u.queue,function(t){b.velocityQueueEntryFlag=!0,r(o).delayTimer={setTimeout:setTimeout(t,parseFloat(u.delay)),next:t}}),u.duration.toString().toLowerCase()){case"fast":u.duration=200;break;case"normal":u.duration=m;break;case"slow":u.duration=600;break;default:u.duration=parseFloat(u.duration)||1}!1!==b.mock&&(!0===b.mock?u.duration=u.delay=1:(u.duration*=parseFloat(b.mock)||1,u.delay*=parseFloat(b.mock)||1)),u.easing=s(u.easing,u.duration),u.begin&&!p.isFunction(u.begin)&&(u.begin=null),u.progress&&!p.isFunction(u.progress)&&(u.progress=null),u.complete&&!p.isFunction(u.complete)&&(u.complete=null),u.display!==n&&null!==u.display&&(u.display=u.display.toString().toLowerCase(),"auto"===u.display&&(u.display=b.CSS.Values.getDisplayType(o))),u.visibility!==n&&null!==u.visibility&&(u.visibility=u.visibility.toString().toLowerCase()),u.mobileHA=u.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,!1===u.queue?u.delay?setTimeout(t,u.delay):t():d.queue(o,u.queue,function(e,i){return!0===i?(P.promise&&P.resolver(f),!0):(b.velocityQueueEntryFlag=!0,void t())}),""!==u.queue&&"fx"!==u.queue||"inprogress"===d.queue(o)[0]||d.dequeue(o)}.call(a)}),(V=d.extend({},b.defaults,v)).loop=parseInt(V.loop),F=2*V.loop-1,V.loop)for(var O=0;F>O;O++){var R={delay:V.delay,progress:V.progress};O===F-1&&(R.display=V.display,R.visibility=V.visibility,R.complete=V.complete),w(f,"reverse",R)}return t()}};(b=d.extend(w,b)).animate=w;var k=e.requestAnimationFrame||f;return b.State.isMobile||i.hidden===n||i.addEventListener("visibilitychange",function(){i.hidden?(k=function(t){return setTimeout(function(){t(!0)},16)},l()):k=e.requestAnimationFrame||f}),t.Velocity=b,t!==e&&(t.fn.velocity=w,t.fn.velocity.defaults=b.defaults),d.each(["Down","Up"],function(t,e){b.Redirects["slide"+e]=function(t,i,a,r,o,s){var l=d.extend({},i),u=l.begin,h=l.complete,c={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===n&&(l.display="Down"===e?"inline"===b.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(o,o);for(var i in c){f[i]=t.style[i];var n=b.CSS.getPropertyValue(t,i);c[i]="Down"===e?[n,0]:[0,n]}f.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in f)t.style[e]=f[e];h&&h.call(o,o),s&&s.resolver(o)},b(t,c,l)}}),d.each(["In","Out"],function(t,e){b.Redirects["fade"+e]=function(t,i,a,r,o,s){var l=d.extend({},i),u={opacity:"In"===e?1:0},h=l.complete;l.complete=a!==r-1?l.begin=null:function(){h&&h.call(o,o),s&&s.resolver(o)},l.display===n&&(l.display="In"===e?"auto":"none"),b(this,u,l)}}),b}jQuery.fn.velocity=jQuery.fn.animate}(window.jQuery||window.Zepto||window,window,document)})),function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Chart=t()}}(function(){return function t(e,i,n){function a(o,s){if(!i[o]){if(!e[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(r)return r(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var d=i[o]={exports:{}};e[o][0].call(d.exports,function(t){var i=e[o][1][t];return a(i||t)},d,d.exports,t,e,i,n)}return i[o].exports}for(var r="function"==typeof require&&require,o=0;o<n.length;o++)a(n[o]);return a}({1:[function(t,e,i){},{}],2:[function(t,e,i){var n=t(6);function a(t){if(t){var e=[0,0,0],i=1,a=t.match(/^#([a-fA-F0-9]{3})$/);if(a){a=a[1];for(var r=0;r<e.length;r++)e[r]=parseInt(a[r]+a[r],16)}else if(a=t.match(/^#([a-fA-F0-9]{6})$/)){a=a[1];for(r=0;r<e.length;r++)e[r]=parseInt(a.slice(2*r,2*r+2),16)}else if(a=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(r=0;r<e.length;r++)e[r]=parseInt(a[r+1]);i=parseFloat(a[4])}else if(a=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(r=0;r<e.length;r++)e[r]=Math.round(2.55*parseFloat(a[r+1]));i=parseFloat(a[4])}else if(a=t.match(/(\w+)/)){if("transparent"==a[1])return[0,0,0,0];if(!(e=n[a[1]]))return}for(r=0;r<e.length;r++)e[r]=d(e[r],0,255);return i=i||0==i?d(i,0,1):1,e[3]=i,e}}function r(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[d(parseInt(e[1]),0,360),d(parseFloat(e[2]),0,100),d(parseFloat(e[3]),0,100),d(isNaN(i)?1:i,0,1)]}}}function o(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[d(parseInt(e[1]),0,360),d(parseFloat(e[2]),0,100),d(parseFloat(e[3]),0,100),d(isNaN(i)?1:i,0,1)]}}}function s(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function l(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function u(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function d(t,e,i){return Math.min(Math.max(e,t),i)}function h(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}e.exports={getRgba:a,getHsla:r,getRgb:function(t){var e=a(t);return e&&e.slice(0,3)},getHsl:function(t){var e=r(t);return e&&e.slice(0,3)},getHwb:o,getAlpha:function(t){var e=a(t);if(e)return e[3];if(e=r(t))return e[3];if(e=o(t))return e[3]},hexString:function(t){return"#"+h(t[0])+h(t[1])+h(t[2])},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return s(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:s,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return l(t,e);var i=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+i+"%, "+n+"%, "+a+"%)"},percentaString:l,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return u(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:u,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return c[t.slice(0,3)]}};var c={};for(var f in n)c[n[f]]=f},{6:6}],3:[function(t,e,i){var n=t(5),a=t(2),r=function(t){return t instanceof r?t:this instanceof r?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=a.getRgba(t))?this.setValues("rgb",e):(e=a.getHsla(t))?this.setValues("hsl",e):(e=a.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new r(t);var e};r.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return a.hexString(this.values.rgb)},rgbString:function(){return a.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return a.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return a.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return a.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return a.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return a.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return a.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var n=t[i]/255;e[i]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,i=(e[0]+t)%360;return e[0]=i<0?360+i:i,this.setValues("hsl",e),this},mix:function(t,e){var i=t,n=void 0===e?.5:e,a=2*n-1,r=this.alpha()-i.alpha(),o=((a*r==-1?a:(a+r)/(1+a*r))+1)/2,s=1-o;return this.rgb(o*this.red()+s*i.red(),o*this.green()+s*i.green(),o*this.blue()+s*i.blue()).alpha(this.alpha()*n+i.alpha()*(1-n))},toJSON:function(){return this.rgb()},clone:function(){var t,e,i=new r,n=this.values,a=i.values;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],"[object Array]"===(e={}.toString.call(t))?a[o]=t.slice(0):"[object Number]"===e?a[o]=t:console.error("unexpected color value:",t));return i}},r.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},r.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},r.prototype.getValues=function(t){for(var e=this.values,i={},n=0;n<t.length;n++)i[t.charAt(n)]=e[t][n];return 1!==e.alpha&&(i.a=e.alpha),i},r.prototype.setValues=function(t,e){var i,a,r=this.values,o=this.spaces,s=this.maxes,l=1;if(this.valid=!0,"alpha"===t)l=e;else if(e.length)r[t]=e.slice(0,t.length),l=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)r[t][i]=e[t.charAt(i)];l=e.a}else if(void 0!==e[o[t][0]]){var u=o[t];for(i=0;i<t.length;i++)r[t][i]=e[u[i]];l=e.alpha}if(r.alpha=Math.max(0,Math.min(1,void 0===l?r.alpha:l)),"alpha"===t)return!1;for(i=0;i<t.length;i++)a=Math.max(0,Math.min(s[t][i],r[t][i])),r[t][i]=Math.round(a);for(var d in o)d!==t&&(r[d]=n[t][d](r[t]));return!0},r.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},r.prototype.setChannel=function(t,e,i){var n=this.values[t];return void 0===i?n[e]:i===n[e]?this:(n[e]=i,this.setValues(t,n),this)},"undefined"!=typeof window&&(window.Color=r),e.exports=r},{2:2,5:5}],4:[function(t,e,i){function n(t){var e,i,n=t[0]/255,a=t[1]/255,r=t[2]/255,o=Math.min(n,a,r),s=Math.max(n,a,r),l=s-o;return s==o?e=0:n==s?e=(a-r)/l:a==s?e=2+(r-n)/l:r==s&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),i=(o+s)/2,[e,100*(s==o?0:i<=.5?l/(s+o):l/(2-s-o)),100*i]}function a(t){var e,i,n=t[0],a=t[1],r=t[2],o=Math.min(n,a,r),s=Math.max(n,a,r),l=s-o;return i=0==s?0:l/s*1e3/10,s==o?e=0:n==s?e=(a-r)/l:a==s?e=2+(r-n)/l:r==s&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),[e,i,s/255*1e3/10]}function o(t){var e=t[0],i=t[1],a=t[2];return[n(t)[0],100*(1/255*Math.min(e,Math.min(i,a))),100*(a=1-1/255*Math.max(e,Math.max(i,a)))]}function s(t){var e,i=t[0]/255,n=t[1]/255,a=t[2]/255;return[100*((1-i-(e=Math.min(1-i,1-n,1-a)))/(1-e)||0),100*((1-n-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]}function l(t){return M[JSON.stringify(t)]}function u(t){var e=t[0]/255,i=t[1]/255,n=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*i+.0722*n),100*(.0193*e+.1192*i+.9505*n)]}function d(t){var e=u(t),i=e[0],n=e[1],a=e[2];return n/=100,a/=108.883,i=(i/=95.047)>.008856?Math.pow(i,1/3):7.787*i+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(i-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]}function h(t){var e,i,n,a,r,o=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return[r=255*l,r,r];e=2*l-(i=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var u=0;u<3;u++)(n=o+1/3*-(u-1))<0&&n++,n>1&&n--,r=6*n<1?e+6*(i-e)*n:2*n<1?i:3*n<2?e+(i-e)*(2/3-n)*6:e,a[u]=255*r;return a}function c(t){var e=t[0]/60,i=t[1]/100,n=t[2]/100,a=Math.floor(e)%6,r=e-Math.floor(e),o=255*n*(1-i),s=255*n*(1-i*r),l=255*n*(1-i*(1-r));n*=255;switch(a){case 0:return[n,l,o];case 1:return[s,n,o];case 2:return[o,n,l];case 3:return[o,s,n];case 4:return[l,o,n];case 5:return[n,o,s]}}function f(t){var e,i,n,a,o=t[0]/360,s=t[1]/100,l=t[2]/100,u=s+l;switch(u>1&&(s/=u,l/=u),i=1-l,n=6*o-(e=Math.floor(6*o)),0!=(1&e)&&(n=1-n),a=s+n*(i-s),e){default:case 6:case 0:r=i,g=a,b=s;break;case 1:r=a,g=i,b=s;break;case 2:r=s,g=i,b=a;break;case 3:r=s,g=a,b=i;break;case 4:r=a,g=s,b=i;break;case 5:r=i,g=s,b=a}return[255*r,255*g,255*b]}function p(t){var e=t[0]/100,i=t[1]/100,n=t[2]/100,a=t[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,i*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]}function m(t){var e,i,n,a=t[0]/100,r=t[1]/100,o=t[2]/100;return i=-.9689*a+1.8758*r+.0415*o,n=.0557*a+-.204*r+1.057*o,e=(e=3.2406*a+-1.5372*r+-.4986*o)>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(i=Math.min(Math.max(0,i),1)),255*(n=Math.min(Math.max(0,n),1))]}function v(t){var e=t[0],i=t[1],n=t[2];return i/=100,n/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(e-i),200*(i-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]}function y(t){var e,i,n,a,r=t[0],o=t[1],s=t[2];return r<=8?a=(i=100*r/903.3)/100*7.787+16/116:(i=100*Math.pow((r+16)/116,3),a=Math.pow(i/100,1/3)),[e=e/95.047<=.008856?e=95.047*(o/500+a-16/116)/7.787:95.047*Math.pow(o/500+a,3),i,n=n/108.883<=.008859?n=108.883*(a-s/200-16/116)/7.787:108.883*Math.pow(a-s/200,3)]}function x(t){var e,i=t[0],n=t[1],a=t[2];return(e=360*Math.atan2(a,n)/2/Math.PI)<0&&(e+=360),[i,Math.sqrt(n*n+a*a),e]}function w(t){return m(y(t))}function k(t){var e,i=t[0],n=t[1];return e=t[2]/360*2*Math.PI,[i,n*Math.cos(e),n*Math.sin(e)]}function S(t){return C[t]}e.exports={rgb2hsl:n,rgb2hsv:a,rgb2hwb:o,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:u,rgb2lab:d,rgb2lch:function(t){return x(d(t))},hsl2rgb:h,hsl2hsv:function(t){var e=t[0],i=t[1]/100,n=t[2]/100;if(0===n)return[0,0,0];return[e,100*(2*(i*=(n*=2)<=1?n:2-n)/(n+i)),100*((n+i)/2)]},hsl2hwb:function(t){return o(h(t))},hsl2cmyk:function(t){return s(h(t))},hsl2keyword:function(t){return l(h(t))},hsv2rgb:c,hsv2hsl:function(t){var e,i,n=t[0],a=t[1]/100,r=t[2]/100;return e=a*r,[n,100*(e=(e/=(i=(2-a)*r)<=1?i:2-i)||0),100*(i/=2)]},hsv2hwb:function(t){return o(c(t))},hsv2cmyk:function(t){return s(c(t))},hsv2keyword:function(t){return l(c(t))},hwb2rgb:f,hwb2hsl:function(t){return n(f(t))},hwb2hsv:function(t){return a(f(t))},hwb2cmyk:function(t){return s(f(t))},hwb2keyword:function(t){return l(f(t))},cmyk2rgb:p,cmyk2hsl:function(t){return n(p(t))},cmyk2hsv:function(t){return a(p(t))},cmyk2hwb:function(t){return o(p(t))},cmyk2keyword:function(t){return l(p(t))},keyword2rgb:S,keyword2hsl:function(t){return n(S(t))},keyword2hsv:function(t){return a(S(t))},keyword2hwb:function(t){return o(S(t))},keyword2cmyk:function(t){return s(S(t))},keyword2lab:function(t){return d(S(t))},keyword2xyz:function(t){return u(S(t))},xyz2rgb:m,xyz2lab:v,xyz2lch:function(t){return x(v(t))},lab2xyz:y,lab2rgb:w,lab2lch:x,lch2lab:k,lch2xyz:function(t){return y(k(t))},lch2rgb:function(t){return w(k(t))}};var C={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},M={};for(var P in C)M[JSON.stringify(C[P])]=P},{}],5:[function(t,e,i){var n=t(4),a=function(){return new u};for(var r in n){a[r+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),n[t](e)}}(r);var o=/(\w+)2(\w+)/.exec(r),s=o[1],l=o[2];(a[s]=a[s]||{})[l]=a[r]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var i=n[t](e);if("string"==typeof i||void 0===i)return i;for(var a=0;a<i.length;a++)i[a]=Math.round(i[a]);return i}}(r)}var u=function(){this.convs={}};u.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},u.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},u.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,n=this.convs[i];e=a[i][t](n),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){u.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=a},{4:4}],6:[function(t,e,i){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,i){var n=t(28)();t(26)(n),t(40)(n),t(22)(n),t(25)(n),t(30)(n),t(21)(n),t(23)(n),t(24)(n),t(29)(n),t(32)(n),t(33)(n),t(31)(n),t(27)(n),t(34)(n),t(35)(n),t(36)(n),t(37)(n),t(38)(n),t(46)(n),t(44)(n),t(45)(n),t(47)(n),t(48)(n),t(49)(n),t(15)(n),t(16)(n),t(17)(n),t(18)(n),t(19)(n),t(20)(n),t(8)(n),t(9)(n),t(10)(n),t(11)(n),t(12)(n),t(13)(n),t(14)(n);var a=[];a.push(t(41)(n),t(42)(n),t(43)(n)),n.plugins.register(a),e.exports=n,"undefined"!=typeof window&&(window.Chart=n)},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,8:8,9:9}],8:[function(t,e,i){"use strict";e.exports=function(t){t.Bar=function(e,i){return i.type="bar",new t(e,i)}}},{}],9:[function(t,e,i){"use strict";e.exports=function(t){t.Bubble=function(e,i){return i.type="bubble",new t(e,i)}}},{}],10:[function(t,e,i){"use strict";e.exports=function(t){t.Doughnut=function(e,i){return i.type="doughnut",new t(e,i)}}},{}],11:[function(t,e,i){"use strict";e.exports=function(t){t.Line=function(e,i){return i.type="line",new t(e,i)}}},{}],12:[function(t,e,i){"use strict";e.exports=function(t){t.PolarArea=function(e,i){return i.type="polarArea",new t(e,i)}}},{}],13:[function(t,e,i){"use strict";e.exports=function(t){t.Radar=function(e,i){return i.type="radar",new t(e,i)}}},{}],14:[function(t,e,i){"use strict";e.exports=function(t){t.defaults.scatter={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}},t.controllers.scatter=t.controllers.line,t.Scatter=function(e,i){return i.type="scatter",new t(e,i)}}},{}],15:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({dataElementType:t.elements.Rectangle,initialize:function(){var e;t.DatasetController.prototype.initialize.apply(this,arguments),(e=this.getMeta()).stack=this.getDataset().stack,e.bar=!0},update:function(t){var e,i,n=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,i=n.length;e<i;++e)this.updateElement(n[e],e,t)},updateElement:function(t,i,n){var a=this.chart,r=this.getMeta(),o=this.getDataset(),s=t.custom||{},l=a.options.elements.rectangle;t._xScale=this.getScaleForId(r.xAxisID),t._yScale=this.getScaleForId(r.yAxisID),t._datasetIndex=this.index,t._index=i,t._model={datasetLabel:o.label,label:a.data.labels[i],borderSkipped:s.borderSkipped?s.borderSkipped:l.borderSkipped,backgroundColor:s.backgroundColor?s.backgroundColor:e.getValueAtIndexOrDefault(o.backgroundColor,i,l.backgroundColor),borderColor:s.borderColor?s.borderColor:e.getValueAtIndexOrDefault(o.borderColor,i,l.borderColor),borderWidth:s.borderWidth?s.borderWidth:e.getValueAtIndexOrDefault(o.borderWidth,i,l.borderWidth)},this.updateElementGeometry(t,i,n),t.pivot()},updateElementGeometry:function(t,e,i){var n=t._model,a=this.getValueScale(),r=a.getBasePixel(),o=a.isHorizontal(),s=this._ruler||this.getRuler(),l=this.calculateBarValuePixels(this.index,e),u=this.calculateBarIndexPixels(this.index,e,s);n.horizontal=o,n.base=i?r:l.base,n.x=o?i?r:l.head:u.center,n.y=o?u.center:i?r:l.head,n.height=o?u.size:void 0,n.width=o?void 0:u.size},getValueScaleId:function(){return this.getMeta().yAxisID},getIndexScaleId:function(){return this.getMeta().xAxisID},getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},getStackCount:function(t){var e,i,n=this.chart,a=this.getIndexScale().options.stacked,r=void 0===t?n.data.datasets.length:t+1,o=[];for(e=0;e<r;++e)(i=n.getDatasetMeta(e)).bar&&n.isDatasetVisible(e)&&(!1===a||!0===a&&-1===o.indexOf(i.stack)||void 0===a&&(void 0===i.stack||-1===o.indexOf(i.stack)))&&o.push(i.stack);return o.length},getStackIndex:function(t){return this.getStackCount(t)-1},getRuler:function(){var t=this.getIndexScale(),i=t.options,n=this.getStackCount(),a=(t.isHorizontal()?t.width:t.height)/t.ticks.length,r=a*i.categoryPercentage,o=r/n,s=o*i.barPercentage;return{stackCount:n,tickSize:a,categorySize:r,categorySpacing:a-r,fullBarSize:o,barSize:s=Math.min(e.getValueOrDefault(i.barThickness,s),e.getValueOrDefault(i.maxBarThickness,1/0)),barSpacing:o-s,scale:t}},calculateBarValuePixels:function(t,e){var i,n,a,r,o,s,l=this.chart,u=this.getMeta(),d=this.getValueScale(),h=l.data.datasets,c=Number(h[t].data[e]),f=d.options.stacked,p=u.stack,g=0;if(f||void 0===f&&void 0!==p)for(i=0;i<t;++i)(n=l.getDatasetMeta(i)).bar&&n.stack===p&&n.controller.getValueScaleId()===d.id&&l.isDatasetVisible(i)&&(a=Number(h[i].data[e]),(c<0&&a<0||c>=0&&a>0)&&(g+=a));return r=d.getPixelForValue(g),{size:s=((o=d.getPixelForValue(g+c))-r)/2,base:r,head:o,center:o+s/2}},calculateBarIndexPixels:function(t,e,i){var n=i.scale,a=this.chart.isCombo,r=this.getStackIndex(t),o=n.getPixelForValue(null,e,t,a),s=i.barSize;return o-=a?i.tickSize/2:0,o+=i.fullBarSize*r,o+=i.categorySpacing/2,{size:s,base:o+=i.barSpacing/2,head:o+s,center:o+s/2}},draw:function(){var t,i=this.chart,n=this.getMeta().data,a=this.getDataset(),r=n.length,o=0;for(e.canvas.clipArea(i.ctx,i.chartArea);o<r;++o)null===(t=a.data[o])||void 0===t||isNaN(t)||n[o].draw();e.canvas.unclipArea(i.ctx)},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},r=t._model;r.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.hoverBackgroundColor,n,e.getHoverColor(r.backgroundColor)),r.borderColor=a.hoverBorderColor?a.hoverBorderColor:e.getValueAtIndexOrDefault(i.hoverBorderColor,n,e.getHoverColor(r.borderColor)),r.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:e.getValueAtIndexOrDefault(i.hoverBorderWidth,n,r.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},r=t._model,o=this.chart.options.elements.rectangle;r.backgroundColor=a.backgroundColor?a.backgroundColor:e.getValueAtIndexOrDefault(i.backgroundColor,n,o.backgroundColor),r.borderColor=a.borderColor?a.borderColor:e.getValueAtIndexOrDefault(i.borderColor,n,o.borderColor),r.borderWidth=a.borderWidth?a.borderWidth:e.getValueAtIndexOrDefault(i.borderWidth,n,o.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var i="";return t.length>0&&(t[0].yLabel?i=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(i=e.labels[t[0].index])),i},label:function(t,e){return(e.datasets[t.datasetIndex].label||"")+": "+t.xLabel}}}},t.controllers.horizontalBar=t.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID},getIndexScaleId:function(){return this.getMeta().yAxisID}})}},{}],16:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",n=e.datasets[t.datasetIndex].data[t.index];return i+": ("+t.xLabel+", "+t.yLabel+", "+n.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({dataElementType:t.elements.Point,update:function(t){var i=this,n=i.getMeta().data;e.each(n,function(e,n){i.updateElement(e,n,t)})},updateElement:function(i,n,a){var r=this.getMeta(),o=this.getScaleForId(r.xAxisID),s=this.getScaleForId(r.yAxisID),l=i.custom||{},u=this.getDataset(),d=u.data[n],h=this.chart.options.elements.point,c=this.index;e.extend(i,{_xScale:o,_yScale:s,_datasetIndex:c,_index:n,_model:{x:a?o.getPixelForDecimal(.5):o.getPixelForValue("object"==typeof d?d:NaN,n,c,this.chart.isCombo),y:a?s.getBasePixel():s.getPixelForValue(d,n,c),radius:a?0:l.radius?l.radius:this.getRadius(d),hitRadius:l.hitRadius?l.hitRadius:e.getValueAtIndexOrDefault(u.hitRadius,n,h.hitRadius)}}),t.DatasetController.prototype.removeHoverStyle.call(this,i,h);var f=i._model;f.skip=l.skip?l.skip:isNaN(f.x)||isNaN(f.y),i.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},setHoverStyle:function(i){t.DatasetController.prototype.setHoverStyle.call(this,i);var n=this.chart.data.datasets[i._datasetIndex],a=i._index,r=i.custom||{};i._model.radius=r.hoverRadius?r.hoverRadius:e.getValueAtIndexOrDefault(n.hoverRadius,a,this.chart.options.elements.point.hoverRadius)+this.getRadius(n.data[a])},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.point);var i=this.chart.data.datasets[e._datasetIndex].data[e._index],n=e.custom||{};e._model.radius=n.radius?n.radius:this.getRadius(i)}})}},{}],17:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults;i.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,a=i.labels;if(n.length)for(var r=0;r<n[0].data.length;++r)e.push('<li><span style="background-color:'+n[0].backgroundColor[r]+'"></span>'),a[r]&&e.push(a[r]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var i=t.data;return i.labels.length&&i.datasets.length?i.labels.map(function(n,a){var r=t.getDatasetMeta(0),o=i.datasets[0],s=r.data[a],l=s&&s.custom||{},u=e.getValueAtIndexOrDefault,d=t.options.elements.arc;return{text:n,fillStyle:l.backgroundColor?l.backgroundColor:u(o.backgroundColor,a,d.backgroundColor),strokeStyle:l.borderColor?l.borderColor:u(o.borderColor,a,d.borderColor),lineWidth:l.borderWidth?l.borderWidth:u(o.borderWidth,a,d.borderWidth),hidden:isNaN(o.data[a])||r.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var i,n,a,r=e.index,o=this.chart;for(i=0,n=(o.data.datasets||[]).length;i<n;++i)(a=o.getDatasetMeta(i)).data[r]&&(a.data[r].hidden=!a.data[r].hidden);o.update()}},cutoutPercentage:50,rotation:-.5*Math.PI,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,i){var n=i.labels[t.index],a=": "+i.datasets[t.datasetIndex].data[t.index];return e.isArray(n)?(n=n.slice())[0]+=a:n+=a,n}}}},i.pie=e.clone(i.doughnut),e.extend(i.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,getRingIndex:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(t){var i=this,n=i.chart,a=n.chartArea,r=n.options,o=r.elements.arc,s=a.right-a.left-o.borderWidth,l=a.bottom-a.top-o.borderWidth,u=Math.min(s,l),d={x:0,y:0},h=i.getMeta(),c=r.cutoutPercentage,f=r.circumference;if(f<2*Math.PI){var p=r.rotation%(2*Math.PI),g=(p+=2*Math.PI*(p>=Math.PI?-1:p<-Math.PI?1:0))+f,m={x:Math.cos(p),y:Math.sin(p)},v={x:Math.cos(g),y:Math.sin(g)},b=p<=0&&0<=g||p<=2*Math.PI&&2*Math.PI<=g,y=p<=.5*Math.PI&&.5*Math.PI<=g||p<=2.5*Math.PI&&2.5*Math.PI<=g,x=p<=-Math.PI&&-Math.PI<=g||p<=Math.PI&&Math.PI<=g,w=p<=.5*-Math.PI&&.5*-Math.PI<=g||p<=1.5*Math.PI&&1.5*Math.PI<=g,k=c/100,S={x:x?-1:Math.min(m.x*(m.x<0?1:k),v.x*(v.x<0?1:k)),y:w?-1:Math.min(m.y*(m.y<0?1:k),v.y*(v.y<0?1:k))},C={x:b?1:Math.max(m.x*(m.x>0?1:k),v.x*(v.x>0?1:k)),y:y?1:Math.max(m.y*(m.y>0?1:k),v.y*(v.y>0?1:k))},M={width:.5*(C.x-S.x),height:.5*(C.y-S.y)};u=Math.min(s/M.width,l/M.height),d={x:-.5*(C.x+S.x),y:-.5*(C.y+S.y)}}n.borderWidth=i.getMaxBorderWidth(h.data),n.outerRadius=Math.max((u-n.borderWidth)/2,0),n.innerRadius=Math.max(c?n.outerRadius/100*c:0,0),n.radiusLength=(n.outerRadius-n.innerRadius)/n.getVisibleDatasetCount(),n.offsetX=d.x*n.outerRadius,n.offsetY=d.y*n.outerRadius,h.total=i.calculateTotal(),i.outerRadius=n.outerRadius-n.radiusLength*i.getRingIndex(i.index),i.innerRadius=Math.max(i.outerRadius-n.radiusLength,0),e.each(h.data,function(e,n){i.updateElement(e,n,t)})},updateElement:function(t,i,n){var a=this.chart,r=a.chartArea,o=a.options,s=o.animation,l=(r.left+r.right)/2,u=(r.top+r.bottom)/2,d=o.rotation,h=o.rotation,c=this.getDataset(),f=n&&s.animateRotate?0:t.hidden?0:this.calculateCircumference(c.data[i])*(o.circumference/(2*Math.PI)),p=n&&s.animateScale?0:this.innerRadius,g=n&&s.animateScale?0:this.outerRadius,m=e.getValueAtIndexOrDefault;e.extend(t,{_datasetIndex:this.index,_index:i,_model:{x:l+a.offsetX,y:u+a.offsetY,startAngle:d,endAngle:h,circumference:f,outerRadius:g,innerRadius:p,label:m(c.label,i,a.data.labels[i])}});var v=t._model;this.removeHoverStyle(t),n&&s.animateRotate||(v.startAngle=0===i?o.rotation:this.getMeta().data[i-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,i=this.getDataset(),n=this.getMeta(),a=0;return e.each(n.data,function(e,n){t=i.data[n],isNaN(t)||e.hidden||(a+=Math.abs(t))}),a},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0},getMaxBorderWidth:function(t){for(var e,i,n=0,a=this.index,r=t.length,o=0;o<r;o++)e=t[o]._model?t[o]._model.borderWidth:0,n=(i=t[o]._chart?t[o]._chart.config.data.datasets[a].hoverBorderWidth:0)>(n=e>n?e:n)?i:n;return n}})}},{}],18:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;function i(t,i){return e.getValueOrDefault(t.showLine,i.showLines)}t.defaults.line={showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,update:function(t){var n,a,r,o=this.getMeta(),s=o.dataset,l=o.data||[],u=this.chart.options,d=u.elements.line,h=this.getScaleForId(o.yAxisID),c=this.getDataset(),f=i(c,u);for(f&&(r=s.custom||{},void 0!==c.tension&&void 0===c.lineTension&&(c.lineTension=c.tension),s._scale=h,s._datasetIndex=this.index,s._children=l,s._model={spanGaps:c.spanGaps?c.spanGaps:u.spanGaps,tension:r.tension?r.tension:e.getValueOrDefault(c.lineTension,d.tension),backgroundColor:r.backgroundColor?r.backgroundColor:c.backgroundColor||d.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:c.borderWidth||d.borderWidth,borderColor:r.borderColor?r.borderColor:c.borderColor||d.borderColor,borderCapStyle:r.borderCapStyle?r.borderCapStyle:c.borderCapStyle||d.borderCapStyle,borderDash:r.borderDash?r.borderDash:c.borderDash||d.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:c.borderDashOffset||d.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:c.borderJoinStyle||d.borderJoinStyle,fill:r.fill?r.fill:void 0!==c.fill?c.fill:d.fill,steppedLine:r.steppedLine?r.steppedLine:e.getValueOrDefault(c.steppedLine,d.stepped),cubicInterpolationMode:r.cubicInterpolationMode?r.cubicInterpolationMode:e.getValueOrDefault(c.cubicInterpolationMode,d.cubicInterpolationMode)},s.pivot()),n=0,a=l.length;n<a;++n)this.updateElement(l[n],n,t);for(f&&0!==s._model.tension&&this.updateBezierControlPoints(),n=0,a=l.length;n<a;++n)l[n].pivot()},getPointBackgroundColor:function(t,i){var n=this.chart.options.elements.point.backgroundColor,a=this.getDataset(),r=t.custom||{};return r.backgroundColor?n=r.backgroundColor:a.pointBackgroundColor?n=e.getValueAtIndexOrDefault(a.pointBackgroundColor,i,n):a.backgroundColor&&(n=a.backgroundColor),n},getPointBorderColor:function(t,i){var n=this.chart.options.elements.point.borderColor,a=this.getDataset(),r=t.custom||{};return r.borderColor?n=r.borderColor:a.pointBorderColor?n=e.getValueAtIndexOrDefault(a.pointBorderColor,i,n):a.borderColor&&(n=a.borderColor),n},getPointBorderWidth:function(t,i){var n=this.chart.options.elements.point.borderWidth,a=this.getDataset(),r=t.custom||{};return isNaN(r.borderWidth)?isNaN(a.pointBorderWidth)?isNaN(a.borderWidth)||(n=a.borderWidth):n=e.getValueAtIndexOrDefault(a.pointBorderWidth,i,n):n=r.borderWidth,n},updateElement:function(t,i,n){var a,r,o=this.getMeta(),s=t.custom||{},l=this.getDataset(),u=this.index,d=l.data[i],h=this.getScaleForId(o.yAxisID),c=this.getScaleForId(o.xAxisID),f=this.chart.options.elements.point,p=1===(this.chart.data.labels||[]).length||1===l.data.length||this.chart.isCombo;void 0!==l.radius&&void 0===l.pointRadius&&(l.pointRadius=l.radius),void 0!==l.hitRadius&&void 0===l.pointHitRadius&&(l.pointHitRadius=l.hitRadius),a=c.getPixelForValue("object"==typeof d?d:NaN,i,u,p),r=n?h.getBasePixel():this.calculatePointY(d,i,u),t._xScale=c,t._yScale=h,t._datasetIndex=u,t._index=i,t._model={x:a,y:r,skip:s.skip||isNaN(a)||isNaN(r),radius:s.radius||e.getValueAtIndexOrDefault(l.pointRadius,i,f.radius),pointStyle:s.pointStyle||e.getValueAtIndexOrDefault(l.pointStyle,i,f.pointStyle),backgroundColor:this.getPointBackgroundColor(t,i),borderColor:this.getPointBorderColor(t,i),borderWidth:this.getPointBorderWidth(t,i),tension:o.dataset._model?o.dataset._model.tension:0,steppedLine:!!o.dataset._model&&o.dataset._model.steppedLine,hitRadius:s.hitRadius||e.getValueAtIndexOrDefault(l.pointHitRadius,i,f.hitRadius)}},calculatePointY:function(t,e,i){var n,a,r,o=this.chart,s=this.getMeta(),l=this.getScaleForId(s.yAxisID),u=0,d=0;if(l.options.stacked){for(n=0;n<i;n++)if(a=o.data.datasets[n],"line"===(r=o.getDatasetMeta(n)).type&&r.yAxisID===l.id&&o.isDatasetVisible(n)){var h=Number(l.getRightValue(a.data[e]));h<0?d+=h||0:u+=h||0}var c=Number(l.getRightValue(t));return c<0?l.getPixelForValue(d+c):l.getPixelForValue(u+c)}return l.getPixelForValue(t)},updateBezierControlPoints:function(){var t,i,n,a,r=this.getMeta(),o=this.chart.chartArea,s=r.data||[];function l(t,e,i){return Math.max(Math.min(t,i),e)}if(r.dataset._model.spanGaps&&(s=s.filter(function(t){return!t._model.skip})),"monotone"===r.dataset._model.cubicInterpolationMode)e.splineCurveMonotone(s);else for(t=0,i=s.length;t<i;++t)n=s[t]._model,a=e.splineCurve(e.previousItem(s,t)._model,n,e.nextItem(s,t)._model,r.dataset._model.tension),n.controlPointPreviousX=a.previous.x,n.controlPointPreviousY=a.previous.y,n.controlPointNextX=a.next.x,n.controlPointNextY=a.next.y;if(this.chart.options.elements.line.capBezierPoints)for(t=0,i=s.length;t<i;++t)(n=s[t]._model).controlPointPreviousX=l(n.controlPointPreviousX,o.left,o.right),n.controlPointPreviousY=l(n.controlPointPreviousY,o.top,o.bottom),n.controlPointNextX=l(n.controlPointNextX,o.left,o.right),n.controlPointNextY=l(n.controlPointNextY,o.top,o.bottom)},draw:function(){var e=this.chart,n=this.getMeta(),a=n.data||[],r=e.chartArea,o=a.length,s=0;for(t.canvasHelpers.clipArea(e.ctx,r),i(this.getDataset(),e.options)&&n.dataset.draw(),t.canvasHelpers.unclipArea(e.ctx);s<o;++s)a[s].draw(r)},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},r=t._model;r.radius=a.hoverRadius||e.getValueAtIndexOrDefault(i.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius),r.backgroundColor=a.hoverBackgroundColor||e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor,n,e.getHoverColor(r.backgroundColor)),r.borderColor=a.hoverBorderColor||e.getValueAtIndexOrDefault(i.pointHoverBorderColor,n,e.getHoverColor(r.borderColor)),r.borderWidth=a.hoverBorderWidth||e.getValueAtIndexOrDefault(i.pointHoverBorderWidth,n,r.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},r=t._model;void 0!==i.radius&&void 0===i.pointRadius&&(i.pointRadius=i.radius),r.radius=a.radius||e.getValueAtIndexOrDefault(i.pointRadius,n,this.chart.options.elements.point.radius),r.backgroundColor=this.getPointBackgroundColor(t,n),r.borderColor=this.getPointBorderColor(t,n),r.borderWidth=this.getPointBorderWidth(t,n)}})}},{}],19:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,aspectRatio:1,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,a=i.labels;if(n.length)for(var r=0;r<n[0].data.length;++r)e.push('<li><span style="background-color:'+n[0].backgroundColor[r]+'"></span>'),a[r]&&e.push(a[r]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var i=t.data;return i.labels.length&&i.datasets.length?i.labels.map(function(n,a){var r=t.getDatasetMeta(0),o=i.datasets[0],s=r.data[a].custom||{},l=e.getValueAtIndexOrDefault,u=t.options.elements.arc;return{text:n,fillStyle:s.backgroundColor?s.backgroundColor:l(o.backgroundColor,a,u.backgroundColor),strokeStyle:s.borderColor?s.borderColor:l(o.borderColor,a,u.borderColor),lineWidth:s.borderWidth?s.borderWidth:l(o.borderWidth,a,u.borderWidth),hidden:isNaN(o.data[a])||r.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var i,n,a,r=e.index,o=this.chart;for(i=0,n=(o.data.datasets||[]).length;i<n;++i)(a=o.getDatasetMeta(i)).data[r].hidden=!a.data[r].hidden;o.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,update:function(t){var i=this,n=i.chart,a=n.chartArea,r=i.getMeta(),o=n.options,s=o.elements.arc,l=Math.min(a.right-a.left,a.bottom-a.top);n.outerRadius=Math.max((l-s.borderWidth/2)/2,0),n.innerRadius=Math.max(o.cutoutPercentage?n.outerRadius/100*o.cutoutPercentage:1,0),n.radiusLength=(n.outerRadius-n.innerRadius)/n.getVisibleDatasetCount(),i.outerRadius=n.outerRadius-n.radiusLength*i.index,i.innerRadius=i.outerRadius-n.radiusLength,r.count=i.countVisibleElements(),e.each(r.data,function(e,n){i.updateElement(e,n,t)})},updateElement:function(t,i,n){for(var a=this.chart,r=this.getDataset(),o=a.options,s=o.animation,l=a.scale,u=e.getValueAtIndexOrDefault,d=a.data.labels,h=this.calculateCircumference(r.data[i]),c=l.xCenter,f=l.yCenter,p=0,g=this.getMeta(),m=0;m<i;++m)isNaN(r.data[m])||g.data[m].hidden||++p;var v=o.startAngle,b=t.hidden?0:l.getDistanceFromCenterForValue(r.data[i]),y=v+h*p,x=y+(t.hidden?0:h),w=s.animateScale?0:l.getDistanceFromCenterForValue(r.data[i]);e.extend(t,{_datasetIndex:this.index,_index:i,_scale:l,_model:{x:c,y:f,innerRadius:0,outerRadius:n?w:b,startAngle:n&&s.animateRotate?v:y,endAngle:n&&s.animateRotate?v:x,label:u(d,i,d[i])}}),this.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),i=this.getMeta(),n=0;return e.each(i.data,function(e,i){isNaN(t.data[i])||e.hidden||n++}),n},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],20:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={aspectRatio:1,scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,linkScales:e.noop,update:function(t){var i=this,n=i.getMeta(),a=n.dataset,r=n.data,o=a.custom||{},s=i.getDataset(),l=i.chart.options.elements.line,u=i.chart.scale;void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),e.extend(n.dataset,{_datasetIndex:i.index,_scale:u,_children:r,_loop:!0,_model:{tension:o.tension?o.tension:e.getValueOrDefault(s.lineTension,l.tension),backgroundColor:o.backgroundColor?o.backgroundColor:s.backgroundColor||l.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:s.borderWidth||l.borderWidth,borderColor:o.borderColor?o.borderColor:s.borderColor||l.borderColor,fill:o.fill?o.fill:void 0!==s.fill?s.fill:l.fill,borderCapStyle:o.borderCapStyle?o.borderCapStyle:s.borderCapStyle||l.borderCapStyle,borderDash:o.borderDash?o.borderDash:s.borderDash||l.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:s.borderDashOffset||l.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:s.borderJoinStyle||l.borderJoinStyle}}),n.dataset.pivot(),e.each(r,function(e,n){i.updateElement(e,n,t)},i),i.updateBezierControlPoints()},updateElement:function(t,i,n){var a=t.custom||{},r=this.getDataset(),o=this.chart.scale,s=this.chart.options.elements.point,l=o.getPointPositionForValue(i,r.data[i]);void 0!==r.radius&&void 0===r.pointRadius&&(r.pointRadius=r.radius),void 0!==r.hitRadius&&void 0===r.pointHitRadius&&(r.pointHitRadius=r.hitRadius),e.extend(t,{_datasetIndex:this.index,_index:i,_scale:o,_model:{x:n?o.xCenter:l.x,y:n?o.yCenter:l.y,tension:a.tension?a.tension:e.getValueOrDefault(r.lineTension,this.chart.options.elements.line.tension),radius:a.radius?a.radius:e.getValueAtIndexOrDefault(r.pointRadius,i,s.radius),backgroundColor:a.backgroundColor?a.backgroundColor:e.getValueAtIndexOrDefault(r.pointBackgroundColor,i,s.backgroundColor),borderColor:a.borderColor?a.borderColor:e.getValueAtIndexOrDefault(r.pointBorderColor,i,s.borderColor),borderWidth:a.borderWidth?a.borderWidth:e.getValueAtIndexOrDefault(r.pointBorderWidth,i,s.borderWidth),pointStyle:a.pointStyle?a.pointStyle:e.getValueAtIndexOrDefault(r.pointStyle,i,s.pointStyle),hitRadius:a.hitRadius?a.hitRadius:e.getValueAtIndexOrDefault(r.pointHitRadius,i,s.hitRadius)}}),t._model.skip=a.skip?a.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,i=this.getMeta();e.each(i.data,function(n,a){var r=n._model,o=e.splineCurve(e.previousItem(i.data,a,!0)._model,r,e.nextItem(i.data,a,!0)._model,r.tension);r.controlPointPreviousX=Math.max(Math.min(o.previous.x,t.right),t.left),r.controlPointPreviousY=Math.max(Math.min(o.previous.y,t.bottom),t.top),r.controlPointNextX=Math.max(Math.min(o.next.x,t.right),t.left),r.controlPointNextY=Math.max(Math.min(o.next.y,t.bottom),t.top),n.pivot()})},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t.custom||{},a=t._index,r=t._model;r.radius=n.hoverRadius?n.hoverRadius:e.getValueAtIndexOrDefault(i.pointHoverRadius,a,this.chart.options.elements.point.hoverRadius),r.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor,a,e.getHoverColor(r.backgroundColor)),r.borderColor=n.hoverBorderColor?n.hoverBorderColor:e.getValueAtIndexOrDefault(i.pointHoverBorderColor,a,e.getHoverColor(r.borderColor)),r.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:e.getValueAtIndexOrDefault(i.pointHoverBorderWidth,a,r.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t.custom||{},a=t._index,r=t._model,o=this.chart.options.elements.point;r.radius=n.radius?n.radius:e.getValueAtIndexOrDefault(i.pointRadius,a,o.radius),r.backgroundColor=n.backgroundColor?n.backgroundColor:e.getValueAtIndexOrDefault(i.pointBackgroundColor,a,o.backgroundColor),r.borderColor=n.borderColor?n.borderColor:e.getValueAtIndexOrDefault(i.pointBorderColor,a,o.borderColor),r.borderWidth=n.borderWidth?n.borderWidth:e.getValueAtIndexOrDefault(i.pointBorderWidth,a,o.borderWidth)}})}},{}],21:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,i,n){var a,r,o=this.animations;for(e.chart=t,n||(t.animating=!0),a=0,r=o.length;a<r;++a)if(o[a].chart===t)return void(o[a]=e);o.push(e),1===o.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var i=e.findIndex(this.animations,function(e){return e.chart===t});-1!==i&&(this.animations.splice(i,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=Date.now(),e=0;this.dropFrames>1&&(e=Math.floor(this.dropFrames),this.dropFrames=this.dropFrames%1),this.advance(1+e);var i=Date.now();this.dropFrames+=(i-t)/this.frameDuration,this.animations.length>0&&this.requestAnimationFrame()},advance:function(t){for(var i,n,a=this.animations,r=0;r<a.length;)n=(i=a[r]).chart,i.currentStep=(i.currentStep||0)+t,i.currentStep=Math.min(i.currentStep,i.numSteps),e.callback(i.render,[n,i],n),e.callback(i.onAnimationProgress,[i],n),i.currentStep>=i.numSteps?(e.callback(i.onAnimationComplete,[i],n),n.animating=!1,a.splice(r,1)):++r}},Object.defineProperty(t.Animation.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(t.Animation.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}})}},{}],22:[function(t,e,i){"use strict";e.exports=function(t){var e=t.canvasHelpers={};e.drawPoint=function(e,i,n,a,r){var o,s,l,u,d,h;if("object"!=typeof i||"[object HTMLImageElement]"!==(o=i.toString())&&"[object HTMLCanvasElement]"!==o){if(!(isNaN(n)||n<=0)){switch(i){default:e.beginPath(),e.arc(a,r,n,0,2*Math.PI),e.closePath(),e.fill();break;case"triangle":e.beginPath(),d=(s=3*n/Math.sqrt(3))*Math.sqrt(3)/2,e.moveTo(a-s/2,r+d/3),e.lineTo(a+s/2,r+d/3),e.lineTo(a,r-2*d/3),e.closePath(),e.fill();break;case"rect":h=1/Math.SQRT2*n,e.beginPath(),e.fillRect(a-h,r-h,2*h,2*h),e.strokeRect(a-h,r-h,2*h,2*h);break;case"rectRounded":var c=n/Math.SQRT2,f=a-c,p=r-c,g=Math.SQRT2*n;t.helpers.drawRoundedRectangle(e,f,p,g,g,n/2),e.fill();break;case"rectRot":h=1/Math.SQRT2*n,e.beginPath(),e.moveTo(a-h,r),e.lineTo(a,r+h),e.lineTo(a+h,r),e.lineTo(a,r-h),e.closePath(),e.fill();break;case"cross":e.beginPath(),e.moveTo(a,r+n),e.lineTo(a,r-n),e.moveTo(a-n,r),e.lineTo(a+n,r),e.closePath();break;case"crossRot":e.beginPath(),l=Math.cos(Math.PI/4)*n,u=Math.sin(Math.PI/4)*n,e.moveTo(a-l,r-u),e.lineTo(a+l,r+u),e.moveTo(a-l,r+u),e.lineTo(a+l,r-u),e.closePath();break;case"star":e.beginPath(),e.moveTo(a,r+n),e.lineTo(a,r-n),e.moveTo(a-n,r),e.lineTo(a+n,r),l=Math.cos(Math.PI/4)*n,u=Math.sin(Math.PI/4)*n,e.moveTo(a-l,r-u),e.lineTo(a+l,r+u),e.moveTo(a-l,r+u),e.lineTo(a+l,r-u),e.closePath();break;case"line":e.beginPath(),e.moveTo(a-n,r),e.lineTo(a+n,r),e.closePath();break;case"dash":e.beginPath(),e.moveTo(a,r),e.lineTo(a+n,r),e.closePath()}e.stroke()}}else e.drawImage(i,a-i.width/2,r-i.height/2,i.width,i.height)},e.clipArea=function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},e.unclipArea=function(t){t.restore()},e.lineTo=function(t,e,i,n){if(i.steppedLine)return"after"===i.steppedLine?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y),void t.lineTo(i.x,i.y);i.tension?t.bezierCurveTo(n?e.controlPointPreviousX:e.controlPointNextX,n?e.controlPointPreviousY:e.controlPointNextY,n?i.controlPointNextX:i.controlPointPreviousX,n?i.controlPointNextY:i.controlPointPreviousY,i.x,i.y):t.lineTo(i.x,i.y)},t.helpers.canvas=e}},{}],23:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.plugins,n=t.platform;function a(t){return"top"===t||"bottom"===t}t.types={},t.instances={},t.controllers={},e.extend(t.prototype,{construct:function(i,a){var r,o,s=this;(o=(r=(r=a)||{}).data=r.data||{}).datasets=o.datasets||[],o.labels=o.labels||[],r.options=e.configMerge(t.defaults.global,t.defaults[r.type],r.options||{}),a=r;var l=n.acquireContext(i,a),u=l&&l.canvas,d=u&&u.height,h=u&&u.width;s.id=e.uid(),s.ctx=l,s.canvas=u,s.config=a,s.width=h,s.height=d,s.aspectRatio=d?h/d:null,s.options=a.options,s._bufferedRender=!1,s.chart=s,s.controller=s,t.instances[s.id]=s,Object.defineProperty(s,"data",{get:function(){return s.config.data},set:function(t){s.config.data=t}}),l&&u?(s.initialize(),s.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){return i.notify(this,"beforeInit"),e.retinaScale(this),this.bindEvents(),this.options.responsive&&this.resize(!0),this.ensureScalesHaveIDs(),this.buildScales(),this.initToolTip(),i.notify(this,"afterInit"),this},clear:function(){return e.clear(this),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(t){var n=this.options,a=this.canvas,r=n.maintainAspectRatio&&this.aspectRatio||null,o=Math.floor(e.getMaximumWidth(a)),s=Math.floor(r?o/r:e.getMaximumHeight(a));if((this.width!==o||this.height!==s)&&(a.width=this.width=o,a.height=this.height=s,a.style.width=o+"px",a.style.height=s+"px",e.retinaScale(this),!t)){var l={width:o,height:s};i.notify(this,"resize",[l]),this.options.onResize&&this.options.onResize(this,l),this.stop(),this.update(this.options.responsiveAnimationDuration)}},ensureScalesHaveIDs:function(){var t=this.options,i=t.scales||{},n=t.scale;e.each(i.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),e.each(i.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),n&&(n.id=n.id||"scale")},buildScales:function(){var i=this,n=i.options,r=i.scales={},o=[];n.scales&&(o=o.concat((n.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category",dposition:"bottom"}}),(n.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear",dposition:"left"}}))),n.scale&&o.push({options:n.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),e.each(o,function(n){var o=n.options,s=e.getValueOrDefault(o.type,n.dtype),l=t.scaleService.getScaleConstructor(s);if(l){a(o.position)!==a(n.dposition)&&(o.position=n.dposition);var u=new l({id:o.id,options:o,ctx:i.ctx,chart:i});r[u.id]=u,n.isDefault&&(i.scale=u)}}),t.scaleService.addScalesToLayout(this)},buildOrUpdateControllers:function(){var i=this,n=[],a=[];if(e.each(i.data.datasets,function(e,r){var o=i.getDatasetMeta(r);if(o.type||(o.type=e.type||i.config.type),n.push(o.type),o.controller)o.controller.updateIndex(r);else{var s=t.controllers[o.type];if(void 0===s)throw new Error('"'+o.type+'" is not a chart type.');o.controller=new s(i,r),a.push(o.controller)}},i),n.length>1)for(var r=1;r<n.length;r++)if(n[r]!==n[r-1]){i.isCombo=!0;break}return a},resetElements:function(){var t=this;e.each(t.data.datasets,function(e,i){t.getDatasetMeta(i).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t,n){var a,r,o=this;if((r=(a=o).options).scale?a.scale.options=r.scale:r.scales&&r.scales.xAxes.concat(r.scales.yAxes).forEach(function(t){a.scales[t.id].options=t}),a.tooltip._options=r.tooltips,!1!==i.notify(o,"beforeUpdate")){o.tooltip._data=o.data;var s=o.buildOrUpdateControllers();e.each(o.data.datasets,function(t,e){o.getDatasetMeta(e).controller.buildOrUpdateElements()},o),o.updateLayout(),e.each(s,function(t){t.reset()}),o.updateDatasets(),i.notify(o,"afterUpdate"),o._bufferedRender?o._bufferedRequest={lazy:n,duration:t}:o.render(t,n)}},updateLayout:function(){!1!==i.notify(this,"beforeLayout")&&(t.layoutService.update(this,this.width,this.height),i.notify(this,"afterScaleUpdate"),i.notify(this,"afterLayout"))},updateDatasets:function(){if(!1!==i.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);i.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),n={meta:e,index:t};!1!==i.notify(this,"beforeDatasetUpdate",[n])&&(e.controller.update(),i.notify(this,"afterDatasetUpdate",[n]))},render:function(n,a){var r=this;if(!1!==i.notify(r,"beforeRender")){var o=r.options.animation,s=function(t){i.notify(r,"afterRender"),e.callback(o&&o.onComplete,[t],r)};if(o&&(void 0!==n&&0!==n||void 0===n&&0!==o.duration)){var l=new t.Animation({numSteps:(n||o.duration)/16.66,easing:o.easing,render:function(t,i){var n=e.easingEffects[i.easing],a=i.currentStep,r=a/i.numSteps;t.draw(n(r),r,a)},onAnimationProgress:o.onProgress,onAnimationComplete:s});t.animationService.addAnimation(r,l,n,a)}else r.draw(),s(new t.Animation({numSteps:0,chart:r}));return r}},draw:function(t){var n=this;n.clear(),void 0!==t&&null!==t||(t=1),n.transition(t),!1!==i.notify(n,"beforeDraw",[t])&&(e.each(n.boxes,function(t){t.draw(n.chartArea)},n),n.scale&&n.scale.draw(),n.drawDatasets(t),n.tooltip.draw(),i.notify(n,"afterDraw",[t]))},transition:function(t){for(var e=0,i=(this.data.datasets||[]).length;e<i;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},drawDatasets:function(t){if(!1!==i.notify(this,"beforeDatasetsDraw",[t])){for(var e=(this.data.datasets||[]).length-1;e>=0;--e)this.isDatasetVisible(e)&&this.drawDataset(e,t);i.notify(this,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var n=this.getDatasetMeta(t),a={meta:n,index:t,easingValue:e};!1!==i.notify(this,"beforeDatasetDraw",[a])&&(n.controller.draw(e),i.notify(this,"afterDatasetDraw",[a]))},getElementAtEvent:function(e){return t.Interaction.modes.single(this,e)},getElementsAtEvent:function(e){return t.Interaction.modes.label(this,e,{intersect:!0})},getElementsAtXAxis:function(e){return t.Interaction.modes["x-axis"](this,e,{intersect:!0})},getElementsAtEventForMode:function(e,i,n){var a=t.Interaction.modes[i];return"function"==typeof a?a(this,e,n):[]},getDatasetAtEvent:function(e){return t.Interaction.modes.dataset(this,e,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i||(i=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;e<i;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){var a,r,o,s=this.canvas;for(this.stop(),r=0,o=this.data.datasets.length;r<o;++r)(a=this.getDatasetMeta(r)).controller&&(a.controller.destroy(),a.controller=null);s&&(this.unbindEvents(),e.clear(this),n.releaseContext(this.ctx),this.canvas=null,this.ctx=null),i.notify(this,"destroy"),delete t.instances[this.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){this.tooltip=new t.Tooltip({_chart:this,_chartInstance:this,_data:this.data,_options:this.options.tooltips},this),this.tooltip.initialize()},bindEvents:function(){var t=this,i=t._listeners={},a=function(){t.eventHandler.apply(t,arguments)};e.each(t.options.events,function(e){n.addEventListener(t,e,a),i[e]=a}),t.options.responsive&&(a=function(){t.resize()},n.addEventListener(t,"resize",a),i.resize=a)},unbindEvents:function(){var t=this,i=t._listeners;i&&(delete t._listeners,e.each(i,function(e,i){n.removeEventListener(t,i,e)}))},updateHoverStyle:function(t,e,i){var n,a,r,o=i?"setHoverStyle":"removeHoverStyle";for(a=0,r=t.length;a<r;++a)(n=t[a])&&this.getDatasetMeta(n._datasetIndex).controller[o](n)},eventHandler:function(t){var e=this.tooltip;if(!1!==i.notify(this,"beforeEvent",[t])){this._bufferedRender=!0,this._bufferedRequest=null;var n=this.handleEvent(t);n|=e&&e.handleEvent(t),i.notify(this,"afterEvent",[t]);var a=this._bufferedRequest;return a?this.render(a.duration,a.lazy):n&&!this.animating&&(this.stop(),this.render(this.options.hover.animationDuration,!0)),this._bufferedRender=!1,this._bufferedRequest=null,this}},handleEvent:function(t){var i,n=this.options||{},a=n.hover;return this.lastActive=this.lastActive||[],"mouseout"===t.type?this.active=[]:this.active=this.getElementsAtEventForMode(t,a.mode,a),a.onHover&&a.onHover.call(this,t.native,this.active),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(this,t.native,this.active),this.lastActive.length&&this.updateHoverStyle(this.lastActive,a.mode,!1),this.active.length&&a.mode&&this.updateHoverStyle(this.active,a.mode,!0),i=!e.arrayEquals(this.active,this.lastActive),this.lastActive=this.active,i}}),t.Controller=t}},{}],24:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=["push","pop","shift","splice","unshift"];function n(t,e){var n=t._chartjs;if(n){var a=n.listeners,r=a.indexOf(e);-1!==r&&a.splice(r,1),a.length>0||(i.forEach(function(e){delete t[e]}),delete t._chartjs)}}t.DatasetController=function(t,e){this.initialize(t,e)},e.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this.getMeta(),e=this.getDataset();null===t.xAxisID&&(t.xAxisID=e.xAxisID||this.chart.options.scales.xAxes[0].id),null===t.yAxisID&&(t.yAxisID=e.yAxisID||this.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&n(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,i=this.getMeta(),n=this.getDataset().data||[],a=i.data;for(t=0,e=n.length;t<e;++t)a[t]=a[t]||this.createMetaData(t);i.dataset=i.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,a,r=this.getDataset(),o=r.data||(r.data=[]);this._data!==o&&(this._data&&n(this._data,this),a=this,(t=o)._chartjs?t._chartjs.listeners.push(a):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[a]}}),i.forEach(function(i){var n="onData"+i.charAt(0).toUpperCase()+i.slice(1),a=t[i];Object.defineProperty(t,i,{configurable:!0,enumerable:!1,value:function(){var i=Array.prototype.slice.call(arguments),r=a.apply(this,i);return e.each(t._chartjs.listeners,function(t){"function"==typeof t[n]&&t[n].apply(t,i)}),r}})})),this._data=o),this.resyncElements()},update:e.noop,transition:function(t){for(var e=this.getMeta(),i=e.data||[],n=i.length,a=0;a<n;++a)i[a].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],i=e.length,n=0;for(t.dataset&&t.dataset.draw();n<i;++n)e[n].draw()},removeHoverStyle:function(t,i){var n=this.chart.data.datasets[t._datasetIndex],a=t._index,r=t.custom||{},o=e.getValueAtIndexOrDefault,s=t._model;s.backgroundColor=r.backgroundColor?r.backgroundColor:o(n.backgroundColor,a,i.backgroundColor),s.borderColor=r.borderColor?r.borderColor:o(n.borderColor,a,i.borderColor),s.borderWidth=r.borderWidth?r.borderWidth:o(n.borderWidth,a,i.borderWidth)},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},r=e.getValueAtIndexOrDefault,o=e.getHoverColor,s=t._model;s.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:r(i.hoverBackgroundColor,n,o(s.backgroundColor)),s.borderColor=a.hoverBorderColor?a.hoverBorderColor:r(i.hoverBorderColor,n,o(s.borderColor)),s.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:r(i.hoverBorderWidth,n,s.borderWidth)},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,i=t.data.length,n=e.length;n<i?t.data.splice(n,i-n):n>i&&this.insertElements(i,n-i)},insertElements:function(t,e){for(var i=0;i<e;++i)this.addElementAndReset(t+i)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=e.inherits}},{}],25:[function(t,e,i){"use strict";var n=t(3);e.exports=function(t){var e=t.helpers;t.elements={},t.Element=function(t){e.extend(this,t),this.initialize.apply(this,arguments)},e.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){return this._view||(this._view=e.clone(this._model)),this._start={},this},transition:function(t){var e=this._model,i=this._start,a=this._view;return e&&1!==t?(a||(a=this._view={}),i||(i=this._start={}),function(t,e,i,a){var r,o,s,l,u,d,h,c,f,p=Object.keys(i);for(r=0,o=p.length;r<o;++r)if(d=i[s=p[r]],e.hasOwnProperty(s)||(e[s]=d),(l=e[s])!==d&&"_"!==s[0]){if(t.hasOwnProperty(s)||(t[s]=l),(h=typeof d)==typeof(u=t[s]))if("string"===h){if((c=n(u)).valid&&(f=n(d)).valid){e[s]=f.mix(c,a).rgbString();continue}}else if("number"===h&&isFinite(u)&&isFinite(d)){e[s]=u+(d-u)*a;continue}e[s]=d}}(i,a,e,t),this):(this._view=e,this._start=null,this)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return e.isNumber(this._model.x)&&e.isNumber(this._model.y)}}),t.Element.extend=e.inherits}},{3:3}],26:[function(t,e,i){"use strict";var n=t(3);e.exports=function(t){var e,i=t.helpers={};i.each=function(t,e,n,a){var r,o;if(i.isArray(t))if(o=t.length,a)for(r=o-1;r>=0;r--)e.call(n,t[r],r);else for(r=0;r<o;r++)e.call(n,t[r],r);else if("object"==typeof t){var s=Object.keys(t);for(o=s.length,r=0;r<o;r++)e.call(n,t[s[r]],s[r])}},i.clone=function(t){var e={};return i.each(t,function(t,n){i.isArray(t)?e[n]=t.slice(0):e[n]="object"==typeof t&&null!==t?i.clone(t):t}),e},i.extend=function(t){for(var e=function(e,i){t[i]=e},n=1,a=arguments.length;n<a;n++)i.each(arguments[n],e);return t},i.configMerge=function(e){var n=i.clone(e);return i.each(Array.prototype.slice.call(arguments,1),function(e){i.each(e,function(e,a){var r=n.hasOwnProperty(a),o=r?n[a]:{};"scales"===a?n[a]=i.scaleMerge(o,e):"scale"===a?n[a]=i.configMerge(o,t.scaleService.getScaleDefaults(e.type),e):!r||"object"!=typeof o||i.isArray(o)||null===o||"object"!=typeof e||i.isArray(e)?n[a]=e:n[a]=i.configMerge(o,e)})}),n},i.scaleMerge=function(e,n){var a=i.clone(e);return i.each(n,function(e,n){"xAxes"===n||"yAxes"===n?a.hasOwnProperty(n)?i.each(e,function(e,r){var o=i.getValueOrDefault(e.type,"xAxes"===n?"category":"linear"),s=t.scaleService.getScaleDefaults(o);r>=a[n].length||!a[n][r].type?a[n].push(i.configMerge(s,e)):e.type&&e.type!==a[n][r].type?a[n][r]=i.configMerge(a[n][r],s,e):a[n][r]=i.configMerge(a[n][r],e)}):(a[n]=[],i.each(e,function(e){var r=i.getValueOrDefault(e.type,"xAxes"===n?"category":"linear");a[n].push(i.configMerge(t.scaleService.getScaleDefaults(r),e))})):a.hasOwnProperty(n)&&"object"==typeof a[n]&&null!==a[n]&&"object"==typeof e?a[n]=i.configMerge(a[n],e):a[n]=e}),a},i.getValueAtIndexOrDefault=function(t,e,n){return void 0===t||null===t?n:i.isArray(t)?e<t.length?t[e]:n:t},i.getValueOrDefault=function(t,e){return void 0===t?e:t},i.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;i<n;++i)if(t[i]===e)return i;return-1},i.where=function(t,e){if(i.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return i.each(t,function(t){e(t)&&n.push(t)}),n},i.findIndex=Array.prototype.findIndex?function(t,e,i){return t.findIndex(e,i)}:function(t,e,i){i=void 0===i?t:i;for(var n=0,a=t.length;n<a;++n)if(e.call(i,t[n],n,t))return n;return-1},i.findNextWhere=function(t,e,i){void 0!==i&&null!==i||(i=-1);for(var n=i+1;n<t.length;n++){var a=t[n];if(e(a))return a}},i.findPreviousWhere=function(t,e,i){void 0!==i&&null!==i||(i=t.length);for(var n=i-1;n>=0;n--){var a=t[n];if(e(a))return a}},i.inherits=function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},a=function(){this.constructor=n};return a.prototype=e.prototype,n.prototype=new a,n.extend=i.inherits,t&&i.extend(n.prototype,t),n.__super__=e.prototype,n},i.noop=function(){},i.uid=(e=0,function(){return e++}),i.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},i.almostEquals=function(t,e,i){return Math.abs(t-e)<i},i.almostWhole=function(t,e){var i=Math.round(t);return i-e<t&&i+e>t},i.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},i.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},i.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1},i.log10=Math.log10?function(t){return Math.log10(t)}:function(t){return Math.log(t)/Math.LN10},i.toRadians=function(t){return t*(Math.PI/180)},i.toDegrees=function(t){return t*(180/Math.PI)},i.getAngleFromPoint=function(t,e){var i=e.x-t.x,n=e.y-t.y,a=Math.sqrt(i*i+n*n),r=Math.atan2(n,i);return r<-.5*Math.PI&&(r+=2*Math.PI),{angle:r,distance:a}},i.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},i.aliasPixel=function(t){return t%2==0?0:.5},i.splineCurve=function(t,e,i,n){var a=t.skip?e:t,r=e,o=i.skip?e:i,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),d=l/(s+l),h=n*(u=isNaN(u)?0:u),c=n*(d=isNaN(d)?0:d);return{previous:{x:r.x-h*(o.x-a.x),y:r.y-h*(o.y-a.y)},next:{x:r.x+c*(o.x-a.x),y:r.y+c*(o.y-a.y)}}},i.EPSILON=Number.EPSILON||1e-14,i.splineCurveMonotone=function(t){var e,n,a,r,o,s,l,u,d,h=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),c=h.length;for(e=0;e<c;++e)if(!(a=h[e]).model.skip){if(n=e>0?h[e-1]:null,(r=e<c-1?h[e+1]:null)&&!r.model.skip){var f=r.model.x-a.model.x;a.deltaK=0!==f?(r.model.y-a.model.y)/f:0}!n||n.model.skip?a.mK=a.deltaK:!r||r.model.skip?a.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(a.deltaK)?a.mK=0:a.mK=(n.deltaK+a.deltaK)/2}for(e=0;e<c-1;++e)a=h[e],r=h[e+1],a.model.skip||r.model.skip||(i.almostEquals(a.deltaK,0,this.EPSILON)?a.mK=r.mK=0:(o=a.mK/a.deltaK,s=r.mK/a.deltaK,(u=Math.pow(o,2)+Math.pow(s,2))<=9||(l=3/Math.sqrt(u),a.mK=o*l*a.deltaK,r.mK=s*l*a.deltaK)));for(e=0;e<c;++e)(a=h[e]).model.skip||(n=e>0?h[e-1]:null,r=e<c-1?h[e+1]:null,n&&!n.model.skip&&(d=(a.model.x-n.model.x)/3,a.model.controlPointPreviousX=a.model.x-d,a.model.controlPointPreviousY=a.model.y-d*a.mK),r&&!r.model.skip&&(d=(r.model.x-a.model.x)/3,a.model.controlPointNextX=a.model.x+d,a.model.controlPointNextY=a.model.y+d*a.mK))},i.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},i.previousItem=function(t,e,i){return i?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},i.niceNum=function(t,e){var n=Math.floor(i.log10(t)),a=t/Math.pow(10,n);return(e?a<1.5?1:a<3?2:a<7?5:10:a<=1?1:a<=2?2:a<=5?5:10)*Math.pow(10,n)};var a=i.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(1-Math.pow(2,-10*t/1))},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1==(t/=1)?1:(i||(i=.3),n<Math.abs(1)?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),-n*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i))},easeOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1==(t/=1)?1:(i||(i=.3),n<Math.abs(1)?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:2==(t/=.5)?1:(i||(i=.3*1.5*1),n<Math.abs(1)?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),t<1?n*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){return 1*(t/=1)*t*(2.70158*t-1.70158)},easeOutBack:function(t){return 1*((t=t/1-1)*t*(2.70158*t+1.70158)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-a.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?7.5625*t*t*1:t<2/2.75?1*(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return t<.5?.5*a.easeInBounce(2*t):.5*a.easeOutBounce(2*t-1)+.5}};function r(t,e,i){var n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}function o(t){return void 0!==t&&null!==t&&"none"!==t}function s(t,e,i){var n=document.defaultView,a=t.parentNode,s=n.getComputedStyle(t)[e],l=n.getComputedStyle(a)[e],u=o(s),d=o(l),h=Number.POSITIVE_INFINITY;return u||d?Math.min(u?r(s,t,i):h,d?r(l,a,i):h):"none"}i.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},i.getRelativePosition=function(t,e){var n,a,r=t.originalEvent||t,o=t.currentTarget||t.srcElement,s=o.getBoundingClientRect(),l=r.touches;l&&l.length>0?(n=l[0].clientX,a=l[0].clientY):(n=r.clientX,a=r.clientY);var u=parseFloat(i.getStyle(o,"padding-left")),d=parseFloat(i.getStyle(o,"padding-top")),h=parseFloat(i.getStyle(o,"padding-right")),c=parseFloat(i.getStyle(o,"padding-bottom")),f=s.right-s.left-u-h,p=s.bottom-s.top-d-c;return{x:n=Math.round((n-s.left-u)/f*o.width/e.currentDevicePixelRatio),y:a=Math.round((a-s.top-d)/p*o.height/e.currentDevicePixelRatio)}},i.addEvent=function(t,e,i){t.addEventListener?t.addEventListener(e,i):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i},i.removeEvent=function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=i.noop},i.getConstraintWidth=function(t){return s(t,"max-width","clientWidth")},i.getConstraintHeight=function(t){return s(t,"max-height","clientHeight")},i.getMaximumWidth=function(t){var e=t.parentNode,n=parseInt(i.getStyle(e,"padding-left"),10),a=parseInt(i.getStyle(e,"padding-right"),10),r=e.clientWidth-n-a,o=i.getConstraintWidth(t);return isNaN(o)?r:Math.min(r,o)},i.getMaximumHeight=function(t){var e=t.parentNode,n=parseInt(i.getStyle(e,"padding-top"),10),a=parseInt(i.getStyle(e,"padding-bottom"),10),r=e.clientHeight-n-a,o=i.getConstraintHeight(t);return isNaN(o)?r:Math.min(r,o)},i.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},i.retinaScale=function(t){var e=t.currentDevicePixelRatio=window.devicePixelRatio||1;if(1!==e){var i=t.canvas,n=t.height,a=t.width;i.height=n*e,i.width=a*e,t.ctx.scale(e,e),i.style.height=n+"px",i.style.width=a+"px"}},i.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},i.fontString=function(t,e,i){return e+" "+t+"px "+i},i.longestText=function(t,e,n,a){var r=(a=a||{}).data=a.data||{},o=a.garbageCollect=a.garbageCollect||[];a.font!==e&&(r=a.data={},o=a.garbageCollect=[],a.font=e),t.font=e;var s=0;i.each(n,function(e){void 0!==e&&null!==e&&!0!==i.isArray(e)?s=i.measureText(t,r,o,s,e):i.isArray(e)&&i.each(e,function(e){void 0===e||null===e||i.isArray(e)||(s=i.measureText(t,r,o,s,e))})});var l=o.length/2;if(l>n.length){for(var u=0;u<l;u++)delete r[o[u]];o.splice(0,l)}return s},i.measureText=function(t,e,i,n,a){var r=e[a];return r||(r=e[a]=t.measureText(a).width,i.push(a)),r>n&&(n=r),n},i.numberOfLabelLines=function(t){var e=1;return i.each(t,function(t){i.isArray(t)&&t.length>e&&(e=t.length)}),e},i.drawRoundedRectangle=function(t,e,i,n,a,r){t.beginPath(),t.moveTo(e+r,i),t.lineTo(e+n-r,i),t.quadraticCurveTo(e+n,i,e+n,i+r),t.lineTo(e+n,i+a-r),t.quadraticCurveTo(e+n,i+a,e+n-r,i+a),t.lineTo(e+r,i+a),t.quadraticCurveTo(e,i+a,e,i+a-r),t.lineTo(e,i+r),t.quadraticCurveTo(e,i,e+r,i),t.closePath()},i.color=n?function(e){return e instanceof CanvasGradient&&(e=t.defaults.global.defaultColor),n(e)}:function(t){return console.error("Color.js not found!"),t},i.isArray=Array.isArray?function(t){return Array.isArray(t)}:function(t){return"[object Array]"===Object.prototype.toString.call(t)},i.arrayEquals=function(t,e){var n,a,r,o;if(!t||!e||t.length!==e.length)return!1;for(n=0,a=t.length;n<a;++n)if(r=t[n],o=e[n],r instanceof Array&&o instanceof Array){if(!i.arrayEquals(r,o))return!1}else if(r!==o)return!1;return!0},i.callback=function(t,e,i){t&&"function"==typeof t.call&&t.apply(i,e)},i.getHoverColor=function(t){return t instanceof CanvasPattern?t:i.color(t).saturate(.5).darken(.1).rgbString()},i.callCallback=i.callback}},{3:3}],27:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;function i(t,i){return t.native?{x:t.x,y:t.y}:e.getRelativePosition(t,i)}function n(t,e){var i,n,a,r,o;for(n=0,r=t.data.datasets.length;n<r;++n)if(t.isDatasetVisible(n))for(a=0,o=(i=t.getDatasetMeta(n)).data.length;a<o;++a){var s=i.data[a];s._view.skip||e(s)}}function a(t,e){var i=[];return n(t,function(t){t.inRange(e.x,e.y)&&i.push(t)}),i}function r(t,i,a,r){var o=Number.POSITIVE_INFINITY,s=[];return r||(r=e.distanceBetweenPoints),n(t,function(t){if(!a||t.inRange(i.x,i.y)){var e=t.getCenterPoint(),n=r(i,e);n<o?(s=[t],o=n):n===o&&s.push(t)}}),s}function o(t,e,n){var o=i(e,t),s=n.intersect?a(t,o):r(t,o,!1,function(t,e){return Math.abs(t.x-e.x)}),l=[];return s.length?(t.data.datasets.forEach(function(e,i){if(t.isDatasetVisible(i)){var n=t.getDatasetMeta(i).data[s[0]._index];n&&!n._view.skip&&l.push(n)}}),l):[]}t.Interaction={modes:{single:function(t,e){var a=i(e,t),r=[];return n(t,function(t){if(t.inRange(a.x,a.y))return r.push(t),r}),r.slice(0,1)},label:o,index:o,dataset:function(t,e,n){var o=i(e,t),s=n.intersect?a(t,o):r(t,o,!1);return s.length>0&&(s=t.getDatasetMeta(s[0]._datasetIndex).data),s},"x-axis":function(t,e){return o(t,e,!0)},point:function(t,e){return a(t,i(e,t))},nearest:function(t,e,n){var a=r(t,i(e,t),n.intersect);return a.length>1&&a.sort(function(t,e){var i=t.getArea()-e.getArea();return 0===i&&(i=t._datasetIndex-e._datasetIndex),i}),a.slice(0,1)},x:function(t,e,a){var r=i(e,t),o=[],s=!1;return n(t,function(t){t.inXRange(r.x)&&o.push(t),t.inRange(r.x,r.y)&&(s=!0)}),a.intersect&&!s&&(o=[]),o},y:function(t,e,a){var r=i(e,t),o=[],s=!1;return n(t,function(t){t.inYRange(r.y)&&o.push(t),t.inRange(r.x,r.y)&&(s=!0)}),a.intersect&&!s&&(o=[]),o}}}}},{}],28:[function(t,e,i){"use strict";e.exports=function(){var t=function(t,e){return this.construct(t,e),this};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var i=0;i<t.data.datasets.length;i++)e.push('<li><span style="background-color:'+t.data.datasets[i].backgroundColor+'"></span>'),t.data.datasets[i].label&&e.push(t.data.datasets[i].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t.Chart=t,t}},{}],29:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;function i(t,i){return e.where(t,function(t){return t.position===i})}function n(t,e){t.forEach(function(t,e){return t._tmpIndex_=e,t}),t.sort(function(t,i){var n=e?i:t,a=e?t:i;return n.weight===a.weight?n._tmpIndex_-a._tmpIndex_:n.weight-a.weight}),t.forEach(function(t){delete t._tmpIndex_})}t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},removeBox:function(t,e){var i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure:function(t,e,i){for(var n,a=["fullWidth","position","weight"],r=a.length,o=0;o<r;++o)n=a[o],i.hasOwnProperty(n)&&(e[n]=i[n])},update:function(t,a,r){if(t){var o=t.options.layout,s=o?o.padding:null,l=0,u=0,d=0,h=0;isNaN(s)?(l=s.left||0,u=s.right||0,d=s.top||0,h=s.bottom||0):(l=s,u=s,d=s,h=s);var c=i(t.boxes,"left"),f=i(t.boxes,"right"),p=i(t.boxes,"top"),g=i(t.boxes,"bottom"),m=i(t.boxes,"chartArea");n(c,!0),n(f,!1),n(p,!0),n(g,!1);var v=a-l-u,b=r-d-h,y=b/2,x=(a-v/2)/(c.length+f.length),w=(r-y)/(p.length+g.length),k=v,S=b,C=[];e.each(c.concat(f,p,g),function(t){var e,i=t.isHorizontal();i?(e=t.update(t.fullWidth?v:k,w),S-=e.height):(e=t.update(x,y),k-=e.width),C.push({horizontal:i,minSize:e,box:t})});var M=0,P=0,A=0,I=0;e.each(p.concat(g),function(t){if(t.getPadding){var e=t.getPadding();M=Math.max(M,e.left),P=Math.max(P,e.right)}}),e.each(c.concat(f),function(t){if(t.getPadding){var e=t.getPadding();A=Math.max(A,e.top),I=Math.max(I,e.bottom)}});var T=l,D=u,F=d,V=h;e.each(c.concat(f),N),e.each(c,function(t){T+=t.width}),e.each(f,function(t){D+=t.width}),e.each(p.concat(g),N),e.each(p,function(t){F+=t.height}),e.each(g,function(t){V+=t.height}),e.each(c.concat(f),function(t){var i=e.findNextWhere(C,function(e){return e.box===t}),n={left:0,right:0,top:F,bottom:V};i&&t.update(i.minSize.width,S,n)}),T=l,D=u,F=d,V=h,e.each(c,function(t){T+=t.width}),e.each(f,function(t){D+=t.width}),e.each(p,function(t){F+=t.height}),e.each(g,function(t){V+=t.height});var _=Math.max(M-T,0);T+=_,D+=Math.max(P-D,0);var L=Math.max(A-F,0);F+=L,V+=Math.max(I-V,0);var O=r-F-V,R=a-T-D;R===k&&O===S||(e.each(c,function(t){t.height=O}),e.each(f,function(t){t.height=O}),e.each(p,function(t){t.fullWidth||(t.width=R)}),e.each(g,function(t){t.fullWidth||(t.width=R)}),S=O,k=R);var z=l+_,E=d+L;e.each(c.concat(p),B),z+=k,E+=S,e.each(f,B),e.each(g,B),t.chartArea={left:T,top:F,right:T+k,bottom:F+S},e.each(m,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(k,S)})}function N(t){var i=e.findNextWhere(C,function(e){return e.box===t});if(i)if(t.isHorizontal()){var n={left:Math.max(T,M),right:Math.max(D,P),top:0,bottom:0};t.update(t.fullWidth?v:k,b/2,n)}else t.update(i.minSize.width,S)}function B(t){t.isHorizontal()?(t.left=t.fullWidth?l:T,t.right=t.fullWidth?a-u:T+k,t.top=E,t.bottom=E+t.height,E=t.bottom):(t.left=z,t.right=z+t.width,t.top=F,t.bottom=F+S,z=t.right)}}}}},{}],30:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.plugins={},t.plugins={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)}),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var i=e.indexOf(t);-1!==i&&e.splice(i,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,i){var n,a,r,o,s,l=this.descriptors(t),u=l.length;for(n=0;n<u;++n)if("function"==typeof(s=(r=(a=l[n]).plugin)[e])&&((o=[t].concat(i||[])).push(a.options),!1===s.apply(r,o)))return!1;return!0},descriptors:function(i){var n=i._plugins||(i._plugins={});if(n.id===this._cacheId)return n.descriptors;var a=[],r=[],o=i&&i.config||{},s=t.defaults.global.plugins,l=o.options&&o.options.plugins||{};return this._plugins.concat(o.plugins||[]).forEach(function(t){if(-1===a.indexOf(t)){var i=t.id,n=l[i];!1!==n&&(!0===n&&(n=e.clone(s[i])),a.push(t),r.push({plugin:t,options:n||{}}))}}),n.descriptors=r,n.id=this._cacheId,r}},t.pluginService=t.plugins,t.PluginBase=t.Element.extend({})}},{}],31:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;function i(t,i,n){return e.isArray(i)?e.longestText(t,n,i):t.measureText(i).width}function n(i){var n=e.getValueOrDefault,a=t.defaults.global,r=n(i.fontSize,a.defaultFontSize),o=n(i.fontStyle,a.defaultFontStyle),s=n(i.fontFamily,a.defaultFontFamily);return{size:r,style:o,family:s,font:e.fontString(r,o,s)}}t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:t.Ticks.formatters.values}},t.Scale=t.Element.extend({getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},beforeUpdate:function(){e.callback(this.options.beforeUpdate,[this])},update:function(t,i,n){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=i,this.margins=e.extend({left:0,right:0,top:0,bottom:0},n),this.longestTextCache=this.longestTextCache||{},this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this.beforeBuildTicks(),this.buildTicks(),this.afterBuildTicks(),this.beforeTickToLabelConversion(),this.convertTicksToLabels(),this.afterTickToLabelConversion(),this.beforeCalculateTickRotation(),this.calculateTickRotation(),this.afterCalculateTickRotation(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:function(){e.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){e.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0},afterSetDimensions:function(){e.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){e.callback(this.options.beforeDataLimits,[this])},determineDataLimits:e.noop,afterDataLimits:function(){e.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){e.callback(this.options.beforeBuildTicks,[this])},buildTicks:e.noop,afterBuildTicks:function(){e.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){e.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback)},afterTickToLabelConversion:function(){e.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){e.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this.ctx,i=this.options.ticks,a=n(i);t.font=a.font;var r=i.minRotation||0;if(this.options.display&&this.isHorizontal())for(var o,s=e.longestText(t,a.font,this.ticks,this.longestTextCache),l=s,u=this.getPixelForTick(1)-this.getPixelForTick(0)-6;l>u&&r<i.maxRotation;){var d=e.toRadians(r);if(o=Math.cos(d),Math.sin(d)*s>this.maxHeight){r--;break}r++,l=o*s}this.labelRotation=r},afterCalculateTickRotation:function(){e.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){e.callback(this.options.beforeFit,[this])},fit:function(){var t=this.minSize={width:0,height:0},a=this.options,r=a.ticks,o=a.scaleLabel,s=a.gridLines,l=a.display,u=this.isHorizontal(),d=n(r),h=1.5*n(o).size,c=a.gridLines.tickMarkLength;if(t.width=u?this.isFullWidth()?this.maxWidth-this.margins.left-this.margins.right:this.maxWidth:l&&s.drawTicks?c:0,t.height=u?l&&s.drawTicks?c:0:this.maxHeight,o.display&&l&&(u?t.height+=h:t.width+=h),r.display&&l){var f=e.longestText(this.ctx,d.font,this.ticks,this.longestTextCache),p=e.numberOfLabelLines(this.ticks),g=.5*d.size;if(u){this.longestLabelWidth=f;var m=e.toRadians(this.labelRotation),v=Math.cos(m),b=Math.sin(m)*f+d.size*p+g*p;t.height=Math.min(this.maxHeight,t.height+b),this.ctx.font=d.font;var y=this.ticks[0],x=i(this.ctx,y,d.font),w=this.ticks[this.ticks.length-1],k=i(this.ctx,w,d.font);0!==this.labelRotation?(this.paddingLeft="bottom"===a.position?v*x+3:v*g+3,this.paddingRight="bottom"===a.position?v*g+3:v*k+3):(this.paddingLeft=x/2+3,this.paddingRight=k/2+3)}else r.mirror?f=0:f+=this.options.ticks.padding,t.width=Math.min(this.maxWidth,t.width+f),this.paddingTop=d.size/2,this.paddingBottom=d.size/2}this.handleMargins(),this.width=t.width,this.height=t.height},handleMargins:function(){this.margins&&(this.paddingLeft=Math.max(this.paddingLeft-this.margins.left,0),this.paddingTop=Math.max(this.paddingTop-this.margins.top,0),this.paddingRight=Math.max(this.paddingRight-this.margins.right,0),this.paddingBottom=Math.max(this.paddingBottom-this.margins.bottom,0))},afterFit:function(){e.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){return null===t||void 0===t?NaN:"number"!=typeof t||isFinite(t)?"object"==typeof t?t instanceof Date||t.isValid?t:this.getRightValue(this.isHorizontal()?t.x:t.y):t:NaN},getLabelForIndex:e.noop,getPixelForValue:e.noop,getValueForPixel:e.noop,getPixelForTick:function(t,e){if(this.isHorizontal()){var i=(this.width-(this.paddingLeft+this.paddingRight))/Math.max(this.ticks.length-(this.options.gridLines.offsetGridLines?0:1),1),n=i*t+this.paddingLeft;e&&(n+=i/2);var a=this.left+Math.round(n);return a+=this.isFullWidth()?this.margins.left:0}var r=this.height-(this.paddingTop+this.paddingBottom);return this.top+t*(r/(this.ticks.length-1))},getPixelForDecimal:function(t){if(this.isHorizontal()){var e=(this.width-(this.paddingLeft+this.paddingRight))*t+this.paddingLeft,i=this.left+Math.round(e);return i+=this.isFullWidth()?this.margins.left:0}return this.top+t*this.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},draw:function(i){var a=this,r=a.options;if(r.display){var o,s,l=a.ctx,u=t.defaults.global,d=r.ticks,h=r.gridLines,c=r.scaleLabel,f=0!==a.labelRotation,p=d.autoSkip,g=a.isHorizontal();d.maxTicksLimit&&(s=d.maxTicksLimit);var m=e.getValueOrDefault(d.fontColor,u.defaultFontColor),v=n(d),b=h.drawTicks?h.tickMarkLength:0,y=e.getValueOrDefault(c.fontColor,u.defaultFontColor),x=n(c),w=e.toRadians(a.labelRotation),k=Math.cos(w),S=a.longestLabelWidth*k;l.fillStyle=m;var C=[];if(g){if(o=!1,(S+d.autoSkipPadding)*a.ticks.length>a.width-(a.paddingLeft+a.paddingRight)&&(o=1+Math.floor((S+d.autoSkipPadding)*a.ticks.length/(a.width-(a.paddingLeft+a.paddingRight)))),s&&a.ticks.length>s)for(;!o||a.ticks.length/(o||1)>s;)o||(o=1),o+=1;p||(o=!1)}var M="right"===r.position?a.left:a.right-b,P="right"===r.position?a.left+b:a.right,A="bottom"===r.position?a.top:a.bottom-b,I="bottom"===r.position?a.top+b:a.bottom;if(e.each(a.ticks,function(t,n){if(void 0!==t&&null!==t){var s=a.ticks.length===n+1;if((!(o>1&&n%o>0||n%o==0&&n+o>=a.ticks.length)||s)&&void 0!==t&&null!==t){var l,c,p,m,v,y,x,k,S,T,D,F,V,_;n===(void 0!==a.zeroLineIndex?a.zeroLineIndex:0)?(l=h.zeroLineWidth,c=h.zeroLineColor,p=h.zeroLineBorderDash,m=h.zeroLineBorderDashOffset):(l=e.getValueAtIndexOrDefault(h.lineWidth,n),c=e.getValueAtIndexOrDefault(h.color,n),p=e.getValueOrDefault(h.borderDash,u.borderDash),m=e.getValueOrDefault(h.borderDashOffset,u.borderDashOffset));var L="middle",O="middle";if(g){"bottom"===r.position?(O=f?"middle":"top",L=f?"right":"center",_=a.top+b):(O=f?"middle":"bottom",L=f?"left":"center",_=a.bottom-b);var R=a.getPixelForTick(n)+e.aliasPixel(l);V=a.getPixelForTick(n,h.offsetGridLines)+d.labelOffset,v=x=S=D=R,y=A,k=I,T=i.top,F=i.bottom}else{var z,E="left"===r.position,N=d.padding;d.mirror?(L=E?"left":"right",z=N):(L=E?"right":"left",z=b+N),V=E?a.right-z:a.left+z;var B=a.getPixelForTick(n);B+=e.aliasPixel(l),_=a.getPixelForTick(n,h.offsetGridLines),v=M,x=P,S=i.left,D=i.right,y=k=T=F=B}C.push({tx1:v,ty1:y,tx2:x,ty2:k,x1:S,y1:T,x2:D,y2:F,labelX:V,labelY:_,glWidth:l,glColor:c,glBorderDash:p,glBorderDashOffset:m,rotation:-1*w,label:t,textBaseline:O,textAlign:L})}}}),e.each(C,function(t){if(h.display&&(l.save(),l.lineWidth=t.glWidth,l.strokeStyle=t.glColor,l.setLineDash&&(l.setLineDash(t.glBorderDash),l.lineDashOffset=t.glBorderDashOffset),l.beginPath(),h.drawTicks&&(l.moveTo(t.tx1,t.ty1),l.lineTo(t.tx2,t.ty2)),h.drawOnChartArea&&(l.moveTo(t.x1,t.y1),l.lineTo(t.x2,t.y2)),l.stroke(),l.restore()),d.display){l.save(),l.translate(t.labelX,t.labelY),l.rotate(t.rotation),l.font=v.font,l.textBaseline=t.textBaseline,l.textAlign=t.textAlign;var i=t.label;if(e.isArray(i))for(var n=0,a=0;n<i.length;++n)l.fillText(""+i[n],0,a),a+=1.5*v.size;else l.fillText(i,0,0);l.restore()}}),c.display){var T,D,F=0;if(g)T=a.left+(a.right-a.left)/2,D="bottom"===r.position?a.bottom-x.size/2:a.top+x.size/2;else{var V="left"===r.position;T=V?a.left+x.size/2:a.right-x.size/2,D=a.top+(a.bottom-a.top)/2,F=V?-.5*Math.PI:.5*Math.PI}l.save(),l.translate(T,D),l.rotate(F),l.textAlign="center",l.textBaseline="middle",l.fillStyle=y,l.font=x.font,l.fillText(c.labelString,0,0),l.restore()}if(h.drawBorder){l.lineWidth=e.getValueAtIndexOrDefault(h.lineWidth,0),l.strokeStyle=e.getValueAtIndexOrDefault(h.color,0);var _=a.left,L=a.right,O=a.top,R=a.bottom,z=e.aliasPixel(l.lineWidth);g?(O=R="top"===r.position?a.bottom:a.top,O+=z,R+=z):(_=L="left"===r.position?a.right:a.left,_+=z,L+=z),l.beginPath(),l.moveTo(_,O),l.lineTo(L,R),l.stroke()}}}})}},{}],32:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,i,n){this.constructors[t]=i,this.defaults[t]=e.clone(n)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(i){return this.defaults.hasOwnProperty(i)?e.scaleMerge(t.defaults.scale,this.defaults[i]):{}},updateScaleDefaults:function(t,i){var n=this.defaults;n.hasOwnProperty(t)&&(n[t]=e.extend(n[t],i))},addScalesToLayout:function(i){e.each(i.scales,function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,t.layoutService.addBox(i,e)})}}}},{}],33:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.Ticks={generators:{linear:function(t,i){var n,a=[];if(t.stepSize&&t.stepSize>0)n=t.stepSize;else{var r=e.niceNum(i.max-i.min,!1);n=e.niceNum(r/(t.maxTicks-1),!0)}var o=Math.floor(i.min/n)*n,s=Math.ceil(i.max/n)*n;t.min&&t.max&&t.stepSize&&e.almostWhole((t.max-t.min)/t.stepSize,n/1e3)&&(o=t.min,s=t.max);var l=(s-o)/n;l=e.almostEquals(l,Math.round(l),n/1e3)?Math.round(l):Math.ceil(l),a.push(void 0!==t.min?t.min:o);for(var u=1;u<l;++u)a.push(o+u*n);return a.push(void 0!==t.max?t.max:s),a},logarithmic:function(t,i){var n,a,r=[],o=e.getValueOrDefault,s=o(t.min,Math.pow(10,Math.floor(e.log10(i.min)))),l=Math.floor(e.log10(i.max)),u=Math.ceil(i.max/Math.pow(10,l));0===s?(n=Math.floor(e.log10(i.minNotZero)),a=Math.floor(i.minNotZero/Math.pow(10,n)),r.push(s),s=a*Math.pow(10,n)):(n=Math.floor(e.log10(s)),a=Math.floor(s/Math.pow(10,n)));do{r.push(s),10===++a&&(a=1,++n),s=a*Math.pow(10,n)}while(n<l||n===l&&a<u);var d=o(t.max,s);return r.push(d),r}},formatters:{values:function(t){return e.isArray(t)?t:""+t},linear:function(t,i,n){var a=n.length>3?n[2]-n[1]:n[1]-n[0];Math.abs(a)>1&&t!==Math.floor(t)&&(a=t-Math.floor(t));var r=e.log10(Math.abs(a)),o="";if(0!==t){var s=-1*Math.floor(r);s=Math.max(Math.min(s,20),0),o=t.toFixed(s)}else o="0";return o},logarithmic:function(t,i,n){var a=t/Math.pow(10,Math.floor(e.log10(t)));return 0===t?"0":1===a||2===a||5===a||0===i||i===n.length-1?t.toExponential():""}}}}},{}],34:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;function i(t,i){var n=e.color(t);return n.alpha(i*n.alpha()).rgbaString()}function n(t,i){return i&&(e.isArray(i)?Array.prototype.push.apply(t,i):t.push(i)),t}function a(i){var n=t.defaults.global,a=e.getValueOrDefault;return{xPadding:i.xPadding,yPadding:i.yPadding,xAlign:i.xAlign,yAlign:i.yAlign,bodyFontColor:i.bodyFontColor,_bodyFontFamily:a(i.bodyFontFamily,n.defaultFontFamily),_bodyFontStyle:a(i.bodyFontStyle,n.defaultFontStyle),_bodyAlign:i.bodyAlign,bodyFontSize:a(i.bodyFontSize,n.defaultFontSize),bodySpacing:i.bodySpacing,titleFontColor:i.titleFontColor,_titleFontFamily:a(i.titleFontFamily,n.defaultFontFamily),_titleFontStyle:a(i.titleFontStyle,n.defaultFontStyle),titleFontSize:a(i.titleFontSize,n.defaultFontSize),_titleAlign:i.titleAlign,titleSpacing:i.titleSpacing,titleMarginBottom:i.titleMarginBottom,footerFontColor:i.footerFontColor,_footerFontFamily:a(i.footerFontFamily,n.defaultFontFamily),_footerFontStyle:a(i.footerFontStyle,n.defaultFontStyle),footerFontSize:a(i.footerFontSize,n.defaultFontSize),_footerAlign:i.footerAlign,footerSpacing:i.footerSpacing,footerMarginTop:i.footerMarginTop,caretSize:i.caretSize,cornerRadius:i.cornerRadius,backgroundColor:i.backgroundColor,opacity:0,legendColorBackground:i.multiKeyBackground,displayColors:i.displayColors,borderColor:i.borderColor,borderWidth:i.borderWidth}}t.defaults.global.tooltips={enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:e.noop,title:function(t,e){var i="",n=e.labels,a=n?n.length:0;if(t.length>0){var r=t[0];r.xLabel?i=r.xLabel:a>0&&r.index<a&&(i=n[r.index])}return i},afterTitle:e.noop,beforeBody:e.noop,beforeLabel:e.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i&&(i+=": "),i+=t.yLabel},labelColor:function(t,e){var i=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:i.borderColor,backgroundColor:i.backgroundColor}},afterLabel:e.noop,afterBody:e.noop,beforeFooter:e.noop,footer:e.noop,afterFooter:e.noop}},t.Tooltip=t.Element.extend({initialize:function(){this._model=a(this._options)},getTitle:function(){var t=this._options.callbacks,e=t.beforeTitle.apply(this,arguments),i=t.title.apply(this,arguments),a=t.afterTitle.apply(this,arguments),r=[];return r=n(r=n(r=n(r,e),i),a)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return e.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,i){var a=this,r=a._options.callbacks,o=[];return e.each(t,function(t){var e={before:[],lines:[],after:[]};n(e.before,r.beforeLabel.call(a,t,i)),n(e.lines,r.label.call(a,t,i)),n(e.after,r.afterLabel.call(a,t,i)),o.push(e)}),o},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return e.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this._options.callbacks,e=t.beforeFooter.apply(this,arguments),i=t.footer.apply(this,arguments),a=t.afterFooter.apply(this,arguments),r=[];return r=n(r=n(r=n(r,e),i),a)},update:function(i){var n,r,o,s,l,u,d,h,c,f,p,g,m,v,b,y,x,w,k,S=this,C=S._options,M=S._model,P=S._model=a(C),A=S._active,I=S._data,T={xAlign:M.xAlign,yAlign:M.yAlign},D={x:M.x,y:M.y},F={width:M.width,height:M.height},V={x:M.caretX,y:M.caretY};if(A.length){P.opacity=1;var _=[];V=t.Tooltip.positioners[C.position](A,S._eventPosition);var L=[];for(n=0,r=A.length;n<r;++n)L.push((b=A[n],y=void 0,x=void 0,void 0,void 0,y=b._xScale,x=b._yScale||b._scale,w=b._index,k=b._datasetIndex,{xLabel:y?y.getLabelForIndex(w,k):"",yLabel:x?x.getLabelForIndex(w,k):"",index:w,datasetIndex:k,x:b._model.x,y:b._model.y}));C.filter&&(L=L.filter(function(t){return C.filter(t,I)})),C.itemSort&&(L=L.sort(function(t,e){return C.itemSort(t,e,I)})),e.each(L,function(t){_.push(C.callbacks.labelColor.call(S,t,S._chart))}),P.title=S.getTitle(L,I),P.beforeBody=S.getBeforeBody(L,I),P.body=S.getBody(L,I),P.afterBody=S.getAfterBody(L,I),P.footer=S.getFooter(L,I),P.x=Math.round(V.x),P.y=Math.round(V.y),P.caretPadding=C.caretPadding,P.labelColors=_,P.dataPoints=L,T=function(t,e){var i,n,a,r,o,s=t._model,l=t._chart,u=t._chart.chartArea,d="center",h="center";s.y<e.height?h="top":s.y>l.height-e.height&&(h="bottom");var c=(u.left+u.right)/2,f=(u.top+u.bottom)/2;"center"===h?(i=function(t){return t<=c},n=function(t){return t>c}):(i=function(t){return t<=e.width/2},n=function(t){return t>=l.width-e.width/2}),a=function(t){return t+e.width>l.width},r=function(t){return t-e.width<0},o=function(t){return t<=f?"top":"bottom"},i(s.x)?(d="left",a(s.x)&&(d="center",h=o(s.y))):n(s.x)&&(d="right",r(s.x)&&(d="center",h=o(s.y)));var p=t._options;return{xAlign:p.xAlign?p.xAlign:d,yAlign:p.yAlign?p.yAlign:h}}(this,F=function(t,i){var n=t._chart.ctx,a=2*i.yPadding,r=0,o=i.body,s=o.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);s+=i.beforeBody.length+i.afterBody.length;var l=i.title.length,u=i.footer.length,d=i.titleFontSize,h=i.bodyFontSize,c=i.footerFontSize;a+=l*d,a+=l?(l-1)*i.titleSpacing:0,a+=l?i.titleMarginBottom:0,a+=s*h,a+=s?(s-1)*i.bodySpacing:0,a+=u?i.footerMarginTop:0,a+=u*c,a+=u?(u-1)*i.footerSpacing:0;var f=0,p=function(t){r=Math.max(r,n.measureText(t).width+f)};return n.font=e.fontString(d,i._titleFontStyle,i._titleFontFamily),e.each(i.title,p),n.font=e.fontString(h,i._bodyFontStyle,i._bodyFontFamily),e.each(i.beforeBody.concat(i.afterBody),p),f=i.displayColors?h+2:0,e.each(o,function(t){e.each(t.before,p),e.each(t.lines,p),e.each(t.after,p)}),f=0,n.font=e.fontString(c,i._footerFontStyle,i._footerFontFamily),e.each(i.footer,p),{width:r+=2*i.xPadding,height:a}}(this,P)),s=F,l=T,u=(o=P).x,d=o.y,h=o.caretSize,c=o.caretPadding,f=o.cornerRadius,p=l.xAlign,g=l.yAlign,m=h+c,v=f+c,"right"===p?u-=s.width:"center"===p&&(u-=s.width/2),"top"===g?d+=m:d-="bottom"===g?s.height+m:s.height/2,"center"===g?"left"===p?u+=m:"right"===p&&(u-=m):"left"===p?u-=v:"right"===p&&(u+=v),D={x:u,y:d}}else P.opacity=0;return P.xAlign=T.xAlign,P.yAlign=T.yAlign,P.x=D.x,P.y=D.y,P.width=F.width,P.height=F.height,P.caretX=V.x,P.caretY=V.y,S._model=P,i&&C.custom&&C.custom.call(S,P),S},drawCaret:function(t,e){var i=this._chart.ctx,n=this._view,a=this.getCaretPosition(t,e,n);i.lineTo(a.x1,a.y1),i.lineTo(a.x2,a.y2),i.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,i){var n,a,r,o,s,l,u=i.caretSize,d=i.cornerRadius,h=i.xAlign,c=i.yAlign,f=t.x,p=t.y,g=e.width,m=e.height;if("center"===c)s=p+m/2,"left"===h?(a=(n=f)-u,r=n,o=s+u,l=s-u):(a=(n=f+g)+u,r=n,o=s-u,l=s+u);else if("left"===h?(n=(a=f+d+u)-u,r=a+u):"right"===h?(n=(a=f+g-d-u)-u,r=a+u):(n=(a=f+g/2)-u,r=a+u),"top"===c)s=(o=p)-u,l=o;else{s=(o=p+m)+u,l=o;var v=r;r=n,n=v}return{x1:n,x2:a,x3:r,y1:o,y2:s,y3:l}},drawTitle:function(t,n,a,r){var o=n.title;if(o.length){a.textAlign=n._titleAlign,a.textBaseline="top";var s,l,u=n.titleFontSize,d=n.titleSpacing;for(a.fillStyle=i(n.titleFontColor,r),a.font=e.fontString(u,n._titleFontStyle,n._titleFontFamily),s=0,l=o.length;s<l;++s)a.fillText(o[s],t.x,t.y),t.y+=u+d,s+1===o.length&&(t.y+=n.titleMarginBottom-d)}},drawBody:function(t,n,a,r){var o=n.bodyFontSize,s=n.bodySpacing,l=n.body;a.textAlign=n._bodyAlign,a.textBaseline="top";var u=i(n.bodyFontColor,r);a.fillStyle=u,a.font=e.fontString(o,n._bodyFontStyle,n._bodyFontFamily);var d=0,h=function(e){a.fillText(e,t.x+d,t.y),t.y+=o+s};e.each(n.beforeBody,h);var c=n.displayColors;d=c?o+2:0,e.each(l,function(s,l){e.each(s.before,h),e.each(s.lines,function(e){c&&(a.fillStyle=i(n.legendColorBackground,r),a.fillRect(t.x,t.y,o,o),a.strokeStyle=i(n.labelColors[l].borderColor,r),a.strokeRect(t.x,t.y,o,o),a.fillStyle=i(n.labelColors[l].backgroundColor,r),a.fillRect(t.x+1,t.y+1,o-2,o-2),a.fillStyle=u),h(e)}),e.each(s.after,h)}),d=0,e.each(n.afterBody,h),t.y-=s},drawFooter:function(t,n,a,r){var o=n.footer;o.length&&(t.y+=n.footerMarginTop,a.textAlign=n._footerAlign,a.textBaseline="top",a.fillStyle=i(n.footerFontColor,r),a.font=e.fontString(n.footerFontSize,n._footerFontStyle,n._footerFontFamily),e.each(o,function(e){a.fillText(e,t.x,t.y),t.y+=n.footerFontSize+n.footerSpacing}))},drawBackground:function(t,e,n,a,r){n.fillStyle=i(e.backgroundColor,r),n.strokeStyle=i(e.borderColor,r),n.lineWidth=e.borderWidth;var o=e.xAlign,s=e.yAlign,l=t.x,u=t.y,d=a.width,h=a.height,c=e.cornerRadius;n.beginPath(),n.moveTo(l+c,u),"top"===s&&this.drawCaret(t,a),n.lineTo(l+d-c,u),n.quadraticCurveTo(l+d,u,l+d,u+c),"center"===s&&"right"===o&&this.drawCaret(t,a),n.lineTo(l+d,u+h-c),n.quadraticCurveTo(l+d,u+h,l+d-c,u+h),"bottom"===s&&this.drawCaret(t,a),n.lineTo(l+c,u+h),n.quadraticCurveTo(l,u+h,l,u+h-c),"center"===s&&"left"===o&&this.drawCaret(t,a),n.lineTo(l,u+c),n.quadraticCurveTo(l,u,l+c,u),n.closePath(),n.fill(),e.borderWidth>0&&n.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var i={width:e.width,height:e.height},n={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,r=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&r&&(this.drawBackground(n,e,t,i,a),n.x+=e.xPadding,n.y+=e.yPadding,this.drawTitle(n,e,t,a),this.drawBody(n,e,t,a),this.drawFooter(n,e,t,a))}},handleEvent:function(t){var i=this._options,n=!1;if(this._lastActive=this._lastActive||[],"mouseout"===t.type?this._active=[]:this._active=this._chart.getElementsAtEventForMode(t,i.mode,i),!(n=!e.arrayEquals(this._active,this._lastActive)))return!1;if(this._lastActive=this._active,i.enabled||i.custom){this._eventPosition={x:t.x,y:t.y};var a=this._model;this.update(!0),this.pivot(),n|=a.x!==this._model.x||a.y!==this._model.y}return n}}),t.Tooltip.positioners={average:function(t){if(!t.length)return!1;var e,i,n=0,a=0,r=0;for(e=0,i=t.length;e<i;++e){var o=t[e];if(o&&o.hasValue()){var s=o.tooltipPosition();n+=s.x,a+=s.y,++r}}return{x:Math.round(n/r),y:Math.round(a/r)}},nearest:function(t,i){var n,a,r,o=i.x,s=i.y,l=Number.POSITIVE_INFINITY;for(a=0,r=t.length;a<r;++a){var u=t[a];if(u&&u.hasValue()){var d=u.getCenterPoint(),h=e.distanceBetweenPoints(i,d);h<l&&(l=h,n=u)}}if(n){var c=n.tooltipPosition();o=c.x,s=c.y}return{x:o,y:s}}}}},{}],35:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global;i.elements.arc={backgroundColor:i.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,i){var n=this._view;if(n){for(var a=e.getAngleFromPoint(n,{x:t,y:i}),r=a.angle,o=a.distance,s=n.startAngle,l=n.endAngle;l<s;)l+=2*Math.PI;for(;r>l;)r-=2*Math.PI;for(;r<s;)r+=2*Math.PI;var u=r>=s&&r<=l,d=o>=n.innerRadius&&o<=n.outerRadius;return u&&d}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,i=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t=this._chart.ctx,e=this._view,i=e.startAngle,n=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,i,n),t.arc(e.x,e.y,e.innerRadius,n,i,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],36:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global;t.defaults.global.elements.line={tension:.4,backgroundColor:i.defaultColor,borderWidth:3,borderColor:i.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0},t.elements.Line=t.Element.extend({draw:function(){var t,n,a,r,o=this._view,s=this._chart.ctx,l=o.spanGaps,u=this._children.slice(),d=i.elements.line,h=-1;for(this._loop&&u.length&&u.push(u[0]),s.save(),s.lineCap=o.borderCapStyle||d.borderCapStyle,s.setLineDash&&s.setLineDash(o.borderDash||d.borderDash),s.lineDashOffset=o.borderDashOffset||d.borderDashOffset,s.lineJoin=o.borderJoinStyle||d.borderJoinStyle,s.lineWidth=o.borderWidth||d.borderWidth,s.strokeStyle=o.borderColor||i.defaultColor,s.beginPath(),h=-1,t=0;t<u.length;++t)n=u[t],a=e.previousItem(u,t),r=n._view,0===t?r.skip||(s.moveTo(r.x,r.y),h=t):(a=-1===h?a:u[h],r.skip||(h!==t-1&&!l||-1===h?s.moveTo(r.x,r.y):e.canvas.lineTo(s,a._view,n._view),h=t));s.stroke(),s.restore()}})}},{}],37:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global,n=i.defaultColor;function a(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2)}i.elements.point={radius:3,pointStyle:"circle",backgroundColor:n,borderWidth:1,borderColor:n,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var i=this._view;return!!i&&Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2)},inLabelRange:a,inXRange:a,inYRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.y,2)<Math.pow(e.radius+e.hitRadius,2)},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(a){var r=this._view,o=this._model,s=this._chart.ctx,l=r.pointStyle,u=r.radius,d=r.x,h=r.y,c=t.helpers.color,f=0;r.skip||(s.strokeStyle=r.borderColor||n,s.lineWidth=e.getValueOrDefault(r.borderWidth,i.elements.point.borderWidth),s.fillStyle=r.backgroundColor||n,void 0!==a&&(o.x<a.left||1.01*a.right<o.x||o.y<a.top||1.01*a.bottom<o.y)&&(o.x<a.left?f=(d-o.x)/(a.left-o.x):1.01*a.right<o.x?f=(o.x-d)/(o.x-a.right):o.y<a.top?f=(h-o.y)/(a.top-o.y):1.01*a.bottom<o.y&&(f=(o.y-h)/(o.y-a.bottom)),f=Math.round(100*f)/100,s.strokeStyle=c(s.strokeStyle).alpha(f).rgbString(),s.fillStyle=c(s.fillStyle).alpha(f).rgbString()),t.canvasHelpers.drawPoint(s,l,u,d,h))}})}},{}],38:[function(t,e,i){"use strict";e.exports=function(t){var e=t.defaults.global;function i(t){return void 0!==t._view.width}function n(t){var e,n,a,r,o=t._view;if(i(t)){var s=o.width/2;e=o.x-s,n=o.x+s,a=Math.min(o.y,o.base),r=Math.max(o.y,o.base)}else{var l=o.height/2;e=Math.min(o.x,o.base),n=Math.max(o.x,o.base),a=o.y-l,r=o.y+l}return{left:e,top:a,right:n,bottom:r}}e.elements.rectangle={backgroundColor:e.defaultColor,borderWidth:0,borderColor:e.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){var t,e,i,n,a,r,o,s=this._chart.ctx,l=this._view,u=l.borderWidth;if(l.horizontal?(t=l.base,e=l.x,i=l.y-l.height/2,n=l.y+l.height/2,a=e>t?1:-1,r=1,o=l.borderSkipped||"left"):(t=l.x-l.width/2,e=l.x+l.width/2,i=l.y,a=1,r=(n=l.base)>i?1:-1,o=l.borderSkipped||"bottom"),u){var d=Math.min(Math.abs(t-e),Math.abs(i-n)),h=(u=u>d?d:u)/2,c=t+("left"!==o?h*a:0),f=e+("right"!==o?-h*a:0),p=i+("top"!==o?h*r:0),g=n+("bottom"!==o?-h*r:0);c!==f&&(i=p,n=g),p!==g&&(t=c,e=f)}s.beginPath(),s.fillStyle=l.backgroundColor,s.strokeStyle=l.borderColor,s.lineWidth=u;var m=[[t,n],[t,i],[e,i],[e,n]],v=["bottom","left","top","right"].indexOf(o,0);function b(t){return m[(v+t)%4]}-1===v&&(v=0);var y=b(0);s.moveTo(y[0],y[1]);for(var x=1;x<4;x++)y=b(x),s.lineTo(y[0],y[1]);s.fill(),u&&s.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=!1;if(this._view){var a=n(this);i=t>=a.left&&t<=a.right&&e>=a.top&&e<=a.bottom}return i},inLabelRange:function(t,e){if(!this._view)return!1;var a=n(this);return i(this)?t>=a.left&&t<=a.right:e>=a.top&&e<=a.bottom},inXRange:function(t){var e=n(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=n(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,e,n=this._view;return i(this)?(t=n.x,e=(n.y+n.base)/2):(t=(n.x+n.base)/2,e=n.y),{x:t,y:e}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],39:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function n(t,i){var n=e.getStyle(t,i),a=n&&n.match(/^(\d+)(\.\d+)?px$/);return a?Number(a[1]):void 0}function a(t,e,i,n,a){return{type:t,chart:e,native:a||null,x:void 0!==i?i:null,y:void 0!==n?n:null}}function r(t,i,n){var r,o,s=t._chartjs={ticking:!1};s.resizer=(r=function(){s.ticking||(s.ticking=!0,e.requestAnimFrame.call(window,function(){if(s.resizer)return s.ticking=!1,i(a("resize",n))}))},(o=document.createElement("iframe")).className="chartjs-hidden-iframe",o.style.cssText="display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;",o.tabIndex=-1,e.addEvent(o,"load",function(){e.addEvent(o.contentWindow||o,"resize",r),r()}),o),t.insertBefore(s.resizer,t.firstChild)}return{acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){var i=t.style,a=t.getAttribute("height"),r=t.getAttribute("width");if(t._chartjs={initial:{height:a,width:r,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===r||""===r){var o=n(t,"width");void 0!==o&&(t.width=o)}if(null===a||""===a)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var s=n(t,"height");void 0!==o&&(t.height=s)}}(t,e),i):null},releaseContext:function(t){var i=t.canvas;if(i._chartjs){var n=i._chartjs.initial;["height","width"].forEach(function(t){var e=n[t];void 0===e||null===e?i.removeAttribute(t):i.setAttribute(t,e)}),e.each(n.style||{},function(t,e){i.style[e]=t}),i.width=i.width,delete i._chartjs}},addEventListener:function(t,n,o){var s=t.canvas;if("resize"!==n){var l=o._chartjs||(o._chartjs={}),u=(l.proxies||(l.proxies={}))[t.id+"_"+n]=function(n){var r,s,l,u;o((s=t,l=i[(r=n).type]||r.type,u=e.getRelativePosition(r,s),a(l,s,u.x,u.y,r)))};e.addEvent(s,n,u)}else r(s.parentNode,o,t)},removeEventListener:function(t,i,n){var a=t.canvas;if("resize"!==i){var r=((n._chartjs||{}).proxies||{})[t.id+"_"+i];r&&e.removeEvent(a,i,r)}else!function(t){if(t&&t._chartjs){var e=t._chartjs.resizer;e&&(e.parentNode.removeChild(e),t._chartjs.resizer=null),delete t._chartjs}}(a.parentNode)}}}},{}],40:[function(t,e,i){"use strict";var n=t(39);e.exports=function(t){t.platform={acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},t.helpers.extend(t.platform,n(t))}},{39:39}],41:[function(t,e,i){"use strict";e.exports=function(t){t.defaults.global.plugins.filler={propagate:!0};var e=t.defaults,i=t.helpers,n={dataset:function(t){var e=t.fill,i=t.chart,n=i.getDatasetMeta(e),a=n&&i.isDatasetVisible(e)&&n.dataset._children||[];return a.length?function(t,e){return a[e]._view||null}:null},boundary:function(t){var e=t.boundary,i=e?e.x:null,n=e?e.y:null;return function(t){return{x:null===i?t.x:i,y:null===n?t.y:n}}}};function a(t,e,i){var n,a=t._model||{},r=a.fill;if(void 0===r&&(r=!!a.backgroundColor),!1===r||null===r)return!1;if(!0===r)return"origin";if(n=parseFloat(r,10),isFinite(n)&&Math.floor(n)===n)return"-"!==r[0]&&"+"!==r[0]||(n=e+n),!(n===e||n<0||n>=i)&&n;switch(r){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return r;default:return!1}}function r(t){var e,i=t.el._model||{},n=t.el._scale||{},a=t.fill,r=null;if(isFinite(a))return null;if("start"===a?r=void 0===i.scaleBottom?n.bottom:i.scaleBottom:"end"===a?r=void 0===i.scaleTop?n.top:i.scaleTop:void 0!==i.scaleZero?r=i.scaleZero:n.getBasePosition?r=n.getBasePosition():n.getBasePixel&&(r=n.getBasePixel()),void 0!==r&&null!==r){if(void 0!==r.x&&void 0!==r.y)return r;if("number"==typeof r&&isFinite(r))return{x:(e=n.isHorizontal())?r:null,y:e?null:r}}return null}function o(t,e,i){var n,a=t[e].fill,r=[e];if(!i)return a;for(;!1!==a&&-1===r.indexOf(a);){if(!isFinite(a))return a;if(!(n=t[a]))return!1;if(n.visible)return a;r.push(a),a=n.fill}return!1}function s(t){return t&&!t.skip}function l(t,e,n,a,r){var o;if(a&&r){for(t.moveTo(e[0].x,e[0].y),o=1;o<a;++o)i.canvas.lineTo(t,e[o-1],e[o]);for(t.lineTo(n[r-1].x,n[r-1].y),o=r-1;o>0;--o)i.canvas.lineTo(t,n[o],n[o-1],!0)}}return{id:"filler",afterDatasetsUpdate:function(e,i){var s,l,u,d,h,c,f,p=(e.data.datasets||[]).length,g=i.propagate,m=[];for(l=0;l<p;++l)d=null,(u=(s=e.getDatasetMeta(l)).dataset)&&u._model&&u instanceof t.elements.Line&&(d={visible:e.isDatasetVisible(l),fill:a(u,l,p),chart:e,el:u}),s.$filler=d,m.push(d);for(l=0;l<p;++l)(d=m[l])&&(d.fill=o(m,l,g),d.boundary=r(d),d.mapper=(void 0,f=void 0,c=(h=d).fill,f="dataset",!1===c?null:(isFinite(c)||(f="boundary"),n[f](h))))},beforeDatasetDraw:function(t,i){var n=i.meta.$filler;if(n){var a=n.el,r=a._view,o=a._children||[],u=n.mapper,d=r.backgroundColor||e.global.defaultColor;u&&d&&o.length&&function(t,e,i,n,a,r){var o,u,d,h,c,f,p,g=e.length,m=n.spanGaps,v=[],b=[],y=0,x=0;for(t.beginPath(),o=0,u=g+!!r;o<u;++o)c=i(h=e[d=o%g]._view,d,n),f=s(h),p=s(c),f&&p?(y=v.push(h),x=b.push(c)):y&&x&&(m?(f&&v.push(h),p&&b.push(c)):(l(t,v,b,y,x),y=x=0,v=[],b=[]));l(t,v,b,y,x),t.closePath(),t.fillStyle=a,t.fill()}(t.ctx,o,u,r,d,a._loop)}}}}},{}],42:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.layoutService,n=e.noop;function a(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}function r(e,n){var a=new t.Legend({ctx:e.ctx,options:n,chart:e});i.configure(e,a,n),i.addBox(e,a),e.legend=a}return t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var i=e.datasetIndex,n=this.chart,a=n.getDatasetMeta(i);a.hidden=null===a.hidden?!n.data.datasets[i].hidden:null,n.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var i=t.data;return e.isArray(i.datasets)?i.datasets.map(function(i,n){return{text:i.label,fillStyle:e.isArray(i.backgroundColor)?i.backgroundColor[0]:i.backgroundColor,hidden:!t.isDatasetVisible(n),lineCap:i.borderCapStyle,lineDash:i.borderDash,lineDashOffset:i.borderDashOffset,lineJoin:i.borderJoinStyle,lineWidth:i.borderWidth,strokeStyle:i.borderColor,pointStyle:i.pointStyle,datasetIndex:n}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){e.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:n,update:function(t,e,i){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this.margins=i,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeBuildLabels(),this.buildLabels(),this.afterBuildLabels(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:n,beforeSetDimensions:n,setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0,this.minSize={width:0,height:0}},afterSetDimensions:n,beforeBuildLabels:n,buildLabels:function(){var t=this,e=t.options.labels,i=e.generateLabels.call(t,t.chart);e.filter&&(i=i.filter(function(i){return e.filter(i,t.chart.data)})),t.options.reverse&&i.reverse(),t.legendItems=i},afterBuildLabels:n,beforeFit:n,fit:function(){var i=this,n=i.options,r=n.labels,o=n.display,s=i.ctx,l=t.defaults.global,u=e.getValueOrDefault,d=u(r.fontSize,l.defaultFontSize),h=u(r.fontStyle,l.defaultFontStyle),c=u(r.fontFamily,l.defaultFontFamily),f=e.fontString(d,h,c),p=i.legendHitBoxes=[],g=i.minSize,m=i.isHorizontal();if(m?(g.width=i.maxWidth,g.height=o?10:0):(g.width=o?10:0,g.height=i.maxHeight),o)if(s.font=f,m){var v=i.lineWidths=[0],b=i.legendItems.length?d+r.padding:0;s.textAlign="left",s.textBaseline="top",e.each(i.legendItems,function(t,e){var n=a(r,d)+d/2+s.measureText(t.text).width;v[v.length-1]+n+r.padding>=i.width&&(b+=d+r.padding,v[v.length]=i.left),p[e]={left:0,top:0,width:n,height:d},v[v.length-1]+=n+r.padding}),g.height+=b}else{var y=r.padding,x=i.columnWidths=[],w=r.padding,k=0,S=0,C=d+y;e.each(i.legendItems,function(t,e){var i=a(r,d)+d/2+s.measureText(t.text).width;S+C>g.height&&(w+=k+r.padding,x.push(k),k=0,S=0),k=Math.max(k,i),S+=C,p[e]={left:0,top:0,width:i,height:d}}),w+=k,x.push(k),g.width+=w}i.width=g.width,i.height=g.height},afterFit:n,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var i=this,n=i.options,r=n.labels,o=t.defaults.global,s=o.elements.line,l=i.width,u=i.lineWidths;if(n.display){var d,h=i.ctx,c=e.getValueOrDefault,f=c(r.fontColor,o.defaultFontColor),p=c(r.fontSize,o.defaultFontSize),g=c(r.fontStyle,o.defaultFontStyle),m=c(r.fontFamily,o.defaultFontFamily),v=e.fontString(p,g,m);h.textAlign="left",h.textBaseline="top",h.lineWidth=.5,h.strokeStyle=f,h.fillStyle=f,h.font=v;var b=a(r,p),y=i.legendHitBoxes,x=i.isHorizontal();d=x?{x:i.left+(l-u[0])/2,y:i.top+r.padding,line:0}:{x:i.left+r.padding,y:i.top+r.padding,line:0};var w=p+r.padding;e.each(i.legendItems,function(e,a){var f,g,m,v,k=h.measureText(e.text).width,S=b+p/2+k,C=d.x,M=d.y;x?C+S>=l&&(M=d.y+=w,d.line++,C=d.x=i.left+(l-u[d.line])/2):M+w>i.bottom&&(C=d.x=C+i.columnWidths[d.line]+r.padding,M=d.y=i.top+r.padding,d.line++),function(e,i,a){if(!(isNaN(b)||b<=0)){h.save(),h.fillStyle=c(a.fillStyle,o.defaultColor),h.lineCap=c(a.lineCap,s.borderCapStyle),h.lineDashOffset=c(a.lineDashOffset,s.borderDashOffset),h.lineJoin=c(a.lineJoin,s.borderJoinStyle),h.lineWidth=c(a.lineWidth,s.borderWidth),h.strokeStyle=c(a.strokeStyle,o.defaultColor);var r=0===c(a.lineWidth,s.borderWidth);if(h.setLineDash&&h.setLineDash(c(a.lineDash,s.borderDash)),n.labels&&n.labels.usePointStyle){var l=p*Math.SQRT2/2,u=l/Math.SQRT2,d=e+u,f=i+u;t.canvasHelpers.drawPoint(h,a.pointStyle,l,d,f)}else r||h.strokeRect(e,i,b,p),h.fillRect(e,i,b,p);h.restore()}}(C,M,e),y[a].left=C,y[a].top=M,f=C,g=M,m=e,v=k,h.fillText(m.text,b+p/2+f,g),m.hidden&&(h.beginPath(),h.lineWidth=2,h.moveTo(b+p/2+f,g+p/2),h.lineTo(b+p/2+f+v,g+p/2),h.stroke()),x?d.x+=S+r.padding:d.y+=w})}},handleEvent:function(t){var e=this.options,i="mouseup"===t.type?"click":t.type,n=!1;if("mousemove"===i){if(!e.onHover)return}else{if("click"!==i)return;if(!e.onClick)return}var a=t.x,r=t.y;if(a>=this.left&&a<=this.right&&r>=this.top&&r<=this.bottom)for(var o=this.legendHitBoxes,s=0;s<o.length;++s){var l=o[s];if(a>=l.left&&a<=l.left+l.width&&r>=l.top&&r<=l.top+l.height){if("click"===i){e.onClick.call(this,t.native,this.legendItems[s]),n=!0;break}if("mousemove"===i){e.onHover.call(this,t.native,this.legendItems[s]),n=!0;break}}}return n}}),{id:"legend",beforeInit:function(t){var e=t.options.legend;e&&r(t,e)},beforeUpdate:function(n){var a=n.options.legend,o=n.legend;a?(a=e.configMerge(t.defaults.global.legend,a),o?(i.configure(n,o,a),o.options=a):r(n,a)):o&&(i.removeBox(n,o),delete n.legend)},afterEvent:function(t,e){var i=t.legend;i&&i.handleEvent(e)}}}},{}],43:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.layoutService,n=e.noop;function a(e,n){var a=new t.Title({ctx:e.ctx,options:n,chart:e});i.configure(e,a,n),i.addBox(e,a),e.titleBlock=a}return t.defaults.global.title={display:!1,position:"top",fullWidth:!0,weight:2e3,fontStyle:"bold",padding:10,text:""},t.Title=t.Element.extend({initialize:function(t){e.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:n,update:function(t,e,i){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this.margins=i,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeBuildLabels(),this.buildLabels(),this.afterBuildLabels(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:n,beforeSetDimensions:n,setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0,this.minSize={width:0,height:0}},afterSetDimensions:n,beforeBuildLabels:n,buildLabels:n,afterBuildLabels:n,beforeFit:n,fit:function(){var i=e.getValueOrDefault,n=this.options,a=t.defaults.global,r=n.display,o=i(n.fontSize,a.defaultFontSize),s=this.minSize;this.isHorizontal()?(s.width=this.maxWidth,s.height=r?o+2*n.padding:0):(s.width=r?o+2*n.padding:0,s.height=this.maxHeight),this.width=s.width,this.height=s.height},afterFit:n,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var i=this.ctx,n=e.getValueOrDefault,a=this.options,r=t.defaults.global;if(a.display){var o,s,l,u=n(a.fontSize,r.defaultFontSize),d=n(a.fontStyle,r.defaultFontStyle),h=n(a.fontFamily,r.defaultFontFamily),c=e.fontString(u,d,h),f=0,p=this.top,g=this.left,m=this.bottom,v=this.right;i.fillStyle=n(a.fontColor,r.defaultFontColor),i.font=c,this.isHorizontal()?(o=g+(v-g)/2,s=p+(m-p)/2,l=v-g):(o="left"===a.position?g+u/2:v-u/2,s=p+(m-p)/2,l=m-p,f=Math.PI*("left"===a.position?-.5:.5)),i.save(),i.translate(o,s),i.rotate(f),i.textAlign="center",i.textBaseline="middle",i.fillText(a.text,0,0,l),i.restore()}}}),{id:"title",beforeInit:function(t){var e=t.options.title;e&&a(t,e)},beforeUpdate:function(n){var r=n.options.title,o=n.titleBlock;r?(r=e.configMerge(t.defaults.global.title,r),o?(i.configure(n,o,r),o.options=r):a(n,r)):o&&(t.layoutService.removeBox(n,o),delete n.titleBlock)}}}},{}],44:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.Scale.extend({getLabels:function(){var t=this.chart.data;return(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t,i=this.getLabels();this.minIndex=0,this.maxIndex=i.length-1,void 0!==this.options.ticks.min&&(t=e.indexOf(i,this.options.ticks.min),this.minIndex=-1!==t?t:this.minIndex),void 0!==this.options.ticks.max&&(t=e.indexOf(i,this.options.ticks.max),this.maxIndex=-1!==t?t:this.maxIndex),this.min=i[this.minIndex],this.max=i[this.maxIndex]},buildTicks:function(){var t=this.getLabels();this.ticks=0===this.minIndex&&this.maxIndex===t.length-1?t:t.slice(this.minIndex,this.maxIndex+1)},getLabelForIndex:function(t,e){var i=this.chart.data,n=this.isHorizontal();return i.yLabels&&!n?this.getRightValue(i.datasets[e].data[t]):this.ticks[t-this.minIndex]},getPixelForValue:function(t,e,i,n){var a,r=Math.max(this.maxIndex+1-this.minIndex-(this.options.gridLines.offsetGridLines?0:1),1);if(void 0!==t&&null!==t&&(a=this.isHorizontal()?t.x:t.y),void 0!==a||void 0!==t&&isNaN(e)){var o=this.getLabels();t=a||t;var s=o.indexOf(t);e=-1!==s?s:e}if(this.isHorizontal()){var l=this.width/r,u=l*(e-this.minIndex);return(this.options.gridLines.offsetGridLines&&n||this.maxIndex===this.minIndex&&n)&&(u+=l/2),this.left+Math.round(u)}var d=this.height/r,h=d*(e-this.minIndex);return this.options.gridLines.offsetGridLines&&n&&(h+=d/2),this.top+Math.round(h)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e=Math.max(this.ticks.length-(this.options.gridLines.offsetGridLines?0:1),1),i=this.isHorizontal(),n=(i?this.width:this.height)/e;return t-=i?this.left:this.top,this.options.gridLines.offsetGridLines&&(t-=n/2),t<=0?0:Math.round(t/n)},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",i,{position:"bottom"})}},{}],45:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"left",ticks:{callback:t.Ticks.formatters.linear}},n=t.LinearScaleBase.extend({determineDataLimits:function(){var t=this,i=t.options,n=t.chart,a=n.data.datasets,r=t.isHorizontal();function o(e){return r?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null;var s=i.stacked;if(void 0===s&&e.each(a,function(t,e){if(!s){var i=n.getDatasetMeta(e);n.isDatasetVisible(e)&&o(i)&&void 0!==i.stack&&(s=!0)}}),i.stacked||s){var l={};e.each(a,function(a,r){var s=n.getDatasetMeta(r),u=[s.type,void 0===i.stacked&&void 0===s.stack?r:"",s.stack].join(".");void 0===l[u]&&(l[u]={positiveValues:[],negativeValues:[]});var d=l[u].positiveValues,h=l[u].negativeValues;n.isDatasetVisible(r)&&o(s)&&e.each(a.data,function(e,n){var a=+t.getRightValue(e);isNaN(a)||s.data[n].hidden||(d[n]=d[n]||0,h[n]=h[n]||0,i.relativePoints?d[n]=100:a<0?h[n]+=a:d[n]+=a)})}),e.each(l,function(i){var n=i.positiveValues.concat(i.negativeValues),a=e.min(n),r=e.max(n);t.min=null===t.min?a:Math.min(t.min,a),t.max=null===t.max?r:Math.max(t.max,r)})}else e.each(a,function(i,a){var r=n.getDatasetMeta(a);n.isDatasetVisible(a)&&o(r)&&e.each(i.data,function(e,i){var n=+t.getRightValue(e);isNaN(n)||r.data[i].hidden||(null===t.min?t.min=n:n<t.min&&(t.min=n),null===t.max?t.max=n:n>t.max&&(t.max=n))})});t.min=isFinite(t.min)?t.min:0,t.max=isFinite(t.max)?t.max:1,this.handleTickRangeOptions()},getTickLimit:function(){var i,n=this.options.ticks;if(this.isHorizontal())i=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(this.width/50));else{var a=e.getValueOrDefault(n.fontSize,t.defaults.global.defaultFontSize);i=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(this.height/(2*a)))}return i},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e,i=this.start,n=+this.getRightValue(t),a=this.end-i;return this.isHorizontal()?(e=this.left+this.width/a*(n-i),Math.round(e)):(e=this.bottom-this.height/a*(n-i),Math.round(e))},getValueForPixel:function(t){var e=this.isHorizontal(),i=e?this.width:this.height,n=(e?t-this.left:this.bottom-t)/i;return this.start+(this.end-this.start)*n},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});t.scaleService.registerScaleType("linear",n,i)}},{}],46:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=e.noop;t.LinearScaleBase=t.Scale.extend({handleTickRangeOptions:function(){var t=this.options.ticks;if(t.beginAtZero){var i=e.sign(this.min),n=e.sign(this.max);i<0&&n<0?this.max=0:i>0&&n>0&&(this.min=0)}void 0!==t.min?this.min=t.min:void 0!==t.suggestedMin&&(null===this.min?this.min=t.suggestedMin:this.min=Math.min(this.min,t.suggestedMin)),void 0!==t.max?this.max=t.max:void 0!==t.suggestedMax&&(null===this.max?this.max=t.suggestedMax:this.max=Math.max(this.max,t.suggestedMax)),this.min===this.max&&(this.max++,t.beginAtZero||this.min--)},getTickLimit:i,handleDirectionalChanges:i,buildTicks:function(){var i=this.options.ticks,n=this.getTickLimit(),a={maxTicks:n=Math.max(2,n),min:i.min,max:i.max,stepSize:e.getValueOrDefault(i.fixedStepSize,i.stepSize)},r=this.ticks=t.Ticks.generators.linear(a,this);this.handleDirectionalChanges(),this.max=e.max(r),this.min=e.min(r),i.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max)},convertTicksToLabels:function(){this.ticksAsNumbers=this.ticks.slice(),this.zeroLineIndex=this.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(this)}})}},{}],47:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"left",ticks:{callback:t.Ticks.formatters.logarithmic}},n=t.Scale.extend({determineDataLimits:function(){var t=this,i=t.options,n=i.ticks,a=t.chart,r=a.data.datasets,o=e.getValueOrDefault,s=t.isHorizontal();function l(e){return s?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null,t.minNotZero=null;var u=i.stacked;if(void 0===u&&e.each(r,function(t,e){if(!u){var i=a.getDatasetMeta(e);a.isDatasetVisible(e)&&l(i)&&void 0!==i.stack&&(u=!0)}}),i.stacked||u){var d={};e.each(r,function(n,r){var o=a.getDatasetMeta(r),s=[o.type,void 0===i.stacked&&void 0===o.stack?r:"",o.stack].join(".");a.isDatasetVisible(r)&&l(o)&&(void 0===d[s]&&(d[s]=[]),e.each(n.data,function(e,n){var a=d[s],r=+t.getRightValue(e);isNaN(r)||o.data[n].hidden||(a[n]=a[n]||0,i.relativePoints?a[n]=100:a[n]+=r)}))}),e.each(d,function(i){var n=e.min(i),a=e.max(i);t.min=null===t.min?n:Math.min(t.min,n),t.max=null===t.max?a:Math.max(t.max,a)})}else e.each(r,function(i,n){var r=a.getDatasetMeta(n);a.isDatasetVisible(n)&&l(r)&&e.each(i.data,function(e,i){var n=+t.getRightValue(e);isNaN(n)||r.data[i].hidden||(null===t.min?t.min=n:n<t.min&&(t.min=n),null===t.max?t.max=n:n>t.max&&(t.max=n),0!==n&&(null===t.minNotZero||n<t.minNotZero)&&(t.minNotZero=n))})});t.min=o(n.min,t.min),t.max=o(n.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(e.log10(t.min))-1),t.max=Math.pow(10,Math.floor(e.log10(t.max))+1)):(t.min=1,t.max=10))},buildTicks:function(){var i=this.options.ticks,n={min:i.min,max:i.max},a=this.ticks=t.Ticks.generators.logarithmic(n,this);this.isHorizontal()||a.reverse(),this.max=e.max(a),this.min=e.min(a),i.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},getPixelForValue:function(t){var i,n,a,r=this.start,o=+this.getRightValue(t),s=this.options.ticks;return this.isHorizontal()?(a=e.log10(this.end)-e.log10(r),0===o?n=this.left:(i=this.width,n=this.left+i/a*(e.log10(o)-e.log10(r)))):(i=this.height,0!==r||s.reverse?0===this.end&&s.reverse?(a=e.log10(this.start)-e.log10(this.minNotZero),n=o===this.end?this.top:o===this.minNotZero?this.top+.02*i:this.top+.02*i+.98*i/a*(e.log10(o)-e.log10(this.minNotZero))):0===o?n=s.reverse?this.top:this.bottom:(a=e.log10(this.end)-e.log10(r),i=this.height,n=this.bottom-i/a*(e.log10(o)-e.log10(r))):(a=e.log10(this.end)-e.log10(this.minNotZero),n=o===r?this.bottom:o===this.minNotZero?this.bottom-.02*i:this.bottom-.02*i-.98*i/a*(e.log10(o)-e.log10(this.minNotZero)))),n},getValueForPixel:function(t){var i,n,a=e.log10(this.end)-e.log10(this.start);return this.isHorizontal()?(n=this.width,i=this.start*Math.pow(10,(t-this.left)*a/n)):(n=this.height,i=Math.pow(10,(this.bottom-t)*a/n)/this.start),i}});t.scaleService.registerScaleType("logarithmic",n,i)}},{}],48:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global,n={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:t.Ticks.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function a(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function r(t){var n=t.options.pointLabels,a=e.getValueOrDefault(n.fontSize,i.defaultFontSize),r=e.getValueOrDefault(n.fontStyle,i.defaultFontStyle),o=e.getValueOrDefault(n.fontFamily,i.defaultFontFamily);return{size:a,style:r,family:o,font:e.fontString(a,r,o)}}function o(t,e,i,n,a){return t===n||t===a?{start:e-i/2,end:e+i/2}:t<n||t>a?{start:e-i-5,end:e}:{start:e,end:e+i+5}}function s(t,i,n,a){if(e.isArray(i))for(var r=n.y,o=1.5*a,s=0;s<i.length;++s)t.fillText(i[s],n.x,r),r+=o;else t.fillText(i,n.x,n.y)}function l(t){return e.isNumber(t)?t:0}var u=t.LinearScaleBase.extend({setDimensions:function(){var t=this.options,n=t.ticks;this.width=this.maxWidth,this.height=this.maxHeight,this.xCenter=Math.round(this.width/2),this.yCenter=Math.round(this.height/2);var a=e.min([this.height,this.width]),r=e.getValueOrDefault(n.fontSize,i.defaultFontSize);this.drawingArea=t.display?a/2-(r/2+n.backdropPaddingY):a/2},determineDataLimits:function(){var t=this,i=t.chart,n=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;e.each(i.data.datasets,function(r,o){if(i.isDatasetVisible(o)){var s=i.getDatasetMeta(o);e.each(r.data,function(e,i){var r=+t.getRightValue(e);isNaN(r)||s.data[i].hidden||(n=Math.min(r,n),a=Math.max(r,a))})}}),t.min=n===Number.POSITIVE_INFINITY?0:n,t.max=a===Number.NEGATIVE_INFINITY?0:a,t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,n=e.getValueOrDefault(t.fontSize,i.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*n)))},convertTicksToLabels:function(){t.LinearScaleBase.prototype.convertTicksToLabels.call(this),this.pointLabels=this.chart.data.labels.map(this.options.pointLabels.callback,this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,i;this.options.pointLabels.display?function(t){var i,n,s,l=r(t),u=Math.min(t.height/2,t.width/2),d={r:t.width,l:0,t:t.height,b:0},h={};t.ctx.font=l.font,t._pointLabelSizes=[];var c,f,p,g=a(t);for(i=0;i<g;i++){s=t.getPointPosition(i,u),c=t.ctx,f=l.size,p=t.pointLabels[i]||"",n=e.isArray(p)?{w:e.longestText(c,c.font,p),h:p.length*f+1.5*(p.length-1)*f}:{w:c.measureText(p).width,h:f},t._pointLabelSizes[i]=n;var m=t.getIndexAngle(i),v=e.toDegrees(m)%360,b=o(v,s.x,n.w,0,180),y=o(v,s.y,n.h,90,270);b.start<d.l&&(d.l=b.start,h.l=m),b.end>d.r&&(d.r=b.end,h.r=m),y.start<d.t&&(d.t=y.start,h.t=m),y.end>d.b&&(d.b=y.end,h.b=m)}t.setReductions(u,d,h)}(this):(t=this,i=Math.min(t.height/2,t.width/2),t.drawingArea=Math.round(i),t.setCenterPoint(0,0,0,0))},setReductions:function(t,e,i){var n=e.l/Math.sin(i.l),a=Math.max(e.r-this.width,0)/Math.sin(i.r),r=-e.t/Math.cos(i.t),o=-Math.max(e.b-this.height,0)/Math.cos(i.b);n=l(n),a=l(a),r=l(r),o=l(o),this.drawingArea=Math.min(Math.round(t-(n+a)/2),Math.round(t-(r+o)/2)),this.setCenterPoint(n,a,r,o)},setCenterPoint:function(t,e,i,n){var a=this.width-e-this.drawingArea,r=t+this.drawingArea,o=i+this.drawingArea,s=this.height-n-this.drawingArea;this.xCenter=Math.round((r+a)/2+this.left),this.yCenter=Math.round((o+s)/2+this.top)},getIndexAngle:function(t){return t*(2*Math.PI/a(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){if(null===t)return 0;var e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e},getPointPosition:function(t,e){var i=this.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(i)*e)+this.xCenter,y:Math.round(Math.sin(i)*e)+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this.min,e=this.max;return this.getPointPositionForValue(0,this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0)},draw:function(){var t=this,n=t.options,o=n.gridLines,l=n.ticks,u=e.getValueOrDefault;if(n.display){var d=t.ctx,h=u(l.fontSize,i.defaultFontSize),c=u(l.fontStyle,i.defaultFontStyle),f=u(l.fontFamily,i.defaultFontFamily),p=e.fontString(h,c,f);e.each(t.ticks,function(r,s){if(s>0||n.reverse){var c=t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]),f=t.yCenter-c;if(o.display&&0!==s&&function(t,i,n,r){var o=t.ctx;if(o.strokeStyle=e.getValueAtIndexOrDefault(i.color,r-1),o.lineWidth=e.getValueAtIndexOrDefault(i.lineWidth,r-1),t.options.gridLines.circular)o.beginPath(),o.arc(t.xCenter,t.yCenter,n,0,2*Math.PI),o.closePath(),o.stroke();else{var s=a(t);if(0===s)return;o.beginPath();var l=t.getPointPosition(0,n);o.moveTo(l.x,l.y);for(var u=1;u<s;u++)l=t.getPointPosition(u,n),o.lineTo(l.x,l.y);o.closePath(),o.stroke()}}(t,o,c,s),l.display){var g=u(l.fontColor,i.defaultFontColor);if(d.font=p,l.showLabelBackdrop){var m=d.measureText(r).width;d.fillStyle=l.backdropColor,d.fillRect(t.xCenter-m/2-l.backdropPaddingX,f-h/2-l.backdropPaddingY,m+2*l.backdropPaddingX,h+2*l.backdropPaddingY)}d.textAlign="center",d.textBaseline="middle",d.fillStyle=g,d.fillText(r,t.xCenter,f)}}}),(n.angleLines.display||n.pointLabels.display)&&function(t){var n=t.ctx,o=e.getValueOrDefault,l=t.options,u=l.angleLines,d=l.pointLabels;n.lineWidth=u.lineWidth,n.strokeStyle=u.color;var h,c,f,p,g=t.getDistanceFromCenterForValue(l.reverse?t.min:t.max),m=r(t);n.textBaseline="top";for(var v=a(t)-1;v>=0;v--){if(u.display){var b=t.getPointPosition(v,g);n.beginPath(),n.moveTo(t.xCenter,t.yCenter),n.lineTo(b.x,b.y),n.stroke(),n.closePath()}if(d.display){var y=t.getPointPosition(v,g+5),x=o(d.fontColor,i.defaultFontColor);n.font=m.font,n.fillStyle=x;var w=t.getIndexAngle(v),k=e.toDegrees(w);n.textAlign=0===(p=k)||180===p?"center":p<180?"left":"right",h=k,c=t._pointLabelSizes[v],f=y,90===h||270===h?f.y-=c.h/2:(h>270||h<90)&&(f.y-=c.h),s(n,t.pointLabels[v]||"",y,m.size)}}}(t)}}});t.scaleService.registerScaleType("radialLinear",u,n)}},{}],49:[function(t,e,i){"use strict";var n=t(1);n="function"==typeof n?n:window.moment,e.exports=function(t){var e=t.helpers,i={millisecond:{size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{size:1e3,steps:[1,2,5,10,30]},minute:{size:6e4,steps:[1,2,5,10,30]},hour:{size:36e5,steps:[1,2,3,6,12]},day:{size:864e5,steps:[1,2,5]},week:{size:6048e5,maxStep:4},month:{size:2628e6,maxStep:3},quarter:{size:7884e6,maxStep:4},year:{size:3154e7,maxStep:!1}};function a(t,e){var i=t.options.time;if("string"==typeof i.parser)return n(e,i.parser);if("function"==typeof i.parser)return i.parser(e);if("function"==typeof e.getMonth||"number"==typeof e)return n(e);if(e.isValid&&e.isValid())return e;var a=i.format;return"string"!=typeof a&&a.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser."),a(e)):n(e,a)}t.Ticks.generators.time=function(t,e){var i,a,r=t.isoWeekday;return"week"===t.unit&&!1!==r?(i=n(e.min).startOf("isoWeek").isoWeekday(r).valueOf(),a=n(e.max).startOf("isoWeek").isoWeekday(r),e.max-a>0&&a.add(1,"week"),a=a.valueOf()):(i=n(e.min).startOf(t.unit).valueOf(),a=n(e.max).startOf(t.unit),e.max-a>0&&a.add(1,t.unit),a=a.valueOf()),function(t,e,i){var a=[];if(t.maxTicks){var r=t.stepSize;a.push(void 0!==t.min?t.min:i.min);for(var o=n(i.min);o.add(r,t.unit).valueOf()<i.max;)a.push(o.valueOf());var s=t.max||i.max;a[a.length-1]!==s&&a.push(s)}return a}(t,0,{min:i,max:a})};var r=t.Scale.extend({initialize:function(){if(!n)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},determineDataLimits:function(){var t,i=this,n=i.options.time,r=Number.MAX_SAFE_INTEGER,o=Number.MIN_SAFE_INTEGER,s=i.chart.data,l={labels:[],datasets:[]};e.each(s.labels,function(e,s){var u=a(i,e);u.isValid()&&(n.round&&u.startOf(n.round),t=u.valueOf(),r=Math.min(t,r),o=Math.max(t,o),l.labels[s]=t)}),e.each(s.datasets,function(s,u){var d=[];"object"==typeof s.data[0]&&null!==s.data[0]&&i.chart.isDatasetVisible(u)?e.each(s.data,function(e,s){var l=a(i,i.getRightValue(e));l.isValid()&&(n.round&&l.startOf(n.round),t=l.valueOf(),r=Math.min(t,r),o=Math.max(t,o),d[s]=t)}):d=l.labels.slice(),l.datasets[u]=d}),i.dataMin=r,i.dataMax=o,i._parsedData=l},buildTicks:function(){var n,r,o=this.options.time,s=this.dataMin,l=this.dataMax;if(o.min){var u=a(this,o.min);o.round&&u.round(o.round),n=u.valueOf()}o.max&&(r=a(this,o.max).valueOf());var d=this.getLabelCapacity(n||s),h=o.unit||function(t,e,n,a){for(var r,o=Object.keys(i),s=o.length,l=o.indexOf(t);l<s;l++){r=o[l];var u=i[r],d=u.steps&&u.steps[u.steps.length-1]||u.maxStep;if(void 0===d||Math.ceil((n-e)/(d*u.size))<=a)break}return r}(o.minUnit,n||s,r||l,d);this.displayFormat=o.displayFormats[h];var c=o.stepSize||function(t,e,n,a){var r=i[n],o=r.size,s=Math.ceil((e-t)/o),l=1,u=e-t;if(r.steps)for(var d=r.steps.length,h=0;h<d&&s>a;h++)l=r.steps[h],s=Math.ceil(u/(o*l));else for(;s>a&&a>0;)++l,s=Math.ceil(u/(o*l));return l}(n||s,r||l,h,d);this.ticks=t.Ticks.generators.time({maxTicks:d,min:n,max:r,stepSize:c,unit:h,isoWeekday:o.isoWeekday},{min:s,max:l}),this.max=e.max(this.ticks),this.min=e.min(this.ticks)},getLabelForIndex:function(t,e){var i=this.chart.data.labels&&t<this.chart.data.labels.length?this.chart.data.labels[t]:"",n=this.chart.data.datasets[e].data[t];return null!==n&&"object"==typeof n&&(i=this.getRightValue(n)),this.options.time.tooltipFormat&&(i=a(this,i).format(this.options.time.tooltipFormat)),i},tickFormatFunction:function(t,i,n){var a=t.format(this.displayFormat),r=this.options.ticks,o=e.getValueOrDefault(r.callback,r.userCallback);return o?o(a,i,n):a},convertTicksToLabels:function(){this.ticksAsTimestamps=this.ticks,this.ticks=this.ticks.map(function(t){return n(t)}).map(this.tickFormatFunction,this)},getPixelForOffset:function(t){var e=this.max-this.min,i=e?(t-this.min)/e:0;if(this.isHorizontal()){var n=this.width*i;return this.left+Math.round(n)}var a=this.height*i;return this.top+Math.round(a)},getPixelForValue:function(t,e,i){var n=null;if(void 0!==e&&void 0!==i&&(n=this._parsedData.datasets[i][e]),null===n&&(t&&t.isValid||(t=a(this,this.getRightValue(t))),t&&t.isValid&&t.isValid()&&(n=t.valueOf())),null!==n)return this.getPixelForOffset(n)},getPixelForTick:function(t){return this.getPixelForOffset(this.ticksAsTimestamps[t])},getValueForPixel:function(t){var e=this.isHorizontal()?this.width:this.height,i=(t-(this.isHorizontal()?this.left:this.top))/e;return n(this.min+i*(this.max-this.min))},getLabelWidth:function(i){var n=this.options.ticks,a=this.ctx.measureText(i).width,r=Math.cos(e.toRadians(n.maxRotation)),o=Math.sin(e.toRadians(n.maxRotation));return a*r+e.getValueOrDefault(n.fontSize,t.defaults.global.defaultFontSize)*o},getLabelCapacity:function(t){this.displayFormat=this.options.time.displayFormats.millisecond;var e=this.tickFormatFunction(n(t),0,[]),i=this.getLabelWidth(e);return(this.isHorizontal()?this.width:this.height)/i}});t.scaleService.registerScaleType("time",r,{position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}})}},{1:1}]},{},[7])(7)}),function(t){WOW=function(){return{init:function(){var e=[],i=1;function n(){var i=window.innerHeight,n=window.scrollY;t(".wow").each(function(){if("visible"!=t(this).css("visibility")&&(i+n-100>a(this)&&n<a(this)||i+n-100>a(this)+t(this).height()&&n<a(this)+t(this).height()||i+n==t(document).height()&&a(this)+100>t(document).height())){var r=t(this).index(".wow"),o=t(this).attr("data-wow-delay");if(o){o=t(this).attr("data-wow-delay").slice(0,-1);var s=this;parseFloat(o);t(s).addClass("animated"),t(s).css({visibility:"visible"}),t(s).css({"animation-delay":o}),t(s).css({"animation-name":e[r]});var l=1e3*t(this).css("animation-duration").slice(0,-1);t(this).attr("data-wow-delay")&&(l+=1e3*t(this).attr("data-wow-delay").slice(0,-1));s=this;setTimeout(function(){t(s).removeClass("animated")},l)}else{t(this).addClass("animated"),t(this).css({visibility:"visible"}),t(this).css({"animation-name":e[r]});l=1e3*t(this).css("animation-duration").slice(0,-1),s=this;setTimeout(function(){t(s).removeClass("animated")},l)}}})}function a(t){var e=t.getBoundingClientRect(),i=document.body,n=document.documentElement,a=window.pageYOffset||n.scrollTop||i.scrollTop,r=n.clientTop||i.clientTop||0,o=e.top+a-r;return Math.round(o)}t(".wow").each(function(){t(this).css({visibility:"hidden"}),e[t(this).index(".wow")]=t(this).css("animation-name"),t(this).css({"animation-name":"none"})}),t(window).scroll(function(){var e,r;i?(e=window.innerHeight,r=window.scrollY,t(".wow.animated").each(function(){if(e+r-100>a(this)&&r>a(this)+100||e+r-100<a(this)&&r<a(this)+100||a(this)+t(this).height>t(document).height()-100)t(this).removeClass("animated"),t(this).css({"animation-name":"none"}),t(this).css({visibility:"hidden"});else{var i=1e3*t(this).css("animation-duration").slice(0,-1);t(this).attr("data-wow-delay")&&(i+=1e3*t(this).attr("data-wow-delay").slice(0,-1));var n=this;setTimeout(function(){t(n).removeClass("animated")},i)}}),n(),i--):n()}),t(".wow").each(function(){var i=t(this).index(".wow"),n=t(this).attr("data-wow-delay");n?(n=t(this).attr("data-wow-delay").slice(0,-1),parseFloat(n),t(this).addClass("animated"),t(this).css({visibility:"visible"}),t(this).css({"animation-delay":n+"s"}),t(this).css({"animation-name":e[i]})):(t(this).addClass("animated"),t(this).css({visibility:"visible"}),t(this).css({"animation-name":e[i]}))})}}}}(jQuery);var OFFSET_TOP=50;$(window).scroll(function(){$(".navbar").length&&($(".navbar").offset().top>OFFSET_TOP?$(".scrolling-navbar").addClass("top-nav-collapse"):$(".scrolling-navbar").removeClass("top-nav-collapse"))}),function(t,e){"use strict";"function"==typeof define&&define.amd?define([],function(){return e.apply(t)}):"object"==typeof exports?module.exports=e.call(t):t.Waves=e.call(t)}("object"==typeof global?global:this,function(){"use strict";var t=t||{},e=document.querySelectorAll.bind(document),i=Object.prototype.toString,n="ontouchstart"in window;function a(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function r(t){var n,r=i.call(t);return"[object String]"===r?e(t):a(t)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(r)&&t.hasOwnProperty("length")?t:a(n=t)&&n.nodeType>0?[t]:[]}function o(t){var e,i,n,a,r={top:0,left:0},o=t&&t.ownerDocument;return e=o.documentElement,void 0!==t.getBoundingClientRect&&(r=t.getBoundingClientRect()),i=null!==(a=n=o)&&a===a.window?n:9===n.nodeType&&n.defaultView,{top:r.top+i.pageYOffset-e.clientTop,left:r.left+i.pageXOffset-e.clientLeft}}function s(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=i+":"+t[i]+";");return e}var l={duration:750,delay:200,show:function(t,e,i){if(2===t.button)return!1;e=e||this;var n=document.createElement("div");n.className="waves-ripple waves-rippling",e.appendChild(n);var a=o(e),r=0,u=0;"touches"in t&&t.touches.length?(r=t.touches[0].pageY-a.top,u=t.touches[0].pageX-a.left):(r=t.pageY-a.top,u=t.pageX-a.left),u=u>=0?u:0,r=r>=0?r:0;var d="scale("+e.clientWidth/100*3+")",h="translate(0,0)";i&&(h="translate("+i.x+"px, "+i.y+"px)"),n.setAttribute("data-hold",Date.now()),n.setAttribute("data-x",u),n.setAttribute("data-y",r),n.setAttribute("data-scale",d),n.setAttribute("data-translate",h);var c={top:r+"px",left:u+"px"};n.classList.add("waves-notransition"),n.setAttribute("style",s(c)),n.classList.remove("waves-notransition"),c["-webkit-transform"]=d+" "+h,c["-moz-transform"]=d+" "+h,c["-ms-transform"]=d+" "+h,c["-o-transform"]=d+" "+h,c.transform=d+" "+h,c.opacity="1";var f="mousemove"===t.type?2500:l.duration;c["-webkit-transition-duration"]=f+"ms",c["-moz-transition-duration"]=f+"ms",c["-o-transition-duration"]=f+"ms",c["transition-duration"]=f+"ms",n.setAttribute("style",s(c))},hide:function(t,e){for(var i=(e=e||this).getElementsByClassName("waves-rippling"),n=0,a=i.length;n<a;n++)d(t,e,i[n])}},u={input:function(t){var e=t.parentNode;if("div"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var i=document.createElement("div");i.className="waves-input-wrapper",e.replaceChild(i,t),i.appendChild(t);var n=window.getComputedStyle(t,null);n.color,n.backgroundColor}},img:function(t){var e=t.parentNode;if("i"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var i=document.createElement("i");e.replaceChild(i,t),i.appendChild(t)}}};function d(t,e,i){if(i){i.classList.remove("waves-rippling");var n=i.getAttribute("data-x"),a=i.getAttribute("data-y"),r=i.getAttribute("data-scale"),o=i.getAttribute("data-translate"),u=350-(Date.now()-Number(i.getAttribute("data-hold")));u<0&&(u=0),"mousemove"===t.type&&(u=150);var d="mousemove"===t.type?2500:l.duration;setTimeout(function(){var t={top:a+"px",left:n+"px",opacity:"0","-webkit-transition-duration":d+"ms","-moz-transition-duration":d+"ms","-o-transition-duration":d+"ms","transition-duration":d+"ms","-webkit-transform":r+" "+o,"-moz-transform":r+" "+o,"-ms-transform":r+" "+o,"-o-transform":r+" "+o,transform:r+" "+o};i.setAttribute("style",s(t)),setTimeout(function(){try{e.removeChild(i)}catch(t){return!1}},d)},u)}}var h={touches:0,allowEvent:function(t){var e=!0;return/^(mousedown|mousemove)$/.test(t.type)&&h.touches&&(e=!1),e},registerEvent:function(t){var e=t.type;"touchstart"===e?h.touches+=1:/^(touchend|touchcancel)$/.test(e)&&setTimeout(function(){h.touches&&(h.touches-=1)},500)}};function c(t){var e=function(t){if(!1===h.allowEvent(t))return null;for(var e=null,i=t.target||t.srcElement;null!==i.parentElement;){if(i.classList.contains("waves-effect")&&!(i instanceof SVGElement)){e=i;break}i=i.parentElement}return e}(t);if(null!==e){if(e.disabled||e.getAttribute("disabled")||e.classList.contains("disabled"))return;if(h.registerEvent(t),"touchstart"===t.type&&l.delay){var i=!1,a=setTimeout(function(){a=null,l.show(t,e)},l.delay),r=function(n){a&&(clearTimeout(a),a=null,l.show(t,e)),i||(i=!0,l.hide(n,e))};e.addEventListener("touchmove",function(t){a&&(clearTimeout(a),a=null),r(t)},!1),e.addEventListener("touchend",r,!1),e.addEventListener("touchcancel",r,!1)}else l.show(t,e),n&&(e.addEventListener("touchend",l.hide,!1),e.addEventListener("touchcancel",l.hide,!1)),e.addEventListener("mouseup",l.hide,!1),e.addEventListener("mouseleave",l.hide,!1)}}return t.init=function(t){var e=document.body;"duration"in(t=t||{})&&(l.duration=t.duration),"delay"in t&&(l.delay=t.delay),n&&(e.addEventListener("touchstart",c,!1),e.addEventListener("touchcancel",h.registerEvent,!1),e.addEventListener("touchend",h.registerEvent,!1)),e.addEventListener("mousedown",c,!1)},t.attach=function(t,e){var n,a;t=r(t),"[object Array]"===i.call(e)&&(e=e.join(" ")),e=e?" "+e:"";for(var o=0,s=t.length;o<s;o++)a=(n=t[o]).tagName.toLowerCase(),-1!==["input","img"].indexOf(a)&&(u[a](n),n=n.parentElement),-1===n.className.indexOf("waves-effect")&&(n.className+=" waves-effect"+e)},t.ripple=function(t,e){var i=(t=r(t)).length;if((e=e||{}).wait=e.wait||0,e.position=e.position||null,i)for(var n,a,s,u={},d=0,h={type:"mousedown",button:1},c=function(t,e){return function(){l.hide(t,e)}};d<i;d++)if(n=t[d],a=e.position||{x:n.clientWidth/2,y:n.clientHeight/2},s=o(n),u.x=s.left+a.x,u.y=s.top+a.y,h.pageX=u.x,h.pageY=u.y,l.show(h,n),e.wait>=0&&null!==e.wait){setTimeout(c({type:"mouseup",button:1},n),e.wait)}},t.calm=function(t){for(var e={type:"mouseup",button:1},i=0,n=(t=r(t)).length;i<n;i++)l.hide(e,t[i])},t.displayEffect=function(e){console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"),t.init(e)},t}),Waves.attach(".btn:not(.btn-flat), .btn-floating",["waves-light"]),Waves.attach(".btn-flat",["waves-effect"]),Waves.attach(".view .mask",["waves-light"]),Waves.attach(".waves-light",["waves-light"]),Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar form, .nav-tabs .nav-item",["waves-light"]),Waves.attach(".pager li a",["waves-light"]),Waves.attach(".pagination .page-item .page-link",["waves-effect"]),Waves.init(),function(t){t(document).ready(function(){var e=["text","password","email","url","tel","number","search","search-md"].map(function(t){return"input[type="+t+"]"}).join(", ")+", textarea",i=".materialize-textarea",n=function(t){var e=t.siblings("label, i"),i=t.val().length,n=t.attr("placeholder");e[(i||n?"add":"remove")+"Class"]("active")},a=function(t){if(t.hasClass("validate")){var e=t.val(),i=!e.length,n=!t[0].validity.badInput;if(i&&n)t.removeClass("valid").removeClass("invalid");else{var a=t.is(":valid"),r=Number(t.attr("length"))||0;a&&(!r||r>e.length)?t.removeClass("invalid").addClass("valid"):t.removeClass("valid").addClass("invalid")}}},r=function(){var e=t(void 0);if(e.val().length){var i=t(".hiddendiv"),n=e.css("font-family"),a=e.css("font-size");a&&i.css("font-size",a),n&&i.css("font-family",n),"off"===e.attr("wrap")&&i.css("overflow-wrap","normal").css("white-space","pre"),i.text(e.val()+"\n");var r=i.html().replace(/\n/g,"<br>");i.html(r),i.css("width",e.is(":visible")?e.width():t(window).width()/2),e.css("height",i.height())}};t(e).each(function(e,i){var a=t(i),r=a.siblings("label, i");n(a),i.validity.badInput&&r.addClass("active")}),t(document).on("focus",e,function(e){t(e.target).siblings("label, i").addClass("active")}),t(document).on("blur",e,function(e){var i=t(e.target),n=!i.val(),r=!e.target.validity.badInput,o=void 0===i.attr("placeholder");n&&r&&o&&i.siblings("label, i").removeClass("active"),a(i)}),t(document).on("change",e,function(e){var i=t(e.target);n(i),a(i)}),t("input[autofocus]").siblings("label, i").addClass("active"),t(document).on("reset",function(i){var n=t(i.target);n.is("form")&&(n.find(e).removeClass("valid").removeClass("invalid").each(function(e,i){var n=t(i),a=!n.val(),r=!n.attr("placeholder");a&&r&&n.siblings("label, i").removeClass("active")}),n.find("select.initialized").each(function(e,i){var n=t(i),a=n.siblings("input.select-dropdown"),r=n.children("[selected]").val();n.val(r),a.val(r)}))}),t(".hiddendiv").first().length||($hiddenDiv=t('<div class="hiddendiv common"></div>'),t("body").append($hiddenDiv)),t(i).each(r),t("body").on("keyup keydown",i,r)})}(jQuery),$("body").on("shown.bs.modal",".modal",function(){$(".modal-backdrop").length||($modal_dialog=$(this).children(".modal-dialog"),$modal_dialog.hasClass("modal-side")&&($(this).addClass("modal-scrolling"),$("body").addClass("scrollable")),$modal_dialog.hasClass("modal-frame")&&($(this).addClass("modal-content-clickable"),$("body").addClass("scrollable")))}),$("body").on("hidden.bs.modal",".modal",function(){$("body").removeClass("scrollable")});
/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.slice(0,n.length-1).concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=v.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];"function"==typeof e&&"constructor"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(".select2-results");c.append(a)},c.prototype.sort=function(a){var b=this.options.get("sorter");return b(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(".select2-results__option[aria-selected]");e.each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):0>h-g&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");return"true"===c.attr("aria-selected")?void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{})):void d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(".select2-results__option--highlighted");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return a}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id+"-container",a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2"),e=a(".select2.select2-container--open");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data("element");c.select2("close")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){var c=b.find(".selection");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},d.prototype.selectionContainer=function(){var b=a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){return g?void e.$selection.off("input.search input.searchcheck"):void e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");
if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find("option[data-select2-tag]"));c.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b),d=g.$element.find("option").filter(function(){return a(this).val()===c.id});if(!d.length){var e=g.option(c);e.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([e])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()&&e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c="Please enter "+b+" or more characters";return c},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null;
},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("select2/compat/utils",["jquery"],function(a){function b(b,c,d){var e,f,g=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0===this.indexOf("select2-")&&g.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&(f=d(this),null!=f&&g.push(f))})),b.attr("class",g.join(" "))}return{syncCssClasses:b}}),b.define("select2/compat/containerCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("containerCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptContainerCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("containerCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/dropdownCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("dropdownCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptDropdownCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("dropdownCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/initSelection",["jquery"],function(a){function b(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=c.get("initSelection"),this._isInitialized=!1,a.call(this,b,c)}return b.prototype.current=function(b,c){var d=this;return this._isInitialized?void b.call(this,c):void this.initSelection.call(null,this.$element,function(b){d._isInitialized=!0,a.isArray(b)||(b=[b]),c(b)})},b}),b.define("select2/compat/inputData",["jquery"],function(a){function b(a,b,c){this._currentData=[],this._valueSeparator=c.get("valueSeparator")||",","hidden"===b.prop("type")&&c.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),a.call(this,b,c)}return b.prototype.current=function(b,c){function d(b,c){var e=[];return b.selected||-1!==a.inArray(b.id,c)?(b.selected=!0,e.push(b)):b.selected=!1,b.children&&e.push.apply(e,d(b.children,c)),e}for(var e=[],f=0;f<this._currentData.length;f++){var g=this._currentData[f];e.push.apply(e,d(g,this.$element.val().split(this._valueSeparator)))}c(e)},b.prototype.select=function(b,c){if(this.options.get("multiple")){var d=this.$element.val();d+=this._valueSeparator+c.id,this.$element.val(d),this.$element.trigger("change")}else this.current(function(b){a.map(b,function(a){a.selected=!1})}),this.$element.val(c.id),this.$element.trigger("change")},b.prototype.unselect=function(a,b){var c=this;b.selected=!1,this.current(function(a){for(var d=[],e=0;e<a.length;e++){var f=a[e];b.id!=f.id&&d.push(f.id)}c.$element.val(d.join(c._valueSeparator)),c.$element.trigger("change")})},b.prototype.query=function(a,b,c){for(var d=[],e=0;e<this._currentData.length;e++){var f=this._currentData[e],g=this.matches(b,f);null!==g&&d.push(g)}c({results:d})},b.prototype.addOptions=function(b,c){var d=a.map(c,function(b){return a.data(b[0],"data")});this._currentData.push.apply(this._currentData,d)},b}),b.define("select2/compat/matcher",["jquery"],function(a){function b(b){function c(c,d){var e=a.extend(!0,{},d);if(null==c.term||""===a.trim(c.term))return e;if(d.children){for(var f=d.children.length-1;f>=0;f--){var g=d.children[f],h=b(c.term,g.text,g);h||e.children.splice(f,1)}if(e.children.length>0)return e}return b(c.term,d.text,d)?e:null}return c}return b}),b.define("select2/compat/query",[],function(){function a(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),a.call(this,b,c)}return a.prototype.query=function(a,b,c){b.callback=c;var d=this.options.get("query");d.call(null,b)},a}),b.define("select2/dropdown/attachContainer",[],function(){function a(a,b,c){a.call(this,b,c)}return a.prototype.position=function(a,b,c){var d=c.find(".dropdown-wrapper");d.append(b),b.addClass("select2-dropdown--below"),c.addClass("select2-container--below")},a}),b.define("select2/dropdown/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$dropdown.on(d.join(" "),function(a){a.stopPropagation()})},a}),b.define("select2/selection/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$selection.on(d.join(" "),function(a){a.stopPropagation()})},a}),function(c){"function"==typeof b.define&&b.define.amd?b.define("jquery-mousewheel",["jquery"],c):"object"==typeof exports?module.exports=c:c(a)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if(b=b||{},"object"==typeof b)return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function($, undefined){

	var $window = $(window);

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.splice(0);
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		this.dates = new DateArray();
		this.viewDate = UTCToday();
		this.focusDate = null;

		this._process_options(options);

		this.element = $(element);
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if (this.component && this.component.length === 0)
			this.component = false;

		this.picker = $(DPGlobal.template);
		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('tfoot th.today')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			switch (o.startView){
				case 2:
				case 'decade':
					o.startView = 2;
					break;
				case 1:
				case 'year':
					o.startView = 1;
					break;
				default:
					o.startView = 0;
			}

			switch (o.minViewMode){
				case 1:
				case 'months':
					o.minViewMode = 1;
					break;
				case 2:
				case 'years':
					o.minViewMode = 2;
					break;
				default:
					o.minViewMode = 0;
			}

			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
				else
					o.multidate = 1;
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = ((o.weekStart + 6) % 7);

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return (/^auto|left|right|top|bottom$/).test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return (/^left|right$/).test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return (/^top|bottom$/).test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
			if (this.isInput){ // single input
				this._events = [
					[this.element, {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput){ // component: input + button
				this._events = [
					// For components that are not readonly, allow keyboard nav
					[this.element.find('input'), {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			else if (this.element.is('div')){  // inline datepicker
				this.isInline = true;
			}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (!this.isInline)
				this.picker.appendTo('body');
			this.picker.show();
			this.place();
			this._attachSecondaryEvents();
			this._trigger('show');
		},

		hide: function(){
			if (this.isInline)
				return;
			if (!this.picker.is(':visible'))
				return;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (
				this.o.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this._trigger('hide');
		},

		remove: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			return new Date(this.dates.get(-1));
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			if (!this.isInput){
				if (this.component){
					this.element.find('input').val(formatted).change();
				}
			}
			else {
				this.element.val(formatted).change();
			}
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				windowWidth = $window.width(),
				windowHeight = $window.height(),
				scrollTop = $window.scrollTop();

			var zIndex = parseInt(this.element.parents().filter(function(){
					return $(this).css('z-index') !== 'auto';
				}).first().css('z-index'))+10;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left,
				top = offset.top;

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				// Default to left
				this.picker.addClass('datepicker-orient-left');
				if (offset.left < 0)
					left -= offset.left - visualPadding;
				else if (offset.left + calendarWidth > windowWidth)
					left = windowWidth - calendarWidth - visualPadding;
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow, bottom_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + offset.top - calendarHeight;
				bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
				if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
					yorient = 'top';
				else
					yorient = 'bottom';
			}
			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top += height;
			else
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));

			this.picker.css({
				top: top,
				left: left,
				zIndex: zIndex
			});
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.element.find('input').val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					date < this.o.startDate ||
					date > this.o.endDate ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				var cell = '<th class="cw">&nbsp;</th>';
				html += cell;
				this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
			var html = '',
			i = 0;
			while (i < 12){
				html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
				$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1){
				cls.push('disabled');
			}
			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
			}
			return cls;
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				tooltip;
			this.picker.find('.datepicker-days thead th.datepicker-switch')
						.text(dates[this.o.language].months[month]+' '+year);
			this.picker.find('tfoot th.today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot th.clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');

					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			var years = $.map(this.dates, function(d){
					return d.getUTCFullYear();
				}),
				classes;
			for (var i = -1; i < 11; i++){
				classes = ['year'];
				if (i === -1)
					classes.push('old');
				else if (i === 10)
					classes.push('new');
				if ($.inArray(year, years) !== -1)
					classes.push('active');
				if (year < startYear || year > endYear)
					classes.push('disabled');
				html += '<span class="' + classes.join(' ') + '">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			var target = $(e.target).closest('span, td, th'),
				year, month, day;
			if (target.length === 1){
				switch (target[0].nodeName.toLowerCase()){
					case 'th':
						switch (target[0].className){
							case 'datepicker-switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
								switch (this.viewMode){
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										this._trigger('changeMonth', this.viewDate);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										if (this.viewMode === 1)
											this._trigger('changeYear', this.viewDate);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.o.todayBtn === 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
							case 'clear':
								var element;
								if (this.isInput)
									element = this.element;
								else if (this.component)
									element = this.element.find('input');
								if (element)
									element.val("").change();
								this.update();
								this._trigger('changeDate');
								if (this.o.autoclose)
									this.hide();
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')){
							this.viewDate.setUTCDate(1);
							if (target.is('.month')){
								day = 1;
								month = target.parent().find('span').index(target);
								year = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(month);
								this._trigger('changeMonth', this.viewDate);
								if (this.o.minViewMode === 1){
									this._setDate(UTCDate(year, month, day));
								}
							}
							else {
								day = 1;
								month = 0;
								year = parseInt(target.text(), 10)||0;
								this.viewDate.setUTCFullYear(year);
								this._trigger('changeYear', this.viewDate);
								if (this.o.minViewMode === 2){
									this._setDate(UTCDate(year, month, day));
								}
							}
							this.showMode(-1);
							this.fill();
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							day = parseInt(target.text(), 10)||1;
							year = this.viewDate.getUTCFullYear();
							month = this.viewDate.getUTCMonth();
							if (target.is('.old')){
								if (month === 0){
									month = 11;
									year -= 1;
								}
								else {
									month -= 1;
								}
							}
							else if (target.is('.new')){
								if (month === 11){
									month = 0;
									year += 1;
								}
								else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day));
						}
						break;
				}
			}
			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}
			else if (ix !== -1){
				this.dates.remove(ix);
			}
			else {
				this.dates.push(date);
			}
			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which  === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			this._trigger('changeDate');
			var element;
			if (this.isInput){
				element = this.element;
			}
			else if (this.component){
				element = this.element.find('input');
			}
			if (element){
				element.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveMonth: function(date, dir){
			if (!date)
				return undefined;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (this.picker.is(':not(:visible)')){
				if (e.keyCode === 27) // allow escape to hide and re-show picker
					this.show();
				return;
			}
			var dateChanged = false,
				dir, newDate, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					break;
				case 37: // left
				case 39: // right
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 37 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 38: // up
				case 40: // down
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 38 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 32: // spacebar
					// Spacebar is used in manually typing dates in some formats.
					// As such, its behavior should not be hijacked.
					break;
				case 13: // enter
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					this._toggle_multidate(focusDate);
					dateChanged = true;
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				var element;
				if (this.isInput){
					element = this.element;
				}
				else if (this.component){
					element = this.element.find('input');
				}
				if (element){
					element.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker
				.find('>div')
				.hide()
				.filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName)
					.css('display', 'block');
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		$(this.inputs)
			.datepicker(options)
			.bind('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker'),
				new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[i]){
				// Date being moved earlier/left
				while (i >= 0 && new_date < this.dates[i]){
					this.pickers[i--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[i]){
				// Date being moved later/right
				while (i < l && new_date > this.dates[i]){
					this.pickers[i++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	$.fn.datepicker = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.is('.input-daterange') || opts.inputs){
					var ropts = {
						inputs: opts.inputs || $this.find('input').toArray()
					};
					$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
				}
				else {
					$this.data('datepicker', (data = new Datepicker(this, opts)));
				}
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
				if (internal_return !== undefined)
					return false;
			}
		});
		if (internal_return !== undefined)
			return internal_return;
		else
			return this;
	};

	var defaults = $.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				part, dir, i;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch (part[2]){
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();
			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(2000+v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m === p;
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev">&laquo;</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">&raquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class="table table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			$this.datepicker('show');
		}
	);
	$(function(){
		$('[data-provide="datepicker-inline"]').datepicker();
	});

}(window.jQuery));

/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
(function(b) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(a) { return b(a, window, document) }) : "object" === typeof exports ? module.exports = function(a, d) { a || (a = window); if (!d || !d.fn.dataTable) d = require("datatables.net")(a, d).$; return b(d, a, a.document) } : b(jQuery, window, document) })(function(b, a, d, m) {
    var f = b.fn.dataTable;
    b.extend(!0, f.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap"
    });
    b.extend(f.ext.classes, { sWrapper: "dataTables_wrapper container-fluid dt-bootstrap4", sFilterInput: "form-control form-control-sm", sLengthSelect: "form-control form-control-sm", sProcessing: "dataTables_processing card", sPageButton: "paginate_button page-item" });
    f.ext.renderer.pageButton.bootstrap = function(a, h, r, s, j, n) {
        var o = new f.Api(a),
            t = a.oClasses,
            k = a.oLanguage.oPaginate,
            u = a.oLanguage.oAria.paginate || {},
            e, g, p = 0,
            q = function(d, f) {
                var l, h, i, c, m = function(a) {
                    a.preventDefault();
                    !b(a.currentTarget).hasClass("disabled") &&
                        o.page() != a.data.action && o.page(a.data.action).draw("page")
                };
                l = 0;
                for (h = f.length; l < h; l++)
                    if (c = f[l], b.isArray(c)) q(d, c);
                    else {
                        g = e = "";
                        switch (c) {
                            case "ellipsis":
                                e = "&#x2026;";
                                g = "disabled";
                                break;
                            case "first":
                                e = k.sFirst;
                                g = c + (0 < j ? "" : " disabled");
                                break;
                            case "previous":
                                e = k.sPrevious;
                                g = c + (0 < j ? "" : " disabled");
                                break;
                            case "next":
                                e = k.sNext;
                                g = c + (j < n - 1 ? "" : " disabled");
                                break;
                            case "last":
                                e = k.sLast;
                                g = c + (j < n - 1 ? "" : " disabled");
                                break;
                            default:
                                e = c + 1, g = j === c ? "active" : ""
                        }
                        e && (i = b("<li>", {
                            "class": t.sPageButton + " " + g,
                            id: 0 === r &&
                                "string" === typeof c ? a.sTableId + "_" + c : null
                        }).append(b("<a>", { href: "#", "aria-controls": a.sTableId, "aria-label": u[c], "data-dt-idx": p, tabindex: a.iTabIndex, "class": "page-link" }).html(e)).appendTo(d), a.oApi._fnBindAction(i, { action: c }, m), p++)
                    }
            },
            i;
        try { i = b(h).find(d.activeElement).data("dt-idx") } catch (v) {}
        q(b(h).empty().html('<ul class="pagination"/>').children("ul"), s);
        i !== m && b(h).find("[data-dt-idx=" + i + "]").focus()
    };
    return f
});
/*! DataTables 1.10.7
 * ©2008-2015 SpryMedia Ltd - datatables.net/license
 */
(function(Ea, Q, k) {
    var P = function(h) {
        function W(a) { var b, c, e = {};
            h.each(a, function(d) { if ((b = d.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = d.replace(b[0], b[2].toLowerCase()), e[c] = d, "o" === b[1] && W(a[d]) });
            a._hungarianMap = e }

        function H(a, b, c) { a._hungarianMap || W(a); var e;
            h.each(b, function(d) { e = a._hungarianMap[d]; if (e !== k && (c || b[e] === k)) "o" === e.charAt(0) ? (b[e] || (b[e] = {}), h.extend(!0, b[e], b[d]), H(a[e], b[e], c)) : b[e] = b[d] }) }

        function P(a) {
            var b = m.defaults.oLanguage,
                c = a.sZeroRecords;
            !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && E(a, a, "sZeroRecords", "sEmptyTable");
            !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && E(a, a, "sZeroRecords", "sLoadingRecords");
            a.sInfoThousands && (a.sThousands = a.sInfoThousands);
            (a = a.sDecimal) && db(a)
        }

        function eb(a) {
            A(a, "ordering", "bSort");
            A(a, "orderMulti", "bSortMulti");
            A(a, "orderClasses", "bSortClasses");
            A(a, "orderCellsTop", "bSortCellsTop");
            A(a, "order", "aaSorting");
            A(a, "orderFixed", "aaSortingFixed");
            A(a, "paging", "bPaginate");
            A(a, "pagingType", "sPaginationType");
            A(a, "pageLength", "iDisplayLength");
            A(a, "searching", "bFilter");
            if (a = a.aoSearchCols)
                for (var b = 0, c = a.length; b < c; b++) a[b] && H(m.models.oSearch, a[b])
        }

        function fb(a) { A(a, "orderable", "bSortable");
            A(a, "orderData", "aDataSort");
            A(a, "orderSequence", "asSorting");
            A(a, "orderDataType", "sortDataType"); var b = a.aDataSort;
            b && !h.isArray(b) && (a.aDataSort = [b]) }

        function gb(a) {
            var a = a.oBrowser,
                b = h("<div/>").css({ position: "absolute", top: 0, left: 0, height: 1, width: 1, overflow: "hidden" }).append(h("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(h('<div class="test"/>').css({ width: "100%", height: 10 }))).appendTo("body"),
                c = b.find(".test");
            a.bScrollOversize = 100 === c[0].offsetWidth;
            a.bScrollbarLeft = 1 !== Math.round(c.offset().left);
            b.remove()
        }

        function hb(a, b, c, e, d, f) { var g, j = !1;
            c !== k && (g = c, j = !0); for (; e !== d;) a.hasOwnProperty(e) && (g = j ? b(g, a[e], e, a) : a[e], j = !0, e += f); return g }

        function Fa(a, b) {
            var c = m.defaults.column,
                e = a.aoColumns.length,
                c = h.extend({}, m.models.oColumn, c, {
                    nTh: b ? b : Q.createElement("th"),
                    sTitle: c.sTitle ?
                        c.sTitle : b ? b.innerHTML : "",
                    aDataSort: c.aDataSort ? c.aDataSort : [e],
                    mData: c.mData ? c.mData : e,
                    idx: e
                });
            a.aoColumns.push(c);
            c = a.aoPreSearchCols;
            c[e] = h.extend({}, m.models.oSearch, c[e]);
            ka(a, e, h(b).data())
        }

        function ka(a, b, c) {
            var b = a.aoColumns[b],
                e = a.oClasses,
                d = h(b.nTh);
            if (!b.sWidthOrig) { b.sWidthOrig = d.attr("width") || null; var f = (d.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                f && (b.sWidthOrig = f[1]) }
            c !== k && null !== c && (fb(c), H(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType &&
                (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), h.extend(b, c), E(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), E(b, c, "aDataSort"));
            var g = b.mData,
                j = R(g),
                i = b.mRender ? R(b.mRender) : null,
                c = function(a) { return "string" === typeof a && -1 !== a.indexOf("@") };
            b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
            b.fnGetData = function(a, b, c) { var e = j(a, b, k, c); return i && b ? i(e, b, a, c) : e };
            b.fnSetData = function(a, b, c) { return S(g)(a, b, c) };
            "number" !== typeof g &&
                (a._rowReadObject = !0);
            a.oFeatures.bSort || (b.bSortable = !1, d.addClass(e.sSortableNone));
            a = -1 !== h.inArray("asc", b.asSorting);
            c = -1 !== h.inArray("desc", b.asSorting);
            !b.bSortable || !a && !c ? (b.sSortingClass = e.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = e.sSortableAsc, b.sSortingClassJUI = e.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = e.sSortableDesc, b.sSortingClassJUI = e.sSortJUIDescAllowed) : (b.sSortingClass = e.sSortable, b.sSortingClassJUI = e.sSortJUI)
        }

        function X(a) {
            if (!1 !== a.oFeatures.bAutoWidth) {
                var b =
                    a.aoColumns;
                Ga(a);
                for (var c = 0, e = b.length; c < e; c++) b[c].nTh.style.width = b[c].sWidth
            }
            b = a.oScroll;
            ("" !== b.sY || "" !== b.sX) && Y(a);
            w(a, null, "column-sizing", [a])
        }

        function la(a, b) { var c = Z(a, "bVisible"); return "number" === typeof c[b] ? c[b] : null }

        function $(a, b) { var c = Z(a, "bVisible"),
                c = h.inArray(b, c); return -1 !== c ? c : null }

        function aa(a) { return Z(a, "bVisible").length }

        function Z(a, b) { var c = [];
            h.map(a.aoColumns, function(a, d) { a[b] && c.push(d) }); return c }

        function Ha(a) {
            var b = a.aoColumns,
                c = a.aoData,
                e = m.ext.type.detect,
                d,
                f, g, j, i, h, l, q, n;
            d = 0;
            for (f = b.length; d < f; d++)
                if (l = b[d], n = [], !l.sType && l._sManualType) l.sType = l._sManualType;
                else if (!l.sType) { g = 0; for (j = e.length; g < j; g++) { i = 0; for (h = c.length; i < h; i++) { n[i] === k && (n[i] = x(a, i, d, "type"));
                        q = e[g](n[i], a); if (!q && g !== e.length - 1) break; if ("html" === q) break } if (q) { l.sType = q; break } }
                l.sType || (l.sType = "string") }
        }

        function ib(a, b, c, e) {
            var d, f, g, j, i, o, l = a.aoColumns;
            if (b)
                for (d = b.length - 1; 0 <= d; d--) {
                    o = b[d];
                    var q = o.targets !== k ? o.targets : o.aTargets;
                    h.isArray(q) || (q = [q]);
                    f = 0;
                    for (g = q.length; f <
                        g; f++)
                        if ("number" === typeof q[f] && 0 <= q[f]) { for (; l.length <= q[f];) Fa(a);
                            e(q[f], o) } else if ("number" === typeof q[f] && 0 > q[f]) e(l.length + q[f], o);
                    else if ("string" === typeof q[f]) { j = 0; for (i = l.length; j < i; j++)("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) && e(j, o) }
                }
            if (c) { d = 0; for (a = c.length; d < a; d++) e(d, c[d]) }
        }

        function K(a, b, c, e) {
            var d = a.aoData.length,
                f = h.extend(!0, {}, m.models.oRow, { src: c ? "dom" : "data" });
            f._aData = b;
            a.aoData.push(f);
            for (var b = a.aoColumns, f = 0, g = b.length; f < g; f++) c && Ia(a, d, f, x(a, d, f)), b[f].sType = null;
            a.aiDisplayMaster.push(d);
            (c || !a.oFeatures.bDeferRender) && Ja(a, d, c, e);
            return d
        }

        function ma(a, b) { var c;
            b instanceof h || (b = h(b)); return b.map(function(b, d) { c = na(a, d); return K(a, c.data, d, c.cells) }) }

        function x(a, b, c, e) {
            var d = a.iDraw,
                f = a.aoColumns[c],
                g = a.aoData[b]._aData,
                j = f.sDefaultContent,
                c = f.fnGetData(g, e, { settings: a, row: b, col: c });
            if (c === k) return a.iDrawError != d && null === j && (I(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b, 4), a.iDrawError = d), j;
            if ((c === g || null === c) &&
                null !== j) c = j;
            else if ("function" === typeof c) return c.call(g);
            return null === c && "display" == e ? "" : c
        }

        function Ia(a, b, c, e) { a.aoColumns[c].fnSetData(a.aoData[b]._aData, e, { settings: a, row: b, col: c }) }

        function Ka(a) { return h.map(a.match(/(\\.|[^\.])+/g), function(a) { return a.replace(/\\./g, ".") }) }

        function R(a) {
            if (h.isPlainObject(a)) { var b = {};
                h.each(a, function(a, c) { c && (b[a] = R(c)) }); return function(a, c, f, g) { var j = b[c] || b._; return j !== k ? j(a, c, f, g) : a } }
            if (null === a) return function(a) { return a };
            if ("function" === typeof a) return function(b,
                c, f, g) { return a(b, c, f, g) };
            if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
                var c = function(a, b, f) {
                    var g, j;
                    if ("" !== f) {
                        j = Ka(f);
                        for (var i = 0, h = j.length; i < h; i++) {
                            f = j[i].match(ba);
                            g = j[i].match(T);
                            if (f) { j[i] = j[i].replace(ba, ""); "" !== j[i] && (a = a[j[i]]);
                                g = [];
                                j.splice(0, i + 1);
                                j = j.join(".");
                                i = 0; for (h = a.length; i < h; i++) g.push(c(a[i], b, j));
                                a = f[0].substring(1, f[0].length - 1);
                                a = "" === a ? g : g.join(a); break } else if (g) { j[i] = j[i].replace(T, "");
                                a = a[j[i]](); continue }
                            if (null === a || a[j[i]] ===
                                k) return k;
                            a = a[j[i]]
                        }
                    }
                    return a
                };
                return function(b, d) { return c(b, d, a) }
            }
            return function(b) { return b[a] }
        }

        function S(a) {
            if (h.isPlainObject(a)) return S(a._);
            if (null === a) return function() {};
            if ("function" === typeof a) return function(b, e, d) { a(b, "set", e, d) };
            if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
                var b = function(a, e, d) {
                    var d = Ka(d),
                        f;
                    f = d[d.length - 1];
                    for (var g, j, i = 0, h = d.length - 1; i < h; i++) {
                        g = d[i].match(ba);
                        j = d[i].match(T);
                        if (g) {
                            d[i] = d[i].replace(ba, "");
                            a[d[i]] = [];
                            f = d.slice();
                            f.splice(0, i + 1);
                            g = f.join(".");
                            j = 0;
                            for (h = e.length; j < h; j++) f = {}, b(f, e[j], g), a[d[i]].push(f);
                            return
                        }
                        j && (d[i] = d[i].replace(T, ""), a = a[d[i]](e));
                        if (null === a[d[i]] || a[d[i]] === k) a[d[i]] = {};
                        a = a[d[i]]
                    }
                    if (f.match(T)) a[f.replace(T, "")](e);
                    else a[f.replace(ba, "")] = e
                };
                return function(c, e) { return b(c, e, a) }
            }
            return function(b, e) { b[a] = e }
        }

        function La(a) { return D(a.aoData, "_aData") }

        function oa(a) { a.aoData.length = 0;
            a.aiDisplayMaster.length = 0;
            a.aiDisplay.length = 0 }

        function pa(a, b, c) {
            for (var e = -1, d = 0, f = a.length; d <
                f; d++) a[d] == b ? e = d : a[d] > b && a[d]--; - 1 != e && c === k && a.splice(e, 1)
        }

        function ca(a, b, c, e) {
            var d = a.aoData[b],
                f, g = function(c, f) { for (; c.childNodes.length;) c.removeChild(c.firstChild);
                    c.innerHTML = x(a, b, f, "display") };
            if ("dom" === c || (!c || "auto" === c) && "dom" === d.src) d._aData = na(a, d, e, e === k ? k : d._aData).data;
            else { var j = d.anCells; if (j)
                    if (e !== k) g(j[e], e);
                    else { c = 0; for (f = j.length; c < f; c++) g(j[c], c) } }
            d._aSortData = null;
            d._aFilterData = null;
            g = a.aoColumns;
            if (e !== k) g[e].sType = null;
            else {
                c = 0;
                for (f = g.length; c < f; c++) g[c].sType = null;
                Ma(d)
            }
        }

        function na(a, b, c, e) {
            var d = [],
                f = b.firstChild,
                g, j = 0,
                i, o = a.aoColumns,
                l = a._rowReadObject,
                e = e || l ? {} : [],
                q = function(a, b) { if ("string" === typeof a) { var c = a.indexOf("@"); - 1 !== c && (c = a.substring(c + 1), S(a)(e, b.getAttribute(c))) } },
                a = function(a) { if (c === k || c === j) g = o[j], i = h.trim(a.innerHTML), g && g._bAttrSrc ? (S(g.mData._)(e, i), q(g.mData.sort, a), q(g.mData.type, a), q(g.mData.filter, a)) : l ? (g._setter || (g._setter = S(g.mData)), g._setter(e, i)) : e[j] = i;
                    j++ };
            if (f)
                for (; f;) {
                    b = f.nodeName.toUpperCase();
                    if ("TD" == b || "TH" == b) a(f),
                        d.push(f);
                    f = f.nextSibling
                } else { d = b.anCells;
                    f = 0; for (b = d.length; f < b; f++) a(d[f]) }
            return { data: e, cells: d }
        }

        function Ja(a, b, c, e) {
            var d = a.aoData[b],
                f = d._aData,
                g = [],
                j, i, h, l, q;
            if (null === d.nTr) {
                j = c || Q.createElement("tr");
                d.nTr = j;
                d.anCells = g;
                j._DT_RowIndex = b;
                Ma(d);
                l = 0;
                for (q = a.aoColumns.length; l < q; l++) {
                    h = a.aoColumns[l];
                    i = c ? e[l] : Q.createElement(h.sCellType);
                    g.push(i);
                    if (!c || h.mRender || h.mData !== l) i.innerHTML = x(a, b, l, "display");
                    h.sClass && (i.className += " " + h.sClass);
                    h.bVisible && !c ? j.appendChild(i) : !h.bVisible && c &&
                        i.parentNode.removeChild(i);
                    h.fnCreatedCell && h.fnCreatedCell.call(a.oInstance, i, x(a, b, l), f, b, l)
                }
                w(a, "aoRowCreatedCallback", null, [j, f, b])
            }
            d.nTr.setAttribute("role", "row")
        }

        function Ma(a) { var b = a.nTr,
                c = a._aData; if (b) { c.DT_RowId && (b.id = c.DT_RowId); if (c.DT_RowClass) { var e = c.DT_RowClass.split(" ");
                    a.__rowc = a.__rowc ? Na(a.__rowc.concat(e)) : e;
                    h(b).removeClass(a.__rowc.join(" ")).addClass(c.DT_RowClass) }
                c.DT_RowAttr && h(b).attr(c.DT_RowAttr);
                c.DT_RowData && h(b).data(c.DT_RowData) } }

        function jb(a) {
            var b, c, e, d,
                f, g = a.nTHead,
                j = a.nTFoot,
                i = 0 === h("th, td", g).length,
                o = a.oClasses,
                l = a.aoColumns;
            i && (d = h("<tr/>").appendTo(g));
            b = 0;
            for (c = l.length; b < c; b++) f = l[b], e = h(f.nTh).addClass(f.sClass), i && e.appendTo(d), a.oFeatures.bSort && (e.addClass(f.sSortingClass), !1 !== f.bSortable && (e.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Oa(a, f.nTh, b))), f.sTitle != e.html() && e.html(f.sTitle), Pa(a, "header")(a, e, f, o);
            i && da(a.aoHeader, g);
            h(g).find(">tr").attr("role", "row");
            h(g).find(">tr>th, >tr>td").addClass(o.sHeaderTH);
            h(j).find(">tr>th, >tr>td").addClass(o.sFooterTH);
            if (null !== j) { a = a.aoFooter[0];
                b = 0; for (c = a.length; b < c; b++) f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass) }
        }

        function ea(a, b, c) {
            var e, d, f, g = [],
                j = [],
                i = a.aoColumns.length,
                o;
            if (b) {
                c === k && (c = !1);
                e = 0;
                for (d = b.length; e < d; e++) { g[e] = b[e].slice();
                    g[e].nTr = b[e].nTr; for (f = i - 1; 0 <= f; f--) !a.aoColumns[f].bVisible && !c && g[e].splice(f, 1);
                    j.push([]) }
                e = 0;
                for (d = g.length; e < d; e++) {
                    if (a = g[e].nTr)
                        for (; f = a.firstChild;) a.removeChild(f);
                    f = 0;
                    for (b = g[e].length; f < b; f++)
                        if (o =
                            i = 1, j[e][f] === k) { a.appendChild(g[e][f].cell); for (j[e][f] = 1; g[e + i] !== k && g[e][f].cell == g[e + i][f].cell;) j[e + i][f] = 1, i++; for (; g[e][f + o] !== k && g[e][f].cell == g[e][f + o].cell;) { for (c = 0; c < i; c++) j[e + c][f + o] = 1;
                                o++ }
                            h(g[e][f].cell).attr("rowspan", i).attr("colspan", o) }
                }
            }
        }

        function M(a) {
            var b = w(a, "aoPreDrawCallback", "preDraw", [a]);
            if (-1 !== h.inArray(!1, b)) C(a, !1);
            else {
                var b = [],
                    c = 0,
                    e = a.asStripeClasses,
                    d = e.length,
                    f = a.oLanguage,
                    g = a.iInitDisplayStart,
                    j = "ssp" == B(a),
                    i = a.aiDisplay;
                a.bDrawing = !0;
                g !== k && -1 !== g && (a._iDisplayStart =
                    j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
                var g = a._iDisplayStart,
                    o = a.fnDisplayEnd();
                if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1);
                else if (j) { if (!a.bDestroying && !kb(a)) return } else a.iDraw++;
                if (0 !== i.length) { f = j ? a.aoData.length : o; for (j = j ? 0 : g; j < f; j++) { var l = i[j],
                            q = a.aoData[l];
                        null === q.nTr && Ja(a, l);
                        l = q.nTr; if (0 !== d) { var n = e[c % d];
                            q._sRowStripe != n && (h(l).removeClass(q._sRowStripe).addClass(n), q._sRowStripe = n) }
                        w(a, "aoRowCallback", null, [l, q._aData, c, j]);
                        b.push(l);
                        c++ } } else c = f.sZeroRecords,
                    1 == a.iDraw && "ajax" == B(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", { "class": d ? e[0] : "" }).append(h("<td />", { valign: "top", colSpan: aa(a), "class": a.oClasses.sRowEmpty }).html(c))[0];
                w(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], La(a), g, o, i]);
                w(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], La(a), g, o, i]);
                e = h(a.nTBody);
                e.children().detach();
                e.append(h(b));
                w(a, "aoDrawCallback", "draw", [a]);
                a.bSorted = !1;
                a.bFiltered = !1;
                a.bDrawing = !1
            }
        }

        function N(a, b) { var c = a.oFeatures,
                e = c.bFilter;
            c.bSort && lb(a);
            e ? fa(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();!0 !== b && (a._iDisplayStart = 0);
            a._drawHold = b;
            M(a);
            a._drawHold = !1 }

        function mb(a) {
            var b = a.oClasses,
                c = h(a.nTable),
                c = h("<div/>").insertBefore(c),
                e = a.oFeatures,
                d = h("<div/>", { id: a.sTableId + "_wrapper", "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter) });
            a.nHolding = c[0];
            a.nTableWrapper = d[0];
            a.nTableReinsertBefore = a.nTable.nextSibling;
            for (var f = a.sDom.split(""), g, j, i, o, l, q, n = 0; n < f.length; n++) {
                g =
                    null;
                j = f[n];
                if ("<" == j) { i = h("<div/>")[0];
                    o = f[n + 1]; if ("'" == o || '"' == o) { l = ""; for (q = 2; f[n + q] != o;) l += f[n + q], q++; "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); - 1 != l.indexOf(".") ? (o = l.split("."), i.id = o[0].substr(1, o[0].length - 1), i.className = o[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l;
                        n += q }
                    d.append(i);
                    d = h(i) } else if (">" == j) d = d.parent();
                else if ("l" == j && e.bPaginate && e.bLengthChange) g = nb(a);
                else if ("f" == j && e.bFilter) g = ob(a);
                else if ("r" == j && e.bProcessing) g = pb(a);
                else if ("t" == j) g = qb(a);
                else if ("i" ==
                    j && e.bInfo) g = rb(a);
                else if ("p" == j && e.bPaginate) g = sb(a);
                else if (0 !== m.ext.feature.length) { i = m.ext.feature;
                    q = 0; for (o = i.length; q < o; q++)
                        if (j == i[q].cFeature) { g = i[q].fnInit(a); break } }
                g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), d.append(g))
            }
            c.replaceWith(d)
        }

        function da(a, b) {
            var c = h(b).children("tr"),
                e, d, f, g, j, i, o, l, q, n;
            a.splice(0, a.length);
            f = 0;
            for (i = c.length; f < i; f++) a.push([]);
            f = 0;
            for (i = c.length; f < i; f++) {
                e = c[f];
                for (d = e.firstChild; d;) {
                    if ("TD" == d.nodeName.toUpperCase() || "TH" == d.nodeName.toUpperCase()) {
                        l =
                            1 * d.getAttribute("colspan");
                        q = 1 * d.getAttribute("rowspan");
                        l = !l || 0 === l || 1 === l ? 1 : l;
                        q = !q || 0 === q || 1 === q ? 1 : q;
                        g = 0;
                        for (j = a[f]; j[g];) g++;
                        o = g;
                        n = 1 === l ? !0 : !1;
                        for (j = 0; j < l; j++)
                            for (g = 0; g < q; g++) a[f + g][o + j] = { cell: d, unique: n }, a[f + g].nTr = e
                    }
                    d = d.nextSibling
                }
            }
        }

        function qa(a, b, c) { var e = [];
            c || (c = a.aoHeader, b && (c = [], da(c, b))); for (var b = 0, d = c.length; b < d; b++)
                for (var f = 0, g = c[b].length; f < g; f++)
                    if (c[b][f].unique && (!e[f] || !a.bSortCellsTop)) e[f] = c[b][f].cell;
            return e }

        function ra(a, b, c) {
            w(a, "aoServerParams", "serverParams", [b]);
            if (b && h.isArray(b)) { var e = {},
                    d = /(.*?)\[\]$/;
                h.each(b, function(a, b) { var c = b.name.match(d);
                    c ? (c = c[0], e[c] || (e[c] = []), e[c].push(b.value)) : e[b.name] = b.value });
                b = e }
            var f, g = a.ajax,
                j = a.oInstance,
                i = function(b) { w(a, null, "xhr", [a, b, a.jqXHR]);
                    c(b) };
            if (h.isPlainObject(g) && g.data) { f = g.data; var o = h.isFunction(f) ? f(b, a) : f,
                    b = h.isFunction(f) && o ? o : h.extend(!0, b, o);
                delete g.data }
            o = {
                data: b,
                success: function(b) { var c = b.error || b.sError;
                    c && I(a, 0, c);
                    a.json = b;
                    i(b) },
                dataType: "json",
                cache: !1,
                type: a.sServerMethod,
                error: function(b,
                    c) { var f = w(a, null, "xhr", [a, null, a.jqXHR]); - 1 === h.inArray(!0, f) && ("parsererror" == c ? I(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && I(a, 0, "Ajax error", 7));
                    C(a, !1) }
            };
            a.oAjaxData = b;
            w(a, null, "preXhr", [a, b]);
            a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function(a, b) { return { name: b, value: a } }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(o, { url: g || a.sAjaxSource })) : h.isFunction(g) ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(o, g)), g.data = f)
        }

        function kb(a) {
            return a.bAjaxDataGet ?
                (a.iDraw++, C(a, !0), ra(a, tb(a), function(b) { ub(a, b) }), !1) : !0
        }

        function tb(a) {
            var b = a.aoColumns,
                c = b.length,
                e = a.oFeatures,
                d = a.oPreviousSearch,
                f = a.aoPreSearchCols,
                g, j = [],
                i, o, l, q = U(a);
            g = a._iDisplayStart;
            i = !1 !== e.bPaginate ? a._iDisplayLength : -1;
            var n = function(a, b) { j.push({ name: a, value: b }) };
            n("sEcho", a.iDraw);
            n("iColumns", c);
            n("sColumns", D(b, "sName").join(","));
            n("iDisplayStart", g);
            n("iDisplayLength", i);
            var k = { draw: a.iDraw, columns: [], order: [], start: g, length: i, search: { value: d.sSearch, regex: d.bRegex } };
            for (g =
                0; g < c; g++) o = b[g], l = f[g], i = "function" == typeof o.mData ? "function" : o.mData, k.columns.push({ data: i, name: o.sName, searchable: o.bSearchable, orderable: o.bSortable, search: { value: l.sSearch, regex: l.bRegex } }), n("mDataProp_" + g, i), e.bFilter && (n("sSearch_" + g, l.sSearch), n("bRegex_" + g, l.bRegex), n("bSearchable_" + g, o.bSearchable)), e.bSort && n("bSortable_" + g, o.bSortable);
            e.bFilter && (n("sSearch", d.sSearch), n("bRegex", d.bRegex));
            e.bSort && (h.each(q, function(a, b) {
                k.order.push({ column: b.col, dir: b.dir });
                n("iSortCol_" + a, b.col);
                n("sSortDir_" + a, b.dir)
            }), n("iSortingCols", q.length));
            b = m.ext.legacy.ajax;
            return null === b ? a.sAjaxSource ? j : k : b ? j : k
        }

        function ub(a, b) {
            var c = sa(a, b),
                e = b.sEcho !== k ? b.sEcho : b.draw,
                d = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
                f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered;
            if (e) { if (1 * e < a.iDraw) return;
                a.iDraw = 1 * e }
            oa(a);
            a._iRecordsTotal = parseInt(d, 10);
            a._iRecordsDisplay = parseInt(f, 10);
            e = 0;
            for (d = c.length; e < d; e++) K(a, c[e]);
            a.aiDisplay = a.aiDisplayMaster.slice();
            a.bAjaxDataGet = !1;
            M(a);
            a._bInitComplete || ta(a, b);
            a.bAjaxDataGet = !0;
            C(a, !1)
        }

        function sa(a, b) { var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp; return "data" === c ? b.aaData || b[c] : "" !== c ? R(c)(b) : b }

        function ob(a) {
            var b = a.oClasses,
                c = a.sTableId,
                e = a.oLanguage,
                d = a.oPreviousSearch,
                f = a.aanFeatures,
                g = '<input type="search" class="' + b.sFilterInput + '"/>',
                j = e.sSearch,
                j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g,
                b = h("<div/>", { id: !f.f ? c + "_filter" : null, "class": b.sFilter }).append(h("<label/>").append(j)),
                f = function() { var b = !this.value ? "" : this.value;
                    b != d.sSearch && (fa(a, { sSearch: b, bRegex: d.bRegex, bSmart: d.bSmart, bCaseInsensitive: d.bCaseInsensitive }), a._iDisplayStart = 0, M(a)) },
                g = null !== a.searchDelay ? a.searchDelay : "ssp" === B(a) ? 400 : 0,
                i = h("input", b).val(d.sSearch).attr("placeholder", e.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", g ? ua(f, g) : f).bind("keypress.DT", function(a) { if (13 == a.keyCode) return !1 }).attr("aria-controls", c);
            h(a.nTable).on("search.dt.DT", function(b, c) {
                if (a === c) try {
                    i[0] !==
                        Q.activeElement && i.val(d.sSearch)
                } catch (f) {}
            });
            return b[0]
        }

        function fa(a, b, c) {
            var e = a.oPreviousSearch,
                d = a.aoPreSearchCols,
                f = function(a) { e.sSearch = a.sSearch;
                    e.bRegex = a.bRegex;
                    e.bSmart = a.bSmart;
                    e.bCaseInsensitive = a.bCaseInsensitive };
            Ha(a);
            if ("ssp" != B(a)) { vb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
                f(b); for (b = 0; b < d.length; b++) wb(a, d[b].sSearch, b, d[b].bEscapeRegex !== k ? !d[b].bEscapeRegex : d[b].bRegex, d[b].bSmart, d[b].bCaseInsensitive);
                xb(a) } else f(b);
            a.bFiltered = !0;
            w(a, null, "search", [a])
        }

        function xb(a) { for (var b = m.ext.search, c = a.aiDisplay, e, d, f = 0, g = b.length; f < g; f++) { for (var j = [], i = 0, h = c.length; i < h; i++) d = c[i], e = a.aoData[d], b[f](a, e._aFilterData, d, e._aData, i) && j.push(d);
                c.length = 0;
                c.push.apply(c, j) } }

        function wb(a, b, c, e, d, f) { if ("" !== b)
                for (var g = a.aiDisplay, e = Qa(b, e, d, f), d = g.length - 1; 0 <= d; d--) b = a.aoData[g[d]]._aFilterData[c], e.test(b) || g.splice(d, 1) }

        function vb(a, b, c, e, d, f) {
            var e = Qa(b, e, d, f),
                d = a.oPreviousSearch.sSearch,
                f = a.aiDisplayMaster,
                g;
            0 !== m.ext.search.length &&
                (c = !0);
            g = yb(a);
            if (0 >= b.length) a.aiDisplay = f.slice();
            else { if (g || c || d.length > b.length || 0 !== b.indexOf(d) || a.bSorted) a.aiDisplay = f.slice();
                b = a.aiDisplay; for (c = b.length - 1; 0 <= c; c--) e.test(a.aoData[b[c]]._sFilterRow) || b.splice(c, 1) }
        }

        function Qa(a, b, c, e) { a = b ? a : va(a);
            c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function(a) { if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/),
                    a = b ? b[1] : a; return a.replace('"', "") }).join(")(?=.*?") + ").*$"); return RegExp(a, e ? "i" : "") }

        function va(a) { return a.replace(Yb, "\\$1") }

        function yb(a) { var b = a.aoColumns,
                c, e, d, f, g, j, i, h, l = m.ext.type.search;
            c = !1;
            e = 0; for (f = a.aoData.length; e < f; e++)
                if (h = a.aoData[e], !h._aFilterData) { j = [];
                    d = 0; for (g = b.length; d < g; d++) c = b[d], c.bSearchable ? (i = x(a, e, d, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (wa.innerHTML = i, i = Zb ? wa.textContent : wa.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
                    h._aFilterData = j;
                    h._sFilterRow = j.join("  ");
                    c = !0 }
            return c }

        function zb(a) { return { search: a.sSearch, smart: a.bSmart, regex: a.bRegex, caseInsensitive: a.bCaseInsensitive } }

        function Ab(a) { return { sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive } }

        function rb(a) { var b = a.sTableId,
                c = a.aanFeatures.i,
                e = h("<div/>", { "class": a.oClasses.sInfo, id: !c ? b + "_info" : null });
            c || (a.aoDrawCallback.push({ fn: Bb, sName: "information" }), e.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info")); return e[0] }

        function Bb(a) {
            var b =
                a.aanFeatures.i;
            if (0 !== b.length) { var c = a.oLanguage,
                    e = a._iDisplayStart + 1,
                    d = a.fnDisplayEnd(),
                    f = a.fnRecordsTotal(),
                    g = a.fnRecordsDisplay(),
                    j = g ? c.sInfo : c.sInfoEmpty;
                g !== f && (j += " " + c.sInfoFiltered);
                j += c.sInfoPostFix;
                j = Cb(a, j);
                c = c.fnInfoCallback;
                null !== c && (j = c.call(a.oInstance, a, e, d, f, g, j));
                h(b).html(j) }
        }

        function Cb(a, b) {
            var c = a.fnFormatNumber,
                e = a._iDisplayStart + 1,
                d = a._iDisplayLength,
                f = a.fnRecordsDisplay(),
                g = -1 === d;
            return b.replace(/_START_/g, c.call(a, e)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g,
                c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(e / d))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / d)))
        }

        function ga(a) {
            var b, c, e = a.iInitDisplayStart,
                d = a.aoColumns,
                f;
            c = a.oFeatures;
            if (a.bInitialised) {
                mb(a);
                jb(a);
                ea(a, a.aoHeader);
                ea(a, a.aoFooter);
                C(a, !0);
                c.bAutoWidth && Ga(a);
                b = 0;
                for (c = d.length; b < c; b++) f = d[b], f.sWidth && (f.nTh.style.width = s(f.sWidth));
                N(a);
                d = B(a);
                "ssp" != d && ("ajax" == d ? ra(a, [], function(c) {
                    var f = sa(a, c);
                    for (b = 0; b < f.length; b++) K(a, f[b]);
                    a.iInitDisplayStart = e;
                    N(a);
                    C(a, !1);
                    ta(a, c)
                }, a) : (C(a, !1), ta(a)))
            } else setTimeout(function() { ga(a) }, 200)
        }

        function ta(a, b) { a._bInitComplete = !0;
            b && X(a);
            w(a, "aoInitComplete", "init", [a, b]) }

        function Ra(a, b) { var c = parseInt(b, 10);
            a._iDisplayLength = c;
            Sa(a);
            w(a, null, "length", [a, c]) }

        function nb(a) {
            for (var b = a.oClasses, c = a.sTableId, e = a.aLengthMenu, d = h.isArray(e[0]), f = d ? e[0] : e, e = d ? e[1] : e, d = h("<select/>", { name: c + "_length", "aria-controls": c, "class": b.sLengthSelect }), g = 0, j = f.length; g < j; g++) d[0][g] = new Option(e[g],
                f[g]);
            var i = h("<div><label/></div>").addClass(b.sLength);
            a.aanFeatures.l || (i[0].id = c + "_length");
            i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", d[0].outerHTML));
            h("select", i).val(a._iDisplayLength).bind("change.DT", function() { Ra(a, h(this).val());
                M(a) });
            h(a.nTable).bind("length.dt.DT", function(b, c, f) { a === c && h("select", i).val(f) });
            return i[0]
        }

        function sb(a) {
            var b = a.sPaginationType,
                c = m.ext.pager[b],
                e = "function" === typeof c,
                d = function(a) { M(a) },
                b = h("<div/>").addClass(a.oClasses.sPaging + b)[0],
                f = a.aanFeatures;
            e || c.fnInit(a, b, d);
            f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({ fn: function(a) { if (e) { var b = a._iDisplayStart,
                            i = a._iDisplayLength,
                            h = a.fnRecordsDisplay(),
                            l = -1 === i,
                            b = l ? 0 : Math.ceil(b / i),
                            i = l ? 1 : Math.ceil(h / i),
                            h = c(b, i),
                            q, l = 0; for (q = f.p.length; l < q; l++) Pa(a, "pageButton")(a, f.p[l], l, h, b, i) } else c.fnUpdate(a, d) }, sName: "pagination" }));
            return b
        }

        function Ta(a, b, c) {
            var e = a._iDisplayStart,
                d = a._iDisplayLength,
                f = a.fnRecordsDisplay();
            0 === f || -1 === d ? e = 0 : "number" === typeof b ? (e = b * d, e > f && (e = 0)) :
                "first" == b ? e = 0 : "previous" == b ? (e = 0 <= d ? e - d : 0, 0 > e && (e = 0)) : "next" == b ? e + d < f && (e += d) : "last" == b ? e = Math.floor((f - 1) / d) * d : I(a, 0, "Unknown paging action: " + b, 5);
            b = a._iDisplayStart !== e;
            a._iDisplayStart = e;
            b && (w(a, null, "page", [a]), c && M(a));
            return b
        }

        function pb(a) { return h("<div/>", { id: !a.aanFeatures.r ? a.sTableId + "_processing" : null, "class": a.oClasses.sProcessing }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0] }

        function C(a, b) {
            a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none");
            w(a,
                null, "processing", [a, b])
        }

        function qb(a) {
            var b = h(a.nTable);
            b.attr("role", "grid");
            var c = a.oScroll;
            if ("" === c.sX && "" === c.sY) return a.nTable;
            var e = c.sX,
                d = c.sY,
                f = a.oClasses,
                g = b.children("caption"),
                j = g.length ? g[0]._captionSide : null,
                i = h(b[0].cloneNode(!1)),
                o = h(b[0].cloneNode(!1)),
                l = b.children("tfoot");
            c.sX && "100%" === b.attr("width") && b.removeAttr("width");
            l.length || (l = null);
            c = h("<div/>", { "class": f.sScrollWrapper }).append(h("<div/>", { "class": f.sScrollHead }).css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: e ? !e ? null : s(e) : "100%"
            }).append(h("<div/>", { "class": f.sScrollHeadInner }).css({ "box-sizing": "content-box", width: c.sXInner || "100%" }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", { "class": f.sScrollBody }).css({ overflow: "auto", height: !d ? null : s(d), width: !e ? null : s(e) }).append(b));
            l && c.append(h("<div/>", { "class": f.sScrollFoot }).css({ overflow: "hidden", border: 0, width: e ? !e ? null : s(e) : "100%" }).append(h("<div/>", { "class": f.sScrollFootInner }).append(o.removeAttr("id").css("margin-left",
                0).append("bottom" === j ? g : null).append(b.children("tfoot")))));
            var b = c.children(),
                q = b[0],
                f = b[1],
                n = l ? b[2] : null;
            if (e) h(f).on("scroll.DT", function() { var a = this.scrollLeft;
                q.scrollLeft = a;
                l && (n.scrollLeft = a) });
            a.nScrollHead = q;
            a.nScrollBody = f;
            a.nScrollFoot = n;
            a.aoDrawCallback.push({ fn: Y, sName: "scrolling" });
            return c[0]
        }

        function Y(a) {
            var b = a.oScroll,
                c = b.sX,
                e = b.sXInner,
                d = b.sY,
                f = b.iBarWidth,
                g = h(a.nScrollHead),
                j = g[0].style,
                i = g.children("div"),
                o = i[0].style,
                l = i.children("table"),
                i = a.nScrollBody,
                q = h(i),
                n = i.style,
                k = h(a.nScrollFoot).children("div"),
                p = k.children("table"),
                m = h(a.nTHead),
                r = h(a.nTable),
                t = r[0],
                O = t.style,
                L = a.nTFoot ? h(a.nTFoot) : null,
                ha = a.oBrowser,
                w = ha.bScrollOversize,
                v, u, y, x, z, A = [],
                B = [],
                C = [],
                D, E = function(a) { a = a.style;
                    a.paddingTop = "0";
                    a.paddingBottom = "0";
                    a.borderTopWidth = "0";
                    a.borderBottomWidth = "0";
                    a.height = 0 };
            r.children("thead, tfoot").remove();
            z = m.clone().prependTo(r);
            v = m.find("tr");
            y = z.find("tr");
            z.find("th, td").removeAttr("tabindex");
            L && (x = L.clone().prependTo(r), u = L.find("tr"), x = x.find("tr"));
            c || (n.width = "100%", g[0].style.width = "100%");
            h.each(qa(a, z), function(b, c) { D = la(a, b);
                c.style.width = a.aoColumns[D].sWidth });
            L && G(function(a) { a.style.width = "" }, x);
            b.bCollapse && "" !== d && (n.height = q[0].offsetHeight + m[0].offsetHeight + "px");
            g = r.outerWidth();
            if ("" === c) { if (O.width = "100%", w && (r.find("tbody").height() > i.offsetHeight || "scroll" == q.css("overflow-y"))) O.width = s(r.outerWidth() - f) } else "" !== e ? O.width = s(e) : g == q.width() && q.height() < r.height() ? (O.width = s(g - f), r.outerWidth() > g - f && (O.width = s(g))) : O.width =
                s(g);
            g = r.outerWidth();
            G(E, y);
            G(function(a) { C.push(a.innerHTML);
                A.push(s(h(a).css("width"))) }, y);
            G(function(a, b) { a.style.width = A[b] }, v);
            h(y).height(0);
            L && (G(E, x), G(function(a) { B.push(s(h(a).css("width"))) }, x), G(function(a, b) { a.style.width = B[b] }, u), h(x).height(0));
            G(function(a, b) { a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + C[b] + "</div>";
                a.style.width = A[b] }, y);
            L && G(function(a, b) { a.innerHTML = "";
                a.style.width = B[b] }, x);
            if (r.outerWidth() < g) {
                u = i.scrollHeight > i.offsetHeight ||
                    "scroll" == q.css("overflow-y") ? g + f : g;
                if (w && (i.scrollHeight > i.offsetHeight || "scroll" == q.css("overflow-y"))) O.width = s(u - f);
                ("" === c || "" !== e) && I(a, 1, "Possible column misalignment", 6)
            } else u = "100%";
            n.width = s(u);
            j.width = s(u);
            L && (a.nScrollFoot.style.width = s(u));
            !d && w && (n.height = s(t.offsetHeight + f));
            d && b.bCollapse && (n.height = s(d), b = c && t.offsetWidth > i.offsetWidth ? f : 0, t.offsetHeight < i.offsetHeight && (n.height = s(t.offsetHeight + b)));
            b = r.outerWidth();
            l[0].style.width = s(b);
            o.width = s(b);
            l = r.height() > i.clientHeight ||
                "scroll" == q.css("overflow-y");
            ha = "padding" + (ha.bScrollbarLeft ? "Left" : "Right");
            o[ha] = l ? f + "px" : "0px";
            L && (p[0].style.width = s(b), k[0].style.width = s(b), k[0].style[ha] = l ? f + "px" : "0px");
            q.scroll();
            if ((a.bSorted || a.bFiltered) && !a._drawHold) i.scrollTop = 0
        }

        function G(a, b, c) { for (var e = 0, d = 0, f = b.length, g, j; d < f;) { g = b[d].firstChild; for (j = c ? c[d].firstChild : null; g;) 1 === g.nodeType && (c ? a(g, j, e) : a(g, e), e++), g = g.nextSibling, j = c ? j.nextSibling : null;
                d++ } }

        function Ga(a) {
            var b = a.nTable,
                c = a.aoColumns,
                e = a.oScroll,
                d = e.sY,
                f = e.sX,
                g = e.sXInner,
                j = c.length,
                e = Z(a, "bVisible"),
                i = h("th", a.nTHead),
                o = b.getAttribute("width"),
                l = b.parentNode,
                k = !1,
                n, m;
            (n = b.style.width) && -1 !== n.indexOf("%") && (o = n);
            for (n = 0; n < e.length; n++) m = c[e[n]], null !== m.sWidth && (m.sWidth = Db(m.sWidthOrig, l), k = !0);
            if (!k && !f && !d && j == aa(a) && j == i.length)
                for (n = 0; n < j; n++) c[n].sWidth = s(i.eq(n).width());
            else {
                j = h(b).clone().css("visibility", "hidden").removeAttr("id");
                j.find("tbody tr").remove();
                var p = h("<tr/>").appendTo(j.find("tbody"));
                j.find("tfoot th, tfoot td").css("width",
                    "");
                i = qa(a, j.find("thead")[0]);
                for (n = 0; n < e.length; n++) m = c[e[n]], i[n].style.width = null !== m.sWidthOrig && "" !== m.sWidthOrig ? s(m.sWidthOrig) : "";
                if (a.aoData.length)
                    for (n = 0; n < e.length; n++) k = e[n], m = c[k], h(Eb(a, k)).clone(!1).append(m.sContentPadding).appendTo(p);
                j.appendTo(l);
                f && g ? j.width(g) : f ? (j.css("width", "auto"), j.width() < l.offsetWidth && j.width(l.offsetWidth)) : d ? j.width(l.offsetWidth) : o && j.width(o);
                Fb(a, j[0]);
                if (f) {
                    for (n = g = 0; n < e.length; n++) m = c[e[n]], d = h(i[n]).outerWidth(), g += null === m.sWidthOrig ? d : parseInt(m.sWidth,
                        10) + d - h(i[n]).width();
                    j.width(s(g));
                    b.style.width = s(g)
                }
                for (n = 0; n < e.length; n++)
                    if (m = c[e[n]], d = h(i[n]).width()) m.sWidth = s(d);
                b.style.width = s(j.css("width"));
                j.remove()
            }
            o && (b.style.width = s(o));
            if ((o || f) && !a._reszEvt) b = function() { h(Ea).bind("resize.DT-" + a.sInstance, ua(function() { X(a) })) }, a.oBrowser.bScrollOversize ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
        }

        function ua(a, b) {
            var c = b !== k ? b : 200,
                e, d;
            return function() {
                var b = this,
                    g = +new Date,
                    j = arguments;
                e && g < e + c ? (clearTimeout(d), d = setTimeout(function() {
                    e = k;
                    a.apply(b,
                        j)
                }, c)) : (e = g, a.apply(b, j))
            }
        }

        function Db(a, b) { if (!a) return 0; var c = h("<div/>").css("width", s(a)).appendTo(b || Q.body),
                e = c[0].offsetWidth;
            c.remove(); return e }

        function Fb(a, b) { var c = a.oScroll; if (c.sX || c.sY) c = !c.sX ? c.iBarWidth : 0, b.style.width = s(h(b).outerWidth() - c) }

        function Eb(a, b) { var c = Gb(a, b); if (0 > c) return null; var e = a.aoData[c]; return !e.nTr ? h("<td/>").html(x(a, c, b, "display"))[0] : e.anCells[b] }

        function Gb(a, b) {
            for (var c, e = -1, d = -1, f = 0, g = a.aoData.length; f < g; f++) c = x(a, f, b, "display") + "", c = c.replace($b, ""),
                c.length > e && (e = c.length, d = f);
            return d
        }

        function s(a) { return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a }

        function Hb() { var a = m.__scrollbarWidth; if (a === k) { var b = h("<p/>").css({ position: "absolute", top: 0, left: 0, width: "100%", height: 150, padding: 0, overflow: "scroll", visibility: "hidden" }).appendTo("body"),
                    a = b[0].offsetWidth - b[0].clientWidth;
                m.__scrollbarWidth = a;
                b.remove() } return a }

        function U(a) {
            var b, c, e = [],
                d = a.aoColumns,
                f, g, j, i;
            b = a.aaSortingFixed;
            c = h.isPlainObject(b);
            var o = [];
            f = function(a) { a.length && !h.isArray(a[0]) ? o.push(a) : o.push.apply(o, a) };
            h.isArray(b) && f(b);
            c && b.pre && f(b.pre);
            f(a.aaSorting);
            c && b.post && f(b.post);
            for (a = 0; a < o.length; a++) { i = o[a][0];
                f = d[i].aDataSort;
                b = 0; for (c = f.length; b < c; b++) g = f[b], j = d[g].sType || "string", o[a]._idx === k && (o[a]._idx = h.inArray(o[a][1], d[g].asSorting)), e.push({ src: i, col: g, dir: o[a][1], index: o[a]._idx, type: j, formatter: m.ext.type.order[j + "-pre"] }) }
            return e
        }

        function lb(a) {
            var b, c, e = [],
                d = m.ext.type.order,
                f = a.aoData,
                g = 0,
                j, i = a.aiDisplayMaster,
                h;
            Ha(a);
            h = U(a);
            b = 0;
            for (c = h.length; b < c; b++) j = h[b], j.formatter && g++, Ib(a, j.col);
            if ("ssp" != B(a) && 0 !== h.length) {
                b = 0;
                for (c = i.length; b < c; b++) e[i[b]] = b;
                g === h.length ? i.sort(function(a, b) { var c, d, g, j, i = h.length,
                        k = f[a]._aSortData,
                        m = f[b]._aSortData; for (g = 0; g < i; g++)
                        if (j = h[g], c = k[j.col], d = m[j.col], c = c < d ? -1 : c > d ? 1 : 0, 0 !== c) return "asc" === j.dir ? c : -c;
                    c = e[a];
                    d = e[b]; return c < d ? -1 : c > d ? 1 : 0 }) : i.sort(function(a, b) {
                    var c, g, j, i, k = h.length,
                        m = f[a]._aSortData,
                        r = f[b]._aSortData;
                    for (j = 0; j < k; j++)
                        if (i = h[j], c = m[i.col], g = r[i.col], i = d[i.type +
                                "-" + i.dir] || d["string-" + i.dir], c = i(c, g), 0 !== c) return c;
                    c = e[a];
                    g = e[b];
                    return c < g ? -1 : c > g ? 1 : 0
                })
            }
            a.bSorted = !0
        }

        function Jb(a) {
            for (var b, c, e = a.aoColumns, d = U(a), a = a.oLanguage.oAria, f = 0, g = e.length; f < g; f++) {
                c = e[f];
                var j = c.asSorting;
                b = c.sTitle.replace(/<.*?>/g, "");
                var i = c.nTh;
                i.removeAttribute("aria-sort");
                c.bSortable && (0 < d.length && d[0].col == f ? (i.setAttribute("aria-sort", "asc" == d[0].dir ? "ascending" : "descending"), c = j[d[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);
                i.setAttribute("aria-label",
                    b)
            }
        }

        function Ua(a, b, c, e) {
            var d = a.aaSorting,
                f = a.aoColumns[b].asSorting,
                g = function(a, b) { var c = a._idx;
                    c === k && (c = h.inArray(a[1], f)); return c + 1 < f.length ? c + 1 : b ? null : 0 };
            "number" === typeof d[0] && (d = a.aaSorting = [d]);
            c && a.oFeatures.bSortMulti ? (c = h.inArray(b, D(d, "0")), -1 !== c ? (b = g(d[c], !0), null === b && 1 === d.length && (b = 0), null === b ? d.splice(c, 1) : (d[c][1] = f[b], d[c]._idx = b)) : (d.push([b, f[0], 0]), d[d.length - 1]._idx = 0)) : d.length && d[0][0] == b ? (b = g(d[0]), d.length = 1, d[0][1] = f[b], d[0]._idx = b) : (d.length = 0, d.push([b, f[0]]), d[0]._idx =
                0);
            N(a);
            "function" == typeof e && e(a)
        }

        function Oa(a, b, c, e) { var d = a.aoColumns[c];
            Va(b, {}, function(b) {!1 !== d.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function() { Ua(a, c, b.shiftKey, e); "ssp" !== B(a) && C(a, !1) }, 0)) : Ua(a, c, b.shiftKey, e)) }) }

        function xa(a) {
            var b = a.aLastSort,
                c = a.oClasses.sSortColumn,
                e = U(a),
                d = a.oFeatures,
                f, g;
            if (d.bSort && d.bSortClasses) {
                d = 0;
                for (f = b.length; d < f; d++) g = b[d].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > d ? d + 1 : 3));
                d = 0;
                for (f = e.length; d < f; d++) g = e[d].src, h(D(a.aoData, "anCells",
                    g)).addClass(c + (2 > d ? d + 1 : 3))
            }
            a.aLastSort = e
        }

        function Ib(a, b) { var c = a.aoColumns[b],
                e = m.ext.order[c.sSortDataType],
                d;
            e && (d = e.call(a.oInstance, a, b, $(a, b))); for (var f, g = m.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++)
                if (c = a.aoData[j], c._aSortData || (c._aSortData = []), !c._aSortData[b] || e) f = e ? d[j] : x(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f }

        function ya(a) {
            if (a.oFeatures.bStateSave && !a.bDestroying) {
                var b = {
                    time: +new Date,
                    start: a._iDisplayStart,
                    length: a._iDisplayLength,
                    order: h.extend(!0, [], a.aaSorting),
                    search: zb(a.oPreviousSearch),
                    columns: h.map(a.aoColumns, function(b, e) { return { visible: b.bVisible, search: zb(a.aoPreSearchCols[e]) } })
                };
                w(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
                a.oSavedState = b;
                a.fnStateSaveCallback.call(a.oInstance, a, b)
            }
        }

        function Kb(a) {
            var b, c, e = a.aoColumns;
            if (a.oFeatures.bStateSave) {
                var d = a.fnStateLoadCallback.call(a.oInstance, a);
                if (d && d.time && (b = w(a, "aoStateLoadParams", "stateLoadParams", [a, d]), -1 === h.inArray(!1, b) && (b = a.iStateDuration, !(0 < b && d.time < +new Date - 1E3 * b) && e.length ===
                        d.columns.length))) {
                    a.oLoadedState = h.extend(!0, {}, d);
                    d.start !== k && (a._iDisplayStart = d.start, a.iInitDisplayStart = d.start);
                    d.length !== k && (a._iDisplayLength = d.length);
                    d.order !== k && (a.aaSorting = [], h.each(d.order, function(b, c) { a.aaSorting.push(c[0] >= e.length ? [0, c[1]] : c) }));
                    d.search !== k && h.extend(a.oPreviousSearch, Ab(d.search));
                    b = 0;
                    for (c = d.columns.length; b < c; b++) { var f = d.columns[b];
                        f.visible !== k && (e[b].bVisible = f.visible);
                        f.search !== k && h.extend(a.aoPreSearchCols[b], Ab(f.search)) }
                    w(a, "aoStateLoaded", "stateLoaded", [a, d])
                }
            }
        }

        function za(a) { var b = m.settings,
                a = h.inArray(a, D(b, "nTable")); return -1 !== a ? b[a] : null }

        function I(a, b, c, e) { c = "DataTables warning: " + (null !== a ? "table id=" + a.sTableId + " - " : "") + c;
            e && (c += ". For more information about this error, please see http://datatables.net/tn/" + e); if (b) Ea.console && console.log && console.log(c);
            else if (b = m.ext, b = b.sErrMode || b.errMode, w(a, null, "error", [a, e, c]), "alert" == b) alert(c);
            else { if ("throw" == b) throw Error(c); "function" == typeof b && b(a, e, c) } }

        function E(a, b, c, e) {
            h.isArray(c) ?
                h.each(c, function(c, f) { h.isArray(f) ? E(a, b, f[0], f[1]) : E(a, b, f) }) : (e === k && (e = c), b[c] !== k && (a[e] = b[c]))
        }

        function Lb(a, b, c) { var e, d; for (d in b) b.hasOwnProperty(d) && (e = b[d], h.isPlainObject(e) ? (h.isPlainObject(a[d]) || (a[d] = {}), h.extend(!0, a[d], e)) : a[d] = c && "data" !== d && "aaData" !== d && h.isArray(e) ? e.slice() : e); return a }

        function Va(a, b, c) { h(a).bind("click.DT", b, function(b) { a.blur();
                c(b) }).bind("keypress.DT", b, function(a) { 13 === a.which && (a.preventDefault(), c(a)) }).bind("selectstart.DT", function() { return !1 }) }

        function z(a,
            b, c, e) { c && a[b].push({ fn: c, sName: e }) }

        function w(a, b, c, e) { var d = [];
            b && (d = h.map(a[b].slice().reverse(), function(b) { return b.fn.apply(a.oInstance, e) }));
            null !== c && (b = h.Event(c + ".dt"), h(a.nTable).trigger(b, e), d.push(b.result)); return d }

        function Sa(a) { var b = a._iDisplayStart,
                c = a.fnDisplayEnd(),
                e = a._iDisplayLength;
            b >= c && (b = c - e);
            b -= b % e; if (-1 === e || 0 > b) b = 0;
            a._iDisplayStart = b }

        function Pa(a, b) { var c = a.renderer,
                e = m.ext.renderer[b]; return h.isPlainObject(c) && c[b] ? e[c[b]] || e._ : "string" === typeof c ? e[c] || e._ : e._ }

        function B(a) {
            return a.oFeatures.bServerSide ?
                "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
        }

        function Wa(a, b) { var c = [],
                c = Mb.numbers_length,
                e = Math.floor(c / 2);
            b <= c ? c = V(0, b) : a <= e ? (c = V(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - e ? c = V(b - (c - 2), b) : (c = V(a - e + 2, a + e - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
            c.DT_el = "span"; return c }

        function db(a) {
            h.each({ num: function(b) { return Aa(b, a) }, "num-fmt": function(b) { return Aa(b, a, Xa) }, "html-num": function(b) { return Aa(b, a, Ba) }, "html-num-fmt": function(b) { return Aa(b, a, Ba, Xa) } }, function(b,
                c) { u.type.order[b + a + "-pre"] = c;
                b.match(/^html\-/) && (u.type.search[b + a] = u.type.search.html) })
        }

        function Nb(a) { return function() { var b = [za(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments)); return m.ext.internal[a].apply(this, b) } }
        var m, u, t, r, v, Ya = {},
            Ob = /[\r\n]/g,
            Ba = /<.*?>/g,
            ac = /^[\w\+\-]/,
            bc = /[\w\+\-]$/,
            Yb = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
            Xa = /[',$\u00a3\u20ac\u00a5%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
            J = function(a) {
                return !a || !0 === a ||
                    "-" === a ? !0 : !1
            },
            Pb = function(a) { var b = parseInt(a, 10); return !isNaN(b) && isFinite(a) ? b : null },
            Qb = function(a, b) { Ya[b] || (Ya[b] = RegExp(va(b), "g")); return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(Ya[b], ".") : a },
            Za = function(a, b, c) { var e = "string" === typeof a; if (J(a)) return !0;
                b && e && (a = Qb(a, b));
                c && e && (a = a.replace(Xa, "")); return !isNaN(parseFloat(a)) && isFinite(a) },
            Rb = function(a, b, c) { return J(a) ? !0 : !(J(a) || "string" === typeof a) ? null : Za(a.replace(Ba, ""), b, c) ? !0 : null },
            D = function(a, b, c) {
                var e = [],
                    d = 0,
                    f = a.length;
                if (c !== k)
                    for (; d < f; d++) a[d] && a[d][b] && e.push(a[d][b][c]);
                else
                    for (; d < f; d++) a[d] && e.push(a[d][b]);
                return e
            },
            ia = function(a, b, c, e) { var d = [],
                    f = 0,
                    g = b.length; if (e !== k)
                    for (; f < g; f++) a[b[f]][c] && d.push(a[b[f]][c][e]);
                else
                    for (; f < g; f++) d.push(a[b[f]][c]); return d },
            V = function(a, b) { var c = [],
                    e;
                b === k ? (b = 0, e = a) : (e = b, b = a); for (var d = b; d < e; d++) c.push(d); return c },
            Sb = function(a) { for (var b = [], c = 0, e = a.length; c < e; c++) a[c] && b.push(a[c]); return b },
            Na = function(a) {
                var b = [],
                    c, e, d = a.length,
                    f, g = 0;
                e = 0;
                a: for (; e < d; e++) {
                    c = a[e];
                    for (f =
                        0; f < g; f++)
                        if (b[f] === c) continue a;
                    b.push(c);
                    g++
                }
                return b
            },
            A = function(a, b, c) { a[b] !== k && (a[c] = a[b]) },
            ba = /\[.*?\]$/,
            T = /\(\)$/,
            wa = h("<div>")[0],
            Zb = wa.textContent !== k,
            $b = /<.*?>/g;
        m = function(a) {
            this.$ = function(a, b) { return this.api(!0).$(a, b) };
            this._ = function(a, b) { return this.api(!0).rows(a, b).data() };
            this.api = function(a) { return a ? new t(za(this[u.iApiIndex])) : new t(this) };
            this.fnAddData = function(a, b) {
                var c = this.api(!0),
                    e = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
                (b ===
                    k || b) && c.draw();
                return e.flatten().toArray()
            };
            this.fnAdjustColumnSizing = function(a) { var b = this.api(!0).columns.adjust(),
                    c = b.settings()[0],
                    e = c.oScroll;
                a === k || a ? b.draw(!1) : ("" !== e.sX || "" !== e.sY) && Y(c) };
            this.fnClearTable = function(a) { var b = this.api(!0).clear();
                (a === k || a) && b.draw() };
            this.fnClose = function(a) { this.api(!0).row(a).child.hide() };
            this.fnDeleteRow = function(a, b, c) { var e = this.api(!0),
                    a = e.rows(a),
                    d = a.settings()[0],
                    h = d.aoData[a[0][0]];
                a.remove();
                b && b.call(this, d, h);
                (c === k || c) && e.draw(); return h };
            this.fnDestroy = function(a) { this.api(!0).destroy(a) };
            this.fnDraw = function(a) { this.api(!0).draw(a) };
            this.fnFilter = function(a, b, c, e, d, h) { d = this.api(!0);
                null === b || b === k ? d.search(a, c, e, h) : d.column(b).search(a, c, e, h);
                d.draw() };
            this.fnGetData = function(a, b) { var c = this.api(!0); if (a !== k) { var e = a.nodeName ? a.nodeName.toLowerCase() : ""; return b !== k || "td" == e || "th" == e ? c.cell(a, b).data() : c.row(a).data() || null } return c.data().toArray() };
            this.fnGetNodes = function(a) { var b = this.api(!0); return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray() };
            this.fnGetPosition = function(a) { var b = this.api(!0),
                    c = a.nodeName.toUpperCase(); return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null };
            this.fnIsOpen = function(a) { return this.api(!0).row(a).child.isShown() };
            this.fnOpen = function(a, b, c) { return this.api(!0).row(a).child(b, c).show().child()[0] };
            this.fnPageChange = function(a, b) { var c = this.api(!0).page(a);
                (b === k || b) && c.draw(!1) };
            this.fnSetColumnVis = function(a, b, c) {
                a = this.api(!0).column(a).visible(b);
                (c ===
                    k || c) && a.columns.adjust().draw()
            };
            this.fnSettings = function() { return za(this[u.iApiIndex]) };
            this.fnSort = function(a) { this.api(!0).order(a).draw() };
            this.fnSortListener = function(a, b, c) { this.api(!0).order.listener(a, b, c) };
            this.fnUpdate = function(a, b, c, e, d) { var h = this.api(!0);
                c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
                (d === k || d) && h.columns.adjust();
                (e === k || e) && h.draw(); return 0 };
            this.fnVersionCheck = u.fnVersionCheck;
            var b = this,
                c = a === k,
                e = this.length;
            c && (a = {});
            this.oApi = this.internal = u.internal;
            for (var d in m.ext.internal) d &&
                (this[d] = Nb(d));
            this.each(function() {
                var d = {},
                    d = 1 < e ? Lb(d, a, !0) : a,
                    g = 0,
                    j, i = this.getAttribute("id"),
                    o = !1,
                    l = m.defaults,
                    q = h(this);
                if ("table" != this.nodeName.toLowerCase()) I(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    eb(l);
                    fb(l.column);
                    H(l, l, !0);
                    H(l.column, l.column, !0);
                    H(l, h.extend(d, q.data()));
                    var n = m.settings,
                        g = 0;
                    for (j = n.length; g < j; g++) {
                        var r = n[g];
                        if (r.nTable == this || r.nTHead.parentNode == this || r.nTFoot && r.nTFoot.parentNode == this) {
                            g = d.bRetrieve !== k ? d.bRetrieve : l.bRetrieve;
                            if (c || g) return r.oInstance;
                            if (d.bDestroy !== k ? d.bDestroy : l.bDestroy) { r.oInstance.fnDestroy(); break } else { I(r, 0, "Cannot reinitialise DataTable", 3); return }
                        }
                        if (r.sTableId == this.id) { n.splice(g, 1); break }
                    }
                    if (null === i || "" === i) this.id = i = "DataTables_Table_" + m.ext._unique++;
                    var p = h.extend(!0, {}, m.models.oSettings, { sDestroyWidth: q[0].style.width, sInstance: i, sTableId: i });
                    p.nTable = this;
                    p.oApi = b.internal;
                    p.oInit = d;
                    n.push(p);
                    p.oInstance = 1 === b.length ? b : q.dataTable();
                    eb(d);
                    d.oLanguage && P(d.oLanguage);
                    d.aLengthMenu && !d.iDisplayLength && (d.iDisplayLength =
                        h.isArray(d.aLengthMenu[0]) ? d.aLengthMenu[0][0] : d.aLengthMenu[0]);
                    d = Lb(h.extend(!0, {}, l), d);
                    E(p.oFeatures, d, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                    E(p, d, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback",
                        "renderer", "searchDelay", ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"],
                        ["bJQueryUI", "bJUI"]
                    ]);
                    E(p.oScroll, d, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"]
                    ]);
                    E(p.oLanguage, d, "fnInfoCallback");
                    z(p, "aoDrawCallback", d.fnDrawCallback, "user");
                    z(p, "aoServerParams", d.fnServerParams, "user");
                    z(p, "aoStateSaveParams", d.fnStateSaveParams, "user");
                    z(p, "aoStateLoadParams",
                        d.fnStateLoadParams, "user");
                    z(p, "aoStateLoaded", d.fnStateLoaded, "user");
                    z(p, "aoRowCallback", d.fnRowCallback, "user");
                    z(p, "aoRowCreatedCallback", d.fnCreatedRow, "user");
                    z(p, "aoHeaderCallback", d.fnHeaderCallback, "user");
                    z(p, "aoFooterCallback", d.fnFooterCallback, "user");
                    z(p, "aoInitComplete", d.fnInitComplete, "user");
                    z(p, "aoPreDrawCallback", d.fnPreDrawCallback, "user");
                    i = p.oClasses;
                    d.bJQueryUI ? (h.extend(i, m.ext.oJUIClasses, d.oClasses), d.sDom === l.sDom && "lfrtip" === l.sDom && (p.sDom = '<"H"lfr>t<"F"ip>'), p.renderer) ?
                        h.isPlainObject(p.renderer) && !p.renderer.header && (p.renderer.header = "jqueryui") : p.renderer = "jqueryui" : h.extend(i, m.ext.classes, d.oClasses);
                    q.addClass(i.sTable);
                    if ("" !== p.oScroll.sX || "" !== p.oScroll.sY) p.oScroll.iBarWidth = Hb();
                    !0 === p.oScroll.sX && (p.oScroll.sX = "100%");
                    p.iInitDisplayStart === k && (p.iInitDisplayStart = d.iDisplayStart, p._iDisplayStart = d.iDisplayStart);
                    null !== d.iDeferLoading && (p.bDeferLoading = !0, g = h.isArray(d.iDeferLoading), p._iRecordsDisplay = g ? d.iDeferLoading[0] : d.iDeferLoading, p._iRecordsTotal =
                        g ? d.iDeferLoading[1] : d.iDeferLoading);
                    var t = p.oLanguage;
                    h.extend(!0, t, d.oLanguage);
                    "" !== t.sUrl && (h.ajax({ dataType: "json", url: t.sUrl, success: function(a) { P(a);
                            H(l.oLanguage, a);
                            h.extend(true, t, a);
                            ga(p) }, error: function() { ga(p) } }), o = !0);
                    null === d.asStripeClasses && (p.asStripeClasses = [i.sStripeOdd, i.sStripeEven]);
                    var g = p.asStripeClasses,
                        s = q.children("tbody").find("tr").eq(0); - 1 !== h.inArray(!0, h.map(g, function(a) { return s.hasClass(a) })) && (h("tbody tr", this).removeClass(g.join(" ")), p.asDestroyStripes = g.slice());
                    n = [];
                    g = this.getElementsByTagName("thead");
                    0 !== g.length && (da(p.aoHeader, g[0]), n = qa(p));
                    if (null === d.aoColumns) { r = [];
                        g = 0; for (j = n.length; g < j; g++) r.push(null) } else r = d.aoColumns;
                    g = 0;
                    for (j = r.length; g < j; g++) Fa(p, n ? n[g] : null);
                    ib(p, d.aoColumnDefs, r, function(a, b) { ka(p, a, b) });
                    if (s.length) {
                        var u = function(a, b) { return a.getAttribute("data-" + b) !== null ? b : null };
                        h.each(na(p, s[0]).cells, function(a, b) {
                            var c = p.aoColumns[a];
                            if (c.mData === a) {
                                var d = u(b, "sort") || u(b, "order"),
                                    e = u(b, "filter") || u(b, "search");
                                if (d !== null || e !==
                                    null) { c.mData = { _: a + ".display", sort: d !== null ? a + ".@data-" + d : k, type: d !== null ? a + ".@data-" + d : k, filter: e !== null ? a + ".@data-" + e : k };
                                    ka(p, a) }
                            }
                        })
                    }
                    var v = p.oFeatures;
                    d.bStateSave && (v.bStateSave = !0, Kb(p, d), z(p, "aoDrawCallback", ya, "state_save"));
                    if (d.aaSorting === k) { n = p.aaSorting;
                        g = 0; for (j = n.length; g < j; g++) n[g][1] = p.aoColumns[g].asSorting[0] }
                    xa(p);
                    v.bSort && z(p, "aoDrawCallback", function() { if (p.bSorted) { var a = U(p),
                                b = {};
                            h.each(a, function(a, c) { b[c.src] = c.dir });
                            w(p, null, "order", [p, a, b]);
                            Jb(p) } });
                    z(p, "aoDrawCallback",
                        function() {
                            (p.bSorted || B(p) === "ssp" || v.bDeferRender) && xa(p) }, "sc");
                    gb(p);
                    g = q.children("caption").each(function() { this._captionSide = q.css("caption-side") });
                    j = q.children("thead");
                    0 === j.length && (j = h("<thead/>").appendTo(this));
                    p.nTHead = j[0];
                    j = q.children("tbody");
                    0 === j.length && (j = h("<tbody/>").appendTo(this));
                    p.nTBody = j[0];
                    j = q.children("tfoot");
                    if (0 === j.length && 0 < g.length && ("" !== p.oScroll.sX || "" !== p.oScroll.sY)) j = h("<tfoot/>").appendTo(this);
                    0 === j.length || 0 === j.children().length ? q.addClass(i.sNoFooter) :
                        0 < j.length && (p.nTFoot = j[0], da(p.aoFooter, p.nTFoot));
                    if (d.aaData)
                        for (g = 0; g < d.aaData.length; g++) K(p, d.aaData[g]);
                    else(p.bDeferLoading || "dom" == B(p)) && ma(p, h(p.nTBody).children("tr"));
                    p.aiDisplay = p.aiDisplayMaster.slice();
                    p.bInitialised = !0;
                    !1 === o && ga(p)
                }
            });
            b = null;
            return this
        };
        var Tb = [],
            y = Array.prototype,
            cc = function(a) {
                var b, c, e = m.settings,
                    d = h.map(e, function(a) { return a.nTable });
                if (a) {
                    if (a.nTable && a.oApi) return [a];
                    if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, d), -1 !== b ? [e[b]] :
                        null;
                    if (a && "function" === typeof a.settings) return a.settings().toArray();
                    "string" === typeof a ? c = h(a) : a instanceof h && (c = a)
                } else return [];
                if (c) return c.map(function() { b = h.inArray(this, d); return -1 !== b ? e[b] : null }).toArray()
            };
        t = function(a, b) {
            if (!(this instanceof t)) return new t(a, b);
            var c = [],
                e = function(a) {
                    (a = cc(a)) && c.push.apply(c, a) };
            if (h.isArray(a))
                for (var d = 0, f = a.length; d < f; d++) e(a[d]);
            else e(a);
            this.context = Na(c);
            b && this.push.apply(this, b.toArray ? b.toArray() : b);
            this.selector = { rows: null, cols: null, opts: null };
            t.extend(this, this, Tb)
        };
        m.Api = t;
        t.prototype = {
            any: function() { return 0 !== this.flatten().length },
            concat: y.concat,
            context: [],
            each: function(a) { for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this); return this },
            eq: function(a) { var b = this.context; return b.length > a ? new t(b[a], this[a]) : null },
            filter: function(a) { var b = []; if (y.filter) b = y.filter.call(this, a, this);
                else
                    for (var c = 0, e = this.length; c < e; c++) a.call(this, this[c], c, this) && b.push(this[c]); return new t(this.context, b) },
            flatten: function() {
                var a = [];
                return new t(this.context, a.concat.apply(a, this.toArray()))
            },
            join: y.join,
            indexOf: y.indexOf || function(a, b) { for (var c = b || 0, e = this.length; c < e; c++)
                    if (this[c] === a) return c;
                return -1 },
            iterator: function(a, b, c, e) {
                var d = [],
                    f, g, h, i, o, l = this.context,
                    q, n, m = this.selector;
                "string" === typeof a && (e = c, c = b, b = a, a = !1);
                g = 0;
                for (h = l.length; g < h; g++) {
                    var p = new t(l[g]);
                    if ("table" === b) f = c.call(p, l[g], g), f !== k && d.push(f);
                    else if ("columns" === b || "rows" === b) f = c.call(p, l[g], this[g], g), f !== k && d.push(f);
                    else if ("column" === b || "column-rows" ===
                        b || "row" === b || "cell" === b) { n = this[g]; "column-rows" === b && (q = Ca(l[g], m.opts));
                        i = 0; for (o = n.length; i < o; i++) f = n[i], f = "cell" === b ? c.call(p, l[g], f.row, f.column, g, i) : c.call(p, l[g], f, g, i, q), f !== k && d.push(f) }
                }
                return d.length || e ? (a = new t(l, a ? d.concat.apply([], d) : d), b = a.selector, b.rows = m.rows, b.cols = m.cols, b.opts = m.opts, a) : this
            },
            lastIndexOf: y.lastIndexOf || function(a, b) { return this.indexOf.apply(this.toArray.reverse(), arguments) },
            length: 0,
            map: function(a) {
                var b = [];
                if (y.map) b = y.map.call(this, a, this);
                else
                    for (var c =
                            0, e = this.length; c < e; c++) b.push(a.call(this, this[c], c));
                return new t(this.context, b)
            },
            pluck: function(a) { return this.map(function(b) { return b[a] }) },
            pop: y.pop,
            push: y.push,
            reduce: y.reduce || function(a, b) { return hb(this, a, b, 0, this.length, 1) },
            reduceRight: y.reduceRight || function(a, b) { return hb(this, a, b, this.length - 1, -1, -1) },
            reverse: y.reverse,
            selector: null,
            shift: y.shift,
            sort: y.sort,
            splice: y.splice,
            toArray: function() { return y.slice.call(this) },
            to$: function() { return h(this) },
            toJQuery: function() { return h(this) },
            unique: function() { return new t(this.context, Na(this)) },
            unshift: y.unshift
        };
        t.extend = function(a, b, c) { if (c.length && b && (b instanceof t || b.__dt_wrapper)) { var e, d, f, g = function(a, b, c) { return function() { var d = b.apply(a, arguments);
                        t.extend(d, d, c.methodExt); return d } };
                e = 0; for (d = c.length; e < d; e++) f = c[e], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, t.extend(a, b[f.name], f.propExt) } };
        t.register = r = function(a, b) {
            if (h.isArray(a))
                for (var c = 0, e = a.length; c <
                    e; c++) t.register(a[c], b);
            else
                for (var d = a.split("."), f = Tb, g, j, c = 0, e = d.length; c < e; c++) { g = (j = -1 !== d[c].indexOf("()")) ? d[c].replace("()", "") : d[c]; var i;
                    a: { i = 0; for (var o = f.length; i < o; i++)
                            if (f[i].name === g) { i = f[i]; break a }
                        i = null }
                    i || (i = { name: g, val: {}, methodExt: [], propExt: [] }, f.push(i));
                    c === e - 1 ? i.val = b : f = j ? i.methodExt : i.propExt }
        };
        t.registerPlural = v = function(a, b, c) {
            t.register(a, c);
            t.register(b, function() {
                var a = c.apply(this, arguments);
                return a === this ? this : a instanceof t ? a.length ? h.isArray(a[0]) ? new t(a.context,
                    a[0]) : a[0] : k : a
            })
        };
        r("tables()", function(a) { var b; if (a) { b = t; var c = this.context; if ("number" === typeof a) a = [c[a]];
                else var e = h.map(c, function(a) { return a.nTable }),
                    a = h(e).filter(a).map(function() { var a = h.inArray(this, e); return c[a] }).toArray();
                b = new b(a) } else b = this; return b });
        r("table()", function(a) { var a = this.tables(a),
                b = a.context; return b.length ? new t(b[0]) : a });
        v("tables().nodes()", "table().node()", function() { return this.iterator("table", function(a) { return a.nTable }, 1) });
        v("tables().body()", "table().body()",
            function() { return this.iterator("table", function(a) { return a.nTBody }, 1) });
        v("tables().header()", "table().header()", function() { return this.iterator("table", function(a) { return a.nTHead }, 1) });
        v("tables().footer()", "table().footer()", function() { return this.iterator("table", function(a) { return a.nTFoot }, 1) });
        v("tables().containers()", "table().container()", function() { return this.iterator("table", function(a) { return a.nTableWrapper }, 1) });
        r("draw()", function(a) {
            return this.iterator("table", function(b) {
                N(b, !1 === a)
            })
        });
        r("page()", function(a) { return a === k ? this.page.info().page : this.iterator("table", function(b) { Ta(b, a) }) });
        r("page.info()", function() { if (0 === this.context.length) return k; var a = this.context[0],
                b = a._iDisplayStart,
                c = a._iDisplayLength,
                e = a.fnRecordsDisplay(),
                d = -1 === c; return { page: d ? 0 : Math.floor(b / c), pages: d ? 1 : Math.ceil(e / c), start: b, end: a.fnDisplayEnd(), length: c, recordsTotal: a.fnRecordsTotal(), recordsDisplay: e } });
        r("page.len()", function(a) {
            return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength :
                k : this.iterator("table", function(b) { Ra(b, a) })
        });
        var Ub = function(a, b, c) { if (c) { var e = new t(a);
                e.one("draw", function() { c(e.ajax.json()) }) } "ssp" == B(a) ? N(a, b) : (C(a, !0), ra(a, [], function(c) { oa(a); for (var c = sa(a, c), e = 0, g = c.length; e < g; e++) K(a, c[e]);
                N(a, b);
                C(a, !1) })) };
        r("ajax.json()", function() { var a = this.context; if (0 < a.length) return a[0].json });
        r("ajax.params()", function() { var a = this.context; if (0 < a.length) return a[0].oAjaxData });
        r("ajax.reload()", function(a, b) {
            return this.iterator("table", function(c) {
                Ub(c, !1 === b, a)
            })
        });
        r("ajax.url()", function(a) { var b = this.context; if (a === k) { if (0 === b.length) return k;
                b = b[0]; return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource } return this.iterator("table", function(b) { h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a }) });
        r("ajax.url().load()", function(a, b) { return this.iterator("table", function(c) { Ub(c, !1 === b, a) }) });
        var $a = function(a, b, c, e, d) {
                var f = [],
                    g, j, i, o, l, q;
                i = typeof b;
                if (!b || "string" === i || "function" === i || b.length === k) b = [b];
                i = 0;
                for (o = b.length; i < o; i++) {
                    j =
                        b[i] && b[i].split ? b[i].split(",") : [b[i]];
                    l = 0;
                    for (q = j.length; l < q; l++)(g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && f.push.apply(f, g)
                }
                a = u.selector[a];
                if (a.length) { i = 0; for (o = a.length; i < o; i++) f = a[i](e, d, f) }
                return f
            },
            ab = function(a) { a || (a = {});
                a.filter && a.search === k && (a.search = a.filter); return h.extend({ search: "none", order: "current", page: "all" }, a) },
            bb = function(a) { for (var b = 0, c = a.length; b < c; b++)
                    if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
                a.length = 0; return a },
            Ca = function(a, b) {
                var c, e, d, f = [],
                    g = a.aiDisplay;
                c = a.aiDisplayMaster;
                var j = b.search;
                e = b.order;
                d = b.page;
                if ("ssp" == B(a)) return "removed" === j ? [] : V(0, c.length);
                if ("current" == d) { c = a._iDisplayStart; for (e = a.fnDisplayEnd(); c < e; c++) f.push(g[c]) } else if ("current" == e || "applied" == e) f = "none" == j ? c.slice() : "applied" == j ? g.slice() : h.map(c, function(a) { return -1 === h.inArray(a, g) ? a : null });
                else if ("index" == e || "original" == e) {
                    c = 0;
                    for (e = a.aoData.length; c < e; c++) "none" == j ? f.push(c) : (d = h.inArray(c, g), (-1 === d && "removed" == j || 0 <= d &&
                        "applied" == j) && f.push(c))
                }
                return f
            };
        r("rows()", function(a, b) {
            a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
            var b = ab(b),
                c = this.iterator("table", function(c) {
                    var d = b;
                    return $a("row", a, function(a) { var b = Pb(a); if (b !== null && !d) return [b]; var j = Ca(c, d); if (b !== null && h.inArray(b, j) !== -1) return [b]; if (!a) return j; if (typeof a === "function") return h.map(j, function(b) { var d = c.aoData[b]; return a(b, d._aData, d.nTr) ? b : null });
                            b = Sb(ia(c.aoData, j, "nTr")); return a.nodeName && h.inArray(a, b) !== -1 ? [a._DT_RowIndex] : h(b).filter(a).map(function() { return this._DT_RowIndex }).toArray() },
                        c, d)
                }, 1);
            c.selector.rows = a;
            c.selector.opts = b;
            return c
        });
        r("rows().nodes()", function() { return this.iterator("row", function(a, b) { return a.aoData[b].nTr || k }, 1) });
        r("rows().data()", function() { return this.iterator(!0, "rows", function(a, b) { return ia(a.aoData, b, "_aData") }, 1) });
        v("rows().cache()", "row().cache()", function(a) { return this.iterator("row", function(b, c) { var e = b.aoData[c]; return "search" === a ? e._aFilterData : e._aSortData }, 1) });
        v("rows().invalidate()", "row().invalidate()", function(a) {
            return this.iterator("row",
                function(b, c) { ca(b, c, a) })
        });
        v("rows().indexes()", "row().index()", function() { return this.iterator("row", function(a, b) { return b }, 1) });
        v("rows().remove()", "row().remove()", function() { var a = this; return this.iterator("row", function(b, c, e) { var d = b.aoData;
                d.splice(c, 1); for (var f = 0, g = d.length; f < g; f++) null !== d[f].nTr && (d[f].nTr._DT_RowIndex = f);
                h.inArray(c, b.aiDisplay);
                pa(b.aiDisplayMaster, c);
                pa(b.aiDisplay, c);
                pa(a[e], c, !1);
                Sa(b) }) });
        r("rows.add()", function(a) {
            var b = this.iterator("table", function(b) {
                    var c,
                        f, g, h = [];
                    f = 0;
                    for (g = a.length; f < g; f++) c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(ma(b, c)[0]) : h.push(K(b, c));
                    return h
                }, 1),
                c = this.rows(-1);
            c.pop();
            c.push.apply(c, b.toArray());
            return c
        });
        r("row()", function(a, b) { return bb(this.rows(a, b)) });
        r("row().data()", function(a) { var b = this.context; if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
            b[0].aoData[this[0]]._aData = a;
            ca(b[0], this[0], "data"); return this });
        r("row().node()", function() {
            var a = this.context;
            return a.length && this.length ?
                a[0].aoData[this[0]].nTr || null : null
        });
        r("row.add()", function(a) { a instanceof h && a.length && (a = a[0]); var b = this.iterator("table", function(b) { return a.nodeName && "TR" === a.nodeName.toUpperCase() ? ma(b, a)[0] : K(b, a) }); return this.row(b[0]) });
        var cb = function(a, b) { var c = a.context;
                c.length && (c = c[0].aoData[b !== k ? b : a[0]], c._details && (c._details.remove(), c._detailsShow = k, c._details = k)) },
            Vb = function(a, b) {
                var c = a.context;
                if (c.length && a.length) {
                    var e = c[0].aoData[a[0]];
                    if (e._details) {
                        (e._detailsShow = b) ? e._details.insertAfter(e.nTr):
                            e._details.detach();
                        var d = c[0],
                            f = new t(d),
                            g = d.aoData;
                        f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                        0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function(a, b) { d === b && f.rows({ page: "current" }).eq(0).each(function(a) { a = g[a];
                                a._detailsShow && a._details.insertAfter(a.nTr) }) }), f.on("column-visibility.dt.DT_details", function(a, b) { if (d === b)
                                for (var c, e = aa(b), f = 0, h = g.length; f < h; f++) c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", e) }), f.on("destroy.dt.DT_details",
                            function(a, b) { if (d === b)
                                    for (var c = 0, e = g.length; c < e; c++) g[c]._details && cb(f, c) }))
                    }
                }
            };
        r("row().child()", function(a, b) {
            var c = this.context;
            if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k;
            if (!0 === a) this.child.show();
            else if (!1 === a) cb(this);
            else if (c.length && this.length) {
                var e = c[0],
                    c = c[0].aoData[this[0]],
                    d = [],
                    f = function(a, b) {
                        if (h.isArray(a) || a instanceof h)
                            for (var c = 0, k = a.length; c < k; c++) f(a[c], b);
                        else a.nodeName && "tr" === a.nodeName.toLowerCase() ? d.push(a) : (c = h("<tr><td/></tr>").addClass(b),
                            h("td", c).addClass(b).html(a)[0].colSpan = aa(e), d.push(c[0]))
                    };
                f(a, b);
                c._details && c._details.remove();
                c._details = h(d);
                c._detailsShow && c._details.insertAfter(c.nTr)
            }
            return this
        });
        r(["row().child.show()", "row().child().show()"], function() { Vb(this, !0); return this });
        r(["row().child.hide()", "row().child().hide()"], function() { Vb(this, !1); return this });
        r(["row().child.remove()", "row().child().remove()"], function() { cb(this); return this });
        r("row().child.isShown()", function() {
            var a = this.context;
            return a.length &&
                this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
        });
        var dc = /^(.+):(name|visIdx|visible)$/,
            Wb = function(a, b, c, e, d) { for (var c = [], e = 0, f = d.length; e < f; e++) c.push(x(a, d[e], b)); return c };
        r("columns()", function(a, b) {
            a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
            var b = ab(b),
                c = this.iterator("table", function(c) {
                    var d = a,
                        f = b,
                        g = c.aoColumns,
                        j = D(g, "sName"),
                        i = D(g, "nTh");
                    return $a("column", d, function(a) {
                        var b = Pb(a);
                        if (a === "") return V(g.length);
                        if (b !== null) return [b >= 0 ? b : g.length + b];
                        if (typeof a === "function") {
                            var d = Ca(c,
                                f);
                            return h.map(g, function(b, f) { return a(f, Wb(c, f, 0, 0, d), i[f]) ? f : null })
                        }
                        var k = typeof a === "string" ? a.match(dc) : "";
                        if (k) switch (k[2]) {
                            case "visIdx":
                            case "visible":
                                b = parseInt(k[1], 10); if (b < 0) { var m = h.map(g, function(a, b) { return a.bVisible ? b : null }); return [m[m.length + b]] } return [la(c, b)];
                            case "name":
                                return h.map(j, function(a, b) { return a === k[1] ? b : null }) } else return h(i).filter(a).map(function() { return h.inArray(this, i) }).toArray()
                    }, c, f)
                }, 1);
            c.selector.cols = a;
            c.selector.opts = b;
            return c
        });
        v("columns().header()",
            "column().header()",
            function() { return this.iterator("column", function(a, b) { return a.aoColumns[b].nTh }, 1) });
        v("columns().footer()", "column().footer()", function() { return this.iterator("column", function(a, b) { return a.aoColumns[b].nTf }, 1) });
        v("columns().data()", "column().data()", function() { return this.iterator("column-rows", Wb, 1) });
        v("columns().dataSrc()", "column().dataSrc()", function() { return this.iterator("column", function(a, b) { return a.aoColumns[b].mData }, 1) });
        v("columns().cache()", "column().cache()",
            function(a) { return this.iterator("column-rows", function(b, c, e, d, f) { return ia(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c) }, 1) });
        v("columns().nodes()", "column().nodes()", function() { return this.iterator("column-rows", function(a, b, c, e, d) { return ia(a.aoData, d, "anCells", b) }, 1) });
        v("columns().visible()", "column().visible()", function(a, b) {
            return this.iterator("column", function(c, e) {
                if (a === k) return c.aoColumns[e].bVisible;
                var d = c.aoColumns,
                    f = d[e],
                    g = c.aoData,
                    j, i, m;
                if (a !== k && f.bVisible !== a) {
                    if (a) {
                        var l =
                            h.inArray(!0, D(d, "bVisible"), e + 1);
                        j = 0;
                        for (i = g.length; j < i; j++) m = g[j].nTr, d = g[j].anCells, m && m.insertBefore(d[e], d[l] || null)
                    } else h(D(c.aoData, "anCells", e)).detach();
                    f.bVisible = a;
                    ea(c, c.aoHeader);
                    ea(c, c.aoFooter);
                    if (b === k || b) X(c), (c.oScroll.sX || c.oScroll.sY) && Y(c);
                    w(c, null, "column-visibility", [c, e, a]);
                    ya(c)
                }
            })
        });
        v("columns().indexes()", "column().index()", function(a) { return this.iterator("column", function(b, c) { return "visible" === a ? $(b, c) : c }, 1) });
        r("columns.adjust()", function() {
            return this.iterator("table",
                function(a) { X(a) }, 1)
        });
        r("column.index()", function(a, b) { if (0 !== this.context.length) { var c = this.context[0]; if ("fromVisible" === a || "toData" === a) return la(c, b); if ("fromData" === a || "toVisible" === a) return $(c, b) } });
        r("column()", function(a, b) { return bb(this.columns(a, b)) });
        r("cells()", function(a, b, c) {
            h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));
            h.isPlainObject(b) && (c = b, b = null);
            if (null === b || b === k) return this.iterator("table", function(b) {
                var d = a,
                    e = ab(c),
                    f = b.aoData,
                    g = Ca(b, e),
                    i = Sb(ia(f, g, "anCells")),
                    j = h([].concat.apply([], i)),
                    l, m = b.aoColumns.length,
                    o, r, t, s, u, v;
                return $a("cell", d, function(a) { var c = typeof a === "function"; if (a === null || a === k || c) { o = [];
                        r = 0; for (t = g.length; r < t; r++) { l = g[r]; for (s = 0; s < m; s++) { u = { row: l, column: s }; if (c) { v = b.aoData[l];
                                    a(u, x(b, l, s), v.anCells ? v.anCells[s] : null) && o.push(u) } else o.push(u) } } return o } return h.isPlainObject(a) ? [a] : j.filter(a).map(function(a, b) { l = b.parentNode._DT_RowIndex; return { row: l, column: h.inArray(b, f[l].anCells) } }).toArray() }, b, e)
            });
            var e = this.columns(b, c),
                d = this.rows(a,
                    c),
                f, g, j, i, m, l = this.iterator("table", function(a, b) { f = [];
                    g = 0; for (j = d[b].length; g < j; g++) { i = 0; for (m = e[b].length; i < m; i++) f.push({ row: d[b][g], column: e[b][i] }) } return f }, 1);
            h.extend(l.selector, { cols: b, rows: a, opts: c });
            return l
        });
        v("cells().nodes()", "cell().node()", function() { return this.iterator("cell", function(a, b, c) { return (a = a.aoData[b].anCells) ? a[c] : k }, 1) });
        r("cells().data()", function() { return this.iterator("cell", function(a, b, c) { return x(a, b, c) }, 1) });
        v("cells().cache()", "cell().cache()", function(a) {
            a =
                "search" === a ? "_aFilterData" : "_aSortData";
            return this.iterator("cell", function(b, c, e) { return b.aoData[c][a][e] }, 1)
        });
        v("cells().render()", "cell().render()", function(a) { return this.iterator("cell", function(b, c, e) { return x(b, c, e, a) }, 1) });
        v("cells().indexes()", "cell().index()", function() { return this.iterator("cell", function(a, b, c) { return { row: b, column: c, columnVisible: $(a, c) } }, 1) });
        v("cells().invalidate()", "cell().invalidate()", function(a) { return this.iterator("cell", function(b, c, e) { ca(b, c, a, e) }) });
        r("cell()",
            function(a, b, c) { return bb(this.cells(a, b, c)) });
        r("cell().data()", function(a) { var b = this.context,
                c = this[0]; if (a === k) return b.length && c.length ? x(b[0], c[0].row, c[0].column) : k;
            Ia(b[0], c[0].row, c[0].column, a);
            ca(b[0], c[0].row, "data", c[0].column); return this });
        r("order()", function(a, b) { var c = this.context; if (a === k) return 0 !== c.length ? c[0].aaSorting : k; "number" === typeof a ? a = [
                [a, b]
            ] : h.isArray(a[0]) || (a = Array.prototype.slice.call(arguments)); return this.iterator("table", function(b) { b.aaSorting = a.slice() }) });
        r("order.listener()", function(a, b, c) { return this.iterator("table", function(e) { Oa(e, a, b, c) }) });
        r(["columns().order()", "column().order()"], function(a) { var b = this; return this.iterator("table", function(c, e) { var d = [];
                h.each(b[e], function(b, c) { d.push([c, a]) });
                c.aaSorting = d }) });
        r("search()", function(a, b, c, e) {
            var d = this.context;
            return a === k ? 0 !== d.length ? d[0].oPreviousSearch.sSearch : k : this.iterator("table", function(d) {
                d.oFeatures.bFilter && fa(d, h.extend({}, d.oPreviousSearch, {
                    sSearch: a + "",
                    bRegex: null === b ? !1 : b,
                    bSmart: null === c ? !0 : c,
                    bCaseInsensitive: null === e ? !0 : e
                }), 1)
            })
        });
        v("columns().search()", "column().search()", function(a, b, c, e) { return this.iterator("column", function(d, f) { var g = d.aoPreSearchCols; if (a === k) return g[f].sSearch;
                d.oFeatures.bFilter && (h.extend(g[f], { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === e ? !0 : e }), fa(d, d.oPreviousSearch, 1)) }) });
        r("state()", function() { return this.context.length ? this.context[0].oSavedState : null });
        r("state.clear()", function() {
            return this.iterator("table",
                function(a) { a.fnStateSaveCallback.call(a.oInstance, a, {}) })
        });
        r("state.loaded()", function() { return this.context.length ? this.context[0].oLoadedState : null });
        r("state.save()", function() { return this.iterator("table", function(a) { ya(a) }) });
        m.versionCheck = m.fnVersionCheck = function(a) { for (var b = m.version.split("."), a = a.split("."), c, e, d = 0, f = a.length; d < f; d++)
                if (c = parseInt(b[d], 10) || 0, e = parseInt(a[d], 10) || 0, c !== e) return c > e;
            return !0 };
        m.isDataTable = m.fnIsDataTable = function(a) {
            var b = h(a).get(0),
                c = !1;
            h.each(m.settings,
                function(a, d) { var f = d.nScrollHead ? h("table", d.nScrollHead)[0] : null,
                        g = d.nScrollFoot ? h("table", d.nScrollFoot)[0] : null; if (d.nTable === b || f === b || g === b) c = !0 });
            return c
        };
        m.tables = m.fnTables = function(a) { return h.map(m.settings, function(b) { if (!a || a && h(b.nTable).is(":visible")) return b.nTable }) };
        m.util = { throttle: ua, escapeRegex: va };
        m.camelToHungarian = H;
        r("$()", function(a, b) { var c = this.rows(b).nodes(),
                c = h(c); return h([].concat(c.filter(a).toArray(), c.find(a).toArray())) });
        h.each(["on", "one", "off"], function(a,
            b) { r(b + "()", function() { var a = Array.prototype.slice.call(arguments);
                a[0].match(/\.dt\b/) || (a[0] += ".dt"); var e = h(this.tables().nodes());
                e[b].apply(e, a); return this }) });
        r("clear()", function() { return this.iterator("table", function(a) { oa(a) }) });
        r("settings()", function() { return new t(this.context, this.context) });
        r("init()", function() { var a = this.context; return a.length ? a[0].oInit : null });
        r("data()", function() { return this.iterator("table", function(a) { return D(a.aoData, "_aData") }).flatten() });
        r("destroy()",
            function(a) {
                a = a || !1;
                return this.iterator("table", function(b) {
                    var c = b.nTableWrapper.parentNode,
                        e = b.oClasses,
                        d = b.nTable,
                        f = b.nTBody,
                        g = b.nTHead,
                        j = b.nTFoot,
                        i = h(d),
                        f = h(f),
                        k = h(b.nTableWrapper),
                        l = h.map(b.aoData, function(a) { return a.nTr }),
                        q;
                    b.bDestroying = !0;
                    w(b, "aoDestroyCallback", "destroy", [b]);
                    a || (new t(b)).columns().visible(!0);
                    k.unbind(".DT").find(":not(tbody *)").unbind(".DT");
                    h(Ea).unbind(".DT-" + b.sInstance);
                    d != g.parentNode && (i.children("thead").detach(), i.append(g));
                    j && d != j.parentNode && (i.children("tfoot").detach(),
                        i.append(j));
                    i.detach();
                    k.detach();
                    b.aaSorting = [];
                    b.aaSortingFixed = [];
                    xa(b);
                    h(l).removeClass(b.asStripeClasses.join(" "));
                    h("th, td", g).removeClass(e.sSortable + " " + e.sSortableAsc + " " + e.sSortableDesc + " " + e.sSortableNone);
                    b.bJUI && (h("th span." + e.sSortIcon + ", td span." + e.sSortIcon, g).detach(), h("th, td", g).each(function() { var a = h("div." + e.sSortJUIWrapper, this);
                        h(this).append(a.contents());
                        a.detach() }));
                    !a && c && c.insertBefore(d, b.nTableReinsertBefore);
                    f.children().detach();
                    f.append(l);
                    i.css("width", b.sDestroyWidth).removeClass(e.sTable);
                    (q = b.asDestroyStripes.length) && f.children().each(function(a) { h(this).addClass(b.asDestroyStripes[a % q]) });
                    c = h.inArray(b, m.settings); - 1 !== c && m.settings.splice(c, 1)
                })
            });
        h.each(["column", "row", "cell"], function(a, b) { r(b + "s().every()", function(a) { return this.iterator(b, function(e, d, f) { a.call((new t(e))[b](d, f)) }) }) });
        r("i18n()", function(a, b, c) { var e = this.context[0],
                a = R(a)(e.oLanguage);
            a === k && (a = b);
            c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._); return a.replace("%d", c) });
        m.version = "1.10.7";
        m.settings = [];
        m.models = {};
        m.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 };
        m.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null };
        m.models.oColumn = {
            idx: null,
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: !1,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        };
        m.defaults = {
            aaData: null,
            aaSorting: [
                [0, "asc"]
            ],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bJQueryUI: !1,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function(a) { return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands) },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function(a) { try { return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname)) } catch (b) {} },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function(a, b) { try {
                    (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b)) } catch (c) {} },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" },
                oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "Search:",
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: h.extend({}, m.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            searchDelay: null,
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null
        };
        W(m.defaults);
        m.defaults.column = { aDataSort: null, iDataSort: -1, asSorting: ["asc", "desc"], bSearchable: !0, bSortable: !0, bVisible: !0, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null };
        W(m.defaults.column);
        m.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortMulti: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null },
            oLanguage: { fnInfoCallback: null },
            oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1 },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            searchDelay: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: k,
            oAjaxData: k,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            bJUI: null,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function() { return "ssp" == B(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length },
            fnRecordsDisplay: function() {
                return "ssp" == B(this) ? 1 * this._iRecordsDisplay :
                    this.aiDisplay.length
            },
            fnDisplayEnd: function() { var a = this._iDisplayLength,
                    b = this._iDisplayStart,
                    c = b + a,
                    e = this.aiDisplay.length,
                    d = this.oFeatures,
                    f = d.bPaginate; return d.bServerSide ? !1 === f || -1 === a ? b + e : Math.min(b + a, this._iRecordsDisplay) : !f || c > e || -1 === a ? e : c },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {}
        };
        m.ext = u = {
            buttons: {},
            classes: {},
            errMode: "alert",
            feature: [],
            search: [],
            selector: { cell: [], column: [], row: [] },
            internal: {},
            legacy: { ajax: null },
            pager: {},
            renderer: {
                pageButton: {},
                header: {}
            },
            order: {},
            type: { detect: [], search: {}, order: {} },
            _unique: 0,
            fnVersionCheck: m.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: m.version
        };
        h.extend(u, { afnFiltering: u.search, aTypes: u.type.detect, ofnSearch: u.type.search, oSort: u.type.order, afnSortData: u.order, aoFeatures: u.feature, oApi: u.internal, oStdClasses: u.classes, oPagination: u.pager });
        h.extend(m.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: ""
        });
        var Da = "",
            Da = "",
            F = Da + "ui-state-default",
            ja = Da + "css_right ui-icon ui-icon-",
            Xb = Da + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
        h.extend(m.ext.oJUIClasses,
            m.ext.classes, {
                sPageButton: "fg-button ui-button " + F,
                sPageButtonActive: "ui-state-disabled",
                sPageButtonDisabled: "ui-state-disabled",
                sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
                sSortAsc: F + " sorting_asc",
                sSortDesc: F + " sorting_desc",
                sSortable: F + " sorting",
                sSortableAsc: F + " sorting_asc_disabled",
                sSortableDesc: F + " sorting_desc_disabled",
                sSortableNone: F + " sorting_disabled",
                sSortJUIAsc: ja + "triangle-1-n",
                sSortJUIDesc: ja + "triangle-1-s",
                sSortJUI: ja + "carat-2-n-s",
                sSortJUIAscAllowed: ja + "carat-1-n",
                sSortJUIDescAllowed: ja + "carat-1-s",
                sSortJUIWrapper: "DataTables_sort_wrapper",
                sSortIcon: "DataTables_sort_icon",
                sScrollHead: "dataTables_scrollHead " + F,
                sScrollFoot: "dataTables_scrollFoot " + F,
                sHeaderTH: F,
                sFooterTH: F,
                sJUIHeader: Xb + " ui-corner-tl ui-corner-tr",
                sJUIFooter: Xb + " ui-corner-bl ui-corner-br"
            });
        var Mb = m.ext.pager;
        h.extend(Mb, {
            simple: function() { return ["previous", "next"] },
            full: function() { return ["first", "previous", "next", "last"] },
            simple_numbers: function(a, b) {
                return ["previous",
                    Wa(a, b), "next"
                ]
            },
            full_numbers: function(a, b) { return ["first", "previous", Wa(a, b), "next", "last"] },
            _numbers: Wa,
            numbers_length: 7
        });
        h.extend(!0, m.ext.renderer, {
            pageButton: {
                _: function(a, b, c, e, d, f) {
                    var g = a.oClasses,
                        j = a.oLanguage.oPaginate,
                        i, k, l = 0,
                        m = function(b, e) {
                            var n, r, t, s, u = function(b) { Ta(a, b.data.action, true) };
                            n = 0;
                            for (r = e.length; n < r; n++) {
                                s = e[n];
                                if (h.isArray(s)) { t = h("<" + (s.DT_el || "div") + "/>").appendTo(b);
                                    m(t, s) } else {
                                    k = i = "";
                                    switch (s) {
                                        case "ellipsis":
                                            b.append('<span class="ellipsis">&#x2026;</span>');
                                            break;
                                        case "first":
                                            i = j.sFirst;
                                            k = s + (d > 0 ? "" : " " + g.sPageButtonDisabled);
                                            break;
                                        case "previous":
                                            i = j.sPrevious;
                                            k = s + (d > 0 ? "" : " " + g.sPageButtonDisabled);
                                            break;
                                        case "next":
                                            i = j.sNext;
                                            k = s + (d < f - 1 ? "" : " " + g.sPageButtonDisabled);
                                            break;
                                        case "last":
                                            i = j.sLast;
                                            k = s + (d < f - 1 ? "" : " " + g.sPageButtonDisabled);
                                            break;
                                        default:
                                            i = s + 1;
                                            k = d === s ? g.sPageButtonActive : ""
                                    }
                                    if (i) {
                                        t = h("<a>", { "class": g.sPageButton + " " + k, "aria-controls": a.sTableId, "data-dt-idx": l, tabindex: a.iTabIndex, id: c === 0 && typeof s === "string" ? a.sTableId + "_" + s : null }).html(i).appendTo(b);
                                        Va(t, { action: s }, u);
                                        l++
                                    }
                                }
                            }
                        },
                        n;
                    try { n = h(Q.activeElement).data("dt-idx") } catch (r) {}
                    m(h(b).empty(), e);
                    n && h(b).find("[data-dt-idx=" + n + "]").focus()
                }
            }
        });
        h.extend(m.ext.type.detect, [function(a, b) { var c = b.oLanguage.sDecimal; return Za(a, c) ? "num" + c : null }, function(a) { if (a && !(a instanceof Date) && (!ac.test(a) || !bc.test(a))) return null; var b = Date.parse(a); return null !== b && !isNaN(b) || J(a) ? "date" : null }, function(a, b) { var c = b.oLanguage.sDecimal; return Za(a, c, !0) ? "num-fmt" + c : null }, function(a, b) {
            var c = b.oLanguage.sDecimal;
            return Rb(a, c) ? "html-num" + c : null
        }, function(a, b) { var c = b.oLanguage.sDecimal; return Rb(a, c, !0) ? "html-num-fmt" + c : null }, function(a) { return J(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null }]);
        h.extend(m.ext.type.search, { html: function(a) { return J(a) ? a : "string" === typeof a ? a.replace(Ob, " ").replace(Ba, "") : "" }, string: function(a) { return J(a) ? a : "string" === typeof a ? a.replace(Ob, " ") : a } });
        var Aa = function(a, b, c, e) {
            if (0 !== a && (!a || "-" === a)) return -Infinity;
            b && (a = Qb(a, b));
            a.replace && (c && (a = a.replace(c, "")),
                e && (a = a.replace(e, "")));
            return 1 * a
        };
        h.extend(u.type.order, { "date-pre": function(a) { return Date.parse(a) || 0 }, "html-pre": function(a) { return J(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "" }, "string-pre": function(a) { return J(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString() }, "string-asc": function(a, b) { return a < b ? -1 : a > b ? 1 : 0 }, "string-desc": function(a, b) { return a < b ? 1 : a > b ? -1 : 0 } });
        db("");
        h.extend(!0, m.ext.renderer, {
            header: {
                _: function(a, b, c, e) {
                    h(a.nTable).on("order.dt.DT", function(d,
                        f, g, h) { if (a === f) { d = c.idx;
                            b.removeClass(c.sSortingClass + " " + e.sSortAsc + " " + e.sSortDesc).addClass(h[d] == "asc" ? e.sSortAsc : h[d] == "desc" ? e.sSortDesc : c.sSortingClass) } })
                },
                jqueryui: function(a, b, c, e) {
                    h("<div/>").addClass(e.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(e.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                    h(a.nTable).on("order.dt.DT", function(d, f, g, h) {
                        if (a === f) {
                            d = c.idx;
                            b.removeClass(e.sSortAsc + " " + e.sSortDesc).addClass(h[d] == "asc" ? e.sSortAsc : h[d] == "desc" ? e.sSortDesc : c.sSortingClass);
                            b.find("span." + e.sSortIcon).removeClass(e.sSortJUIAsc + " " + e.sSortJUIDesc + " " + e.sSortJUI + " " + e.sSortJUIAscAllowed + " " + e.sSortJUIDescAllowed).addClass(h[d] == "asc" ? e.sSortJUIAsc : h[d] == "desc" ? e.sSortJUIDesc : c.sSortingClassJUI)
                        }
                    })
                }
            }
        });
        m.render = {
            number: function(a, b, c, e) {
                return {
                    display: function(d) {
                        if ("number" !== typeof d && "string" !== typeof d) return d;
                        var f = 0 > d ? "-" : "",
                            d = Math.abs(parseFloat(d)),
                            g = parseInt(d, 10),
                            d = c ? b + (d - g).toFixed(c).substring(2) : "";
                        return f + (e || "") + g.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                            a) + d
                    }
                }
            }
        };
        h.extend(m.ext.internal, {
            _fnExternApiFunc: Nb,
            _fnBuildAjax: ra,
            _fnAjaxUpdate: kb,
            _fnAjaxParameters: tb,
            _fnAjaxUpdateDraw: ub,
            _fnAjaxDataSrc: sa,
            _fnAddColumn: Fa,
            _fnColumnOptions: ka,
            _fnAdjustColumnSizing: X,
            _fnVisibleToColumnIndex: la,
            _fnColumnIndexToVisible: $,
            _fnVisbleColumns: aa,
            _fnGetColumns: Z,
            _fnColumnTypes: Ha,
            _fnApplyColumnDefs: ib,
            _fnHungarianMap: W,
            _fnCamelToHungarian: H,
            _fnLanguageCompat: P,
            _fnBrowserDetect: gb,
            _fnAddData: K,
            _fnAddTr: ma,
            _fnNodeToDataIndex: function(a, b) {
                return b._DT_RowIndex !== k ? b._DT_RowIndex :
                    null
            },
            _fnNodeToColumnIndex: function(a, b, c) { return h.inArray(c, a.aoData[b].anCells) },
            _fnGetCellData: x,
            _fnSetCellData: Ia,
            _fnSplitObjNotation: Ka,
            _fnGetObjectDataFn: R,
            _fnSetObjectDataFn: S,
            _fnGetDataMaster: La,
            _fnClearTable: oa,
            _fnDeleteIndex: pa,
            _fnInvalidate: ca,
            _fnGetRowElements: na,
            _fnCreateTr: Ja,
            _fnBuildHead: jb,
            _fnDrawHead: ea,
            _fnDraw: M,
            _fnReDraw: N,
            _fnAddOptionsHtml: mb,
            _fnDetectHeader: da,
            _fnGetUniqueThs: qa,
            _fnFeatureHtmlFilter: ob,
            _fnFilterComplete: fa,
            _fnFilterCustom: xb,
            _fnFilterColumn: wb,
            _fnFilter: vb,
            _fnFilterCreateSearch: Qa,
            _fnEscapeRegex: va,
            _fnFilterData: yb,
            _fnFeatureHtmlInfo: rb,
            _fnUpdateInfo: Bb,
            _fnInfoMacros: Cb,
            _fnInitialise: ga,
            _fnInitComplete: ta,
            _fnLengthChange: Ra,
            _fnFeatureHtmlLength: nb,
            _fnFeatureHtmlPaginate: sb,
            _fnPageChange: Ta,
            _fnFeatureHtmlProcessing: pb,
            _fnProcessingDisplay: C,
            _fnFeatureHtmlTable: qb,
            _fnScrollDraw: Y,
            _fnApplyToChildren: G,
            _fnCalculateColumnWidths: Ga,
            _fnThrottle: ua,
            _fnConvertToWidth: Db,
            _fnScrollingWidthAdjust: Fb,
            _fnGetWidestNode: Eb,
            _fnGetMaxLenString: Gb,
            _fnStringToCss: s,
            _fnScrollBarWidth: Hb,
            _fnSortFlatten: U,
            _fnSort: lb,
            _fnSortAria: Jb,
            _fnSortListener: Ua,
            _fnSortAttachListener: Oa,
            _fnSortingClasses: xa,
            _fnSortData: Ib,
            _fnSaveState: ya,
            _fnLoadState: Kb,
            _fnSettingsFromNode: za,
            _fnLog: I,
            _fnMap: E,
            _fnBindAction: Va,
            _fnCallbackReg: z,
            _fnCallbackFire: w,
            _fnLengthOverflow: Sa,
            _fnRenderer: Pa,
            _fnDataSource: B,
            _fnRowAttributes: Ma,
            _fnCalculateEnd: function() {}
        });
        h.fn.dataTable = m;
        h.fn.dataTableSettings = m.settings;
        h.fn.dataTableExt = m.ext;
        h.fn.DataTable = function(a) { return h(this).dataTable(a).api() };
        h.each(m, function(a, b) {
            h.fn.DataTable[a] =
                b
        });
        return h.fn.dataTable
    };
    "function" === typeof define && define.amd ? define("datatables", ["jquery"], P) : "object" === typeof exports ? module.exports = P(require("jquery")) : jQuery && !jQuery.fn.dataTable && P(jQuery)
})(window, document);
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function(e){e.fn.extend({slimScroll:function(f){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},f);this.each(function(){function v(d){if(r){d=d||window.event;
var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&n(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function n(d,g,e){k=!1;var f=b.outerHeight()-c.outerHeight();g&&(g=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),g=Math.min(Math.max(g,0),f),g=0<d?Math.ceil(g):Math.floor(g),c.css({top:g+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());g=
l*(b[0].scrollHeight-b.outerHeight());e&&(g=d,d=g/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),f),c.css({top:d+"px"}));b.scrollTop(g);b.trigger("slimscrolling",~~g);w();p()}function x(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:u+"px"});var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;u>=b.outerHeight()?k=!0:(c.stop(!0,
!0).fadeIn("fast"),a.railVisible&&m.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&r||y||z||(c.fadeOut("slow"),m.fadeOut("slow"))},1E3))}var r,y,z,B,A,u,l,C,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var q=b.scrollTop(),c=b.siblings("."+a.barClass),m=b.siblings("."+a.railClass);x();if(e.isPlainObject(f)){if("height"in f&&"auto"==f.height){b.parent().css("height","auto");b.css("height","auto");var h=b.parent().parent().height();b.parent().css("height",
h);b.css("height",h)}else"height"in f&&(h=f.height,b.parent().css("height",h),b.css("height",h));if("scrollTo"in f)q=parseInt(a.scrollTo);else if("scrollBy"in f)q+=parseInt(a.scrollBy);else if("destroy"in f){c.remove();m.remove();b.unwrap();return}n(q,!1,!0)}}else if(!(e.isPlainObject(f)&&"destroy"in f)){a.height="auto"==a.height?b.parent().height():a.height;q=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",
width:a.width,height:a.height});var m=e("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,
WebkitBorderRadius:a.borderRadius,zIndex:99}),h="right"==a.position?{right:a.distance}:{left:a.distance};m.css(h);c.css(h);b.wrap(q);b.parent().append(c);b.parent().append(m);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);n(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){z=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",
function(a){a.stopPropagation();a.preventDefault();return!1});m.hover(function(){w()},function(){p()});c.hover(function(){y=!0},function(){y=!1});b.hover(function(){r=!0;w();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(n((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY)});
x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),n(0,!0)):"top"!==a.start&&(n(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v)}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);
;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

function _init(){
  "use strict";
  $.AdminLTE.layout={activate:function(){var a=this;a.fix(),a.fixSidebar(),$(window,".wrapper").resize(function(){a.fix(),a.fixSidebar()})},fix:function(){var a=$(".main-header").outerHeight()+$(".main-footer").outerHeight(),b=$(window).height(),c=$(".sidebar").height();if($("body").hasClass("fixed"))$(".content-wrapper, .right-side").css("min-height",b-$(".main-footer").outerHeight());else{var d;b>=c?($(".content-wrapper, .right-side").css("min-height",b-a),d=b-a):($(".content-wrapper, .right-side").css("min-height",c),d=c);var e=$($.AdminLTE.options.controlSidebarOptions.selector);"undefined"!=typeof e&&e.height()>d&&$(".content-wrapper, .right-side").css("min-height",e.height())}},fixSidebar:function(){return $("body").hasClass("fixed")?("undefined"==typeof $.fn.slimScroll&&window.console&&window.console.error("Error: the fixed layout requires the slimscroll plugin!"),void($.AdminLTE.options.sidebarSlimScroll&&"undefined"!=typeof $.fn.slimScroll&&($(".sidebar").slimScroll({destroy:!0}).height("auto"),$(".sidebar").slimscroll({height:$(window).height()-$(".main-header").height()+"px",color:"rgba(0,0,0,0.2)",size:"3px"})))):void("undefined"!=typeof $.fn.slimScroll&&$(".sidebar").slimScroll({destroy:!0}).height("auto"))}},$.AdminLTE.pushMenu={activate:function(a){var b=$.AdminLTE.options.screenSizes;$(document).on("click",a,function(a){a.preventDefault(),$(window).width()>b.sm-1?$("body").hasClass("sidebar-collapse")?$("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu"):$("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").hasClass("sidebar-open")?$("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").addClass("sidebar-open").trigger("expanded.pushMenu")}),$(".content-wrapper").click(function(){$(window).width()<=b.sm-1&&$("body").hasClass("sidebar-open")&&$("body").removeClass("sidebar-open")}),($.AdminLTE.options.sidebarExpandOnHover||$("body").hasClass("fixed")&&$("body").hasClass("sidebar-mini"))&&this.expandOnHover()},expandOnHover:function(){var a=this,b=$.AdminLTE.options.screenSizes.sm-1;$(".main-sidebar").hover(function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-collapse")&&$(window).width()>b&&a.expand()},function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-expanded-on-hover")&&$(window).width()>b&&a.collapse()})},expand:function(){$("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover")},collapse:function(){$("body").hasClass("sidebar-expanded-on-hover")&&$("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse")}},$.AdminLTE.tree=function(a){var b=this,c=$.AdminLTE.options.animationSpeed;$(document).off("click",a+" li a").on("click",a+" li a",function(a){var d=$(this),e=d.next();if(e.is(".treeview-menu")&&e.is(":visible")&&!$("body").hasClass("sidebar-collapse"))e.slideUp(c,function(){e.removeClass("menu-open")}),e.parent("li").removeClass("active");else if(e.is(".treeview-menu")&&!e.is(":visible")){var f=d.parents("ul").first(),g=f.find("ul:visible").slideUp(c);g.removeClass("menu-open");var h=d.parent("li");e.slideDown(c,function(){e.addClass("menu-open"),f.find("li.active").removeClass("active"),h.addClass("active"),b.layout.fix()})}e.is(".treeview-menu")&&a.preventDefault()})},$.AdminLTE.controlSidebar={activate:function(){var a=this,b=$.AdminLTE.options.controlSidebarOptions,c=$(b.selector),d=$(b.toggleBtnSelector);d.on("click",function(d){d.preventDefault(),c.hasClass("control-sidebar-open")||$("body").hasClass("control-sidebar-open")?a.close(c,b.slide):a.open(c,b.slide)});var e=$(".control-sidebar-bg");a._fix(e),$("body").hasClass("fixed")?a._fixForFixed(c):$(".content-wrapper, .right-side").height()<c.height()&&a._fixForContent(c)},open:function(a,b){b?a.addClass("control-sidebar-open"):$("body").addClass("control-sidebar-open")},close:function(a,b){b?a.removeClass("control-sidebar-open"):$("body").removeClass("control-sidebar-open")},_fix:function(a){var b=this;if($("body").hasClass("layout-boxed")){if(a.css("position","absolute"),a.height($(".wrapper").height()),b.hasBindedResize)return;$(window).resize(function(){b._fix(a)}),b.hasBindedResize=!0}else a.css({position:"fixed",height:"auto"})},_fixForFixed:function(a){a.css({position:"fixed","max-height":"100%",overflow:"auto","padding-bottom":"50px"})},_fixForContent:function(a){$(".content-wrapper, .right-side").css("min-height",a.height())}},$.AdminLTE.boxWidget={selectors:$.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,icons:$.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,animationSpeed:$.AdminLTE.options.animationSpeed,activate:function(a){var b=this;a||(a=document),$(a).on("click",b.selectors.collapse,function(a){a.preventDefault(),b.collapse($(this))}),$(a).on("click",b.selectors.remove,function(a){a.preventDefault(),b.remove($(this))})},collapse:function(a){var b=this,c=a.parents(".box").first(),d=c.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");c.hasClass("collapsed-box")?(a.children(":first").removeClass(b.icons.open).addClass(b.icons.collapse),d.slideDown(b.animationSpeed,function(){c.removeClass("collapsed-box")})):(a.children(":first").removeClass(b.icons.collapse).addClass(b.icons.open),d.slideUp(b.animationSpeed,function(){c.addClass("collapsed-box")}))},remove:function(a){var b=a.parents(".box").first();b.slideUp(this.animationSpeed)}}}if("undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery");$.AdminLTE={},$.AdminLTE.options={navbarMenuSlimscroll:!0,navbarMenuSlimscrollWidth:"3px",navbarMenuHeight:"200px",animationSpeed:500,sidebarToggleSelector:"[data-toggle='offcanvas']",sidebarPushMenu:!0,sidebarSlimScroll:!0,sidebarExpandOnHover:!1,enableBoxRefresh:!0,enableBSToppltip:!0,BSTooltipSelector:"[data-toggle='tooltip']",enableFastclick:!1,enableControlSidebar:!0,controlSidebarOptions:{toggleBtnSelector:"[data-toggle='control-sidebar']",selector:".control-sidebar",slide:!0},enableBoxWidget:!0,boxWidgetOptions:{boxWidgetIcons:{collapse:"fa-minus",open:"fa-plus",remove:"fa-times"},boxWidgetSelectors:{remove:'[data-widget="remove"]',collapse:'[data-widget="collapse"]'}},directChat:{enable:!0,contactToggleSelector:'[data-widget="chat-pane-toggle"]'},colors:{lightBlue:"#3c8dbc",red:"#f56954",green:"#00a65a",aqua:"#00c0ef",yellow:"#f39c12",blue:"#0073b7",navy:"#001F3F",teal:"#39CCCC",olive:"#3D9970",lime:"#01FF70",orange:"#FF851B",fuchsia:"#F012BE",purple:"#8E24AA",maroon:"#D81B60",black:"#222222",gray:"#d2d6de"},screenSizes:{xs:480,sm:768,md:992,lg:1200}},$(function(){"use strict";$("body").removeClass("hold-transition"),"undefined"!=typeof AdminLTEOptions&&$.extend(!0,$.AdminLTE.options,AdminLTEOptions);var a=$.AdminLTE.options;_init(),$.AdminLTE.layout.activate(),$.AdminLTE.tree(".sidebar"),a.enableControlSidebar&&$.AdminLTE.controlSidebar.activate(),a.navbarMenuSlimscroll&&"undefined"!=typeof $.fn.slimscroll&&$(".navbar .menu").slimscroll({height:a.navbarMenuHeight,alwaysVisible:!1,size:a.navbarMenuSlimscrollWidth}).css("width","100%"),a.sidebarPushMenu&&$.AdminLTE.pushMenu.activate(a.sidebarToggleSelector),a.enableBSToppltip&&$("body").tooltip({selector:a.BSTooltipSelector}),a.enableBoxWidget&&$.AdminLTE.boxWidget.activate(),a.enableFastclick&&"undefined"!=typeof FastClick&&FastClick.attach(document.body),a.directChat.enable&&$(document).on("click",a.directChat.contactToggleSelector,function(){var a=$(this).parents(".direct-chat").first();a.toggleClass("direct-chat-contacts-open")}),$('.btn-group[data-toggle="btn-toggle"]').each(function(){var a=$(this);$(this).find(".btn").on("click",function(b){a.find(".btn.active").removeClass("active"),$(this).addClass("active"),b.preventDefault()})})}),function(a){"use strict";a.fn.boxRefresh=function(b){function c(a){a.append(f),e.onLoadStart.call(a)}function d(a){a.find(f).remove(),e.onLoadDone.call(a)}var e=a.extend({trigger:".refresh-btn",source:"",onLoadStart:function(a){return a},onLoadDone:function(a){return a}},b),f=a('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');return this.each(function(){if(""===e.source)return void(window.console&&window.console.log("Please specify a source first - boxRefresh()"));var b=a(this),f=b.find(e.trigger).first();f.on("click",function(a){a.preventDefault(),c(b),b.find(".box-body").load(e.source,function(){d(b)})})})}}(jQuery),function(a){"use strict";a.fn.activateBox=function(){a.AdminLTE.boxWidget.activate(this)},a.fn.toggleBox=function(){var b=a(a.AdminLTE.boxWidget.selectors.collapse,this);a.AdminLTE.boxWidget.collapse(b)},a.fn.removeBox=function(){var b=a(a.AdminLTE.boxWidget.selectors.remove,this);a.AdminLTE.boxWidget.remove(b)}}(jQuery),function(a){"use strict";a.fn.todolist=function(b){var c=a.extend({onCheck:function(a){return a},onUncheck:function(a){return a}},b);return this.each(function(){"undefined"!=typeof a.fn.iCheck?(a("input",this).on("ifChecked",function(){var b=a(this).parents("li").first();b.toggleClass("done"),c.onCheck.call(b)}),a("input",this).on("ifUnchecked",function(){var b=a(this).parents("li").first();b.toggleClass("done"),c.onUncheck.call(b)})):a("input",this).on("change",function(){var b=a(this).parents("li").first();b.toggleClass("done"),a("input",b).is(":checked")?c.onCheck.call(b):c.onUncheck.call(b)})})}}(jQuery);$(function () {
});
/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($, AdminLTE) {

  "use strict";

  /**
   * List of all the available skins
   *
   * @type Array
   */
  var my_skins = [
    "skin-blue",
    "skin-black",
    "skin-red",
    "skin-yellow",
    "skin-purple",
    "skin-green",
    "skin-blue-light",
    "skin-black-light",
    "skin-red-light",
    "skin-yellow-light",
    "skin-purple-light",
    "skin-green-light"
  ];

  //Create the new tab
  var tab_pane = $("<div />", {
    "id": "control-sidebar-theme-demo-options-tab",
    "class": "tab-pane active"
  });

  //Create the tab button
  var tab_button = $("<li />", {"class": "active"})
      .html("<a href='#control-sidebar-theme-demo-options-tab' data-toggle='tab'>"
      + "<i class='fa fa-wrench'></i>"
      + "</a>");

  //Add the tab button to the right sidebar tabs
  $("[href='#control-sidebar-home-tab']")
      .parent()
      .before(tab_button);

  //Create the menu
  var demo_settings = $("<div />");

  //Layout options
  demo_settings.append(
      "<h4 class='control-sidebar-heading'>"
      + "Layout Options"
      + "</h4>"
        //Fixed layout
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-layout='fixed' class='pull-right'/> "
      + "Fixed layout"
      + "</label>"
      + "<p>Activate the fixed layout. You can't use fixed and boxed layouts together</p>"
      + "</div>"
        //Boxed layout
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-layout='layout-boxed'class='pull-right'/> "
      + "Boxed Layout"
      + "</label>"
      + "<p>Activate the boxed layout</p>"
      + "</div>"
        //Sidebar Toggle
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-layout='sidebar-collapse' class='pull-right'/> "
      + "Toggle Sidebar"
      + "</label>"
      + "<p>Toggle the left sidebar's state (open or collapse)</p>"
      + "</div>"
        //Sidebar mini expand on hover toggle
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-enable='expandOnHover' class='pull-right'/> "
      + "Sidebar Expand on Hover"
      + "</label>"
      + "<p>Let the sidebar mini expand on hover</p>"
      + "</div>"
        //Control Sidebar Toggle
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-controlsidebar='control-sidebar-open' class='pull-right'/> "
      + "Toggle Right Sidebar Slide"
      + "</label>"
      + "<p>Toggle between slide over content and push content effects</p>"
      + "</div>"
        //Control Sidebar Skin Toggle
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-sidebarskin='toggle' class='pull-right'/> "
      + "Toggle Right Sidebar Skin"
      + "</label>"
      + "<p>Toggle between dark and light skins for the right sidebar</p>"
      + "</div>"
  );
  var skins_list = $("<ul />", {"class": 'list-unstyled clearfix'});

  //Dark sidebar skins
  var skin_blue =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-blue' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Blue</p>");
  skins_list.append(skin_blue);
  var skin_black =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-black' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 7px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 7px; background: #fefefe;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Black</p>");
  skins_list.append(skin_black);
  var skin_purple =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-purple' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Purple</p>");
  skins_list.append(skin_purple);
  var skin_green =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-green' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Green</p>");
  skins_list.append(skin_green);
  var skin_red =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-red' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Red</p>");
  skins_list.append(skin_red);
  var skin_yellow =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-yellow' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Yellow</p>");
  skins_list.append(skin_yellow);

  //Light sidebar skins
  var skin_blue_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-blue-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Blue Light</p>");
  skins_list.append(skin_blue_light);
  var skin_black_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-black-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 7px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 7px; background: #fefefe;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Black Light</p>");
  skins_list.append(skin_black_light);
  var skin_purple_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-purple-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Purple Light</p>");
  skins_list.append(skin_purple_light);
  var skin_green_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-green-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Green Light</p>");
  skins_list.append(skin_green_light);
  var skin_red_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-red-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Red Light</p>");
  skins_list.append(skin_red_light);
  var skin_yellow_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-yellow-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px;'>Yellow Light</p>");
  skins_list.append(skin_yellow_light);

  demo_settings.append("<h4 class='control-sidebar-heading'>Skins</h4>");
  demo_settings.append(skins_list);

  tab_pane.append(demo_settings);
  $("#control-sidebar-home-tab").after(tab_pane);

  setup();

  /**
   * Toggles layout classes
   *
   * @param String cls the layout class to toggle
   * @returns void
   */
  function change_layout(cls) {
    $("body").toggleClass(cls);
    AdminLTE.layout.fixSidebar();
    //Fix the problem with right sidebar and layout boxed
    if (cls == "layout-boxed")
      AdminLTE.controlSidebar._fix($(".control-sidebar-bg"));
    if ($('body').hasClass('fixed') && cls == 'fixed') {
      AdminLTE.pushMenu.expandOnHover();
      AdminLTE.layout.activate();
    }
    AdminLTE.controlSidebar._fix($(".control-sidebar-bg"));
    AdminLTE.controlSidebar._fix($(".control-sidebar"));
  }

  /**
   * Replaces the old skin with the new skin
   * @param String cls the new skin class
   * @returns Boolean false to prevent link's default action
   */
  function change_skin(cls) {
    $.each(my_skins, function (i) {
      $("body").removeClass(my_skins[i]);
    });

    $("body").addClass(cls);
    store('skin', cls);
    return false;
  }

  /**
   * Store a new settings in the browser
   *
   * @param String name Name of the setting
   * @param String val Value of the setting
   * @returns void
   */
  function store(name, val) {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem(name, val);
    } else {
      window.alert('Please use a modern browser to properly view this template!');
    }
  }

  /**
   * Get a prestored setting
   *
   * @param String name Name of of the setting
   * @returns String The value of the setting | null
   */
  function get(name) {
    if (typeof (Storage) !== "undefined") {
      return localStorage.getItem(name);
    } else {
      window.alert('Please use a modern browser to properly view this template!');
    }
  }

  /**
   * Retrieve default settings and apply them to the template
   *
   * @returns void
   */
  function setup() {
    var tmp = get('skin');
    if (tmp && $.inArray(tmp, my_skins))
      change_skin(tmp);

    //Add the change skin listener
    $("[data-skin]").on('click', function (e) {
      if($(this).hasClass('knob'))
        return;
      e.preventDefault();
      change_skin($(this).data('skin'));
    });

    //Add the layout manager
    $("[data-layout]").on('click', function () {
      change_layout($(this).data('layout'));
    });

    $("[data-controlsidebar]").on('click', function () {
      change_layout($(this).data('controlsidebar'));
      var slide = !AdminLTE.options.controlSidebarOptions.slide;
      AdminLTE.options.controlSidebarOptions.slide = slide;
      if (!slide)
        $('.control-sidebar').removeClass('control-sidebar-open');
    });

    $("[data-sidebarskin='toggle']").on('click', function () {
      var sidebar = $(".control-sidebar");
      if (sidebar.hasClass("control-sidebar-dark")) {
        sidebar.removeClass("control-sidebar-dark")
        sidebar.addClass("control-sidebar-light")
      } else {
        sidebar.removeClass("control-sidebar-light")
        sidebar.addClass("control-sidebar-dark")
      }
    });

    $("[data-enable='expandOnHover']").on('click', function () {
      $(this).attr('disabled', true);
      AdminLTE.pushMenu.expandOnHover();
      if (!$('body').hasClass('sidebar-collapse'))
        $("[data-layout='sidebar-collapse']").click();
    });

    // Reset options
    if ($('body').hasClass('fixed')) {
      $("[data-layout='fixed']").attr('checked', 'checked');
    }
    if ($('body').hasClass('layout-boxed')) {
      $("[data-layout='layout-boxed']").attr('checked', 'checked');
    }
    if ($('body').hasClass('sidebar-collapse')) {
      $("[data-layout='sidebar-collapse']").attr('checked', 'checked');
    }

  }
})(jQuery, $.AdminLTE);

$(document).ready(function (){
	$("#example1").DataTable();
	$(".select2").select2();
    //Date picker
    $('#datepicker').datepicker({
      autoclose: true,
      format: 'dd/mm/yy'
    });
    //iCheck for checkbox and radio inputs
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass: 'iradio_minimal-blue'
    });
});