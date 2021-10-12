var debugTimes = false;

document.addEventListener("DOMContentLoaded", function (event) {

    // инициализация плагина плавной прокрутки по якорю
    initSmoothScrolling();

    // Разворот текста
    var bindExpandService = function (block) {
        var button = block.querySelector('.js-more-btn');
        var strService = block.querySelector('.js-service-text')
        block.classList.add('is-hidden');

        if(strService !== null){
            var strLength = strService.innerHTML.length
            
            if(strLength < 500){
                block.classList.add('is-button-hide');
                block.classList.remove('is-hidden');
            }
        }

        button.addEventListener('click', function () {
            block.classList.toggle('is-hidden');
            if (button.innerText.toLowerCase() === 'развернуть') {
                button.innerText = 'Свернуть';
            } else {
                button.innerText = 'Развернуть';
            }
        })
    }

    
    var blocksService = document.querySelectorAll('.js-hidden-container');

    if (blocksService.length) {
        for (var i = 0; i < blocksService.length; i += 1) {
            bindExpandService(blocksService[i]);
        }
    }

    // Табы
    function tab() {
        var tabNav = document.querySelectorAll('.product__tab-btn'),
            tabContent = document.querySelectorAll('.characteristics'),
            popupTitle = document.querySelector('.js-popup-title'),
            productBtn = document.querySelector('.js-product-button'),
            inputProductTitle = document.getElementById('product_title'),
            inputProduct = document.getElementById('product_id'),
            tabId,
            tabDataText;

            tabNav.forEach(function(item){
                item.addEventListener('click', selectTabNav);
            })

            function selectTabNav() {

                if(!this.classList.contains('is-active')){
                    tabNav.forEach(function(item){
                        item.classList.remove('is-active');
                    });
                }
                
                this.classList.add('is-active');

                if(screen.width < 768){
                    var tabOffsetTop = this.getBoundingClientRect().top

                    window.scrollBy({
                        top: tabOffsetTop
                    })

                    setTimeout(function(){

                        window.scrollBy({
                            top: -60
                        })
                    }, 0)
                }

                tabId = this.getAttribute('data-id');
                tabDataText = this.getAttribute('data-text');
                productBtn.textContent = tabDataText
                selectTabContent(tabId);
                inputProductTitle.setAttribute('value', tabDataText)
                inputProduct.setAttribute('value', 'EcoWood' + ' ' + tabId)

                if(tabDataText == "Получить предложение"){
                    popupTitle.textContent = "Получить КП на EcoWood" + " " + tabId
                }else{
                    popupTitle.textContent = "Узнать цену на EcoWood" + " " + tabId
                }
                
            }

            function selectTabContent(tabName) {
                tabContent.forEach(function(item){
                    var tabContentId = item.getAttribute('id');

                    if(tabName == tabContentId){
                        item.classList.add('is-active');
                    }else{
                        item.classList.remove('is-active');
                    }
                });
                
            }
    };

    tab();

    // Фксирование шапки и отображение кнопки навверх
    // var buttonUp = document.querySelector('.button-up')

    // window.addEventListener('scroll', function(e){
    //     var pageScrollTop = window.pageYOffset;
    //     var header = document.querySelector('.header');
    //     var headerHeight = header.clientHeight + 40;

    //     if(pageScrollTop >= headerHeight){
    //         header.classList.add('is-fixed');
    //     }else{
    //         header.classList.remove('is-fixed');
    //     }

    //     var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    //     if (scrolled > 700) {
    //         buttonUp.classList.add('is-show');
    //     } else {
    //         buttonUp.classList.remove('is-show');
    //     }
    // })

    // Показать больше продуктов

    var buttonMoreService = document.querySelectorAll('.button-more--element');

    buttonMoreService.forEach(function(item){
        var curBtn = item

        curBtn.addEventListener('click', function(e){
            var activeBlock = this.closest('.js-parent')
            activeBlock.classList.toggle('is-active');

            if (curBtn.innerText.toLowerCase() === 'показать еще' || curBtn.innerText.toLowerCase() === 'другие модели') {
                curBtn.innerText = 'Скрыть';
            } else {
                var btnText = curBtn.getAttribute('data-text-btn')
                curBtn.innerText = btnText

                if(btnText !== 'Другие модели'){
                    
                    window.scrollTo({
                        top: activeBlock.offsetTop
                    })
                }
            }
        })
    })

    // Мобильное меню
    var burger = document.querySelector('.js-burg');
    var headerMenu = document.querySelector('.header__nav');
    var wrapper = document.querySelector('.wrapper');
    var headerMenuLink = document.querySelectorAll('.header__nav-link');


    burger.addEventListener('click', function(){

        var header = document.querySelector('.header__inner')

        if(!this.classList.contains('active')){
            this.classList.add('active');
            header.classList.add('is-color');
            headerMenu.classList.add('is-active');
            body.classList.add('is-hidden');
            wrapper.classList.add('overlay');
            
        }else{
            this.classList.remove('active');
            header.classList.remove('is-color');
            headerMenu.classList.remove('is-active');
            body.classList.remove('is-hidden');
            wrapper.classList.remove('overlay');
        }
    })

    for(var i = 0; i < headerMenuLink.length; i++){

        var linkItem = headerMenuLink[i];

        linkItem.addEventListener('click', function(e){

            var header = document.querySelector('.header__inner')

            if(headerMenu.classList.contains('is-active')){
                headerMenu.classList.remove('is-active');
                burger.classList.remove('active');
                wrapper.classList.remove('overlay');
                body.classList.remove('is-hidden');
                header.classList.remove('is-color');
            }

        });
    }

    // Меняет разметку табов на мобильном разрешении
    if(screen.width <= 767){
        
        var productTab = document.querySelectorAll('.product__tab-item')
        
        productTab.forEach(function(item){

            var tabItem = item
            var tabBtnId = tabItem.querySelector('.product__tab-btn')
            var tabItemId = tabBtnId.getAttribute('data-id')
            var tableItem = document.getElementById(tabItemId)

            tabItem.append(tableItem)
        })
    }


    // const breakpoint = window.matchMedia( '(max-width:767px)' );

    // let mySwiper;

    // const breakpointChecker = function() {

    //     if ( breakpoint.matches === true ) {

    //     if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

    //     return;

    //     } else if ( breakpoint.matches === false ) {
    //         return enableSwiper();
    //     }

    // };

    // const enableSwiper = function() {

    //     mySwiper = new Swiper ('.swiper-container', {
    //         navigation: {
    //           nextEl: '.project-button--next',
    //           prevEl: '.project-button--prev',
    //         },
    //         autoplay: {
    //             delay: 5000,
    //             disableOnInteraction: true,
    //         },
    //         simulateTouch: false
    //     });
    // };

    // breakpoint.addListener(breakpointChecker);

    // breakpointChecker();

    // var slider = document.querySelector('.swiper-container')

    // slider.addEventListener('mouseenter', function(){
    //     mySwiper.autoplay.stop();
    // })

    // slider.addEventListener('mouseleave', function(){
    //     mySwiper.autoplay.start();
    // })

});

