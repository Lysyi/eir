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
