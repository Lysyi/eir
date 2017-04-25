EIR.define('PropertyPopupComponent', ['jQuery', 'Response'], function($, Response) {

	var $closePopupBtn = $('.js-close-popup-btn');
	var $propertyPopup = $('.js-property-popup');
	var $propertyPopupOpen = $('.js-property-popup-open');

	var $propertyPopupActiveClass = 'popup__active';

	'use strict';
	// constructor
	function PropertyPopupComponent ($el) {
		console.log('*** PropertyPopupComponent ***');

		var owl = $(".property-popup-slider-carousel");

		owl.owlCarousel({
			items : 1, //10 items above 1000px browser width
			itemsDesktop : [1000,1], //5 items between 1000px and 901px
			itemsDesktopSmall : [800,1], // betweem 900px and 601px
			itemsTablet: [799,1], //1 items between 600 and 0
			itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
			autoPlay : false,
			stopOnHover : true,
			autoHeight : true
		});

		// Custom Navigation Events
		$(".js-property-popup-slider-next").click(function(){
			owl.trigger('owl.next');
		})

		$(".js-property-popup-slider-prev").click(function(){
			owl.trigger('owl.prev');
		})

		this.initialize();
	}

  // public methods and variables
  PropertyPopupComponent.prototype.initialize = function initialize() {
      PropertyPopupComponent.prototype.popupToggleActions();
  };

	PropertyPopupComponent.prototype.popupToggleActions = function popupToggleActions() {
		$closePopupBtn.on('click', function($el){
	    $el.preventDefault();
			$propertyPopup.fadeOut("fast").removeClass($propertyPopupActiveClass);
	  });

	  $propertyPopupOpen.on('click', function($el){
	    $el.preventDefault();
	    $propertyPopup.fadeIn("slow").addClass($propertyPopupActiveClass);
	  });
	}



	// register as view
	this.registerView('PropertyPopupComponent', PropertyPopupComponent);
	//
	// always return constructor if you define a 'class'
	return PropertyPopupComponent;
});
