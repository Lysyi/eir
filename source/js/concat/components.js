EIR.define('MainHeader', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function MainHeader ($el) {
        console.log('*** MainHeader ***');
    }
    // register as view
    this.registerView('MainHeader', MainHeader);
    //
    // always return constructor if you define a 'class'
    return MainHeader;
});

EIR.define('MainMenu', ['jQuery', 'Response'], function($, Response) {

    'use strict';

    //dom-elements
    var $mainMenu = $('.js-main-menu-nav');
    var $burgerBtn = $('.js-main-menu-burger');

    var $thumbsSlider = $('.js-thumbs-slider');
    var $openSliderBtn = $('.js-add-btn');
    var $header = $('.main-logo-block');

    //classes
    var $mainMenuActiveClass = 'main-menu-nav__active';
    var $burgerActiveClass =  "burger-active"

    var $thumbsSliderActiveClass = 'thumbs-slider-component__active';


    // constructor
    function MainMenu ($el) {
        console.log('*** MainMenu ***');
        this.initialize();
    }

    // public methods and variables
    MainMenu.prototype.initialize = function initialize() {
        MainMenu.prototype.menuToggleActions();
    };

    MainMenu.prototype.menuToggleActions = function menuToggleActions() {

      var scrollHandler = function() {
        var currentScrollTop = $(document).scrollTop();
        if(currentScrollTop >= 2) {
          $header.addClass('main-logo-block--style');
        }
        else {
          $header.removeClass('main-logo-block--style');
        }
      };

      $(window).on('scroll', function(){
        scrollHandler();
      });

      $burgerBtn.on('click', function($el){
        $el.preventDefault();
        if ($mainMenu.hasClass($mainMenuActiveClass) && $burgerBtn.hasClass($burgerActiveClass)) {
          $mainMenu.fadeOut("slow").removeClass($mainMenuActiveClass);
          $burgerBtn.removeClass($burgerActiveClass);
          $(window).disablescroll("undo");
        } else {
          $mainMenu.fadeIn("slow").addClass($mainMenuActiveClass);
          $burgerBtn.addClass($burgerActiveClass);
          $(window).disablescroll();
        }
      });

      $openSliderBtn.on('click', function($el){
        $el.preventDefault();
        if ($thumbsSlider.hasClass($thumbsSliderActiveClass)) {
          $thumbsSlider.fadeOut("slow").removeClass($thumbsSliderActiveClass);
        } else {
          $thumbsSlider.fadeIn("slow").addClass($thumbsSliderActiveClass);
        }
      });

      $('.js-main-menu-select').select2({
        dir: "rtl",
        dropdownParent: $('.search-block')
      });

    }


    // register as view
    this.registerView('MainMenu', MainMenu);
    //
    // always return constructor if you define a 'class'
    return MainMenu;
});

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

EIR.define('ProductTableComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function ProductTableComponent ($el) {
        console.log('*** ProductTableComponent ***');

    }
    // register as view
    this.registerView('ProductTableComponent', ProductTableComponent);
    //
    // always return constructor if you define a 'class'
    return ProductTableComponent;
});

EIR.define('BeginComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function BeginComponent ($el) {
        console.log('*** BeginComponent ***');
    }
    // register as view
    this.registerView('BeginComponent', BeginComponent);
    //
    // always return constructor if you define a 'class'
    return BeginComponent;
});

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

EIR.define('HomeContentComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function HomeContentComponent ($el) {
        console.log('*** HomeContentComponent ***');
    }
    // register as view
    this.registerView('HomeContentComponent', HomeContentComponent);
    //
    // always return constructor if you define a 'class'
    return HomeContentComponent;
});

EIR.define('ProductListComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function ProductListComponent ($el) {
        console.log('*** ProductListComponent ***');

        $('.js-product-list-item').hover(function(){
            $(this).children('.js-product-list-info').toggle();
        })

    }
    // register as view
    this.registerView('ProductListComponent', ProductListComponent);
    //
    // always return constructor if you define a 'class'
    return ProductListComponent;
});

EIR.define('AboutComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function AboutComponent ($el) {
        console.log('*** AboutComponent ***');
    }
    // register as view
    this.registerView('AboutComponent', AboutComponent);
    //
    // always return constructor if you define a 'class'
    return AboutComponent;
});

