window.addEventListener('DOMContentLoaded', () => {
    const cases = new Swiper('.cases-swiper', {
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
            el: '.cases-pagination',
            type: 'progressbar'
        },
        navigation: {
            nextEl: '.cases-button-next',
            prevEl: '.cases-button-prev',
        },
        on: {
            slideChange: function () {
                const casesSlide = document.querySelectorAll('.cases-slide')
                casesSlide[this.activeIndex].classList.add('cases-promotion__left--anim')
            }
        }
    })

    const review = new Swiper('.review__card-swiper', {
        navigation: {
            nextEl: '.review-button-next',
            prevEl: '.review-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            1080: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            720: {
                slidesPerView: 2,
                spaceBetween: 24
            }
        },
        pagination: {
            el: '.review-pagination',
            type: 'progressbar'
        }

    })

    // modal

    const modal = document.querySelector('.submit-modal')
    const modalBtn = document.querySelectorAll('.modal__btn')
    const modalWindow = document.querySelectorAll('.modal__window')
    const modalWindowClose = document.querySelector('.submit-modal__btn')
    const previewFormTel = document.querySelector('.tel')
    const previewFormText = document.querySelector('.text')

    function showModal(mdl, mdlBtn, activeClass, btn) {
        mdlBtn.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                mdl.classList.add(activeClass)
                document.querySelector('body').style.overflow = 'hidden'
            })
        })

        mdl.addEventListener('click', (e) => {
            if (e.target == mdl) {
                mdl.classList.remove(activeClass)
                document.querySelector('body').style.overflow = 'visible'
            }
        })

        btn.addEventListener('click', () => {
            mdl.classList.remove(activeClass)
            document.querySelector('body').style.overflow = 'visible'
        })
    }

    if (modalBtn[0]) {
        showModal(modal, modalBtn, 'modal--visible', modalWindowClose)
    }

    // burger

    const burgerBtn = document.querySelectorAll('.burger-btn')
    const burgerMenu = document.querySelector('.burger-menu')
    const headerBtn = document.querySelector('.header__btn')
    const headerInner = document.querySelector('.header__inner')
    const burgerItem = document.querySelectorAll('.burger-header__item')

    if (burgerBtn[0]) {

        burgerBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation()

                item.classList.toggle('burger-btn--active')
                burgerMenu.classList.toggle('burger-menu--visible')

                if (burgerMenu.classList.contains('burger-menu--visible')) {
                    document.querySelector('body').style.overflow = 'hidden'
                } else {
                    document.querySelector('body').style.overflow = 'visible'
                }
            })
        })

        burgerMenu.addEventListener('click', (e) => {
            if (e.target == burgerMenu) {
                burgerMenu.classList.remove('burger-menu--visible')
                document.querySelector('body').style.overflow = 'visible'
                document.querySelector('.burger-btn').classList.remove('burger-btn--active')
            }
        })
        burgerItem.forEach((item, i) => {
            item.addEventListener('click', () => {
                burgerMenu.classList.remove('burger-menu--visible')
                document.querySelector('body').style.overflow = 'visible'
                document.querySelector('.burger-btn').classList.remove('burger-btn--active')
            })
        })

    }

    // scroll

    const section = document.querySelectorAll('.scroll')

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('scroll--active');
            }
        });
    }

    let currThreshold = 0.3

    if (window.innerWidth <= 768) {
        currThreshold = 0.1
    } else {
        currThreshold = 0.3
    }



    let options = {
        threshold: [currThreshold]
    };
    let observer = new IntersectionObserver(onEntry, options);

    for (let elm of section) {
        observer.observe(elm);
    }


})