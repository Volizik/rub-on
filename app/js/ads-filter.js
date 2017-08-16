$(document).ready(function () {


    $(document).on('click', '.main-filter--region', function () {
        $('.main-filter--city-list').slideUp();
        $('.main-filter--russia-list').slideUp();
        $('.main-filter--region-list').slideToggle();
    });


    $(document).on('click', '.main-filter--region-list span', function () {
        if ($(this).hasClass('russia')) {
            $('.main-filter--russia-list').slideToggle();
        } else {
            $('.main-filter--region span:last-of-type').text($(this).text());
            $('.main-filter--region-list').slideToggle();
            $('.main-filter--russia-list').slideUp();
            $('.main-filter--city').show();
            $('.main-filter--city span:last-of-type').text('Выбрать город');
            $('.main-filter--city-list').slideToggle();
        }
    });


    $(document).on('click', '.main-filter--russia-list span', function () {
        $('.main-filter--russia-list').slideToggle();
        $('.main-filter--region-list').slideUp();
        $('.main-filter--region span:last-of-type').text($(this).text());
        $('.main-filter--city').show();
        $('.main-filter--city-list').slideToggle();
    });


    $(document).on('click', '.main-filter--city', function () {
        $('.main-filter--russia-list').slideUp();
        $('.main-filter--region-list').slideUp();
        $('.main-filter--city-list').slideToggle();
    });


    $(document).on('click', '.main-filter--city-list span', function () {
        $('.main-filter--city-list').slideToggle();
        $('.main-filter--city span:last-of-type').text($(this).text());
    });


});