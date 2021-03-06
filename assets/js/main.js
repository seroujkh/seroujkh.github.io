var lastScrollTop = 0;
$(window).scroll(function(event) {
    var st = $(window).scrollTop();
    if (st > lastScrollTop) {

        if (!$('nav').hasClass('scrolled')) {
            $('nav').addClass('scrolled');
        }

    } else if (st < 50) {
        $('nav').removeClass('scrolled');
    }
    lastScrollTop = st;
});

$(document).ready(function () {
    $('.burger-menu').on('click', function () {
        $(this).toggleClass('open');
        $('.burger-menu div').toggleClass('scrollUp');
        $('body').toggleClass('no-scroll');
        $('.mobile-menu').toggleClass('op');
        $('.mobile-menu .nav-row li').each(function (index) {
            $(this).delay(75 * index).queue(function () {
                $(this).toggleClass('go-left').dequeue();
            });
        });
    });
    $('.mobile-menu li ').on('click', function () {
        $('.mobile-menu').toggleClass('op');
        $('body').toggleClass('no-scroll');
        $('.burger-menu').toggleClass('open');
        $('.burger-menu div').removeClass('scrollUp');
        $('.mobile-menu .nav-row li').removeClass('go-left');
    });

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - $('nav').height()
        }, 500, function () {
            window.location.hash = target;
        });
    });
});

$(window).scroll(function () {
    $('[animate]').each(function () {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            $(this).addClass('show');
        }
    });
}).scroll();