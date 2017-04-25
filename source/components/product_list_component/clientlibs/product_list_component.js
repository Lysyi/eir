EIR.define('ProductListComponent', ['jQuery', 'Response'], function($, Response) {

    'use strict';
    // constructor
    function ProductListComponent ($el) {
        console.log('*** ProductListComponent ***');

        $('.js-product-list-item').hover(function(){
            $(this).children('.js-product-list-info').toggle();
        })

    }
    // register as view
    this.registerView('ProductListComponent', ProductListComponent);
    //
    // always return constructor if you define a 'class'
    return ProductListComponent;
});
