EIR.define('SuccessPopupComponent', ['jQuery', 'Response'], function($, Response) {

	var $closePopupBtn = $('.js-success-close-popup-btn');
	var $successPopup = $('.js-success-popup');
	var $successPopupOpen = $('.js-success-popup-open');

	var $successPopupActiveClass = 'popup__active';

	'use strict';
	// constructor
	function SuccessPopupComponent ($el) {
		console.log('*** SuccessPopupComponent ***');
		this.initialize();
	}

  // public methods and variables
  SuccessPopupComponent.prototype.initialize = function initialize() {
  	SuccessPopupComponent.prototype.popupToggleActions();
  };

	SuccessPopupComponent.prototype.popupToggleActions = function popupToggleActions() {
		$closePopupBtn.on('click', function($el){
	    $el.preventDefault();
			$successPopup.fadeOut("fast").removeClass($successPopupActiveClass);
			$(window).disablescroll("undo");
	  });

	  $successPopupOpen.on('click', function($el){
	    $el.preventDefault();
	    $successPopup.fadeIn("slow").addClass($successPopupActiveClass);
	    $(window).disablescroll();
	  });
	}

	// register as view
	this.registerView('SuccessPopupComponent', SuccessPopupComponent);
	//
	// always return constructor if you define a 'class'
	return SuccessPopupComponent;
});
