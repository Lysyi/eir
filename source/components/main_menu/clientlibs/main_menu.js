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
