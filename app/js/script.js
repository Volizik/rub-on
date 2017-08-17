$(function () {


    //for btn in main-filter (Выбрать категорию)--------------------------------------------------
    $(document).on('click', '.main-filter__category--select', function () {
        var list = $(this).next('.main-filter__category--list');
        list.slideToggle('fast');
    });

    $(document).on('click', '.main-filter__category--list li', function () {
        var listText = $(this).html();
        $('.main-filter__category--select span:last-of-type').html(listText);
        $('.main-filter__category--list').slideToggle('fast');
    });
    //end for btn in main-filter (Выбрать категорию)------------------------------------------------



    //for tabs in main-menu------------------------------------------------------------------------
    $(document).on('click', '.main-menu__item', function () {
        //получает data-attribute item'a
        var itemId = $(this).attr('data-id');
        //находим соответствующий item'у список
        var list = $(this).closest('.main-menu__categories').find('.main-menu__item-list[data-id='+itemId+']');
        //находим span (стрелочка вверх над выпадающим списком)
        var span = $(this).closest('.main-menu__categories').find('.main-menu__item-list[data-id='+itemId+'] >span');
        //выбираем позицию для span'a (стрелочка вверх над выпадающим списком)
        var pos = $(this).offset();
        var posLeft = pos.left + 50;

        if($('.main-menu__item-list').is(':visible')) {
            if (list.is(':visible')) {
                list.slideUp();
            } else {
                $('.main-menu__item-list').slideUp();
                list.slideDown();
                span.offset({left:posLeft});
            }
        } else {
            list.slideDown();
            span.offset({left:posLeft});
        }

    });
    //end for tabs in main-menu------------------------------------------------------------------



    //slick slider fop main page slider-1___________________________________________________
    $('.main-slider__body').slick({
        centerMode: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    //end slick slider fop main page slider-1_________________________________________________

});

