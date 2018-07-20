(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  // sr.reveal('.sr-icons', {
  //   duration: 600,
  //   scale: 0.3,
  //   distance: '0px'
  // }, 200);
  // sr.reveal('.sr-button', {
  //   duration: 1000,
  //   delay: 200
  // });
  // sr.reveal('.sr-contact', {
  //   duration: 600,
  //   scale: 0.3,
  //   distance: '0px'
  // }, 300);
  sr.reveal('.sr-image-top', {
    origin: 'top',
    duration: 600,
    distance: '8rem'
  }, 300);
  sr.reveal('.sr-image-bottom', {
    origin: 'bottom',
    duration: 600,
    delay: 300,
    distance: '8rem'
  }, 300);
  sr.reveal('.sr-image-right', {
    origin: 'right',
    duration: 600,
    delay: 600,
    distance: '8rem'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  $('#carouselMastheadIndicators').carousel({
    interval: 5000
  });

  $('#carouselNewReleased').carousel({
    interval: 5000
  });

  $('#special-menu').carousel({
    pause: true,
    interval: false
  });

  $('#menu-carousel').carousel({
    pause: true,
    interval: false
  });

  $('.menu-tab-btn').on('click', function() {
    var menuIndex = $(this).index();
    $('.menu-tab-btn.active').removeClass('active');
    $(this).addClass('active');

    $('.carousel-menu-item.active').removeClass('active');
    $('.carousel-menu-item:eq('+menuIndex+')').addClass('active');
  });

  if ($(window).width() >= 768) {
    $('.carousel-multiple .carousel-item-multiple').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i=0;i<1;i++) {
          next=next.next();
          if (!next.length) {
          	next = $(this).siblings(':first');
        	}

          next.children(':first-child').clone().appendTo($(this));
      }
    });
  }

})(jQuery); // End of use strict
