$(document).ready(function() {
    let slider = $('.slider');
    slider.slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        touchThreshold: 2,
        infinite: true,
        slidesToScroll: 1, // кол0во слайдов за раз
        draggable: true, // перетягиваине слайдов мышкой
        swipe: true, // перетягиваине слайдов пальцами
        responsive: [ // брейкпоинты
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ],
    });
    console.log(1)
});