EIR.define('PropertyComponent', ['jQuery', 'Response'], function($, Response) {

	'use strict';
	// constructor
	function PropertyComponent ($el) {
		console.log('*** PropertyComponent ***');

		var owl = $(".property-slider-carousel");

		owl.owlCarousel({
			items : 1, //10 items above 1000px browser width
			itemsDesktop : [1000,1], //5 items between 1000px and 901px
			itemsDesktopSmall : [800,1], // betweem 900px and 601px
			itemsTablet: [799,1], //1 items between 600 and 0
			itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
			autoPlay : false,
			stopOnHover : true,
			autoHeight : false
		});

		// Custom Navigation Events
		$(".js-property-slider-next").click(function(){
			owl.trigger('owl.next');
		})
		$(".js-property-slider-prev").click(function(){
			owl.trigger('owl.prev');
		})
	}

	// register as view
	this.registerView('PropertyComponent', PropertyComponent);
	//
	// always return constructor if you define a 'class'
	return PropertyComponent;
});
