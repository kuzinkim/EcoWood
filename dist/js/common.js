var debugTimes=!1;document.addEventListener("DOMContentLoaded",(function(e){initSmoothScrolling();var t=function(e){var t=e.querySelector(".js-more-btn"),o=e.querySelector(".js-service-text");(e.classList.add("is-hidden"),null!==o)&&(o.innerHTML.length<500&&(e.classList.add("is-button-hide"),e.classList.remove("is-hidden")));t.addEventListener("click",(function(){e.classList.toggle("is-hidden"),"развернуть"===t.innerText.toLowerCase()?t.innerText="Свернуть":t.innerText="Развернуть"}))},o=document.querySelectorAll(".js-hidden-container");if(o.length)for(var n=0;n<o.length;n+=1)t(o[n]);!function(){var e,t,o=document.querySelectorAll(".product__tab-btn"),n=document.querySelectorAll(".characteristics"),i=document.querySelector(".js-popup-title"),s=document.querySelector(".js-product-button"),c=document.getElementById("product_title"),r=document.getElementById("product_id");function a(){if(this.classList.contains("is-active")||o.forEach((function(e){e.classList.remove("is-active")})),this.classList.add("is-active"),screen.width<768){var a=this.getBoundingClientRect().top;window.scrollBy({top:a}),setTimeout((function(){window.scrollBy({top:-60})}),0)}var l;e=this.getAttribute("data-id"),t=this.getAttribute("data-text"),s.textContent=t,l=e,n.forEach((function(e){var t=e.getAttribute("id");l==t?e.classList.add("is-active"):e.classList.remove("is-active")})),c.setAttribute("value",t),r.setAttribute("value","EcoWood "+e),i.textContent="Получить предложение"==t?"Получить КП на EcoWood "+e:"Узнать цену на EcoWood "+e}o.forEach((function(e){e.addEventListener("click",a)}))}();var i=document.querySelector(".button-up");window.addEventListener("scroll",(function(e){var t=window.pageYOffset,o=document.querySelector(".header");t>=o.clientHeight+40?o.classList.add("is-fixed"):o.classList.remove("is-fixed"),(window.pageYOffset||document.documentElement.scrollTop)>700?i.classList.add("is-show"):i.classList.remove("is-show")})),document.querySelectorAll(".button-more--element").forEach((function(e){var t=e;t.addEventListener("click",(function(e){var o=this.closest(".js-parent");if(o.classList.toggle("is-active"),"показать еще"===t.innerText.toLowerCase()||"другие модели"===t.innerText.toLowerCase())t.innerText="Скрыть";else{var n=t.getAttribute("data-text-btn");t.innerText=n,"Другие модели"!==n&&window.scrollTo({top:o.offsetTop})}}))}));var s=document.querySelector(".js-burg"),c=document.querySelector(".header__menu"),r=document.querySelector(".wrapper"),a=document.querySelectorAll(".header__menu-link");s.addEventListener("click",(function(){var e=document.querySelector(".header__inner");this.classList.contains("active")?(this.classList.remove("active"),e.classList.remove("is-color"),c.classList.remove("is-active"),body.classList.remove("is-hidden"),r.classList.remove("overlay")):(this.classList.add("active"),e.classList.add("is-color"),c.classList.add("is-active"),body.classList.add("is-hidden"),r.classList.add("overlay"))}));for(n=0;n<a.length;n++){a[n].addEventListener("click",(function(e){var t=document.querySelector(".header__inner");c.classList.contains("is-active")&&(c.classList.remove("is-active"),s.classList.remove("active"),r.classList.remove("overlay"),body.classList.remove("is-hidden"),t.classList.remove("is-color"))}))}screen.width<=767&&document.querySelectorAll(".product__tab-item").forEach((function(e){var t=e,o=t.querySelector(".product__tab-btn").getAttribute("data-id"),n=document.getElementById(o);t.append(n)}));const l=window.matchMedia("(max-width:767px)");let d;const u=function(){if(!0!==l.matches)return!1===l.matches?m():void 0;void 0!==d&&d.destroy(!0,!0)},m=function(){d=new Swiper(".swiper-container",{navigation:{nextEl:".project-button--next",prevEl:".project-button--prev"},autoplay:{delay:5e3,disableOnInteraction:!0},simulateTouch:!1})};l.addListener(u),u();var p=document.querySelector(".swiper-container");p.addEventListener("mouseenter",(function(){d.autoplay.stop()})),p.addEventListener("mouseleave",(function(){d.autoplay.start()}));var h=document.querySelectorAll(".js-popup-show"),f=document.querySelectorAll(".js-close");if(body=document.querySelector("body"),lockPadding=document.querySelectorAll(".lock-padding"),unlock=!0,timeOut=400,h.length>0)for(n=0;n<h.length;n++){h[n].addEventListener("click",(function(e){var t=this.getAttribute("data-content"),o=this.getAttribute("data-file");v(document.querySelector(""+t),o),e.preventDefault()}))}if(f.length>0)for(n=0;n<f.length;n++){f[n].addEventListener("click",(function(e){y(this.closest(".popup"),!0),e.preventDefault()}))}function v(e,t){if(e&&unlock){var o=document.querySelector(".popup.open");if(o?y(o,!1):function(){var e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(lockPadding.length>0)for(var t=0;t<lockPadding.length;t++){lockPadding[t].style.paddingRight=e}body.style.paddingRight=e,body.classList.add("is-hidden"),i.style.opacity=0,unlock=!1,setTimeout((function(){unlock=!0}),timeOut)}(),e.classList.add("open"),t){var n=e.querySelector(".popup__content--project"),s=document.createElement("img");s.setAttribute("src","assets/images/"+t+".jpg"),n.append(s)}e.addEventListener("click",(function(e){e.target.closest(".popup__content")||y(e.target.closest(".popup"),!0)}))}}function y(e,t){var o=e.getElementsByTagName("img");o.length&&setTimeout((function(){o[0].remove()}),400),unlock&&(e.classList.remove("open"),t&&(setTimeout((function(){for(var e=0;e<lockPadding.length;e++)lockPadding[e].style.paddingRight="0px";body.style.paddingRight="0px",body.classList.remove("is-hidden"),i.style.opacity=1}),timeOut),unlock=!1,setTimeout((function(){unlock=!0}),timeOut)))}IMask(document.getElementById("phone-mask-leasing"),{mask:"+{7}(000)000-00-00"}),IMask(document.getElementById("phone-mask-price"),{mask:"+{7}(000)000-00-00"}),IMask(document.getElementById("phone-mask-feedback"),{mask:"+{7}(000)000-00-00"});new window.JustValidate(".js-form-leasing",{rules:{name:{required:!0},email:{required:!0,email:!0},myField:{required:!0,minLength:16,maxLength:16}},messages:{name:"Пожалуйста, введите ваше имя",email:"Пожалуйста, введите корректный адрес электронной почты",myField:"Пожалуйста, введите корректный номер телефона"},focusWrongField:!0,submitHandler:function(e,t,o){o({url:"../ajax.php",method:"POST",data:t,async:!0,callback:function(e){if("success"==JSON.parse(e).status){var t=document.querySelector(".popup.open"),o=document.querySelector(".js-popup-success");t.classList.remove("open"),o.classList.add("open")}}})}}),new window.JustValidate(".js-form-price",{rules:{name:{required:!0},email:{required:!0,email:!0},myField:{required:!0,minLength:16,maxLength:16}},messages:{name:"Пожалуйста, введите ваше имя",email:"Пожалуйста, введите корректный адрес электронной почты",myField:"Пожалуйста, введите корректный номер телефона"},focusWrongField:!0,submitHandler:function(e,t,o){o({url:"../ajax.php",method:"POST",data:t,async:!0,callback:function(e){if("success"==JSON.parse(e).status){var t=document.querySelector(".popup.open"),o=document.querySelector(".js-popup-success");t.classList.remove("open"),o.classList.add("open")}}})}}),new window.JustValidate(".js-form-feedback",{rules:{name:{required:!0},email:{required:!0,email:!0},myField:{required:!0,minLength:16,maxLength:16},text:{required:!0,minLength:0,maxLength:300}},messages:{name:"Пожалуйста, введите ваше имя",email:"Пожалуйста, введите корректный адрес электронной почты",myField:"Пожалуйста, введите корректный номер телефона",text:"Пожалуйста, введите сообщение"},focusWrongField:!0,submitHandler:function(e,t,o){o({url:"../ajax.php",method:"POST",data:t,async:!0,callback:function(e){if("success"==JSON.parse(e).status){var t=document.querySelector(".popup.open"),o=document.querySelector(".js-popup-success");t.classList.remove("open"),o.classList.add("open")}}})}})})),function(e){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}),"NodeList"in window&&!NodeList.prototype.forEach&&(console.info("polyfill for IE11"),NodeList.prototype.forEach=function(e,t){t=t||window;for(var o=0;o<this.length;o++)e.call(t,this[o],o,this)}),e.forEach((function(e){e.hasOwnProperty("append")||Object.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var o=e instanceof Node;t.appendChild(o?e:document.createTextNode(String(e)))})),this.appendChild(t)}})}))}([Element.prototype,Document.prototype,DocumentFragment.prototype]);