var debugTimes=!1;document.addEventListener("DOMContentLoaded",(function(e){initSmoothScrolling();var t=function(e){e.classList.add("is-hidden");var t=e.querySelector(".js-more-btn");t.addEventListener("click",(function(){e.classList.toggle("is-hidden"),"развернуть"===t.innerText.toLowerCase()?t.innerText="Свернуть":t.innerText="Развернуть"}))},o=document.querySelectorAll(".js-hidden-container");if(o.length)for(var n=0;n<o.length;n+=1)t(o[n]);!function(){var e,t=document.querySelectorAll(".product__tab-item"),o=document.querySelectorAll(".characteristics"),n=document.querySelector(".js-popup-num");function i(){this.classList.contains("is-active")||t.forEach((function(e){e.classList.remove("is-active")})),this.classList.add("is-active"),screen.width<768&&(console.log(this.offsetTop),console.log(this.clientHeight),window.scrollBy({top:this.offsetTop})),function(e){o.forEach((function(t){var o=t.getAttribute("id");e==o?t.classList.add("is-active"):t.classList.remove("is-active")}))}(e=this.getAttribute("data-id")),n.innerHTML=e}t.forEach((function(e){e.addEventListener("click",i)}))}();var i=document.querySelector(".button-up");window.addEventListener("scroll",(function(e){var t=window.pageYOffset,o=document.querySelector(".header");t>=o.clientHeight+40?o.classList.add("is-fixed"):o.classList.remove("is-fixed"),(window.pageYOffset||document.documentElement.scrollTop)>700?i.classList.add("is-show"):i.classList.remove("is-show")})),document.querySelectorAll(".button-more--element").forEach((function(e){var t=e;t.addEventListener("click",(function(e){if(this.closest(".js-parent").classList.toggle("is-active"),"показать еще"===t.innerText.toLowerCase()||"другие модели"===t.innerText.toLowerCase())t.innerText="Скрыть";else{var o=t.getAttribute("data-text-btn");t.innerText=o}}))}));var s=document.querySelector(".js-burg"),c=document.querySelector(".header__menu"),r=document.querySelector(".wrapper"),a=document.querySelectorAll(".header__menu-link");s.addEventListener("click",(function(){var e=document.querySelector(".header__inner");this.classList.contains("active")?(this.classList.remove("active"),e.classList.remove("is-color"),c.classList.remove("is-active"),body.classList.remove("is-hidden"),r.classList.remove("overlay")):(this.classList.add("active"),e.classList.add("is-color"),c.classList.add("is-active"),body.classList.add("is-hidden"),r.classList.add("overlay"))}));for(n=0;n<a.length;n++){a[n].addEventListener("click",(function(e){var t=document.querySelector(".header__inner");c.classList.contains("is-active")&&(c.classList.remove("is-active"),s.classList.remove("active"),r.classList.remove("overlay"),body.classList.remove("is-hidden"),t.classList.remove("is-color"))}))}screen.width<=767&&document.querySelectorAll(".product__tab-item").forEach((function(e){var t=e,o=t.getAttribute("data-id"),n=document.getElementById(o);t.append(n)}));document.querySelector(".contact__video-icon").addEventListener("click",(function(){var e=document.getElementsByTagName("video")[0];e.paused?e.play():e.pause()}));var l=document.querySelectorAll(".js-popup-show"),d=document.querySelectorAll(".js-close");if(body=document.querySelector("body"),lockPadding=document.querySelectorAll(".lock-padding"),unlock=!0,timeOut=400,l.length>0)for(n=0;n<l.length;n++){l[n].addEventListener("click",(function(e){var t=this.getAttribute("data-content");u(document.querySelector(""+t)),e.preventDefault()}))}if(d.length>0)for(n=0;n<d.length;n++){d[n].addEventListener("click",(function(e){m(this.closest(".popup"),!0),e.preventDefault(),document.getElementsByTagName("video")[0].pause()}))}function u(e){if(e&&unlock){var t=document.querySelector(".popup.open");t?m(t,!1):function(){var e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(lockPadding.length>0)for(var t=0;t<lockPadding.length;t++){lockPadding[t].style.paddingRight=e}body.style.paddingRight=e,body.classList.add("is-hidden"),i.style.opacity=0,unlock=!1,setTimeout((function(){unlock=!0}),timeOut)}(),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||(m(e.target.closest(".popup"),!0),document.getElementsByTagName("video")[0].pause())}))}}function m(e,t){unlock&&(e.classList.remove("open"),t&&(setTimeout((function(){for(var e=0;e<lockPadding.length;e++)lockPadding[e].style.paddingRight="0px";body.style.paddingRight="0px",body.classList.remove("is-hidden"),i.style.opacity=1}),timeOut),unlock=!1,setTimeout((function(){unlock=!0}),timeOut)))}IMask(document.getElementById("phone-mask-leasing"),{mask:"+{7}(000)000-00-00"}),IMask(document.getElementById("phone-mask-price"),{mask:"+{7}(000)000-00-00"}),IMask(document.getElementById("phone-mask-feedback"),{mask:"+{7}(000)000-00-00"});new window.JustValidate(".js-form-leasing",{rules:{name:{required:!0},email:{required:!0,email:!0},myField:{required:!0,minLength:16,maxLength:16}},messages:{name:"Пожалуйста, введите ваше имя",email:"Пожалуйста, введите корректный адрес электронной почты",myField:"Пожалуйста, введите корректный номер телефона"},focusWrongField:!0,submitHandler:function(e,t,o){var n=document.querySelector(".popup.open"),i=document.querySelector(".js-popup-success");n.classList.remove("open"),i.classList.add("open")}}),new window.JustValidate(".js-form-price",{rules:{name:{required:!0},email:{required:!0,email:!0},myField:{required:!0,minLength:16,maxLength:16}},messages:{name:"Пожалуйста, введите ваше имя",email:"Пожалуйста, введите корректный адрес электронной почты",myField:"Пожалуйста, введите корректный номер телефона"},focusWrongField:!0,submitHandler:function(e,t,o){var n=document.querySelector(".popup.open"),i=document.querySelector(".js-popup-success");n.classList.remove("open"),i.classList.add("open")}}),new window.JustValidate(".js-form-feedback",{rules:{name:{required:!0},email:{required:!0,email:!0},myField:{required:!0,minLength:16,maxLength:16},text:{required:!0,minLength:0,maxLength:300}},messages:{name:"Пожалуйста, введите ваше имя",email:"Пожалуйста, введите корректный адрес электронной почты",myField:"Пожалуйста, введите корректный номер телефона",text:"Пожалуйста, введите сообщение"},focusWrongField:!0,submitHandler:function(e,t,o){var n=document.querySelector(".popup.open"),i=document.querySelector(".js-popup-success");n.classList.remove("open"),i.classList.add("open")}})})),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}),"NodeList"in window&&!NodeList.prototype.forEach&&(console.info("polyfill for IE11"),NodeList.prototype.forEach=function(e,t){t=t||window;for(var o=0;o<this.length;o++)e.call(t,this[o],o,this)});