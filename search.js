$(document).ready(function(){
	$('label').click(function(){

	});
  $('#container').click(function(){
  	$('.navigate').addClass('hide');
  });
  $(".fa-search").click(function(){
    $(".container1, .input, .fa-search").toggleClass("active");
    $("input[type='text']").focus();
  });
  
});