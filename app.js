// convaert to vanilla and use
$(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
    windowTop > 100 ? $('ul').css('top', '100px') : $('ul').css('top', '150px');
});