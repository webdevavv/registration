let registerSlide = new Swiper(".r-slides__swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    autoplay: true,
    initialSlide: 2,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 5,
        slideShadows: false,

    },

    breakpoints: {
        320: {
            slidesPerView: 1.2,
        },
        400: {
            slidesPerView: 2,
        },
        567: {
            slidesPerView: 3,

        },

        900: {
            slidesPerView: 1.5,

        },
        1150: {
            slidesPerView: 2.2,
        },
        1440: {
            slidesPerView: 2,
        },
    }

});
const passwordToggle = document.querySelector('.r-password__show');
const passwordInput = document.querySelector('input[type="password"]');

passwordToggle.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});
