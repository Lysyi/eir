EIR.define('ContactAgentComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function ContactAgentComponent ($el) {
        console.log('*** ContactAgentComponent ***');
    }
    // register as view
    this.registerView('ContactAgentComponent', ContactAgentComponent);
    //
    // always return constructor if you define a 'class'
    return ContactAgentComponent;
});
