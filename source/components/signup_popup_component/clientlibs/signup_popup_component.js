EIR.define('SignupPopupComponent', ['jQuery', 'Response'], function($, Response) {

	var $closePopupBtn = $('.js-signup-close-popup-btn');
	var $signupPopup = $('.js-signup-popup');
	var $signupPopupOpen = $('.js-signup-popup-open');

	var $signupPopupActiveClass = 'popup__active';

	'use strict';
	// constructor
	function SignupPopupComponent ($el) {
		console.log('*** SignupPopupComponent ***');
		this.initialize();
	}

  // public methods and variables
  SignupPopupComponent.prototype.initialize = function initialize() {
  	SignupPopupComponent.prototype.popupToggleActions();
  };

	SignupPopupComponent.prototype.popupToggleActions = function popupToggleActions() {
		$closePopupBtn.on('click', function($el){
	    $el.preventDefault();
			$signupPopup.fadeOut("fast").removeClass($signupPopupActiveClass);
			$(window).disablescroll("undo");
	  });

	  $signupPopupOpen.on('click', function($el){
	    $el.preventDefault();
	    $signupPopup.fadeIn("slow").addClass($signupPopupActiveClass);
	    $(window).disablescroll();
	  });
	}



	// register as view
	this.registerView('SignupPopupComponent', SignupPopupComponent);
	//
	// always return constructor if you define a 'class'
	return SignupPopupComponent;
});
