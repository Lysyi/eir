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
