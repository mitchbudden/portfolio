$(document).ready(function(){ 
  $(window).scroll(function () {  
    if ($(window).scrollTop() > -1) {
      $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 0) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
  
  //Contact variables
  var name = $("#leavenamehere").val();
  var email = $("#leaveemailhere").val();
  var phone = $("#leavephonehere").val();
  var message = $("#leavemessagehere").val();
  
  $("#send").on('click', function() {
    console.log(name + email + phone + message);
  })
  
})