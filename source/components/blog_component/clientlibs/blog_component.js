EIR.define('BlogComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function BlogComponent ($el) {
        console.log('*** BlogComponent ***');

        $('.js-hot-item-block').hover(function(){
            $(this).children('.js-hot-item-info').toggle();
        })
    }
    // register as view
    this.registerView('BlogComponent', BlogComponent);
    //
    // always return constructor if you define a 'class'
    return BlogComponent;
});
