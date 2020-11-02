var debugTimes = false;

document.addEventListener("DOMContentLoaded", function (event) {

    // инициализация плагина плавной прокрутки по якорю
    initSmoothScrolling();
    
    tab();

    // функционал вызова и закрытия модального окна
    var popupLink = document.querySelectorAll('.js-popup-show'),
        popupClose = document.querySelectorAll('.js-close');
    body = document.querySelector('body');
    lockPadding = document.querySelectorAll('.lock-padding');
    unlock = true
    timeOut = 400

    if (popupLink.length > 0) {

        for (var i = 0; i < popupLink.length; i++) {
            var popupLinkElement = popupLink[i]

            popupLinkElement.addEventListener("click", function (e) {
                var linkId = this.getAttribute('data-content');
                var popupElement = document.querySelector('' + linkId);
                popupOpen(popupElement)
                e.preventDefault()
            })
        }
    }

    if (popupClose.length > 0) {

        for (var i = 0; i < popupClose.length; i++) {
            var popupCloseElement = popupClose[i]

            popupCloseElement.addEventListener("click", function (e) {
                popupOnClose(this.closest('.popup'), true)
                e.preventDefault()
            })
        }
    }

    function popupOpen(curentPopup) {

        if (curentPopup && unlock) {

            var popupActive = document.querySelector('.popup.open');

            if (popupActive) {
                popupOnClose(popupActive, false);
            } else {
                bodyLock();
            }

            curentPopup.classList.add('open')
            curentPopup.addEventListener('click', function (e) {
                if (!e.target.closest('.popup__content')) {
                    popupOnClose(e.target.closest('.popup'), true)
                }
            })
        }
    }

    function bodyLock() {
        var lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px";
        if (lockPadding.length > 0) {

            for (var i = 0; i < lockPadding.length; i++) {
                var lockPaddingEl = lockPadding[i]
                lockPaddingEl.style.paddingRight = lockPaddingValue
            }
        }
        body.style.paddingRight = lockPaddingValue
        body.classList.add('is-hidden')
        buttonUp.style.opacity = 0

        unlock = false

        setTimeout(function () {
            unlock = true
        }, timeOut)

    }

    function bodyUnLock() {

        setTimeout(function () {
            for (var i = 0; i < lockPadding.length; i++) {
                var lockPaddingEl = lockPadding[i]
                lockPaddingEl.style.paddingRight = '0px'
            }

            body.style.paddingRight = '0px'
            body.classList.remove('is-hidden')
            buttonUp.style.opacity = 1

        }, timeOut)

        unlock = false

        setTimeout(function () {
            unlock = true
        }, timeOut)
    }

    function popupOnClose(popupActive, doUnlock) {

        if (unlock) {
            popupActive.classList.remove('open');

            if (doUnlock) {
                bodyUnLock();
            }
        }
    }

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

    @@include('../components/popup/form.js')

});

@@include('vendor/polyfill.js')