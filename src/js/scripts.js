(function($) {
  "use strict";

  // ------------------------------
  // Menu
  // ------------------------------
  $('.js-mobile-menu').on('click', function() {
    $(this).closest('header').toggleClass('open');
    $('body').toggleClass('fixed');
  });

  // ------------------------------
  // Carousel
  // ------------------------------
  $('.about-testimonials-carousel').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.btn-arrow-prev'),
    nextArrow: $('.btn-arrow-next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.about-brand-carousel').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.case-study-carousel').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.btn-arrow-prev'),
    nextArrow: $('.btn-arrow-next'),
    dots: true
  });

  // ------------------------------
  // Tab
  // ------------------------------
  $('.btn-tab').on('click', function() {
    var dataTab = $(this).data('tab');
    $(this).addClass('active').siblings().removeClass('active');
    $('.tab-panel[data-target="' + dataTab + '"]').addClass('active').siblings().removeClass('active');
  });

  // Email
  $('.form-email-brands').on('blur', function() {
    $(this).closest('form').find('.hidden-subject').val('Nation X - Brands by ' + $(this).val());
  });
  $('.form-email-influencers').on('blur', function() {
    $(this).closest('form').find('.hidden-subject').val('Nation X - Influencers by ' + $(this).val());
  });

})(jQuery);