$('.dropdown').on('click', function(e) {
    var target = $(e.target);
    var dropdown = target.closest('.dropdown');
    return !dropdown.hasClass('open') || !target.hasClass('dropdown-menu__search__input');
});

/*Banner carousel */ 
// $('.banner').slick({
//     useTransform: true,
//     dots: true,
//     infinite: true,
//     arrows: false,
//     autoplaySpeed: 3500,
//     // autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     cssEase: 'ease-out',
//   });

  $( document ).ready(function() {
    $(".slick-items").slick({
        // useTransform: true,
        dots: true,
        arrows: false,
        // speed: 700,
        autoplaySpeed: 3000,
        autoplay: true,
        // fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // cssEase: 'linear',
        // autoplay: false,
        dots: true,
        pauseOnDotsHover: true,
    });
    // $('.pause').on('click', function() {
    //     $('.banner')
    //         .slick('slickPause')
    //         .slick('slickSetOption', 'pauseOnDotsHover', false);
    // });
    
    // $('.play').on('click', function() {
    //     $('.banner')
    //         .slick('slickPlay')
    //         .slick('slickSetOption', 'pauseOnDotsHover', true);
    // });

});


// $(".banner").slick({
//     arrows: false,
//     autoplay: true,
//     dots: true,
//     pauseOnDotsHover: true,
// });

// $('.pause').on('click', function() {
//     $('.banner')
//         .slick('slickPause')
//         .slick('slickSetOption', 'pauseOnDotsHover', false);
// });

// $('.play').on('click', function() {
//     $('.banner')
//         .slick('slickPlay')
//         .slick('slickSetOption', 'pauseOnDotsHover', true);
// });