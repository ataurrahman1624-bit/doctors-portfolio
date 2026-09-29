/* ---------- Header Hide on Scroll ---------- */
$(document).ready(function() {
  const $header = $('.site-header');
  const $footer = $('.site-footer');
  
  if (!$header.length || !$footer.length) return;

  $(window).on('scroll', function() {
    const footerTop = $footer[0].getBoundingClientRect().top;
    const headerHeight = $header.outerHeight();
    
    if (footerTop <= headerHeight) {
      $header.addClass('is-hidden');
    } else {
      $header.removeClass('is-hidden');
    }
  });
});
/* ---------- Expertise Slider ---------- */
$(document).ready(function () {
  $('.expertise-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
    
/* ---------- Services Slider ---------- */
  });
    $('.services-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    prevArrow: $('.services-prev'),
    nextArrow: $('.services-next'),
    dots: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  });
  // Review slider
 $('.review-slider')
    .on('beforeChange', function () {
      $(this).find('iframe').each(function () {
        this.src = this.src;
      });
    })
    .slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('.review-prev'),
      nextArrow: $('.review-next'),
      dots: false,
      adaptiveHeight: true,
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 1 } }
      ]
    });
});
  // Contact form + SweetAlert
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    var form = this;

    $(form).addClass('was-validated');

    if (!form.checkValidity()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all the fields correctly.',
        confirmButtonColor: '#1f3535'
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Appointment Requested!',
      text: 'Thank you! We will contact you shortly.',
      confirmButtonColor: '#1f3535'
    });

    form.reset();
    $(form).removeClass('was-validated');
  });
