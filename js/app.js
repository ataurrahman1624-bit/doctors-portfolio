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