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
            var fileId = this.getAttribute('data-file');
            var popupElement = document.querySelector('' + linkId);
            popupOpen(popupElement, fileId)
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

function popupOpen(curentPopup, fileId) {

    if (curentPopup && unlock) {

        var popupActive = document.querySelector('.popup.open');

        if (popupActive) {
            popupOnClose(popupActive, false);
        } else {
            bodyLock();
        }

        curentPopup.classList.add('open')

        if(fileId){
            var imgContainer = curentPopup.querySelector('.popup__content--project')
            var imgEl = document.createElement('img')
            imgEl.setAttribute('src', 'assets/images/' + fileId + '.jpg')
            imgContainer.append(imgEl)
        }
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

    var imgActive = popupActive.getElementsByTagName('img')

    if(imgActive.length){

        setTimeout(function(){
            imgActive[0].remove()
        }, 400)
        
    }

    if (unlock) {
        popupActive.classList.remove('open');

        if (doUnlock) {
            bodyUnLock();
        }
    }
}