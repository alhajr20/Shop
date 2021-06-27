"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var menu = document.querySelector('.nav__mobile'),
      openBtn = document.querySelector('.hamburger'),
      closeBtn = document.querySelector('button.close');
  openBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.add('mobileActive');
  });
  closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.remove('mobileActive');
  });
  var privacyCheckbox = document.querySelector('input[type="checkbox"]'),
      registerSubmitBtn = document.querySelector('.register-submit');
  privacyCheckbox.addEventListener('click', function (e) {
    var elem = e.target;

    if (elem.checked) {
      registerSubmitBtn.removeAttribute('disabled');
    } else {
      registerSubmitBtn.setAttribute('disabled', '');
    }
  });
  var upBtn = document.querySelector('.up');
  window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 150) {
      upBtn.classList.add('upShow');
    } else {
      upBtn.classList.remove('upShow');
    }
  });
  upBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(pageXOffset, 0);
  });
});