parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e=[{text:"about",href:"/about"},{text:"catalog",href:"/catalog"},{text:"orders",href:"/orders"},{text:"account",href:"/account"}],t=document.getElementById("main");t.style.backgroundColor="var(--main-bg)";var a=document.createElement("h1");a.innerText="DOM Manipulation",t.appendChild(a),t.classList.add("flex-ctr"),console.log(t,"huh");var r=document.getElementById("top-menu");r.style.height="100%",r.style.backgroundColor="var(--top-menu-bg)",r.classList.add("flex-around");for(var n=0;n<e.length;n++){var o=document.createElement("a");o.href=e[n].href,o.innerText=e[n].text,r.appendChild(o)}
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/src.7b160ace.js.map