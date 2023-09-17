var window_wt=jQuery(window).width();

AOS.init();

// only charaters allowed
const alphaOnly = document.querySelectorAll('.alpha-only');
alphaOnly.forEach(function(element) {
  element.addEventListener('beforeinput', function(event) {
    if (event.inputType === 'deleteContentBackward') {
      return;
    }
    var value = this.value;
    if (!/^[a-zA-Z ]$/.test(event.data) || (event.data === ' ' && value.length === 0)) {
      event.preventDefault();
    }
  });
});

// only number with 10 digits allowed 
const numericOnly = document.querySelectorAll('.numeric-only');
numericOnly.forEach(function(element) {
  element.addEventListener('beforeinput', function(event) {
    // Check if the input is the backspace key
    if (event.inputType === 'deleteContentBackward') {
      // If it is, allow the input
      return;
    }

    // Check if the input is not a number or if there are already 10 digits
    if (!/^\d$/.test(event.data) || this.value.length >= 10) {
      // If it's not allowed, cancel the input event
      event.preventDefault();
    }
  });
});

const pinOnly = document.querySelectorAll('.pin-only');
pinOnly.forEach(function(element) {
  element.addEventListener('beforeinput', function(event) {
    // Check if the input is the backspace key
    if (event.inputType === 'deleteContentBackward') {
      // If it is, allow the input
      return;
    }

    // Check if the input is not a number or if there are already 6 digits
    if (!/^\d$/.test(event.data) || this.value.length >= 6) {
      // If it's not allowed, cancel the input event
      event.preventDefault();
    }
  });
});

jQuery("#form1").submit(function(e) {
  e.preventDefault();
  jQuery("#form1").trigger('reset');
  jQuery(".form-sub").css({
    "margin-top": "15px",
    "color": "green",
    "font-size": "14px"
  });
  jQuery(".form-sub").text("Form Submitted Successfully.");
});

var slidecount = 0;

jQuery('.list-points-div').slick({
      dots: false,
      arrows: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '200px',
      prevArrow: jQuery('.list-points-button-prev'),
      nextArrow: jQuery('.list-points-button-next'),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '180px',
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            mobileFirst:true,
            variableHeight: true,
          }
        }
      ]
    }).on('afterChange', function(e, slick, currentSlide) {

            if (window_wt > 767) {
              if (currentSlide<= 4) {
                if (currentSlide == 4) {
                  jQuery(".prev-button-svg").css("display","block");
                  jQuery(".next-button-svg").css("display","none");
                }
                if (currentSlide == 0) {
                  jQuery(".next-button-svg").css("display","block");
                  jQuery(".prev-button-svg").css("display","none");
                }
              }
            }
    });

if (window_wt < 767) {

  jQuery(".next-button-svg,.prev-button-svg").css("display","block");

}

jQuery('.banner-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed:6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    //asNavFor: '.slide-banner:visible',
    fade: true,
    cssEase: 'linear',
}).on('afterChange', function(e, slick, currentSlide) {
    jQuery('.slide-banner:visible div').removeClass('current-slide');
    jQuery('.slide-banner:visible div').eq(currentSlide).addClass('current-slide');
});


jQuery('.slide-banner:visible div').on('click',function(){
  var slideno = jQuery(this).find('a').data('slide');
  jQuery('.banner-slider:visible').slick('slickGoTo', slideno - 1);
});

jQuery(".accordion_faq .set > .panel").on("click", function() {

  if(jQuery(this).hasClass("active")) {
    jQuery(this).removeClass("active");
    jQuery(this).siblings(".accordion_faq .content").slideUp(200);
  }else {
    jQuery(".accordion_faq .set > .panel").removeClass("active");
    jQuery(this).addClass("active");
    jQuery(this).parent('.accordion_faq .set').parent(".accordion_faq").children(".accordion_faq .set").children(".content")
        .slideUp(200);
    jQuery(this).siblings(".accordion_faq .content").slideDown(200);
  }

});

jQuery(window).scroll(function(){
  jQuery(".img-zoom-box").each(function() {
    if ( jQuery(this).offset().top - 200 <= jQuery(window).scrollTop() ) {
      jQuery(this).addClass("active");
    }else{
      jQuery(this).removeClass("active");
    }
  });
});

if(window_wt < 768){

  jQuery("#overlay").css({"display":"none"});

  jQuery('.owners-gallery-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: jQuery('.owners-button-prev'),
    nextArrow: jQuery('.owners-button-next'),
  });

  jQuery(".scroll-sec").click(function () {
    jQuery("#overlay").css({"display":"block"});
  });

  jQuery('.media-slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '20px',
      prevArrow: jQuery('.button-prev'),
      nextArrow: jQuery('.button-next'),
    });

}else{
  jQuery(".scroll-sec").click(function () {
    // alert("Your nav Function Work");
    // var navHt = jQuery("header").outerHeight();
    var scoll_sec = jQuery(this).attr("rel");
    var sec_top = jQuery("#" + jQuery(this).attr("rel")).offset().top - 50;
    var scrollto = sec_top;
    jQuery("html").animate({ scrollTop: scrollto }, 100);
  });
  jQuery("#overlay").css({"display":"block"});
}

if ('ontouchstart' in document) {
  var $html = jQuery('.form-main-div');
    jQuery('.swipe-title')
  .on('touchstart', function (e) {
      jQuery(this).data('startPoint', e.originalEvent.touches[0]);
  })
  .on('touchmove', function (e) {
      e.preventDefault();

      if ( !jQuery(this).data('startPoint') ) {
          jQuery(this).data('startPoint', e.originalEvent.touches[0]);
      } else {
          jQuery(this).data('endPoint', e.originalEvent.touches[0]);
      }
  })
  .on('touchend', function (e) {
      var startPoint = jQuery(this).data('startPoint'),
          endPoint = jQuery(this).data('endPoint');

      if(endPoint != undefined ){
          var   diff = startPoint.clientY - endPoint.clientY;

          jQuery(this)
              .removeData('startPoint')
              .removeData('endPoint');

          if ( Math.abs(diff) > 20 ) {
              if ( diff > 0 ) {
                  $html.addClass('active-form');
                  jQuery('html, body').css({'overflow-y':'hidden','position':'fixed'});
                  jQuery(".swipe-up-text p").text("SWIPE DOWN TO EXPLORE");
                  
              } else {
                  $html.removeClass('active-form');
                  jQuery('html, body').css({'overflow-y':'scroll','position':'initial'});
                  jQuery(".woocommerce-NoticeGroup").remove();
                  jQuery('.banner-slider').slick('reinit');
                  jQuery(".swipe-up-text p").text("SWIPE UP TO BOOK NOW");
              }
          }
      }

  })
  .click(function(e){
      if ($html.hasClass('active-form')) {
          $html.removeClass('active-form');
          jQuery('html, body').css({'overflow-y':'scroll','position':'initial'});
          jQuery(".woocommerce-NoticeGroup").remove();
          jQuery('.banner-slider').slick('reinit');
          jQuery(".swipe-up-text p").text("SWIPE UP TO BOOK NOW");
      }else{
          $html.addClass('active-form');
          jQuery('html, body').css({'overflow-y':'hidden','position':'fixed'});
          jQuery(".swipe-up-text p").text("SWIPE DOWN TO EXPLORE");
      }
      e.preventDefault();
  });
 
}