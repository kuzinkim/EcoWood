var debugTimes = false;

document.addEventListener("DOMContentLoaded", function (event) {


    // плавный скролл до секций по якорю
    const anchors = document.querySelectorAll('a[href^="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const blockID = anchor.getAttribute('href')
            var element = document.querySelector('' + blockID)
            scrollTo(element)
        })
    }

    function scrollTo(element){
        window.scroll({
            left: 0,
            top: element.offsetTop - 30,
            behavior: "smooth"
        })
    }

});