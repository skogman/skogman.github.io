$(document).ready(function() {
	"use strict";

	$('body').hide();
	$('body').addClass('preload-site');

	// Scroll To Top
	// $('body').prepend('<div class="go-top"><span id="top"><i class="icon ion-ios-arrow-up"></i>^</span></div>');

	// $(window).scroll(function(){
	// 	if($(window).scrollTop() > 500){
	// 		$('.go-top').fadeIn(600);
	// 	}else{
	// 		$('.go-top').fadeOut(600);
	// 	}
	// });
	// $('#top').click(function() {
	// 	$('html, body').animate({ scrollTop: 0 }, 800, 'easeInQuad');
	// 	return false;
	// });

	// Match Height
	$('.items-row').each(function() {
		$(this).children('.single-item').matchHeight();
	});
  
});

$(window).load(function(){
	$('#preloader').fadeOut();
	$('.preloader-spinner').fadeOut(400);
	$('body').removeClass('preload-site');
	$('body').fadeIn(2000); 
});