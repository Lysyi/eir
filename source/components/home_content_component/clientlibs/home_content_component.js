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
