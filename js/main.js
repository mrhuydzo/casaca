"use strict"
let tabs = (item,content) => {
    item.click(function () {
        item.removeClass('active');
        $(this).addClass('active');
        let cur = $(this).index();

        content.removeClass('active');
        //console.log(content.eq(cur).addClass('active'));
        content.eq(cur).addClass('active');
    });
};


function detailSearch() {
    $('.header_search__input').click(function () {
       $('.search_detail').addClass('open');
    });
    $(document).mouseup(function (e) {
        var search_detail = $(".search_detail");
        if (!$('#open').is(e.target) && !search_detail.is(e.target) && search_detail.has(e.target).length === 0) {
            search_detail.removeClass('open');
        }
    });

}


function  tabHistory() {
    let item = $('.history_tab__item');
    let content = $('.history_lst');
    tabs(item,content);
}

function tabMethodPayment() {
    let item = $('.payment_selector__item');
    let content = $('.payment_method__section');
    tabs(item,content);
}

function productSlideSeen () {
    var swiper = new Swiper('.block_seen__slide .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        navigation: {
            nextEl: '.block_seen__slide .block_product__slide_next',
            prevEl: '.block_seen__slide .block_product__slide_prev',
        },
    });
}

function productBrandDeal () {
    var swiper = new Swiper('.block_brand_deal .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        navigation: {
            nextEl: '.block_brand_deal .block_product__slide_next',
            prevEl: '.block_brand_deal .block_product__slide_prev',
        },
        pagination: {
            el: '.block_brand_deal .swiper-pagination',
        },
    });
}

function bannerHome () {
    var swiper = new Swiper('.banner_home .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.banner_home .swiper-pagination',
			clickable: true,
        },
        autoplay: {
            delay: 10000,
        }
    });
}

function productRelatedSlide () {
    var swiper = new Swiper('.block_product_related__slide .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        navigation: {
            nextEl: '.block_product_related__slide .block_product__slide_next',
            prevEl: '.block_product_related__slide .block_product__slide_prev',
        },
    });
}

function productSlideHomePage () {
    var swiper = new Swiper('.block_homepage__slide .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.block_product__slide .block_product__slide_next',
            prevEl: '.block_product__slide .block_product__slide_prev',
        },
    });
}

function categoryBlockSlide () {
    var swiper = new Swiper('.block_category__slide .swiper-container', {
        slidesPerView: 9,
        spaceBetween: 0,
        navigation: {
            nextEl: '.block_category__slide .block_product__slide_next',
            prevEl: '.block_category__slide .block_product__slide_prev',
        },
    });
}

function blockSearchSlide () {
    var swiper = new Swiper('.block_search__slide .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        navigation: {
            nextEl: '.block_search__slide .block_product__slide_next',
            prevEl: '.block_search__slide .block_product__slide_prev',
        },
    });
}

let galleryProduct = () => {
    var galleryThumbs = new Swiper('.product_gallery .gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 6,
        loop: true,
        freeMode: true,
        loopedSlides: 6, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.product_gallery .gallery-top', {
        spaceBetween: 10,
        loop:true,
        loopedSlides: 6, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });
};

let closeMenuMobile = () => {
    $(".menu_mobile_close").click(function() {
        $(this).parents().removeClass("open");
        //$('html , body').removeClass('open_menu');
    });
};

let toggleHamburgerIcon  = () => {
    $('.header_bar__icon a').click(function(){
        //$(this).addClass('open');
        $('.header_menu').toggleClass('open');
        //$('.bg_overlay').addClass('open');
        //$('html , body').addClass('open_menu');
    });
};

let toggleSubmenu = () => {
    let arrButton = $ ('.menu_mobile_arr');
    let backButton = $ ('.menu_mobile_back');

    arrButton.click(function () {
        let positionChild = $(this).parent().attr('data-menu-child');
        console.log(positionChild);
        $('#'+positionChild).addClass('open');

    });
    backButton.click(function () {
        //console.log($(this).offsetParent());.categories_submenu__children
        $(this).offsetParent().removeClass('open');
        //$('.menu_mobile_sub').css('height','100%');
    });
};

function contactFixed () {
    let btn = $('.contact_fixed__btn');
    btn.click(function () {
        $(this).parent().toggleClass('open');
    });
}

