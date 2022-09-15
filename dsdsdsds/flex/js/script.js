$(document).ready(function(){
    $('.main-slider').slick({
        prevArrow: '<i class="my-slick-prev fa-solid fa-arrow-up-long"></i>',
        nextArrow: '<i class="my-slick-next fa-solid fa-arrow-up-long"></i>'
    });

    $('.our_teacher-slider').slick({
        prevArrow: '<i class="our_teachers-prev fa-solid fa-arrow-up-long"></i>',
        nextArrow: '<i class="our_teachers-next fa-solid fa-arrow-up-long"></i>',
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        arrows: true,
        // autoplay: true
    });
});