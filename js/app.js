$(document).ready(() => {
    //fullpage plugin
    if($('#fullpage').fullpage) {
        $('#fullpage').fullpage({
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            css3: true,
            scrollingSpeed: 700,
            fixedElements: '.header',
            responsiveWidth: 1024,
        });
    }
    

    //tabs
    $('.services__item').on('click', function() {
        const tab = $(this).data('tab');
        $(this).addClass('is-active').siblings().removeClass('is-active');
        $(`#${tab}`).show().siblings().hide()
    })

    //slider
    if($('#cases-slider').slick) {
        $('#cases-slider').slick({
            prevArrow: $('#cases-slider-prev'),
            nextArrow: $('#cases-slider-next'),
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true
                    }
                },
            ]
        });
    }
    

    //mobile menu
    $('.header__burger').on('click', function() {
        $('.header__menu').addClass('is-active');
        $('body').addClass('no-scroll');
    })
    $('.header__close').on('click', function() {
        $('.header__menu').removeClass('is-active');
        $('body').removeClass('no-scroll');
    })
})