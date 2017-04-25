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
