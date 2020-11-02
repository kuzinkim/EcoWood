var phoneMaskLeasing = IMask(
    document.getElementById('phone-mask-leasing'), {
        mask: '+{7}(000)000-00-00'
});

var phoneMaskPrice = IMask(
    document.getElementById('phone-mask-price'), {
        mask: '+{7}(000)000-00-00'
});

var phoneMaskFeedback = IMask(
    document.getElementById('phone-mask-feedback'), {
        mask: '+{7}(000)000-00-00'
});


new window.JustValidate('.js-form-leasing', {
    rules: {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        myField: {
            required: true,
            minLength: 16,
            maxLength: 16,
        }
    },

    messages: {
        name: 'Пожалуйста, введите ваше имя',
        email: 'Пожалуйста, введите корректный адрес электронной почты',
        myField: 'Пожалуйста, введите корректный номер телефона'
    },

    focusWrongField: true,

    submitHandler: function (form, values, ajax) {
        var activePopup = document.querySelector('.popup.open');
        var successPopup = document.querySelector('.js-popup-success');
        activePopup.classList.remove('open')
        successPopup.classList.add('open')
    },
});

new window.JustValidate('.js-form-price', {
    rules: {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        myField: {
            required: true,
            minLength: 16,
            maxLength: 16,
        }
    },

    messages: {
        name: 'Пожалуйста, введите ваше имя',
        email: 'Пожалуйста, введите корректный адрес электронной почты',
        myField: 'Пожалуйста, введите корректный номер телефона'
    },

    focusWrongField: true,

    submitHandler: function (form, values, ajax) {
        var activePopup = document.querySelector('.popup.open');
        var successPopup = document.querySelector('.js-popup-success');
        activePopup.classList.remove('open')
        successPopup.classList.add('open')
    },
});

new window.JustValidate('.js-form-feedback', {
    rules: {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        myField: {
            required: true,
            minLength: 16,
            maxLength: 16,
        },
        text: {
            required: true,
            minLength: 0,
            maxLength: 300,
        }
    },

    messages: {
        name: 'Пожалуйста, введите ваше имя',
        email: 'Пожалуйста, введите корректный адрес электронной почты',
        myField: 'Пожалуйста, введите корректный номер телефона'
    },

    focusWrongField: true,

    submitHandler: function (form, values, ajax) {
        var activePopup = document.querySelector('.popup.open');
        var successPopup = document.querySelector('.js-popup-success');
        activePopup.classList.remove('open')
        successPopup.classList.add('open')
    },
});