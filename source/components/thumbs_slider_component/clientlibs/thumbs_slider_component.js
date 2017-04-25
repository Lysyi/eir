EIR.define('ThumbsSliderComponent', ['jQuery', 'Response'], function($, Response) {

	'use strict';
	// constructor
  function ThumbsSliderComponent ($el) {
		console.log('*** ThumbsSliderComponent ***');

		var owl = $(".owl-thumbs-slider-carousel");

		owl.owlCarousel({
			items: 5, //10 items above 1000px browser width
			itemsDesktop: [1140,5], //5 items between 1000px and 901px
			itemsDesktopSmall: [1130,4], // betweem 900px and 601px
			itemsTablet: [900,3], //2 items between 600 and 0
			itemsMobile: [500,2], // itemsMobile disabled - inherit from itemsTablet option
			autoPlay: false,
			stopOnHover: true,
			autoHeight: false
		});

		// Custom Navigation Events
		$(".js-thumbs-slider-next").click(function(){
			owl.trigger('owl.next');
		})
		$(".js-thumbs-slider-prev").click(function(){
			owl.trigger('owl.prev');
		})
	}

	// register as view
	this.registerView('ThumbsSliderComponent', ThumbsSliderComponent);
	//
	// always return constructor if you define a 'class'
	return ThumbsSliderComponent;
});
