var debugTimes = false;

document.addEventListener("DOMContentLoaded", function (event) {

    // инициализация плагина плавной прокрутки по якорю
    initSmoothScrolling();
    
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
            bindExpandService(blocksService[i])
        }
    }

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
                    })
                }
                
                this.classList.add('is-active');

                tabName = this.getAttribute('data-id');
                selectTabContent(tabName);
                popupPrice.innerHTML = tabName
                
            }

            function selectTabContent(tabName) {
                tabContent.forEach(function(item){
                    var tabContentId = item.getAttribute('data-id');

                    if(tabName == tabContentId){
                        item.classList.add('is-active');
                    }else{
                        item.classList.remove('is-active');
                    }
                })
                
            }
    };

    tab();

    var buttonUp = document.querySelector('.button-up')
    
    window.addEventListener('scroll', function(e){
        var pageScrollTop = window.pageYOffset
        var header = document.querySelector('.header')
        var headerHeight = header.clientHeight + 40

        if(pageScrollTop >= headerHeight){
            header.classList.add('is-fixed')
        }else{
            header.classList.remove('is-fixed')
        }

        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled > 700) {
            buttonUp.classList.add('is-show');
        } else {
            buttonUp.classList.remove('is-show');
        }
    })

    @@include('../components/popup/popup.js')
    @@include('../components/popup/form.js')

});

@@include('vendor/polyfill.js')