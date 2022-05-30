(function ($) {
    "use strict";
    $(document).ready(function ($) {



        $(".testimonial").owlCarousel({
            items: 1,
            dots: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 450,
            loop: true
        });

        $(".my_courses_slider").owlCarousel({
            items: 1,
            dots: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 450,
            loop: true,
            margin: 30,
            stagePadding: 0,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                    nav: false,
                },
                768: {
                    items: 2,
                    margin: 15,
                    nav: false,
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });




    });


    $(window).on('load', function () {});


    $('.search-box input').keyup(function () {
        let input = $(this),
            inputValue = input.val(),
            inputWrap = input.closest('.search-box');
        if (inputValue.length > 0) {
            $('.search-related').addClass('hide');
            inputWrap.addClass('result-found')
        } else {
            $('.search-related').removeClass('hide');
            inputWrap.removeClass('result-found');
        }
    })



    $.fn.vsmobilemenu = function (e) {
        var a = $.extend({
            menuToggleBtn: ".vs-menu-toggle",
            bodyToggleClass: "vs-body-visible",
            subMenuClass: "vs-submenu",
            subMenuParent: "vs-item-has-children",
            subMenuParentToggle: "vs-active",
            meanExpandClass: "vs-mean-expand",
            appendElement: '<span class="vs-mean-expand"></span>',
            subMenuToggleClass: "vs-open",
            toggleSpeed: 400
        }, e);
        return this.each(function () {
            var n = $(this);

            function s() {
                n.toggleClass(a.bodyToggleClass);
                var e = "." + a.subMenuClass;
                $(e).each(function () {
                    $(this).hasClass(a.subMenuToggleClass) && ($(this).removeClass(a.subMenuToggleClass), $(this).css("display", "none"), $(this).parent().removeClass(a.subMenuParentToggle))
                })
            }
            n.find("li").each(function () {
                var e = $(this).find("ul");
                e.addClass(a.subMenuClass), e.css("display", "none"), e.parent().addClass(a.subMenuParent), e.prev("a").append(a.appendElement), e.next("a").append(a.appendElement)
            });
            var e = "." + a.meanExpandClass;
            $(e).each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault(), e = $(this).parent(), 0 < $(e).next("ul").length ? ($(e).parent().toggleClass(a.subMenuParentToggle), $(e).next("ul").slideToggle(a.toggleSpeed), $(e).next("ul").toggleClass(a.subMenuToggleClass)) : 0 < $(e).prev("ul").length && ($(e).parent().toggleClass(a.subMenuParentToggle), $(e).prev("ul").slideToggle(a.toggleSpeed), $(e).prev("ul").toggleClass(a.subMenuToggleClass))
                })
            }), $(a.menuToggleBtn).each(function () {
                $(this).on("click", function () {
                    s()
                })
            }), n.on("click", function (e) {
                e.stopPropagation(), s()
            }), n.find("div").on("click", function (e) {
                e.stopPropagation()
            })
        })
    }, $(".vs-menu-wrapper").vsmobilemenu();


    // magnific-popup
    $(".video-play-btn").magnificPopup({
        type: 'video'
    });

    /*----------------------------
  	Preloader
  	------------------------------ */
    $(window).on("load", function () {
        $("#status").on("fadeOut", "slow");
        $("#preloader")
            .on("delay", 500)
            .on("fadeOut", "slow")
            .remove();
    });

    /**
     * Back To TOP
     */

    var backtotop = $('#back_to_top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            backtotop.addClass('show');
        } else {
            backtotop.removeClass('show');
        }
    });

    backtotop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });


    /*---------- 27. Progress Bar ----------*/
    // Circle Progress Bar Active
    function circleBarActive() {
        var circleProgressWidth = 140;
        var circleThickness = 10;
        var windowWidth = $(window).width();

        if (windowWidth < 768) {
            circleProgressWidth = 100;
            circleThickness = 4;
        }

        $('.circle-progress').each(function () {
            var circleBar = $(this);
            var barFill = circleBar.data('fillcolor');
            var emptyFill = circleBar.data('emptycolor');
            circleBar.circleProgress({
                size: circleProgressWidth,
                thickness: circleThickness,
                startAngle: -1.6,
                fill: barFill ? barFill : '#0031DE',
                emptyFill: emptyFill ? emptyFill : '#f4f4f4'
            }).on('circle-animation-progress', function (event, progress, stepValue) {
                $(this).find('span').text(stepValue.toFixed(2).substr(2) + '%');
            });
        })
    };
    circleBarActive();

    // Progress Bar Active
    $('.bar-progress .progress-value').each(function () {
        var width = $(this).attr('data-value');
        $(this).css('width', width + '%')
    })

    $('select').niceSelect();


    // 
    /*     $(".drop-btn").on("click", function() {
            $(this).parent("").toggleClass("content-hidden");
        });
     */
    // Course Video Popup
    if ($('.course-video-play').length) {
        $('.course-video-play').magnificPopup({
            type: 'video',
        });
    }

    // custom dropdawn
    $(".default_option").click(function(){
        $(this).parent().toggleClass("active");
      })
      
      $(".select_ul li").click(function(){
        var currentele = $(this).html();
        $(".default_option li").html(currentele);
        $(this).parents(".select_wrap").removeClass("active");
      })

    // custom dropdawn for language
    $(".default_option_2").click(function(){
        $(this).parent().toggleClass("active");
      })
      
      $(".select_ul_2 li").click(function(){
        var currentele = $(this).html();
        $(".default_option_2 li").html(currentele);
        $(this).parents(".select_wrap_2").removeClass("active");
      })


}(jQuery));