(function (arr) {

    // проверяем поддержку matches
    if (!Element.prototype.matches) {

        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;

    }

    // проверяем поддержку closest
    if (!Element.prototype.closest) {

        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;

            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }

    if ('NodeList' in window && !NodeList.prototype.forEach) {
        console.info('polyfill for IE11');
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    arr.forEach(function (item) {
        if (item.hasOwnProperty('append')) {
            return;
        }
        Object.defineProperty(item, 'append', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function append() {
                var argArr = Array.prototype.slice.call(arguments),
                    docFrag = document.createDocumentFragment();

                argArr.forEach(function (argItem) {
                    var isNode = argItem instanceof Node;
                    docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });

                this.appendChild(docFrag);
            }
        });
    });

})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

$(document).ready(function(){
    
    $('.footer__catalog-btn').on('click', function(){
        $(this).toggleClass('active')
        $('.footer__catalog-dropdown').stop().slideToggle()
    })

    $('.catalog__btn').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active')
        $('.catalog__dropdown').toggleClass('active')
    })

    var catalogItem = document.querySelectorAll('.js-catalog-item');
    var catalogContainer = document.querySelector('.js-catalog-container');


    var moveElement = function (item) {
        if(catalogContainer){
            var clonedElement = item.cloneNode(true);
            catalogContainer.append(clonedElement);
        }
    };
    

    for(var i = 0; i < catalogItem.length; i++){
        catalogEl = catalogItem[i];
        moveElement(catalogEl);
    }
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlYnVnVGltZXMgPSBmYWxzZTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgIC8vINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC/0LvQsNCz0LjQvdCwINC/0LvQsNCy0L3QvtC5INC/0YDQvtC60YDRg9GC0LrQuCDQv9C+INGP0LrQvtGA0Y5cclxuICAgIGluaXRTbW9vdGhTY3JvbGxpbmcoKTtcclxuXHJcbiAgICAvLyDQoNCw0LfQstC+0YDQvtGCINGC0LXQutGB0YLQsFxyXG4gICAgdmFyIGJpbmRFeHBhbmRTZXJ2aWNlID0gZnVuY3Rpb24gKGJsb2NrKSB7XHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5qcy1tb3JlLWJ0bicpO1xyXG4gICAgICAgIHZhciBzdHJTZXJ2aWNlID0gYmxvY2sucXVlcnlTZWxlY3RvcignLmpzLXNlcnZpY2UtdGV4dCcpXHJcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIGlmKHN0clNlcnZpY2UgIT09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgc3RyTGVuZ3RoID0gc3RyU2VydmljZS5pbm5lckhUTUwubGVuZ3RoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihzdHJMZW5ndGggPCA1MDApe1xyXG4gICAgICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnaXMtYnV0dG9uLWhpZGUnKTtcclxuICAgICAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpID09PSAn0YDQsNC30LLQtdGA0L3Rg9GC0YwnKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gJ9Ch0LLQtdGA0L3Rg9GC0YwnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICfQoNCw0LfQstC10YDQvdGD0YLRjCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgdmFyIGJsb2Nrc1NlcnZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtaGlkZGVuLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGlmIChibG9ja3NTZXJ2aWNlLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzU2VydmljZS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBiaW5kRXhwYW5kU2VydmljZShibG9ja3NTZXJ2aWNlW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0KLQsNCx0YtcclxuICAgIGZ1bmN0aW9uIHRhYigpIHtcclxuICAgICAgICB2YXIgdGFiTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RfX3RhYi1idG4nKSxcclxuICAgICAgICAgICAgdGFiQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFyYWN0ZXJpc3RpY3MnKSxcclxuICAgICAgICAgICAgcG9wdXBUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wb3B1cC10aXRsZScpLFxyXG4gICAgICAgICAgICBwcm9kdWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXByb2R1Y3QtYnV0dG9uJyksXHJcbiAgICAgICAgICAgIGlucHV0UHJvZHVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RfdGl0bGUnKSxcclxuICAgICAgICAgICAgaW5wdXRQcm9kdWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RfaWQnKSxcclxuICAgICAgICAgICAgdGFiSWQsXHJcbiAgICAgICAgICAgIHRhYkRhdGFUZXh0O1xyXG5cclxuICAgICAgICAgICAgdGFiTmF2LmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0VGFiTmF2KTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNlbGVjdFRhYk5hdigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKXtcclxuICAgICAgICAgICAgICAgICAgICB0YWJOYXYuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzY3JlZW4ud2lkdGggPCA3Njgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJPZmZzZXRUb3AgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHRhYk9mZnNldFRvcFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC02MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGFiSWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgICAgICAgICAgdGFiRGF0YVRleHQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0QnRuLnRleHRDb250ZW50ID0gdGFiRGF0YVRleHRcclxuICAgICAgICAgICAgICAgIHNlbGVjdFRhYkNvbnRlbnQodGFiSWQpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9kdWN0VGl0bGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRhYkRhdGFUZXh0KVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9kdWN0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnRWNvV29vZCcgKyAnICcgKyB0YWJJZClcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0YWJEYXRhVGV4dCA9PSBcItCf0L7Qu9GD0YfQuNGC0Ywg0L/RgNC10LTQu9C+0LbQtdC90LjQtVwiKXtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnRleHRDb250ZW50ID0gXCLQn9C+0LvRg9GH0LjRgtGMINCa0J8g0L3QsCBFY29Xb29kXCIgKyBcIiBcIiArIHRhYklkXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cFRpdGxlLnRleHRDb250ZW50ID0gXCLQo9C30L3QsNGC0Ywg0YbQtdC90YMg0L3QsCBFY29Xb29kXCIgKyBcIiBcIiArIHRhYklkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2VsZWN0VGFiQ29udGVudCh0YWJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJDb250ZW50LmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYkNvbnRlbnRJZCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZih0YWJOYW1lID09IHRhYkNvbnRlbnRJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0YWIoKTtcclxuXHJcbiAgICAvLyDQpNC60YHQuNGA0L7QstCw0L3QuNC1INGI0LDQv9C60Lgg0Lgg0L7RgtC+0LHRgNCw0LbQtdC90LjQtSDQutC90L7Qv9C60Lgg0L3QsNCy0LLQtdGA0YVcclxuICAgIC8vIHZhciBidXR0b25VcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdXAnKVxyXG5cclxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKXtcclxuICAgIC8vICAgICB2YXIgcGFnZVNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgIC8vICAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG4gICAgLy8gICAgIHZhciBoZWFkZXJIZWlnaHQgPSBoZWFkZXIuY2xpZW50SGVpZ2h0ICsgNDA7XHJcblxyXG4gICAgLy8gICAgIGlmKHBhZ2VTY3JvbGxUb3AgPj0gaGVhZGVySGVpZ2h0KXtcclxuICAgIC8vICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2lzLWZpeGVkJyk7XHJcbiAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1maXhlZCcpO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgdmFyIHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblxyXG4gICAgLy8gICAgIGlmIChzY3JvbGxlZCA+IDcwMCkge1xyXG4gICAgLy8gICAgICAgICBidXR0b25VcC5jbGFzc0xpc3QuYWRkKCdpcy1zaG93Jyk7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgYnV0dG9uVXAuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2hvdycpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pXHJcblxyXG4gICAgLy8g0J/QvtC60LDQt9Cw0YLRjCDQsdC+0LvRjNGI0LUg0L/RgNC+0LTRg9C60YLQvtCyXHJcblxyXG4gICAgdmFyIGJ1dHRvbk1vcmVTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1tb3JlLS1lbGVtZW50Jyk7XHJcblxyXG4gICAgYnV0dG9uTW9yZVNlcnZpY2UuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICB2YXIgY3VyQnRuID0gaXRlbVxyXG5cclxuICAgICAgICBjdXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUJsb2NrID0gdGhpcy5jbG9zZXN0KCcuanMtcGFyZW50JylcclxuICAgICAgICAgICAgYWN0aXZlQmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VyQnRuLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpID09PSAn0L/QvtC60LDQt9Cw0YLRjCDQtdGJ0LUnIHx8IGN1ckJ0bi5pbm5lclRleHQudG9Mb3dlckNhc2UoKSA9PT0gJ9C00YDRg9Cz0LjQtSDQvNC+0LTQtdC70LgnKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJCdG4uaW5uZXJUZXh0ID0gJ9Ch0LrRgNGL0YLRjCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnRuVGV4dCA9IGN1ckJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dC1idG4nKVxyXG4gICAgICAgICAgICAgICAgY3VyQnRuLmlubmVyVGV4dCA9IGJ0blRleHRcclxuXHJcbiAgICAgICAgICAgICAgICBpZihidG5UZXh0ICE9PSAn0JTRgNGD0LPQuNC1INC80L7QtNC10LvQuCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYWN0aXZlQmxvY2sub2Zmc2V0VG9wXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vINCc0L7QsdC40LvRjNC90L7QtSDQvNC10L3RjlxyXG4gICAgdmFyIGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idXJnJyk7XHJcbiAgICB2YXIgaGVhZGVyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdicpO1xyXG4gICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG4gICAgdmFyIGhlYWRlck1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWxpbmsnKTtcclxuXHJcblxyXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2lubmVyJylcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1jb2xvcicpO1xyXG4gICAgICAgICAgICBoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1jb2xvcicpO1xyXG4gICAgICAgICAgICBoZWFkZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXknKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBoZWFkZXJNZW51TGluay5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgIHZhciBsaW5rSXRlbSA9IGhlYWRlck1lbnVMaW5rW2ldO1xyXG5cclxuICAgICAgICBsaW5rSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2lubmVyJylcclxuXHJcbiAgICAgICAgICAgIGlmKGhlYWRlck1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSl7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5Jyk7XHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWNvbG9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0JzQtdC90Y/QtdGCINGA0LDQt9C80LXRgtC60YMg0YLQsNCx0L7QsiDQvdCwINC80L7QsdC40LvRjNC90L7QvCDRgNCw0LfRgNC10YjQtdC90LjQuFxyXG4gICAgaWYoc2NyZWVuLndpZHRoIDw9IDc2Nyl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHByb2R1Y3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdF9fdGFiLWl0ZW0nKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2R1Y3RUYWIuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuXHJcbiAgICAgICAgICAgIHZhciB0YWJJdGVtID0gaXRlbVxyXG4gICAgICAgICAgICB2YXIgdGFiQnRuSWQgPSB0YWJJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X190YWItYnRuJylcclxuICAgICAgICAgICAgdmFyIHRhYkl0ZW1JZCA9IHRhYkJ0bklkLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcbiAgICAgICAgICAgIHZhciB0YWJsZUl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJJdGVtSWQpXHJcblxyXG4gICAgICAgICAgICB0YWJJdGVtLmFwcGVuZCh0YWJsZUl0ZW0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gY29uc3QgYnJlYWtwb2ludCA9IHdpbmRvdy5tYXRjaE1lZGlhKCAnKG1heC13aWR0aDo3NjdweCknICk7XHJcblxyXG4gICAgLy8gbGV0IG15U3dpcGVyO1xyXG5cclxuICAgIC8vIGNvbnN0IGJyZWFrcG9pbnRDaGVja2VyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gICAgIGlmICggYnJlYWtwb2ludC5tYXRjaGVzID09PSB0cnVlICkge1xyXG5cclxuICAgIC8vICAgICBpZiAoIG15U3dpcGVyICE9PSB1bmRlZmluZWQgKSBteVN3aXBlci5kZXN0cm95KCB0cnVlLCB0cnVlICk7XHJcblxyXG4gICAgLy8gICAgIHJldHVybjtcclxuXHJcbiAgICAvLyAgICAgfSBlbHNlIGlmICggYnJlYWtwb2ludC5tYXRjaGVzID09PSBmYWxzZSApIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIGVuYWJsZVN3aXBlcigpO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGNvbnN0IGVuYWJsZVN3aXBlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vICAgICBteVN3aXBlciA9IG5ldyBTd2lwZXIgKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIC8vICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgLy8gICAgICAgICAgIG5leHRFbDogJy5wcm9qZWN0LWJ1dHRvbi0tbmV4dCcsXHJcbiAgICAvLyAgICAgICAgICAgcHJldkVsOiAnLnByb2plY3QtYnV0dG9uLS1wcmV2JyxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgIC8vICAgICAgICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgLy8gICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIHNpbXVsYXRlVG91Y2g6IGZhbHNlXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGJyZWFrcG9pbnQuYWRkTGlzdGVuZXIoYnJlYWtwb2ludENoZWNrZXIpO1xyXG5cclxuICAgIC8vIGJyZWFrcG9pbnRDaGVja2VyKCk7XHJcblxyXG4gICAgLy8gdmFyIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItY29udGFpbmVyJylcclxuXHJcbiAgICAvLyBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgbXlTd2lwZXIuYXV0b3BsYXkuc3RvcCgpO1xyXG4gICAgLy8gfSlcclxuXHJcbiAgICAvLyBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgbXlTd2lwZXIuYXV0b3BsYXkuc3RhcnQoKTtcclxuICAgIC8vIH0pXHJcblxyXG59KTtcclxuXHJcbihmdW5jdGlvbiAoYXJyKSB7XHJcblxyXG4gICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INC/0L7QtNC00LXRgNC20LrRgyBtYXRjaGVzXHJcbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcclxuXHJcbiAgICAgICAgLy8g0L7Qv9GA0LXQtNC10LvRj9C10Lwg0YHQstC+0LnRgdGC0LLQvlxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3IgfHxcclxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XHJcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxyXG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INC/0L7QtNC00LXRgNC20LrRgyBjbG9zZXN0XHJcbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QpIHtcclxuXHJcbiAgICAgICAgLy8g0YDQtdCw0LvQuNC30YPQtdC8XHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIChjc3MpIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLm1hdGNoZXMoY3NzKSkgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJ05vZGVMaXN0JyBpbiB3aW5kb3cgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdwb2x5ZmlsbCBmb3IgSUUxMScpO1xyXG4gICAgICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XHJcbiAgICAgICAgICAgIHRoaXNBcmcgPSB0aGlzQXJnIHx8IHdpbmRvdztcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXNbaV0sIGksIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KCdhcHBlbmQnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdGVtLCAnYXBwZW5kJywge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyZ0FyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhcmdBcnIuZm9yRWFjaChmdW5jdGlvbiAoYXJnSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc05vZGUgPSBhcmdJdGVtIGluc3RhbmNlb2YgTm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBkb2NGcmFnLmFwcGVuZENoaWxkKGlzTm9kZSA/IGFyZ0l0ZW0gOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoYXJnSXRlbSkpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZG9jRnJhZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxufSkoW0VsZW1lbnQucHJvdG90eXBlLCBEb2N1bWVudC5wcm90b3R5cGUsIERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlXSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICAkKCcuZm9vdGVyX19jYXRhbG9nLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAkKCcuZm9vdGVyX19jYXRhbG9nLWRyb3Bkb3duJykuc3RvcCgpLnNsaWRlVG9nZ2xlKClcclxuICAgIH0pXHJcblxyXG4gICAgJCgnLmNhdGFsb2dfX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICQoJy5jYXRhbG9nX19kcm9wZG93bicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgfSlcclxuXHJcbiAgICB2YXIgY2F0YWxvZ0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY2F0YWxvZy1pdGVtJyk7XHJcbiAgICB2YXIgY2F0YWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jYXRhbG9nLWNvbnRhaW5lcicpO1xyXG5cclxuXHJcbiAgICB2YXIgbW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmKGNhdGFsb2dDb250YWluZXIpe1xyXG4gICAgICAgICAgICB2YXIgY2xvbmVkRWxlbWVudCA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBjYXRhbG9nQ29udGFpbmVyLmFwcGVuZChjbG9uZWRFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNhdGFsb2dJdGVtLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjYXRhbG9nRWwgPSBjYXRhbG9nSXRlbVtpXTtcclxuICAgICAgICBtb3ZlRWxlbWVudChjYXRhbG9nRWwpO1xyXG4gICAgfVxyXG59KSJdLCJmaWxlIjoiY29tbW9uLmpzIn0=
