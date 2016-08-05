$(document).ready(function () {
    $('.header-show').click(function () {
        $('.header-nav').show('slide', {direction: 'left'}, 500);
        $(this).hide();
        console.log('click')
    })
    $('.header-hide').on('click', function () {
        console.log('2 click')
        $('.header-nav').hide('slide', {direction: 'left'}, 500);
        $('.header-show').show(500);
    })
})