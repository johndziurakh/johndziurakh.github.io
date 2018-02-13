$( window ).load(function() {

  $(".content").mCustomScrollbar({
      axis:"y",
      setHeight: "400px",
      theme: "dark"
  });

  $('.portfolio-item').isotope({
    itemSelector: '.item',
    masonry: {
      columnWidth: '.item',
      percentPosition: true,
    }
  });
  // Isotope click function
  $('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
      filter: selector
    });
    return false;
  });

});