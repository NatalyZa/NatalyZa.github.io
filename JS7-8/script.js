$(function(){
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});

$(function(){

    $('#firstname').mouseover(function() { 
      $('#first_hint').animate({opacity: 1}, 1000);
    }).mouseout(function() {
      $('#first_hint').finish;
      $('#first_hint').animate({opacity: 0}, 1000);
    });

    $('#lastname').mouseover(function() {
      $('#second_hint').animate({opacity: 1}, 1000);
    }).mouseout(function() {
      $('#second_hint').finish;
      $('#second_hint').animate({opacity: 0}, 1000);
    });

    $('#address').mouseover(function() {
      $('#third_hint').animate({opacity: 1}, 1000);
    }).mouseout(function() {
      $('#third_hint').finish;
      $('#third_hint').animate({opacity: 0}, 1000);
    });  
});

$(function(){
$('#show_help').click(function() {
     $('#first_hint').animate({opacity: 1}, 1000);
     $('#second_hint').animate({opacity: 1}, 1000);
     $('#third_hint').animate({opacity: 1}, 1000);
    });
});