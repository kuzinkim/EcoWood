var debugTimes = false;

/**
 * Global Variables
 */

/**
 * Document Ready
 */
document.addEventListener("DOMContentLoaded", function(event) {

    const anchors = document.querySelectorAll('a.js-scroll-to')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            
            const blockID = anchor.getAttribute('href')
            
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

});