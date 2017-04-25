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
