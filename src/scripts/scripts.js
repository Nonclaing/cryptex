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

    $('.accordion__button').click(function (event) {
        // класс one закрывает другие вкладки
        // класс active будет висеть не на title, а на блоке item

        // Сохраним переменную item и блока, чтобы проверять их в дальнейшем
        // item - блок с заголовком, на который нажали
        // block - блок со списком всех заголовков
        let item = $(this).parent();
        let block = item.parent();
        console.log(block);
        // Проверка на наличие класса one у блока
        if (block.hasClass('one')) {
            // Если класс есть, то требуется закрыть все остальные заголовки

            // Проверяем все item-ы и удаляем у всех, кроме текущего, класс active
            block.children().not(item).removeClass('active');
            // проверяем все block__text у всех item-ов в block, и если block__text соответствует текущему($(this).next()), то слайдим его вниз
            block.children().children('.accordion__text').not($(this).next()).slideUp(300);
        }
        // добавялем класс active нашему item-у, на title которого мы нажали
        $(this).toggleClass('active');
        // слайдим текст в нашем блоке
        block.children('.accordion__text').slideToggle(300)
    });
});