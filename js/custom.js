$(function(){
    'use strict';
    // navbar link active;
    $('.navbar .nav-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    // banner slider;
    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        dots : true,
        speed: 2000,
        
    });

    // about video venobox;
    $('.venobox').venobox({
        spinColor: '#e23e38',
        overlayColor: 'rgba(226, 62, 56, 0.6)'
    });
    // team slider;
    $('#team .team-slider').slick({
        slidesToShow: 4,
        arrows: false,
        rtl: true,
        autoplay: true,
        speed: 1500,
    });

    // testimonial slider;
    $('.testimonial-slider').slick({
        arrows: false,
        slidesToShow: 2,
        dots: true,
        autoplay: true,
        speed: 2000,
    });

    // counter js;
    $('.counter').counterUp({
        time: 1500,
    });

    // brand slider js;
    $('.brand-slider').slick({
        slidesToShow: 5,
        prevArrow: '<i class="slick-prev prev-arrow fa fa-chevron-left"></i>',
        nextArrow: '<i class="slick-next next-arrow fa fa-chevron-right"></i>',
        autoplay: true,
        speed: 2000,
    });
});