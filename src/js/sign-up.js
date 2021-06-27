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
});