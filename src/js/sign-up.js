window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__mobile'),
          openBtn = document.querySelector('.hamburger'),
          closeBtn = document.querySelector('button.close');

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.add('mobileActive');
    });

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.remove('mobileActive');
    });




    const privacyCheckbox = document.querySelector('input[type="checkbox"]'),
          registerSubmitBtn = document.querySelector('.register-submit');

    privacyCheckbox.addEventListener('click', (e) => {
        const elem = e.target;

        if (elem.checked) {
            registerSubmitBtn.removeAttribute('disabled');
        } else {
            registerSubmitBtn.setAttribute('disabled', '');
        }
    });

    const upBtn = document.querySelector('.up');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 150) {
            upBtn.classList.add('upShow');
        } else {
            upBtn.classList.remove('upShow');
        }
    });

    upBtn.addEventListener('click', (e) => {
        e.preventDefault();

        window.scrollTo(pageXOffset, 0);
    });




    const cartBtn = document.querySelector('.header__basket button'),
          cartClose = document.querySelector('.cart-shop__head button'),
          cartShop = document.querySelector('.cart-shop');

    cartBtn.addEventListener('click', () => {
        cartShop.classList.add('cart-shop-active');
    });

    cartClose.addEventListener('click', () => {
        cartShop.classList.remove('cart-shop-active');
    });



    const overlayWindow = document.querySelector('.form'),
          modalBtns = document.querySelectorAll('button.modal'),
          modalCloseBtn = document.querySelector('.form__close'),
          modalWindow = document.querySelector('.form form');

    modalBtns.forEach(item => {
        item.addEventListener('click', () => {
            overlayWindow.classList.add('form-active');
            document.body.style.overflow = 'hidden';
        });
    });

    overlayWindow.addEventListener('click', (e) => {
        if (e.target === overlayWindow || e.target === modalCloseBtn) {
            overlayWindow.classList.remove('form-active');
            document.body.style.overflow = 'visible';
        }
    });


    const accountBtn = document.querySelector('.header__account button'),
          dropdownElem = document.querySelector('.header__account-dropdown');
    
    accountBtn.addEventListener('click', () => {
        dropdownElem.classList.toggle('header__account-active');
    });



    const chatsOpenBtn = document.querySelector('.open'),
          chatsCloseBtn = document.querySelector('.close'),
          dropdown = document.querySelector('.dropdown');

    chatsOpenBtn.addEventListener('click', () => {
        chatsOpenBtn.classList.add('btn-hide');
        chatsOpenBtn.classList.remove('btn-active');
        chatsCloseBtn.classList.add('btn-active');
        chatsCloseBtn.classList.remove('btn-hide');
        dropdown.style.display = 'flex';
        dropdown.classList.add('fadeIn');
    });

    chatsCloseBtn.addEventListener('click', () => {
        chatsOpenBtn.classList.add('btn-active');
        chatsOpenBtn.classList.remove('btn-hide');
        chatsCloseBtn.classList.add('btn-hide');
        chatsCloseBtn.classList.remove('btn-active');
        dropdown.style.display = 'none';
        dropdown.classList.remove('fadeIn');
    });
});