function tabNofity () {
    let item = $('#tab_notify .tab_item');
    let content = $('#tab_notify .tab_content_item');
    tabs(item,content);
}

function tabBid () {
    let item = $('#tab_bid .tab_item');
    let content = $('#tab_bid .tab_content_item');
    tabs(item,content);
}

function newsCarousel () {
    var swiper = new Swiper('.news_carousel__lst .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function openMenuSideBarNews () {
    var btn = $('.news_category__arr');
    btn.click(function () {
        $(this).parent().parent().toggleClass('open');
    })
}

function topbarSelected() {
    var topbarSelectButton = $('.topbar_account_button');
    var topbarSelect = $('.topbar_select');
    var topbarSelectBody = $(".topbar_account_body");
    topbarSelectButton.click(function () {
        $('.topbar_select').removeClass('open');
        $(this).parent().find('.topbar_select__body').closest(".topbar_select").toggleClass('open');
    });

    $(document).mouseup(function (e) {
        if (!$('#open').is(e.target)
            && !topbarSelectBody.is(e.target)
            && !topbarSelectButton.is(e.target.closest('.topbar_account_button'))
            && topbarSelectBody.has(e.target).length === 0) {
            topbarSelectBody.removeClass('open');
            topbarSelect.removeClass('open');
        }
    });
}

function panelAcc ( ){
    var item = $('.panel_acc__header');
    var body = $('.panel_acc__body');
    item.click(function () {
        $(this).parent().toggleClass('active');
    })
}

function accountMenu() {
    var btnArr = $('.account_menu__arr');
    btnArr.click(function (){
       $(this).parent().next().toggleClass('close');
    });
}

function tabAccoutHistory () {
    let item = $('.account_history__tab a');
    let content = $('.account_history__section');
    tabs(item,content);
}

function  tabAccountBid(){
    let item = $('.account_bid__tab_header a');
    let content = $('.account_bid__data');
    tabs(item,content);
}

function superDealCaroulsel() {
    var swiper = new Swiper('.super_deal__carousel .swiper-container', {
        slidesPerView: 10,
        spaceBetween: 20,
        navigation: {
            nextEl: '.super_deal__carousel .swiper-button-next',
            prevEl: '.super_deal__carousel .swiper-button-prev',
        },
    });
}

function expandCategory() {
    var item = $('.filter_category__viewmore');
    item.click(function () {
        $(this).hide();
        $(this).parent().find('.filter_category').addClass('expand');
    });
}

function modalAddPointTab (){
    let item = $('.modal_add_point__tabs .item');
    let content = $('.modal_add_point__tabs .content');
    tabs(item,content);
}

function expandOrderSidebar () {
    let item = $('.order_sidebar__acc .header');
    item.click(function () {
        $(this).parent().toggleClass('open');
    });
}

function orderDetailOpen() {
    let item = $('.order_detail__estimated .header .selector');
    let content = $('.order_detail__estimated .body');
    tabs(item,content);
}

function orderDetailShippingTab(){
    var item = $('.order_detail__estimated .body .tabs_head a');
    var content = $('.order_detail__estimated .body .tabs_body');
    tabs(item,content);
}



$(document).ready(function () {
    //Common
    $('.tooltip').tooltipster({
        theme: 'tooltipster-shadow',
        contentAsHTML: true,
    });
    toggleHamburgerIcon ();
    toggleSubmenu();
    closeMenuMobile();
    contactFixed();
    detailSearch();

    //Home
    bannerHome();
    productSlideSeen ();

    productSlideHomePage();
    categoryBlockSlide();
    productBrandDeal();

    //Product detail
    galleryProduct();
    productRelatedSlide ();

    //Search
    blockSearchSlide ();

    //Checkout
    tabMethodPayment ();
    modalAddPointTab();

    //Notify
    tabNofity ();

    //Bid
    tabBid();

    //News
    newsCarousel();
    openMenuSideBarNews();

    //History
    tabHistory();

    // open topbar select
    topbarSelected();

    // active shipping
    panelAcc();

    //Account
    accountMenu();
    tabAccoutHistory();
    tabAccountBid();

    //Super Deal
    superDealCaroulsel();

    //Mix Product Page
    expandCategory();

    //Order detail
    expandOrderSidebar();
    orderDetailShippingTab();
    orderDetailOpen();
});
