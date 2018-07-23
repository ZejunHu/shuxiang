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
    offset: 58
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

  // scroll to top button
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('#scroll-to-top-btn').toggleClass('active',
     //add 'ok' class when div position match or exceeds else remove the 'ok' class.
      scroll >= $('#about').offset().top
    );
  });
  //trigger the scroll
  $(window).scroll();//ensure if you're in current position when page is refreshed

  // Scroll reveal calls
  window.sr = ScrollReveal();

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
    interval: 5000
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

    $('#special-menu .carousel-item-multiple').each(function() {
      $('.carousel-item-special:nth-child(1) a').attr({
        'href': '#special-menu',
        'role': 'button',
        'data-slide': 'prev'
      });
      $('.carousel-item-special:nth-child(3) a').attr({
        'href': '#special-menu',
        'role': 'button',
        'data-slide': 'next'
      });
    });
  }

//////////     For Mobile Swipe    ////////////
  var touchStartX = null;

  $('.carousel').each(function () {
      var $carousel = $(this);
      $(this).on('touchstart', function (event) {
          var e = event.originalEvent;
          if (e.touches.length == 1) {
              var touch = e.touches[0];
              touchStartX = touch.pageX;
          }
      }).on('touchmove', function (event) {
          var e = event.originalEvent;
          if (touchStartX != null) {
              var touchCurrentX = e.changedTouches[0].pageX;
              if ((touchCurrentX - touchStartX) > 60) {
                  touchStartX = null;
                  $carousel.carousel('prev');
              } else if ((touchStartX - touchCurrentX) > 60) {
                  touchStartX = null;
                  $carousel.carousel('next');
              }
          }
      }).on('touchend', function () {
          touchStartX = null;
      });
    });
//////////     For Mobile Swipe    ////////////

  //////////////////////// Google Map /////////////////////////////
  $(".contact-hide-map").hide();

  var initMap = function() {
    var position = {lat: 43.8209801, lng: -79.3412462};
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('contact-map'), {
      center: position,
      zoom: 16,
      draggable: false,
      zoomControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]
    });

    var marker = new google.maps.Marker({
      position: position,
      map: map
    });
  }
  google.maps.event.addDomListener(window, "load", initMap);

  $(".contact-right-window-show-map").click(function() {
    $(".contact-right-window").hide();
    var position = {lat: 43.8209801, lng: -79.3412462};
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('contact-map'), {
      center: position,
      zoom: 16,
    });

    var marker = new google.maps.Marker({
      position: position,
      map: map
    });
    $(".contact-hide-map").show();
  });

  $(".contact-hide-map").click(function() {
    $(".contact-right-window").show();
    var position = {lat: 43.8209801, lng: -79.3412462};
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('contact-map'), {
      center: position,
      zoom: 16,
      draggable: false,
      zoomControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]
    });

    var marker = new google.maps.Marker({
      position: position,
      map: map
    });
    $(".contact-hide-map").hide();
  });

})(jQuery); // End of use strict
