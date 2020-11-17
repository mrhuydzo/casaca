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
$('document').ready(function () {
    //Common
    openNavigation();
    preLoad();
});