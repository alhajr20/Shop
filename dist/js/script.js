"use strict";

window.addEventListener('DOMContentLoaded', function () {
  // MOBILE MENU
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
  }); // MOBILE MENU END
  // SLIDER

  var offset = 0;
  var slideIndex = 1;
  var slides = document.querySelectorAll('.promo__item'),
      slider = document.querySelector('.promo__middle'),
      slidesWrapper = document.querySelector('.promo__sliderWrapper'),
      slidesField = document.querySelector('.promo__inner'),
      width = window.getComputedStyle(slidesWrapper).width;
  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';
  slidesWrapper.style.overflow = 'hidden';
  slides.forEach(function (slide) {
    slide.style.width = width;
  });
  slider.style.position = 'relative';
  var dots = document.createElement('ol'),
      arrDots = [];
  dots.classList.add('slider-dots');
  slider.append(dots);

  for (var i = 0; i < slides.length; i++) {
    var dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = "\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 15px;\n            height: 15px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .2;\n            transition: opacity .6s ease;\n            border-radius: 100%;\n        ";

    if (i == 0) {
      dot.style.opacity = 1;
    }

    dots.append(dot);
    arrDots.push(dot);
  }

  arrDots.forEach(function (dot) {
    dot.addEventListener('click', function (e) {
      var slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = +width.slice(0, width.length - 2) * (slideTo - 1);
      slidesField.style.transform = "translateX(-".concat(offset, "px)");
      arrDots.forEach(function (dot) {
        return dot.style.opacity = '.5';
      });
      arrDots[slideIndex - 1].style.opacity = 1;
    });
  });

  function moveSlider() {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = "translateX(-".concat(offset, "px)");

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    arrDots.forEach(function (dot) {
      return dot.style.opacity = '.5';
    });
    arrDots[slideIndex - 1].style.opacity = 1;
  }

  window.setInterval(moveSlider, 4000); // SLIDER END
  // TABS

  var tabs = document.querySelectorAll('.recommend__tab'),
      tabsContent = document.querySelectorAll('.recommend__tabContent'),
      tabsParent = document.querySelector('.recommend__tabs');

  function hideTabContent() {
    tabsContent.forEach(function (item) {
      item.classList.add('hideTab');
      item.classList.remove('showTab');
    });
    tabs.forEach(function (item) {
      item.classList.remove('recommend__tab-active');
    });
  }

  function showTabContent() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabs[i].classList.add('recommend__tab-active');
    tabsContent[i].classList.add('showTab');
    tabsContent[i].classList.remove('hideTab');
  }

  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('recommend__tab')) {
      tabs.forEach(function (item, i) {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  }); // TABS END
  // CHATS BTN

  var chatsOpenBtn = document.querySelector('.open'),
      chatsCloseBtn = document.querySelector('.close'),
      dropdown = document.querySelector('.dropdown');
  chatsOpenBtn.addEventListener('click', function () {
    chatsOpenBtn.classList.add('btn-hide');
    chatsOpenBtn.classList.remove('btn-active');
    chatsCloseBtn.classList.add('btn-active');
    chatsCloseBtn.classList.remove('btn-hide');
    dropdown.style.display = 'flex';
    dropdown.classList.add('fadeIn');
  });
  chatsCloseBtn.addEventListener('click', function () {
    chatsOpenBtn.classList.add('btn-active');
    chatsOpenBtn.classList.remove('btn-hide');
    chatsCloseBtn.classList.add('btn-hide');
    chatsCloseBtn.classList.remove('btn-active');
    dropdown.style.display = 'none';
    dropdown.classList.remove('fadeIn');
  }); // CHATS BTN END
  // SHOW UP BTN

  var upBtn = document.querySelector('.up');
  window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 150) {
      upBtn.classList.add('upShow');
    } else {
      upBtn.classList.remove('upShow');
    }
  }); // SHOW UP BTN END

  upBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(pageXOffset, 0);
  }); // SLOW LINKS END
  // Account dropdown

  var accountBtn = document.querySelector('.header__account button'),
      dropdownElem = document.querySelector('.header__account-dropdown');
  accountBtn.addEventListener('click', function () {
    dropdownElem.classList.toggle('header__account-active');
  }); // Account dropdown end
  // Modal window

  var overlayWindow = document.querySelector('.form'),
      modalBtns = document.querySelectorAll('button.modal'),
      modalCloseBtn = document.querySelector('.form__close'),
      modalWindow = document.querySelector('.form form');
  modalBtns.forEach(function (item) {
    item.addEventListener('click', function () {
      overlayWindow.classList.add('form-active');
      document.body.style.overflow = 'hidden';
    });
  });
  overlayWindow.addEventListener('click', function (e) {
    if (e.target === overlayWindow || e.target === modalCloseBtn) {
      overlayWindow.classList.remove('form-active');
      document.body.style.overflow = 'visible';
    }
  }); // Modal window end

  var cartBtn = document.querySelector('.header__basket button'),
      cartClose = document.querySelector('.cart-shop__head button'),
      cartShop = document.querySelector('.cart-shop');
  cartBtn.addEventListener('click', function () {
    cartShop.classList.add('cart-shop-active');
  });
  cartClose.addEventListener('click', function () {
    cartShop.classList.remove('cart-shop-active');
  });
  var showPreviewBtn = document.querySelectorAll('.open-review'),
      closePreviewBtn = document.querySelector('.preview-modal__close button'),
      previewModal = document.querySelector('.preview');
  showPreviewBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      previewModal.classList.add('show-preview');
      document.body.style.overflow = 'hidden';
    });
  });
  previewModal.addEventListener('click', function (e) {
    if (e.target === previewModal) {
      previewModal.classList.remove('show-preview');
      document.body.style.overflow = 'visible';
    }
  });
  closePreviewBtn.addEventListener('click', function () {
    previewModal.classList.remove('show-preview');
    document.body.style.overflow = 'visible';
  });
});