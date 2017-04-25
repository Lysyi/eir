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
