$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        pause: 2500,
        randomStart: true,
        captions: true,
        pager: true,
        pagerType: "short",
        pagerSelector: "#id_pager",
        infiniteLoop: true,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: 550,
        slideMargin: 10
    });
});