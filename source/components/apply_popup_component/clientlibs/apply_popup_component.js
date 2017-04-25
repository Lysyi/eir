EIR.define('ApplyPopupComponent', ['jQuery', 'Response'], function($, Response) {

	var $closePopupBtn = $('.js-close-apply-popup-btn');
	var $applyPopup = $('.js-apply-popup');
	var $applyPopupOpen = $('.js-apply-popup-open');

	var $applyPopupActiveClass = 'popup__active';

	'use strict';
	// constructor
	function ApplyPopupComponent ($el) {
		console.log('*** ApplyPopupComponent ***');
		this.initialize();
	}

  // public methods and variables
  ApplyPopupComponent.prototype.initialize = function initialize() {
      ApplyPopupComponent.prototype.popupToggleActions();
  };

	ApplyPopupComponent.prototype.popupToggleActions = function popupToggleActions() {
		$closePopupBtn.on('click', function($el){
	    $el.preventDefault();
			$applyPopup.fadeOut("fast").removeClass($applyPopupActiveClass);
	  });

	  $applyPopupOpen.on('click', function($el){
	    $el.preventDefault();
	    $applyPopup.fadeIn("slow").addClass($applyPopupActiveClass);
	  });
	}

	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});
	});


	// register as view
	this.registerView('ApplyPopupComponent', ApplyPopupComponent);
	//
	// always return constructor if you define a 'class'
	return ApplyPopupComponent;
});
