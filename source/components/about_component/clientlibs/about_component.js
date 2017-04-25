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