EIR.define('SuccessStoriesComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function SuccessStoriesComponent ($el) {
        console.log('*** SuccessStoriesComponent ***');
    }
    // register as view
    this.registerView('SuccessStoriesComponent', SuccessStoriesComponent);
    //
    // always return constructor if you define a 'class'
    return SuccessStoriesComponent;
});

EIR.define('ContactAgentComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function ContactAgentComponent ($el) {
        console.log('*** ContactAgentComponent ***');
    }
    // register as view
    this.registerView('ContactAgentComponent', ContactAgentComponent);
    //
    // always return constructor if you define a 'class'
    return ContactAgentComponent;
});

EIR.define('MapComponent', ['jQuery', 'Response'], function($, Response) {

  'use strict';
  //global Vars
  var map = {};
  var marker = [];
  var place1 = new google.maps.LatLng(32.124871, 34.803939);

  // constructor
  function MapComponent($el) {
    console.log('*** MapComponent ***');
    google.maps.event.addDomListener(window, 'load', this.initialize);
  };

  MapComponent.prototype.initialize = function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: new google.maps.LatLng(32.124871, 34.803939),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROAD,
      draggable: false,
      scrollwheel: false,
      panControl: false,
      disableDefaultUI: true
    };
    map = new google.maps.Map(mapCanvas, mapOptions);

    google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });

    MapComponent.prototype.addMarker(place1);
  };

  MapComponent.prototype.addMarker = function addMarker(position) {
    marker.push(new google.maps.Marker({
      position: position,
      map: map,
      draggable: false,
    }));
  };

  // register as view
  this.registerView('MapComponent', MapComponent);
  //
  // always return constructor if you define a 'class'
  return MapComponent;
});

EIR.define('ContactUsComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function ContactUsComponent ($el) {
        console.log('*** ContactUsComponent ***');
    }
    // register as view
    this.registerView('ContactUsComponent', ContactUsComponent);
    //
    // always return constructor if you define a 'class'
    return ContactUsComponent;
});

EIR.define('ResidentPropertyComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function ResidentPropertyComponent ($el) {
        console.log('*** ResidentPropertyComponent ***');

        $('.js-resident-property-list-item').hover(function(){
            $(this).children('.js-resident-property-list-info').toggle();
        })

        $('.js-resident-property-select').select2({
          dir: "rtl",
          dropdownParent: $('.resident-property-component__header')
        });
    }

    // register as view
    this.registerView('ResidentPropertyComponent', ResidentPropertyComponent);
    //
    // always return constructor if you define a 'class'
    return ResidentPropertyComponent;
});

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

EIR.define('BlogComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function BlogComponent ($el) {
        console.log('*** BlogComponent ***');

        $('.js-hot-item-block').hover(function(){
            $(this).children('.js-hot-item-info').toggle();
        })
    }
    // register as view
    this.registerView('BlogComponent', BlogComponent);
    //
    // always return constructor if you define a 'class'
    return BlogComponent;
});

EIR.define('OurAgentsComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function OurAgentsComponent ($el) {
        console.log('*** OurAgentsComponent ***');
    }

    // register as view
    this.registerView('OurAgentsComponent', OurAgentsComponent);
    //
    // always return constructor if you define a 'class'
    return OurAgentsComponent;
});

EIR.define('CareerComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';

    var $accordionContainer = $('.js-accordion-container');
    var $accordionPanel = $('.js-accordion-pannel');
    var $accordionContent = $('.js-accordion-content');

    var $accordionPanelActiveClass = 'accordion--active';

    // constructor
    function CareerComponent ($el) {
        console.log('*** CareerComponent ***');
        this.initialize();
    }

    // public methods and variables
    CareerComponent.prototype.initialize = function initialize() {
        CareerComponent.prototype.accordionToggleActions();
    };

    CareerComponent.prototype.accordionToggleActions = function accordionToggleActions() {

      $accordionPanel.on('click', function($el){
        $el.preventDefault();

        if ($(this).hasClass($accordionPanelActiveClass)) {
            $(this).removeClass($accordionPanelActiveClass);
            $(this).next($accordionPanel).slideUp('slow');
        } else {
            $accordionContainer.find($accordionPanel).removeClass($accordionPanelActiveClass);
            $accordionContainer.find($accordionContent).slideUp('slow');
            $(this).addClass($accordionPanelActiveClass);
            $(this).next($accordionPanel).slideDown('slow');
        }

        return false;
      });

    }

    // register as view
    this.registerView('CareerComponent', CareerComponent);
    //
    // always return constructor if you define a 'class'
    return CareerComponent;
});
