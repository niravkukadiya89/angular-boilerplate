$(function () {
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, else we gonna set it if we can.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });


  $('.project_left_col .mobico').click(function () {

    if ($(this).hasClass('active')) {
      $('.project_left_col .mobico').removeClass('active');
      $('.project_left_col').removeClass('open');

    } else {

      $('.project_left_col .mobico').removeClass('active');
      $(this).addClass('active');
      $('.project_left_col').addClass('open');

    }
  });
  $('header .usr .navbar-toggler').click(function () {

    if ($(this).hasClass('active')) {
      $('header .usr .navbar-toggler').removeClass('active');

    } else {

      $('header .usr .navbar-toggler').removeClass('active');
      $(this).addClass('active');

    }
  });
  $('#defaultIndeterminate2').prop('indeterminate', true);

  $('header .usr .navbar-collapse li a').on('click', function () {
    $('header .navbar-expand-lg .navbar-nav li').removeClass('active');
    $('header .usr .navbar-toggler').click();
  });
  $('header .navbar-expand-lg .navbar-nav li .nav-link').click(function () {
    $('header .navbar-expand-lg .navbar-nav li').removeClass('active');
    $(this).parent().addClass('active');
    if ($("header .usr .navbar-collapse").hasClass("show")) {
      $('header .usr .navbar-toggler').click();
    }
  })
});
