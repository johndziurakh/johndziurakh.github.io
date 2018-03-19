$( window ).load(function() {


  $(".content").mCustomScrollbar({
      axis:"y",
      setHeight: "400px",
      theme: "dark"
  });
  
  // Isotope click function
  $('.portfolio-item').isotope({
    itemSelector: '.item',
    /*masonry: {
      columnWidth: '.item',
      //percentPosition: true,
    }*/
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

});

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}