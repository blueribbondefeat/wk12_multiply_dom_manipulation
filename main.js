$(document).on('ready', function(){

	//on click of hamburger, show menu
	$('.js-menu').on('click', function(){
		$('nav ul').slideToggle();
	});


	$(window).on('resize', function(){
		var w = $(window).width();
		var ourNav = $('nav ul')
		if (w > 420 && $('nav ul').is(':hidden')){
			ourNav.removeAttr('style');
		}

		//console.log('resized, new width:' +w);
	})
});