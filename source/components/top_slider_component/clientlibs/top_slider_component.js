EIR.define('TopSliderComponent', ['jQuery', 'Response'], function($, Response) {

	'use strict';
	// constructor
	function TopSliderComponent ($el) {
		console.log('*** TopSliderComponent ***');

		var owl = $(".owl-top-slider-carousel");

		owl.owlCarousel({
			items : 1, //10 items above 1000px browser width
			itemsDesktop : [1000,1], //5 items between 1000px and 901px
			itemsDesktopSmall : [800,1], // betweem 900px and 601px
			itemsTablet: [799,1], //1 items between 600 and 0
			itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
			autoPlay : true,
			stopOnHover : true,
			autoHeight : false
		});

		// Custom Navigation Events
		$(".js-top-slider-next").click(function(){
			owl.trigger('owl.next');
		})
		$(".js-top-slider-prev").click(function(){
			owl.trigger('owl.prev');
		})
	}

	// register as view
	this.registerView('TopSliderComponent', TopSliderComponent);
	//
	// always return constructor if you define a 'class'
	return TopSliderComponent;
});
