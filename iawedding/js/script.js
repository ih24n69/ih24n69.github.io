(function ($) {
  $(document).ready(function () {
    "use strict";

    /*RSVP Form*/
    $(".submit_block_1").on("click", function (e) {
      send_form('block_1');
      return false;
    });

    function send_form (type) {
     
      var name = $("input#name_" + type).val();
      if (name.length == 0) {
        $("input#name_" + type).css({border: "1px solid red"});
        $("input#name_" + type).focus();
        return false;
      }
      
      var ucapan = $("input#ucapan_" + type).val();
      if (ucapan.length == 0 || ucapan < 1 || ucapan > 3) {
        $("input#ucapan_" + type).css({border: "1px solid red"});
        $("input#ucapan_" + type).focus();
        return false;
      }

     /* var phone = $("input#phone_" + type).val();
      if (phone.length < 6) {
        $("input#phone_"+type).css({border: "1px solid red"});
        $("input#phone_"+type).focus();
        return false;
      } */

      var relative = "";
      var relative_radio = $("input[name=relatives]:checked").val();
      if (relative_radio != "1" && relative_radio != "2"){
        $('input#relatives_' + type).css({border: "1px solid red"});
        $('input#relatives_' + type).focus();
        return false
      }

      var relativeList = ["Ihsan", "Azkiyah"];
      relative = relativeList[relative_radio-1];
	  
	   var kehadiran = "";
      var kehadiran_radio = $("input[name=kehadiran]:checked").val();
      if (kehadiran_radio != "1" && kehadiran_radio != "2" && kehadiran_radio != "3"){
        $('input#relatives_' + type).css({border: "1px solid red"});
        $('input#relatives_' + type).focus();
        return false
      }

      var kehadiranList = ["Ya", "Tidak", "Belum Tahu"];
      kehadiran = kehadiranList[kehadiran_radio-1];

      console.log(name);
      console.log(ucapan);
     // console.log(phone);
      console.log(relative_radio);
      console.log(relative);
	  console.log(kehadiran_radio);
      console.log(kehadiran);

    
      function sent(){
        $('#div_' + type).html("<div id='form_send_message'>❤️ Terimakasih (^_^) ❤️</div>", 1500);
      }

      var dataObj = {
        "entry.1469336674" : name,/* name here*/
       /* "entry.742846880": phone,  phone number */
        "entry.1630677091": ucapan, /* number of attendant */
        "entry.1297245380" :relative, /* acquintance of */
		"entry.1841371069" :kehadiran, /* acquintance of */
        
      }

      $.ajax({
        type: "POST",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfcW8LxWehRfI9FSJgJ5vbnafjcexi_P-rm5hEt5VLxXJMgrA/formResponse",
        data: dataObj,
        complete:sent
      });
    }

    /*ScrollR */
    if ($(window).width() > 1024) {
      var s = skrollr.init({
        forceHeight: false
      });
    }

    /*Gallery ColorBox */
    $('.gallery_txt a').colorbox({
      rel: 'gal',
      maxWidth: "100%",
    });

    /*Main Menu Button */
    $('.main_menu_btn').on("click", function (e) {
      $(this).toggleClass('main_menu_btn_open');
      $('.main_menu_block').toggleClass('main_menu_block_open').fadeToggle();
      $('.main_menu_block').find('.menu_wrapper').toggleClass('active');
      $('header .anim').toggleClass('active');
      e.preventDefault();
    });

    /* Section Background */
    $('section, .parallax').each(function () {
      var image = $(this).attr('data-image');
      if (image) {
        $(this).css('background-image', 'url(' + image + ')');
      }
    });

    /*ColorBox*/
    if ($(window).width() >= 760) {
      $(".youtube").colorbox({iframe: true, innerWidth: 640, innerHeight: 390});
    } else {
      $(".youtube").colorbox({iframe: true, innerWidth: 320, innerHeight: 240});
    }
    $(window).resize(function () {
      if ($(window).width() >= 760) {
        $(".youtube").colorbox({iframe: true, innerWidth: 640, innerHeight: 390});
      } else {
        $(".youtube").colorbox({iframe: true, innerWidth: 320, innerHeight: 240});
      }
    });

    /*Scroll Effect*/
    $('.intro_down, .go').on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
    });

    /*Show/Hide Photo in When&Where Block*/
    $('.photocamera span').on("click", function (e) {
      $(this).parents('section').find('.opacity').toggleClass('fade');
      $(this).parents('section').find('.over').fadeToggle();
      e.preventDefault();
    });

    /*Player*/
    $('.music').on("click", function (e) {
      $('.player').fadeToggle();
      e.preventDefault();
    });

    /*CountDown*/
    $('.married_coundown').countdown({until: new Date("Aug 29, 2021 09:00:00")});

    /*Gallery Carousel */
    $(".gallery_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200,
      paginationSpeed: 200, rewindSpeed: 500, items: 3, itemsTablet: [768, 2], autoPlay: true,
      itemsMobile: [479, 1], mouseDrag: true
    });

    /*Registry Carousel */
    $(".registry_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200, paginationSpeed: 200,
      rewindSpeed: 500, stopOnHover: true, autoHeight: true, items: 3, mouseDrag: true, autoPlay: true
    });

    /*The Crew Carousel*/
    $(".guest_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200, paginationSpeed: 200,
      rewindSpeed: 500, stopOnHover: true, autoHeight: true, items: 4, mouseDrag: true, autoPlay: true
    });

    /*Slider Carousel*/
    $(".slider").owlCarousel({
      navigation: true,
      responsive: true,
      responsiveRefreshRate: 200,
      slideSpeed: 200,
      paginationSpeed: 200,
      rewindSpeed: 500,
      stopOnHover: false,
      autoHeight: true,
      singleItem: true,
      mouseDrag: true,
      autoPlay: true,
      transitionStyle: "fade"
    });

    /* Top Menu Click to Section */
    $('.sub_menu').find('a').on("click", function (e) {
      $('.sub_menu').find('a').removeClass('active');
      $(this).addClass('active');
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top + 1
      }, 1000);
      $(".main_menu_btn").trigger('click');
      e.preventDefault();
    });

    /*FireFly in Intro*/
    $.firefly({
      color: '#d6c05e', minPixel: 1, maxPixel: 4, total: 60, on: '.into_firefly'
    });

    $("#envelope").on("click", function(e){
      $("#envelope").attr("class", "")
    });

    /* Refresh ScrollR */
    // s.refresh($(".guest_wrapper, .our_story"));

  });
}(jQuery));
