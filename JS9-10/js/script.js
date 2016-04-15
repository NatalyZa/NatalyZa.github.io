// CAROUSEL
$(function() {
    $('.jcarousel').jcarousel({
        // Core configuration goes here
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});


// MENU
$(function(){
    var $links = $('.menu a');

    $links.on('click', function(e){
        var $submenu = $(this).siblings('.sub_menu');
        e.preventDefault();
        $submenu.show();     
    $submenu.on('mouseleave', function(e){
        $submenu.hide(); 
    });
    });

});

$(function(){
    var $link = $('.sub_menu a');

    $link.on('click', function(e) {
        var $subitem = $(this).siblings('.sub_menu1');
        e.preventDefault();
        $subitem.show();
    $subitem.on('mouseleave', function(e){
        $subitem.hide();
    });

    });
});

$(function(){
    $('.sub_item').mouseenter(
      function () {
         $(this).animate({
           backgroundColor: '(rgba(205, 133, 63, 0.5))',
  }, 500 );
});
 $('.sub_item').mouseleave(function() {
        $(this).animate({
            backgroundColor:"#F5DEB3",
        }, 500 );

    });
 $('.sub_item1').mouseenter(
      function () {
         $(this).animate({
           backgroundColor: '(rgba(205, 133, 63, 0.5))',
  }, 500 );
});
 $('.sub_item1').mouseleave(function() {
        $(this).animate({
            backgroundColor:"#F5DEB3",
        }, 500 );

    });
 $('.menu_item').mouseenter(
      function () {
         $(this).animate({
           backgroundColor: "#F5DEB3",
  }, 500 );
});
 $('.menu_item').mouseleave(function() {
        $(this).animate({
            backgroundColor:'#CD853F',
        }, 500 );

    });
});
// CHECKBOX
$(function(){
  $('select').selectric();
});
