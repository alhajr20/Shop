"use strict";

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