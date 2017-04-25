// EIR.registerView
EIR.define('viewMain', ['jQuery'], function ($) {
    'use strict';

    var views = {};
    var currentView = {};

    EIR.registerView = function (name, fn) { views[name] = fn; };
    $(function () {
        $('*[data-component]').each(function (i, el) {
            var name = $(el).data('component') || '',
                cfg = $(el).data('config') || {};

            if (name) {
                if (views[name]) {
                    currentView = new views[name]($(el), cfg);
                } else {
                    console.warn('view `' + name + '` isn\'t defined');
                }
            } else {
                console.warn('empty data-component!');
            }
        });
    });
    return this;
});
