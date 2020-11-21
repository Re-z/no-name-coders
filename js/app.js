$(document).ready(() => {
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        css3: true,
        scrollingSpeed: 700,
        // navigation: true,
        // navigationPosition: 'right',
        // menu: '#menu',
        // anchors:['Home', 'About', 'WeDo', 'Technology', 'GEO', 'Contacts', 'Careers'],
        fixedElements: '.header',
        // responsiveWidth: 760,


    });
    //tabs
    $('.services__item').on('click', function() {
        const tab = $(this).data('tab');
        $(this).addClass('is-active').siblings().removeClass('is-active');
        $(`#${tab}`).show().siblings().hide()
    })
    //slider
    $('#cases-slider').slick({
        prevArrow: $('#cases-slider-prev'),
        nextArrow: $('#cases-slider-next')
    });
})