var window_wt=jQuery(window).width();AOS.init();const alphaOnly=document.querySelectorAll(".alpha-only"),numericOnly=(alphaOnly.forEach(function(e){e.addEventListener("beforeinput",function(e){var t;"deleteContentBackward"!==e.inputType&&(t=this.value,/^[a-zA-Z ]$/.test(e.data)&&(" "!==e.data||0!==t.length)||e.preventDefault())})}),document.querySelectorAll(".numeric-only")),pinOnly=(numericOnly.forEach(function(e){e.addEventListener("beforeinput",function(e){"deleteContentBackward"!==e.inputType&&(!/^\d$/.test(e.data)||10<=this.value.length)&&e.preventDefault()})}),document.querySelectorAll(".pin-only"));pinOnly.forEach(function(e){e.addEventListener("beforeinput",function(e){"deleteContentBackward"!==e.inputType&&(!/^\d$/.test(e.data)||6<=this.value.length)&&e.preventDefault()})}),jQuery("#form1").submit(function(e){e.preventDefault();e={url:"https://pavankokane.tech/tork.php",method:"POST",timeout:0,headers:{"Content-Type":"application/json"},data:JSON.stringify({Name:jQuery("input[name='firstname']").val()+" "+jQuery("input[name='lastname']").val(),Mobile:jQuery("input[name='mobileno']").val(),Email:jQuery("input[name='email']").val(),Address:jQuery("input[name='address']").val(),Pincode:jQuery("input[name='pincode']").val()})};jQuery.ajax(e).done(function(e){1==e.success&&(jQuery("#form1").trigger("reset"),jQuery(".form-sub").css({"margin-top":"15px",color:"green","font-size":"14px"}),jQuery(".form-sub").text("Form Submitted Successfully."))})});var $html,slidecount=0;jQuery(".list-points-div").slick({dots:!1,arrows:!0,infinite:!1,speed:1e3,slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"200px",prevArrow:jQuery(".list-points-button-prev"),nextArrow:jQuery(".list-points-button-next"),responsive:[{breakpoint:1025,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"180px"}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!1,mobileFirst:!0,variableHeight:!0}}]}).on("afterChange",function(e,t,n){767<window_wt&&n<=4&&(4==n&&(jQuery(".prev-button-svg").css("display","block"),jQuery(".next-button-svg").css("display","none")),0==n&&(jQuery(".next-button-svg").css("display","block"),jQuery(".prev-button-svg").css("display","none")))}),window_wt<767&&jQuery(".next-button-svg,.prev-button-svg").css("display","block"),jQuery(".banner-slider").slick({dots:!1,arrows:!1,infinite:!0,autoplay:!0,speed:600,autoplaySpeed:6e3,slidesToShow:1,slidesToScroll:1,fade:!0,cssEase:"linear"}).on("afterChange",function(e,t,n){jQuery(".slide-banner:visible div").removeClass("current-slide"),jQuery(".slide-banner:visible div").eq(n).addClass("current-slide")}),jQuery(".slide-banner:visible div").on("click",function(){var e=jQuery(this).find("a").data("slide");jQuery(".banner-slider:visible").slick("slickGoTo",e-1)}),jQuery(".accordion_faq .set > .panel").on("click",function(){jQuery(this).hasClass("active")?(jQuery(this).removeClass("active"),jQuery(this).siblings(".accordion_faq .content").slideUp(200)):(jQuery(".accordion_faq .set > .panel").removeClass("active"),jQuery(this).addClass("active"),jQuery(this).parent(".accordion_faq .set").parent(".accordion_faq").children(".accordion_faq .set").children(".content").slideUp(200),jQuery(this).siblings(".accordion_faq .content").slideDown(200))}),jQuery(window).scroll(function(){jQuery(".img-zoom-box").each(function(){jQuery(this).offset().top-200<=jQuery(window).scrollTop()?jQuery(this).addClass("active"):jQuery(this).removeClass("active")})}),window_wt<768?(jQuery("#overlay").css({display:"none"}),jQuery(".owners-gallery-slider").slick({dots:!1,arrows:!0,infinite:!0,speed:1e3,centerMode:!0,centerPadding:"60px",slidesToShow:1,slidesToScroll:1,prevArrow:jQuery(".owners-button-prev"),nextArrow:jQuery(".owners-button-next")}),jQuery(".scroll-sec").click(function(){jQuery("#overlay").css({display:"block"})}),jQuery(".media-slider").slick({dots:!1,arrows:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"20px",prevArrow:jQuery(".button-prev"),nextArrow:jQuery(".button-next")})):(jQuery(".scroll-sec").click(function(){jQuery(this).attr("rel");var e=jQuery("#"+jQuery(this).attr("rel")).offset().top-50;jQuery("html").animate({scrollTop:e},100)}),jQuery("#overlay").css({display:"block"})),"ontouchstart"in document&&($html=jQuery(".form-main-div"),jQuery(".swipe-title").on("touchstart",function(e){jQuery(this).data("startPoint",e.originalEvent.touches[0])}).on("touchmove",function(e){e.preventDefault(),jQuery(this).data("startPoint")?jQuery(this).data("endPoint",e.originalEvent.touches[0]):jQuery(this).data("startPoint",e.originalEvent.touches[0])}).on("touchend",function(e){var t=jQuery(this).data("startPoint"),n=jQuery(this).data("endPoint");null!=n&&(t=t.clientY-n.clientY,jQuery(this).removeData("startPoint").removeData("endPoint"),20<Math.abs(t)&&(0<t?($html.addClass("active-form"),jQuery("html, body").css({"overflow-y":"hidden",position:"fixed"}),jQuery(".swipe-up-text p").text("SWIPE DOWN TO EXPLORE")):($html.removeClass("active-form"),jQuery("html, body").css({"overflow-y":"scroll",position:"initial"}),jQuery(".woocommerce-NoticeGroup").remove(),jQuery(".banner-slider").slick("reinit"),jQuery(".swipe-up-text p").text("SWIPE UP TO BOOK NOW"))))}).click(function(e){$html.hasClass("active-form")?($html.removeClass("active-form"),jQuery("html, body").css({"overflow-y":"scroll",position:"initial"}),jQuery(".woocommerce-NoticeGroup").remove(),jQuery(".banner-slider").slick("reinit"),jQuery(".swipe-up-text p").text("SWIPE UP TO BOOK NOW")):($html.addClass("active-form"),jQuery("html, body").css({"overflow-y":"hidden",position:"fixed"}),jQuery(".swipe-up-text p").text("SWIPE DOWN TO EXPLORE")),e.preventDefault()}));