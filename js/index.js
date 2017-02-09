$(document).ready(function(){ 
  $(window).scroll(function () {  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > -1) {
      $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 0) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
})