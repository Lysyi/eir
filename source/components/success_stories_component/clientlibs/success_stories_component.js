EIR.define('SuccessStoriesComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function SuccessStoriesComponent ($el) {
        console.log('*** SuccessStoriesComponent ***');
    }
    // register as view
    this.registerView('SuccessStoriesComponent', SuccessStoriesComponent);
    //
    // always return constructor if you define a 'class'
    return SuccessStoriesComponent;
});
