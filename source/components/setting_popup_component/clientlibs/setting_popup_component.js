EIR.define('SettingPopupComponent', ['jQuery', 'Response'], function($, Response) {

	var $closePopupBtn = $('.js-setting-close-popup-btn');
	var $settingPopup = $('.js-setting-popup');
	var $settingPopupOpen = $('.js-setting-popup-open');

	var $settingPopupActiveClass = 'popup__active';

	'use strict';
	// constructor
	function SettingPopupComponent ($el) {
		console.log('*** SettingPopupComponent ***');
		this.initialize();
	}

  // public methods and variables
  SettingPopupComponent.prototype.initialize = function initialize() {
  	SettingPopupComponent.prototype.popupToggleActions();
  };

	SettingPopupComponent.prototype.popupToggleActions = function popupToggleActions() {
		$closePopupBtn.on('click', function($el){
	    $el.preventDefault();
			$settingPopup.fadeOut("fast").removeClass($settingPopupActiveClass);
			$(window).disablescroll("undo");
	  });

	  $settingPopupOpen.on('click', function($el){
	    $el.preventDefault();
	    $settingPopup.fadeIn("slow").addClass($settingPopupActiveClass);
	    $(window).disablescroll();
	  });
	}

	$('.js-setting-popup-select').select2({
		dropdownCssClass: "increasedzindexclass",
    dir: "rtl"
  });

	// register as view
	this.registerView('SettingPopupComponent', SettingPopupComponent);
	//
	// always return constructor if you define a 'class'
	return SettingPopupComponent;
});
