!function(e){"use strict";e(window).on("load",(function(){e("body").addClass("loaded")})),e((function(){var i=e("#header"),a=i.height();e(".header-height").css("height",a+"px"),e(window).on("scroll",(function(){e(window).scrollTop()>=100?(i.removeClass("animated cssanimation fadeIn"),i.addClass("navbar-fixed-top  cssanimation animated fadeInTop")):(i.removeClass("navbar-fixed-top cssanimation  animated fadeInTop"),i.addClass("animated cssanimation fadeIn"))}))})),e("#main-slider").nivoSlider({effect:"random",animSpeed:300,pauseTime:5e3,directionNav:!0,manualAdvance:!1,controlNavThumbs:!1,pauseOnHover:!0,controlNav:!1,prevText:"<i class='ti-arrow-left'></i>",nextText:"<i class='ti-arrow-right'></i>"}),e((function(){e("#mainmenu").slicknav({prependTo:".site-branding",label:"",allowParentLinks:!0})})),e(".counter").counterUp({delay:10,time:1e3}),e("#event-carousel").owlCarousel({loop:!0,margin:15,autoplay:!1,smartSpeed:500,nav:!0,navText:['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>'],dots:!1,responsive:{0:{items:1},480:{items:1},768:{items:2},992:{items:2}}}),e(".gallery-items").imagesLoaded((function(){e(".gallery-filter li").on("click",(function(){e(".gallery-filter li").removeClass("active"),e(this).addClass("active");var i=e(this).attr("data-filter");return e(".gallery-items").isotope({filter:i,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1})),e(".gallery-items").isotope({itemSelector:".single-item",layoutMode:"masonry"})})),smoothScroll.init({offset:60}),e("#testimonial-carousel").owlCarousel({loop:!0,margin:15,autoplay:!0,smartSpeed:500,items:1,nav:!1,dots:!0,responsive:{0:{items:1},480:{items:2},768:{items:2},992:{items:3}}}),e("#sponsor-carousel").owlCarousel({loop:!0,margin:40,autoplay:!0,smartSpeed:500,nav:!1,dots:!1,responsive:{0:{items:2},480:{items:3},768:{items:4},992:{items:6}}}),e(".img-popup").venobox({numeratio:!0,infinigall:!0}),(new WOW).init(),e(window).on("scroll",(function(){e(this).scrollTop()>100?e("#scroll-to-top").fadeIn():e("#scroll-to-top").fadeOut()}))}(jQuery);