/*Nav icon mobile*/
function openNavigation (){
    //Toggle Navigation
    /*Nav icon mobile*/
    $('#navtop_icon').click(function(){
        $(this).toggleClass('open');
        $('.navtop_collapse').toggleClass('open');
        $('.overlay').toggleClass('open');
        $('html , body').toggleClass('open_menu');
    });

    /* When user clicks outside */
    $(".overlay").click(function() {
        $(this).toggleClass('open');
        $("#navtop_icon").toggleClass("open");
        $(".navtop_collapse").toggleClass("open");
        $('html , body').toggleClass('open_menu');
    });
}
function preLoad (){
    //Preloader
    var preloader = $('#preloader');
    $(window).on('load',function () {
        preloader.fadeOut('slow');
    });
}

function gallery(){
    // var swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 4,
    //     spaceBetween: 25,
    //     direction: 'vertical',
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    // });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        direction: 'vertical',
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        thumbs: {
            swiper: galleryThumbs,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        }
    });
}

$('document').ready(function () {
    //Common
    openNavigation();
    preLoad();
    gallery();
});