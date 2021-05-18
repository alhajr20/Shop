window.addEventListener('DOMContentLoaded', () => {
    // MOBILE MENU
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
    // MOBILE MENU END

    // SLIDER
    let offset = 0;
    let slideIndex = 1;
    
    const slides = document.querySelectorAll('.promo__item'),
          slider = document.querySelector('.promo__middle'),
          slidesWrapper = document.querySelector('.promo__sliderWrapper'),
          slidesField = document.querySelector('.promo__inner'),
          width = window.getComputedStyle(slidesWrapper).width;


    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const dots = document.createElement('ol'),
          arrDots = [];

    dots.classList.add('slider-dots');
    slider.append(dots);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 15px;
            height: 15px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .2;
            transition: opacity .6s ease;
            border-radius: 100%;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        dots.append(dot);
        arrDots.push(dot);
    }

    arrDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            arrDots.forEach(dot => dot.style.opacity = '.5');
            arrDots[slideIndex - 1].style.opacity = 1;
        });
    });
    
    function moveSlider() {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
    
        slidesField.style.transform = `translateX(-${offset}px)`;
    
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
    
        arrDots.forEach(dot => dot.style.opacity = '.5');
        arrDots[slideIndex - 1].style.opacity = 1;
    }

    window.setInterval(moveSlider, 4000);
    // SLIDER END

    // TABS
    let tabs = document.querySelectorAll('.recommend__tab'),
        tabsContent = document.querySelectorAll('.recommend__tabContent'),
        tabsParent = document.querySelector('.recommend__tabs');

	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hideTab');
            item.classList.remove('showTab');
        });

        tabs.forEach(item => {
            item.classList.remove('recommend__tab-active');
        });
	}

	function showTabContent(i = 0) {
        tabs[i].classList.add('recommend__tab-active');
        tabsContent[i].classList.add('showTab');
        tabsContent[i].classList.remove('hideTab');
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('recommend__tab')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
    });
    // TABS END
    
    // CHATS BTN
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
    // CHATS BTN END

    // SHOW UP BTN
    const upBtn = document.querySelector('.up');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 150) {
            upBtn.classList.add('upShow');
        } else {
            upBtn.classList.remove('upShow');
        }
    });
    // SHOW UP BTN END
    
    // SLOW LINKS
    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,

                start = null;
            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });

    upBtn.addEventListener('click', (e) => {
        e.preventDefault();

        window.scrollTo(pageXOffset, 0);
    });
    // SLOW LINKS END
});