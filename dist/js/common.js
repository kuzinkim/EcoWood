var debugTimes=!1;document.addEventListener("DOMContentLoaded",(function(e){const t=document.querySelectorAll('a[href^="#"]');for(let e of t)e.addEventListener("click",(function(t){t.preventDefault();const n=e.getAttribute("href");o(document.querySelector(""+n))}));function o(e){window.scroll({left:0,top:e.offsetTop-30,behavior:"smooth"})}}));