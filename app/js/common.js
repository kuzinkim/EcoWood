var debugTimes = false;

document.addEventListener("DOMContentLoaded", function (event) {

    // инициализация плагина плавной прокрутки по якорю
    initSmoothScrolling();
    
    // Разворот текста
    var bindExpandService = function (block) {
        block.classList.add('is-hidden');
        var button = block.querySelector('.js-more-btn');
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
        var tabNav = document.querySelectorAll('.product__tab-item'),
            tabContent = document.querySelectorAll('.characteristics'),
            popupPrice = document.querySelector('.js-popup-num'),
            tabName;
            
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
                    console.log(this.offsetTop);
                    console.log(this.clientHeight);

                    window.scrollBy({
                        top: this.offsetTop
                    })
                }

                tabName = this.getAttribute('data-id');
                selectTabContent(tabName);
                popupPrice.innerHTML = tabName;
                
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
            this.closest('.js-parent').classList.toggle('is-active');

            if (curBtn.innerText.toLowerCase() === 'показать еще' || curBtn.innerText.toLowerCase() === 'другие модели') {
                curBtn.innerText = 'Скрыть';
            } else {
                var btnText = curBtn.getAttribute('data-text-btn')
                curBtn.innerText = btnText
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
            var tabItemId = tabItem.getAttribute('data-id')
            var tableItem = document.getElementById(tabItemId)

            tabItem.append(tableItem)
        })
    }

    // Воспроизведение видео
    var playBtn = document.querySelector('.contact__video-icon')

    playBtn.addEventListener('click', function(){

        var videoElement = document.getElementsByTagName('video')[0]

        if (videoElement.paused) {  // если видео остановлено, запускаем
            videoElement.play();
        } else {
            videoElement.pause();
        }
    })

    @@include('../components/popup/popup.js')
    @@include('../components/popup/form.js')

});

@@include('vendor/polyfill.js')