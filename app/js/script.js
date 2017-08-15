$(document).on('click', '.main-filter__category--select', function () {
    var list = $(this).next('.main-filter__category--list');
    list.slideToggle('fast');
});
$(document).on('click', '.main-filter__category--list li', function () {
    var listText = $(this).html();
    console.log(listText);
    $('.main-filter__category--select span:last-of-type').html(listText);
    $('.main-filter__category--list').slideToggle('fast');
});