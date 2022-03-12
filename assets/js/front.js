console.log('front js ready');
$(function() {
    $('#humb').on('click', function() {
        $(this).toggleClass('active');
        $('#mainMenu').toggleClass('active');
    });
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll > 300) {
            $('#seeker').addClass('active');
        }
    });
    $('#seeker').find('.close').on('click', function() {
        $('#seeker').addClass('remove');
    });
});