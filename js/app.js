$(document).ready(function () {

  /* ---------- Header Hide on Scroll ---------- */
  const $header = $('.site-header');
  const $footer = $('.site-footer');

  if ($header.length && $footer.length) {
    $(window).on('scroll', function () {
      const footerTop = $footer[0].getBoundingClientRect().top;
      const headerHeight = $header.outerHeight();

      if (footerTop <= headerHeight) {
        $header.addClass('is-hidden');
      } else {
        $header.removeClass('is-hidden');
      }
    });
  }

  /* ---------- Expertise Slider ---------- */
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
  });

  /* ---------- Services Slider ---------- */
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

  /* ---------- Review Slider ---------- */
  $('.review-slider')
    .on('beforeChange', function () {
      // stop YouTube video when slide changes
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

  /* ---------- Contact Form + SweetAlert ---------- */
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

  /* ---------- Scroll Reveal ---------- */
  ScrollReveal({ reset: true });
  // Banner
  ScrollReveal().reveal('.banner-bg-word', { origin: 'top', distance: '30px', duration: 800 });
  ScrollReveal().reveal('.credentials', { origin: 'left', distance: '40px', duration: 800, delay: 100 });
  ScrollReveal().reveal('.banner-photo-wrap', { scale: 0.92, duration: 800, delay: 200 });
  ScrollReveal().reveal('.btn-contact-solid', { origin: 'left', distance: '40px', duration: 800, delay: 300 });
  ScrollReveal().reveal('.stats > div', { origin: 'right', distance: '40px', duration: 800, interval: 150, delay: 300 });

  // About
  ScrollReveal().reveal('#about .col-lg-5', { origin: 'left', distance: '40px', duration: 800 });
  ScrollReveal().reveal('#about .col-lg-7', { origin: 'right', distance: '40px', duration: 800, delay: 150 });

  // Why Choose Me
  ScrollReveal().reveal('.feature-card', { origin: 'bottom', distance: '40px', duration: 800, interval: 150 });

  // Expertise (whole slider, not individual slides)
  ScrollReveal().reveal('#expertise .d-flex', { origin: 'top', distance: '30px', duration: 800 });
  ScrollReveal().reveal('.expertise-slider', { origin: 'bottom', distance: '40px', duration: 800, delay: 150 });

  // Services (whole panel, not individual slides)
  ScrollReveal().reveal('.services-panel', { scale: 0.95, duration: 800 });

  // Pricing
  ScrollReveal().reveal('.price-card', { origin: 'bottom', distance: '40px', duration: 800, interval: 200 });

  // Contact
  ScrollReveal().reveal('.contact-photo', { origin: 'left', distance: '40px', duration: 800 });
  ScrollReveal().reveal('.contact-card', { origin: 'right', distance: '40px', duration: 800, delay: 150 });
  ScrollReveal().reveal('.info-block', { origin: 'bottom', distance: '40px', duration: 800, interval: 150 });

  // Case study
  ScrollReveal().reveal('.case-card', { origin: 'bottom', distance: '40px', duration: 800, interval: 200 });

  // FAQ
  ScrollReveal().reveal('#faqAccordion', { origin: 'right', distance: '40px', duration: 800 });

  // Reviews
  ScrollReveal().reveal('.review-panel', { scale: 0.95, duration: 800 });

  // Articles
  ScrollReveal().reveal('.article-card', { origin: 'bottom', distance: '40px', duration: 800, interval: 200 });

  // CTA + Footer
  ScrollReveal().reveal('.cta-strip', { scale: 0.95, duration: 800 });
  ScrollReveal().reveal('.footer-top', { origin: 'bottom', distance: '40px', duration: 800 });
  ScrollReveal().reveal('.footer-cols', { origin: 'bottom', distance: '40px', duration: 800, interval: 120 });
});