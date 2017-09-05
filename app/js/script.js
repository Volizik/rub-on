$(document).ready(function () {


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
    if (window.innerWidth > 500) {

        $('.main-slider__body').slick({
            centerMode: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                        centerMode: false,
                        centerPadding: '40px'
                    }
                }
            ]
        });
    }
    //end slick slider fop main page slider-1_________________________________________________


    //toggle mobile menu--------------------------------------------------------------
    $(document).on('click', '.header__menu-mobile--btn', function () {
        $('.header__menu-mobile').slideToggle();
    });
    $(document).on('click', '.header__menu-mobile a', function () {
        $('.header__menu-mobile').slideToggle();
    });
    //end toggle mobile menu------------------------------------------------------------


    //add-ads popup---------------------------------------------------------------------
    var memo = $('.memo');
    var memoErr = $('.memo-error');
    $(document).on('click', '.jsHint', function () {
        memo.hide();
        memoErr.hide();
        if ($(this).is(':focus')) {
            $(this).parent().find('.memo').show();
        }
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest('.jsHint').length != 1) {
            $('.memo').hide();
        }
    });
    //!add-ads popup--------------------------------------------------------------------

});

