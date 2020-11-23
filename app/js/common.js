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

                if(tabDataText == "Получить предложение"){
                    popupTitle.textContent = "Получить предложение"
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
    var buttonUp = document.querySelector('.button-up')

    window.addEventListener('scroll', function(e){
        var pageScrollTop = window.pageYOffset;
        var header = document.querySelector('.header');
        var headerHeight = header.clientHeight + 40;

        if(pageScrollTop >= headerHeight){
            header.classList.add('is-fixed');
        }else{
            header.classList.remove('is-fixed');
        }

        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled > 700) {
            buttonUp.classList.add('is-show');
        } else {
            buttonUp.classList.remove('is-show');
        }
    })

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
    var headerMenu = document.querySelector('.header__menu');
    var wrapper = document.querySelector('.wrapper');
    var headerMenuLink = document.querySelectorAll('.header__menu-link');


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


    const breakpoint = window.matchMedia( '(max-width:767px)' );

    let mySwiper;

    const breakpointChecker = function() {

        if ( breakpoint.matches === true ) {

        if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

        return;

        } else if ( breakpoint.matches === false ) {
            return enableSwiper();
        }

    };

    const enableSwiper = function() {

        mySwiper = new Swiper ('.swiper-container', {
            navigation: {
              nextEl: '.project-button--next',
              prevEl: '.project-button--prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            },
            simulateTouch: false
        });
    };

    breakpoint.addListener(breakpointChecker);

    breakpointChecker();

    var slider = document.querySelector('.swiper-container')

    slider.addEventListener('mouseenter', function(){
        mySwiper.autoplay.stop();
    })

    slider.addEventListener('mouseleave', function(){
        mySwiper.autoplay.start();
    })

    @@include('../components/popup/popup.js')
    @@include('../components/popup/form.js')

});

@@include('vendor/polyfill.js')