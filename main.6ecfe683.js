parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A8Kr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.openBurgerMenu=exports.closeBurgerMenu=void 0;var e={menuIconClose:document.querySelector(".icon--close"),asideMenu:document.querySelector(".page__menu"),body:document.querySelector(".page__body")},o=exports.openBurgerMenu=function(o){o.preventDefault(),e.asideMenu.classList.add("open-menu"),t(),e.menuIconClose.addEventListener("click",n)},n=exports.closeBurgerMenu=function o(n){n.preventDefault(),r(),e.asideMenu.classList.remove("open-menu"),e.menuIconClose.removeEventListener("click",o)};function t(){var o=window.innerWidth-document.querySelector(".page__body").offsetWidth+"px";e.body.style.paddingRight=o,e.body.classList.add("lock")}function r(){e.body.style.paddingRight="0px",e.body.classList.remove("lock")}
},{}],"j67K":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.animOnScroll=void 0;var e=document.querySelectorAll(".js-anim-items"),n=exports.animOnScroll=function(n){for(var o=0;o<e.length;o++){var i=e[o],l=i.offsetHeight,r=t(i).top,s=window.innerHeight-l/4;l>window.innerHeight&&(s=window.innerHeight-window.innerHeight/4),window.scrollY>r-s&&window.scrollX<r+l?i.classList.add("active"):i.classList.contains("js-anim-no-hide")||i.classList.remove("active")}};function t(e){var n=e.getBoundingClientRect(),t=window.scrollX||document.documentElement.scrollLeft,o=window.scrollY||document.documentElement.scrollTop;return{top:n.top+o,left:n.left+t}}
},{}],"MegB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.popupOpen=exports.popupClose=void 0;var e=!0,o=800,t={lockPadding:document.querySelectorAll(".lock-padding"),body:document.querySelector(".page__body")},n=exports.popupOpen=function(o){if(o&&e){var t=document.querySelector(".popup__open");t?p(t,!1):d(),o.classList.add("popup__open"),o.addEventListener("click",function(e){e.target.closest(".popup__content")||p(e.target.closest(".popup"))}),document.addEventListener("keydown",c)}},p=exports.popupClose=function(o){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){o.classList.remove("popup__open"),window.removeEventListener("keydown",c);var n=o.querySelector(".popup__image");n&&(n.src="",n.alt=""),t&&i()}};function d(){var n=window.innerWidth-document.querySelector(".page__body").offsetWidth+"px";t.lockPadding.length>0&&t.lockPadding.forEach(function(e){e.style.paddingRight=n}),t.body.style.paddingRight=n,t.body.classList.add("lock"),e=!1,setTimeout(function(){e=!0},o)}function i(){setTimeout(function(){t.lockPadding.forEach(function(e){e.style.paddingRight="0px"}),t.body.style.paddingRight="0px",t.body.classList.remove("lock")},o),e=!1,setTimeout(function(){e=!0},o)}function c(e){if("Escape"===e.code){var o=document.querySelector(".popup__open");p(o)}}
},{}],"6KIz":[function(require,module,exports) {
"use strict";var e=require("./burgerMenu"),n=require("./animOnScroll"),t=require("./popup"),o={menuIconOpen:document.querySelector(".icon--menu"),menuBurgerLinks:document.querySelectorAll(".nav__link"),animItems:document.querySelectorAll(".js-anim-items"),popupLinks:document.querySelectorAll(".popup-link"),popupImages:document.querySelectorAll(".popup-link .detail__photo"),popupImg:document.querySelector(".popup__image"),popupCloseIcon:document.querySelectorAll(".close-popup")};o.menuIconOpen.addEventListener("click",e.openBurgerMenu),o.menuBurgerLinks.length>0&&o.menuBurgerLinks.forEach(function(n){n.addEventListener("click",function(t){var o=n.getAttribute("href").replace("#",""),u=document.getElementById(o);u?(u.scrollIntoView({behavior:"smooth"}),(0,e.closeBurgerMenu)(t)):(0,e.closeBurgerMenu)(t)})}),o.animItems.length>0&&window.addEventListener("scroll",n.animOnScroll),setTimeout(function(){(0,n.animOnScroll)()},300),o.popupImages.length>0&&o.popupImages.forEach(function(e){e.addEventListener("click",function(n){var t=e.previousSibling.previousSibling.getAttribute("srcset"),u=e.getAttribute("alt");o.popupImg.src="".concat(t),o.popupImg.alt="".concat(u)})}),o.popupLinks.length>0&&o.popupLinks.forEach(function(e){e.addEventListener("click",function(n){var o=e.getAttribute("href").replace("#",""),u=document.getElementById(o);(0,t.popupOpen)(u),n.preventDefault()})}),o.popupCloseIcon.length>0&&o.popupCloseIcon.forEach(function(e){e.addEventListener("click",function(n){(0,t.popupClose)(e.closest(".popup")),n.preventDefault()})});
},{"./burgerMenu":"A8Kr","./animOnScroll":"j67K","./popup":"MegB"}]},{},["6KIz"], null)
//# sourceMappingURL=main.6ecfe683.js.map