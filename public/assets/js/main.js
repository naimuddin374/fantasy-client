/* =================================================================================
    Author       : Beatnik
    Author URI : https://www.beatnik.technology/
====================================================================================*/
(function ($) {
    'use strict';
    // means menu support small device
    var mobileMenu = jQuery('.rox-header-menu .main-menu');
    if (mobileMenu.length && mobileMenu.meanmenu) {
        mobileMenu.meanmenu({
            meanScreenWidth: "991"
        });
    }
    // nice select
    $(document).ready(function () {
        $('select').niceSelect();
    });
    // active video popup experience
    $("a.exp-play-btn").YouTubePopUp();
    // magnific popup
    $('.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    // menu active class
    $('nav>ul>li>a').filter(function () {
        return this.href === location.href;
    }).addClass('active');
    //  things Carousel Active
    // $(".things-wrapper").owlCarousel({
    // 	loop: true,
    // 	autoplay: true,
    // 	autoplayTimeout: 3000,
    // 	dots: false,
    // 	nav: false,
    // 	smartSpeed: 1000,
    // 	margin: 30,
    // 	center: true,
    // 	autoHeight: true,
    // 	responsive: {
    // 		0: {
    // 			items: 1
    // 		},
    // 		600: {
    // 			items: 2
    // 		},
    // 		1000: {
    // 			items: 3
    // 		}
    // 	}
    // });
    // gallery carousel active
    // $('.fantasy-gallery-slider').slick({
    // 	dots: false,
    // 	slidesPerRow: 3,
    // 	rows: 2,
    // 	arrows: true,
    // 	prevArrow: '<div class="slick-prev fantasy-gallery-prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>',
    // 	nextArrow: '<div class="slick-next fantasy-gallery-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>',
    // 	responsive: [{
    // 		breakpoint: 1024,
    // 		settings: {
    // 			slidesPerRow: 3,
    // 			rows: 1,
    // 		}
    // 	}, {
    // 		breakpoint: 640,
    // 		settings: {
    // 			slidesPerRow: 1,
    // 			rows: 1,
    // 		}
    // 	}]
    // });
    // hero slider active js
    // $('.hero-slider-active').slick({
    // 	fade: true,
    // 	speed: 1000,
    // 	dots: false,
    // 	autoplay: true,
    // 	responsive: [{
    // 		breakpoint: 992,
    // 		settings: {
    // 			arrows: false,
    // 			dots: false
    // 		}
    // 	}]
    // });
    // Active wow animation
    new WOW().init();
    // Sameheight single thing to do content
    function useSameHeight(el) {
        var max = 0;
        el.css('height', 'auto');
        el.each(function () {
            var c = this;
            max = Math.max(max, $(this).height());
        }).height(max);
        return el;
    }
    $(window).resize(function () {
        useSameHeight($('.thing-to-do-inner-content>p'));
    }).resize();
    // terms & conditions active
    $("input[class='termscondiiton']").click(function () {
        if ($(".terms-condition-content input:checkbox:checked").length > 0) {
            $(".pay-btn").addClass('active-pay');
        } else {
            $(".pay-btn").removeClass('active-pay');
        }
    });
    //   active add to cart button
    function removeitemdata() {
        setTimeout(() => {
            $('.add-item').css({
                "opacity": "0",
                "visibility": "hidden",
                "left": "-203px"
            })
        }, 2000);
    }
    $('.disable-payment-btn').on('click', function (e) {
        $(this).addClass('payment-btn').removeClass('disable-payment-btn').css({
            "pointer-events": "none",
            "cursor": "not-allowed"
        });
        $('.add-item').css({
            "opacity": "1",
            "visibility": "visible",
            "left": "0px"
        }, removeitemdata());
    });
    // ticket page widget remove item
    $('#remove-ticket-one').on('click', function () {
        if (confirm("Are you wamt to delete this item ?")) {
            $('#oneticket').remove();
        };
    });
    $('#remove-ticket-two').on('click', function () {
        if (confirm("Are you want to delete this item")) {
            $('#twoticket').remove();
        }
    })
    // mega menu item direction
    function useSameHeight(el) {
        var max = 0;
        el.css('height', 'auto');
        el.each(function () {
            var c = this;
            max = Math.max(max, $(this).height());
        }).height(max);
        return el;
    }
    $(window).resize(function () {
        useSameHeight($('.mega-menu-single-item-direction'));
    }).resize();
    // sameheight lastest blog
    function useSameHeight(el) {
        var max = 0;
        el.css('height', 'auto');
        el.each(function () {
            var c = this;
            max = Math.max(max, $(this).height());
        }).height(max);
        return el;
    }
    $(window).resize(function () {
        useSameHeight($('.latest-news-content'));
    }).resize();
    /*---slide toggle activation---*/
    $('.nav-link.shopping-cart-btn').on('click', function (event) {
        if ($(window).width() < 991) {
            $('.fantasy-mini-cart').slideToggle('medium');
        }
    });
    // sticky header
    // var header = $('.header-sticky'),
    //     win = $(window);
    // win.on('scroll', function () {
    //     var scroll = win.scrollTop();
    //     if (scroll < 120) {
    //         header.removeClass("sticky");
    //     } else {
    //         header.addClass("sticky");
    //     }
    // });
    // Add smooth scrolling menu
    let selectMenu = $(".main-menu ul li a"),
        selectMenuHeight = selectMenu.outerHeight() + 80;
    selectMenu.on("click", function (e) {
        let href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - selectMenuHeight + 80;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1200);
    });
    //discover carousel active
    $(".discover-carousel-wrapper").owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        smartSpeed: 1000,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    /* Quantity */
    $('.qtybtn').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });
    // Responsive menu
    $(document).on('click', '.navbar-collapse.show', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    }, function () {
        $('.navbar-collapse.show').collapse('hide');
    });
    // Collapsed menu close on click event
    (function () {
        var navtogglerItemItemVal = $('#navtogglerItemItem');
        // Sync Navbar Links With Section
        $('body').scrollspy({
            target: '#navtogglerItemItem',
            offset: 4
        });
        navtogglerItemItemVal.on('click', '.navbar-collapse', function (e) {
            if ($(e.target).is('a')) {
                $(this).collapse('hide');
            }
        });
    })();
    // offcanvas search form active start
    $(".offcanvas-btn").on('click', function () {
        $("body").addClass('fix');
        $(".offcanvas-search-inner").addClass('show')
    });
    $(".offcanvas-close,.offcanvas-overlay").on('click', function () {
        $("body").removeClass('fix');
        $(".offcanvas-search-inner").removeClass('show')
    });
    // active video popup
    $("a.about-company-video1").YouTubePopUp();
    $("a.single-post-video").YouTubePopUp();
    // scroll to top
    $('.scrolltotop').fadeOut(1000);
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.scrolltotop').fadeIn(1000);
        } else {
            $('.scrolltotop').fadeOut(1000);
        }
    });
    $('.scrolltotop').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1200);
    });
    // Instance Of Fuction while Window Load event
    function prealoader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }
    jQuery(window).on('load', function () {
        (function ($) {
            prealoader();
        })(jQuery);
    });
    // Google Map Contact Page and Archive Page
    var data = ('#map');
    if (data.length == "4") {
        function initialize_google_map() {
            var get_latitude = $('#map').data('latitude');
            var get_longitude = $('#map').data('longitude');
            var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
            var mapOptions = {
                zoom: 14,
                scrollwheel: false,
                center: myLatlng
            };
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map
            });
        }
        // google.maps.event.addDomListener(window, 'load', initialize_google_map);
    } else {
        return false;
    }
})(jQuery);
