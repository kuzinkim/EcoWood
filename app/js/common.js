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
    var body = document.querySelector('body');
    var burger = document.querySelector('.js-burg');
    var headerMenu = document.querySelector('.header__nav');
    var wrapper = document.querySelector('.wrapper');
    var headerMenuLink = document.querySelectorAll('.header__nav-link');
    var closeMenuBtn = document.querySelector('.js-close-menu')
    var closeCatalogBtn = document.querySelector('.js-close-catalog')
    var catalog = document.querySelector('.catalog__dropdown')
    var catalogBtn = document.querySelector('.catalog__btn')


    burger.addEventListener('click', function(){

        if(!this.classList.contains('active')){
            headerMenu.classList.add('is-active');
            body.classList.add('body--opened');
            wrapper.classList.add('overlay')
            
        }else{
            headerMenu.classList.remove('is-active');
            body.classList.remove('body--opened');
            wrapper.classList.remove('overlay')
        }
    })

    closeMenuBtn.addEventListener('click', function(){
        body.classList.remove('is-hidden');
        body.classList.remove('body--opened');
        wrapper.classList.remove('overlay');
        headerMenu.classList.remove('is-active');
    })

    closeCatalogBtn.addEventListener('click', function(){
        catalog.classList.remove('active');
        catalogBtn.classList.remove('active');
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

});

@@include('vendor/polyfill.js')

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

    

    function moveCatalogOnMenu () {
        var catalog = $('.catalog')
        var headerNav = $('.header__nav')
        var headerMenuMobile = $('.header__menu')

        if(window.matchMedia('(max-width: 768px)').matches){
            headerNav.prepend(catalog)
        }
    }

    moveCatalogOnMenu();
    
})