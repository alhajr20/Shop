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