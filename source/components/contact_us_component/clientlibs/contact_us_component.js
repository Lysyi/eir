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
