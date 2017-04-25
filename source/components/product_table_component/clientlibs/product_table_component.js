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
