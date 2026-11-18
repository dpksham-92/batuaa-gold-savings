$(document).ready(function () {

    // Owl Carousel
    $('.our-partners').owlCarousel({
        loop: true,
        margin:40,
        nav: false,
        dots: false,
        autoplay: true,
        navText: [
            '<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>',
            '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: { items: 2 },
            576: { items: 3 },
            768: { items: 3 },
            992: { items: 3 },
            1200: { items: 4 },
            1300: { items: 4 }
        }
    });

    // Client Review
    $('.clntrvw').owlCarousel({
        loop: true,
        margin:24,
        nav: false,
        dots: false,
        autoplay: true,
        navText: [
            '<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>',
            '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 3 },
            1300: { items: 3 }
        }
    });

    // Header Sticky on Scroll
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
    });

    // Mobile Navigation Toggle
    // $('.navigation').hide();

    // $('.hamburger').click(function (e) {
    //     e.preventDefault();
    //     $('.navigation').slideToggle();
    // });

});
