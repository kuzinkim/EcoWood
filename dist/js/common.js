var debugTimes=!1;function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function initCompareTable(e,t){let o=$(e);if(!o[0])return!1;let i=[{breakpoint:0,settings:{columns:1,duplicate:"in"}},{breakpoint:480,settings:{columns:2,duplicate:"in"}},{breakpoint:600,settings:{columns:3,duplicate:"in"}},{breakpoint:768,settings:{columns:4,duplicate:"in"}},{breakpoint:992,settings:{columns:4,duplicate:"out"}},{breakpoint:1280,settings:{columns:5,duplicate:"out"}}];t&&(i=[{breakpoint:0,settings:{columns:1}},{breakpoint:600,settings:{columns:2}},{breakpoint:768,settings:{columns:3}},{breakpoint:992,settings:{columns:3}},{breakpoint:1280,settings:{columns:7}}]);for(let e=0;e<o.length;e++){$(o[e]).compareTable({sort:!0,prev:'<svg width="10" height="10"><use xlink:href="/assets/images/sprite.svg#arrow"></use></svg>',next:'<svg width="10" height="10"><use xlink:href="/assets/images/sprite.svg#arrow"></use></svg>',folding:!0,lines:10,responsive:i})}}document.addEventListener("DOMContentLoaded",(function(e){var t=function(e){var t=e.querySelector(".js-more-btn"),o=e.querySelector(".js-service-text");(e.classList.add("is-hidden"),null!==o)&&(o.innerHTML.length<500&&(e.classList.add("is-button-hide"),e.classList.remove("is-hidden")));t.addEventListener("click",(function(){e.classList.toggle("is-hidden"),"развернуть"===t.innerText.toLowerCase()?t.innerText="Свернуть":t.innerText="Развернуть"}))},o=document.querySelectorAll(".js-hidden-container");if(o.length)for(var i=0;i<o.length;i+=1)t(o[i]);!function(){var e,t,o=document.querySelectorAll(".product__tab-btn"),i=document.querySelectorAll(".characteristics"),a=document.querySelector(".js-popup-title"),s=document.querySelector(".js-product-button"),n=document.getElementById("product_title"),r=document.getElementById("product_id");function c(){if(this.classList.contains("is-active")||o.forEach((function(e){e.classList.remove("is-active")})),this.classList.add("is-active"),screen.width<768){var c=this.getBoundingClientRect().top;window.scrollBy({top:c}),setTimeout((function(){window.scrollBy({top:-60})}),0)}var l;e=this.getAttribute("data-id"),t=this.getAttribute("data-text"),s.textContent=t,l=e,i.forEach((function(e){var t=e.getAttribute("id");l==t?e.classList.add("is-active"):e.classList.remove("is-active")})),n.setAttribute("value",t),r.setAttribute("value","EcoWood "+e),a.textContent="Получить предложение"==t?"Получить КП на EcoWood "+e:"Узнать цену на EcoWood "+e}o.forEach((function(e){e.addEventListener("click",c)}))}();var a=document.querySelector(".button-up");window.addEventListener("scroll",(function(e){var t=window.pageYOffset,o=document.querySelector(".header");t>=o.clientHeight+40?o.classList.add("is-fixed"):o.classList.remove("is-fixed"),(window.pageYOffset||document.documentElement.scrollTop)>700?a.classList.add("is-show"):a.classList.remove("is-show")})),document.querySelectorAll(".button-more--element").forEach((function(e){var t=e;t.addEventListener("click",(function(e){var o=this.closest(".js-parent");if(o.classList.toggle("is-active"),"показать еще"===t.innerText.toLowerCase()||"другие модели"===t.innerText.toLowerCase())t.innerText="Скрыть";else{var i=t.getAttribute("data-text-btn");t.innerText=i,"Другие модели"!==i&&window.scrollTo({top:o.offsetTop})}}))}));var s=document.querySelector("body"),n=document.querySelector(".js-burg"),r=document.querySelector(".header__nav"),c=document.querySelector(".wrapper"),l=document.querySelectorAll(".header__nav-link"),d=document.querySelector(".js-close-menu"),u=document.querySelector(".js-close-catalog"),p=document.querySelector(".catalog__dropdown"),m=document.querySelector(".catalog__btn");n.addEventListener("click",(function(){this.classList.contains("active")?(r.classList.remove("is-active"),s.classList.remove("body--opened"),c.classList.remove("overlay")):(r.classList.add("is-active"),s.classList.add("body--opened"),c.classList.add("overlay"))})),d.addEventListener("click",(function(){s.classList.remove("is-hidden"),s.classList.remove("body--opened"),c.classList.remove("overlay"),r.classList.remove("is-active")})),u.addEventListener("click",(function(){p.classList.remove("active"),m.classList.remove("active")}));for(i=0;i<l.length;i++){l[i].addEventListener("click",(function(e){var t=document.querySelector(".header__inner");r.classList.contains("is-active")&&(r.classList.remove("is-active"),n.classList.remove("active"),c.classList.remove("overlay"),s.classList.remove("is-hidden"),t.classList.remove("is-color"))}))}screen.width<=767&&document.querySelectorAll(".product__tab-item").forEach((function(e){var t=e,o=t.querySelector(".product__tab-btn").getAttribute("data-id"),i=document.getElementById(o);t.append(i)}));for(var v=new Swiper(".detail-slider-thumbs",{freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,touchRatio:0,navigation:{nextEl:".detail-slider__arrow--next",prevEl:".detail-slider__arrow--prev"},breakpoints:{320:{slidesPerView:2,spaceBetween:15},350:{slidesPerView:2},470:{slidesPerView:3,spaceBetween:35}}}),b=(new Swiper(".detail-slider-top",{spaceBetween:10,thumbs:{swiper:v}}),_toConsumableArray(document.querySelectorAll(".detail-tabs__button"))),_=_toConsumableArray(document.querySelectorAll(".detail-tabs__tab")),g=0;g<b.length;g+=1)0===g&&b[g].classList.add("detail-tabs__button_active"),b[g].addEventListener("click",(function(e){e.preventDefault();var t=e.target.getAttribute("href"),o=document.querySelector(".detail-tabs__tab_active");o.classList.remove("detail-tabs__tab_active"),o.classList.add("detail-tabs__tab_hidden");var i=document.querySelector(t);i.classList.add("detail-tabs__tab_active"),i.classList.remove("detail-tabs__tab_hidden"),document.querySelector(".detail-tabs__button_active").classList.remove("detail-tabs__button_active"),document.querySelector(".detail-tabs__button_preactive")&&document.querySelector(".detail-tabs__button_preactive").classList.remove("detail-tabs__button_preactive"),e.target.classList.add("detail-tabs__button_active"),e.target.previousElementSibling&&e.target.previousElementSibling.classList.add("detail-tabs__button_preactive")}));for(var h=0;h<_.length;h+=1)0!==h?_[h].classList.add("detail-tabs__tab_hidden"):_[h].classList.add("detail-tabs__tab_active")})),function(e){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}),"NodeList"in window&&!NodeList.prototype.forEach&&(console.info("polyfill for IE11"),NodeList.prototype.forEach=function(e,t){t=t||window;for(var o=0;o<this.length;o++)e.call(t,this[o],o,this)}),e.forEach((function(e){e.hasOwnProperty("append")||Object.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var o=e instanceof Node;t.appendChild(o?e:document.createTextNode(String(e)))})),this.appendChild(t)}})}))}([Element.prototype,Document.prototype,DocumentFragment.prototype]),$(document).ready((function(){initCompareTable(".js-table-props"),initCompareTable(".js-compare-table",!0),$(".footer__catalog-btn").on("click",(function(){$(this).toggleClass("active"),$(".footer__catalog-dropdown").stop().slideToggle()})),$(".catalog__btn").on("click",(function(e){e.preventDefault(),$(this).toggleClass("active"),$(".catalog__dropdown").toggleClass("active")}));for(var e,t,o=document.querySelectorAll(".js-catalog-item"),i=document.querySelector(".js-catalog-container"),a=function(e){if(i){var t=e.cloneNode(!0);i.append(t)}},s=0;s<o.length;s++)catalogEl=o[s],a(catalogEl);e=$(".catalog"),t=$(".header__nav"),$(".header__menu"),window.matchMedia("(max-width: 768px)").matches&&t.prepend(e)}));