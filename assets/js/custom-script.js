$( window ).load(function() {

  //scroll
  $(".content").mCustomScrollbar({
      axis:"y",
      setHeight: "400px",
      theme: "dark"
  });
   //scroll
  
  // Isotope click function
  $('.portfolio-item').isotope({
    itemSelector: '.item',
    masonry: {
      columnWidth: '.item',
      percentPosition: true,
    }
  });
  
  $('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
      filter: selector
    });
    return false;
  });
  // Isotope click function

  //faq acordeon
  $('.faq-item .faq-item-content').hide();
  $('.faq-item .faq-item-title').click(function(){ 
    $(this).toggleClass( 'rotate' );
    $(this).next('.faq-item-content').slideToggle('slow');
  });
  //faq acordeon

  // sidenav-burger
  $('.sidenav-burger').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.sidenav').removeClass('active');
            $('.sidenav-burger').removeClass('active');
            $('.main-column').removeClass('overlay');
        } else {
            $(this).addClass('active');
            $('.sidenav-burger').addClass('active');
            $('.sidenav').addClass('active');
            $('.main-column').addClass('overlay');
        }
    });
  //sidenav-burger

});
