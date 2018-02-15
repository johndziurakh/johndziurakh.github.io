$( window ).load(function() {

  $(".content").mCustomScrollbar({
      axis:"y",
      setHeight: "400px",
      theme: "dark"
  });
  
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

  /*faq acordeon*/
  $('.faq-item .faq-item-content').hide();
  $('.faq-item .faq-item-title').click(function(){ 
    $(this).toggleClass( 'rotate' );
    $(this).next('.faq-item-content').slideToggle('slow');
  });
  /*faq acordeon*/

  //side-bar
  $("[data-toggle]").click(function() {
          var toggle_el = $(this).data("toggle");
          $(toggle_el).toggleClass("open-sidebar");
        });
         $(".swipe-area").swipe({
              swipeStatus:function(event, phase, direction, distance, duration, fingers)
                  {
                      if (phase=="move" && direction =="right") {
                           $(".container").addClass("open-sidebar");
                           return false;
                      }
                      if (phase=="move" && direction =="left") {
                           $(".container").removeClass("open-sidebar");
                           return false;
                      }
                  }
          });
  //side-bar 

});
