$(document).ready(function() {
 
 var owl = $("#owl-clients");
  
  owl.owlCarousel({
	pagination : true,
  	items : 3,
	itemsTablet: [900,1],
	navigation : false
  });
  
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".arrow-down").click(function() {
	$target = $(this).data("target");
  	$('html,body').animate({
		scrollTop: $($target).offset().top},
	'slow');
  });
  
  $(".bg").css("height",$(window).height()+"px");
 
});