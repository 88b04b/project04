$(function () {

    $(window).on('scroll', function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > 150) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    var swiper = new Swiper(".main_visual_slide", {
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.arrow_next',
            prevEl: '.arrow_prev',
        },
        pagination: {
            el: '.pagination',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    '<span class="' + totalClass + '"></span>';
            }
        },
    });

    $('.business_list li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.business_cont li').eq(idx).addClass('active').siblings().removeClass('active');
    });

    var swiper2 = new Swiper(".masterpiece_slide", {
        slidesPerView: 1,
        loop: true,
        loopedSlides: 50,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper3 = new Swiper(".masterpiece_thumb", {
        direction: 'vertical',
        slidesPerView: 3,
        loop: true,
        loopedSlides: 50,
        spaceBetween: 30,
    });

    swiper2.controller.control = swiper3;
    swiper3.controller.control = swiper2;

});