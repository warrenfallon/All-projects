parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e=[{text:"about",href:"/about"},{text:"catalog",href:"#",subLinks:[{text:"all",href:"/catalog/all"},{text:"top selling",href:"/catalog/top"},{text:"search",href:"/catalog/search"}]},{text:"orders",href:"#",subLinks:[{text:"new",href:"/orders/new"},{text:"pending",href:"/orders/pending"},{text:"history",href:"/orders/history"}]},{text:"account",href:"#",subLinks:[{text:"profile",href:"/account/profile"},{text:"sign out",href:"/account/signout"}]}],t=document.getElementById("main");t.style.backgroundColor="var(--main-bg)";var n=document.createElement("h1");n.innerText="DOM Manipulation",t.appendChild(n),t.classList.add("flex-ctr");var o=document.getElementById("top-menu");o.style.height="100%",o.style.backgroundColor="var(--top-menu-bg)",o.classList.add("flex-around");for(var r=0;r<e.length;r++){var s=document.createElement("a");s.href=e[r].href,s.innerText=e[r].text,o.appendChild(s)}var l=document.getElementById("sub-menu");l.style.height="100%",l.style.backgroundColor="var(--sub-menu-bg)",l.classList.add("flex-around");var a=document.getElementsByTagName("a");console.log(a),console.log(o),o.addEventListener("click",function(t){console.log(t.preventDefault),console.log(t.target);for(var n=0;n<a.length;n++)a[n].classList.remove("active");if(t.target.classList.add("active"),console.log(t.target.innerText),console.log(e[1].text),"CATALOG"===t.target.innerText){for(;l.hasChildNodes();)l.removeChild(l.firstChild);console.log(e[1].subLinks);for(var o=0;o<e[1].subLinks.length;o++){var r=document.createElement("a");r.href=e[1].subLinks[o].href,r.innerText=e[1].subLinks[o].text,console.log(e[1].subLinks[o].href),console.log(r),l.appendChild(r)}}if("ORDERS"===t.target.innerText){for(console.log(e[1].subLinks);l.hasChildNodes();)l.removeChild(l.firstChild);for(var s=0;s<e[2].subLinks.length;s++){var i=document.createElement("a");i.href=e[2].subLinks[s].href,i.innerText=e[2].subLinks[s].text,console.log(e[2].subLinks[s].href),console.log(i),l.appendChild(i)}}});
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/src.3e86c879.js.map