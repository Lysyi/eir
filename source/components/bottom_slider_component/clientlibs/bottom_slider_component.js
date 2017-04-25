EIR.define('BottomSliderComponent', ['jQuery', 'Response'], function($, Response) {

	'use strict';
	// constructor
	function BottomSliderComponent ($el) {
		console.log('*** BottomSliderComponent ***');

		var owl = $(".owl-bottom-slider-carousel");

		owl.owlCarousel({
			items : 2, //10 items above 1000px browser width
			itemsDesktop : [1000,2], //5 items between 1000px and 901px
			itemsDesktopSmall : [800,2], // betweem 900px and 601px
			itemsTablet: [799,1], //2 items between 600 and 0
			itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
			autoPlay : false,
			stopOnHover : true,
			autoHeight : true
		});

		// Custom Navigation Events
		$(".js-bottom-slider-next").click(function(){
			owl.trigger('owl.next');
		})
		$(".js-bottom-slider-prev").click(function(){
			owl.trigger('owl.prev');
		})
	}

	// register as view
	this.registerView('BottomSliderComponent', BottomSliderComponent);
	//
	// always return constructor if you define a 'class'
	return BottomSliderComponent;
});
