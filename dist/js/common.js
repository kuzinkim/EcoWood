var debugTimes=!1;document.addEventListener("DOMContentLoaded",(function(e){initSmoothScrolling(),function(){var e,t=document.querySelectorAll(".product__tab-item"),n=document.querySelectorAll(".characteristics"),o=document.querySelector(".js-popup-num");function i(){this.classList.contains("is-active")||t.forEach((function(e){e.classList.remove("is-active")})),this.classList.add("is-active"),function(e){n.forEach((function(t){var n=t.getAttribute("data-id");e==n?t.classList.add("is-active"):t.classList.remove("is-active")}))}(e=this.getAttribute("data-id")),o.innerHTML=e}t.forEach((function(e){e.addEventListener("click",i)}))}();var t=document.querySelectorAll(".js-popup-show"),n=document.querySelectorAll(".js-close");if(body=document.querySelector("body"),lockPadding=document.querySelectorAll(".lock-padding"),unlock=!0,timeOut=400,t.length>0)for(var o=0;o<t.length;o++){t[o].addEventListener("click",(function(e){var t=this.getAttribute("data-content");i(document.querySelector(""+t)),e.preventDefault()}))}if(n.length>0)for(o=0;o<n.length;o++){n[o].addEventListener("click",(function(e){s(this.closest(".popup"),!0),e.preventDefault()}))}function i(e){if(e&&unlock){var t=document.querySelector(".popup.open");t?s(t,!1):function(){var e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(lockPadding.length>0)for(var t=0;t<lockPadding.length;t++){lockPadding[t].style.paddingRight=e}body.style.paddingRight=e,body.classList.add("is-hidden"),l.style.opacity=0,unlock=!1,setTimeout((function(){unlock=!0}),timeOut)}(),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||s(e.target.closest(".popup"),!0)}))}}function s(e,t){unlock&&(e.classList.remove("open"),t&&(setTimeout((function(){for(var e=0;e<lockPadding.length;e++)lockPadding[e].style.paddingRight="0px";body.style.paddingRight="0px",body.classList.remove("is-hidden"),l.style.opacity=1}),timeOut),unlock=!1,setTimeout((function(){unlock=!0}),timeOut)))}var c=function(e){e.classList.add("is-hidden");var t=e.querySelector(".js-more-btn");t.addEventListener("click",(function(){e.classList.toggle("is-hidden"),"развернуть"===t.innerText.toLowerCase()?t.innerText="Свернуть":t.innerText="Развернуть"}))},r=document.querySelectorAll(".js-hidden-container");if(r.length)for(o=0;o<r.length;o+=1)c(r[o]);var l=document.querySelector(".button-up");window.addEventListener("scroll",(function(e){var t=window.pageYOffset,n=document.querySelector(".header");t>=n.clientHeight+40?n.classList.add("is-fixed"):n.classList.remove("is-fixed"),(window.pageYOffset||document.documentElement.scrollTop)>700?l.classList.add("is-show"):l.classList.remove("is-show")}));IMask(document.getElementById("phone-mask-leasing"),{mask:"+{7}(000)000-00-00"}),IMask(document.getElementById("phone-mask-price"),{mask:"+{7}(000)000-00-00"}),IMask(document.getElementById("phone-mask-feedback"),{mask:"+{7}(000)000-00-00"});new window.JustValidate(".js-form-leasing",{rules:{name:{required:!0},email:{required:!0,email:!0},myField:{required:!0,minLength:16,maxLength:16}},messages:{name:"Пожалуйста, введите ваше имя",email:"Пожалуйста, введите корректный адрес электронной почты",myField:"Пожалуйста, введите корректный номер телефона"},focusWrongField:!0,submitHandler:function(e,t,n){var o=document.querySelector(".popup.open"),i=document.querySelector(".js-popup-success");o.classList.remove("open"),i.classList.add("open")}}),new window.JustValidate(".js-form-price",{rules:{name:{required:!0},email:{required:!0,email:!0},myField:{required:!0,minLength:16,maxLength:16}},messages:{name:"Пожалуйста, введите ваше имя",email:"Пожалуйста, введите корректный адрес электронной почты",myField:"Пожалуйста, введите корректный номер телефона"},focusWrongField:!0,submitHandler:function(e,t,n){var o=document.querySelector(".popup.open"),i=document.querySelector(".js-popup-success");o.classList.remove("open"),i.classList.add("open")}}),new window.JustValidate(".js-form-feedback",{rules:{name:{required:!0},email:{required:!0,email:!0},myField:{required:!0,minLength:16,maxLength:16},text:{required:!0,minLength:0,maxLength:300}},messages:{name:"Пожалуйста, введите ваше имя",email:"Пожалуйста, введите корректный адрес электронной почты",myField:"Пожалуйста, введите корректный номер телефона"},focusWrongField:!0,submitHandler:function(e,t,n){var o=document.querySelector(".popup.open"),i=document.querySelector(".js-popup-success");o.classList.remove("open"),i.classList.add("open")}})})),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}),"NodeList"in window&&!NodeList.prototype.forEach&&(console.info("polyfill for IE11"),NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)});