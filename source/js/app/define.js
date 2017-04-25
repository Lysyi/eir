/*global _:false */
// create EIR Object
var EIR = {};

// Starting Function
(function () {
    'use strict';

    function id (x) { return x; }
    var mods = {},
        q = [],
        inits;

    // EIR.define
    EIR.define = function define (name, deps, init) {
        function checkDeps (item) {
            var deps = item.deps.map(function (d) { return mods[d]; });

            if (item.init && deps.every(id)) {
                mods[item.name] = item.init.apply(EIR, deps);
                item.init = null;
                inits++;
            }
        }

        q.push({name: name, deps: deps, init: init});
        do {
            inits = 0;
            q.forEach(checkDeps);
        } while (inits);
    };

    EIR.define('Modernizr', [], function () { return Modernizr; });
    EIR.define('jQuery', [], function () { return jQuery; });
    EIR.define('Response', [], function () { return Response; });
    //EIR.define('_', [], function () { return _; });

    // establish breakpoints
    Response.create({
        prop: 'width',  // 'width' 'device-width' 'height' 'device-height' or 'device-pixel-ratio'
        prefix: 'min-width- r src',  // the prefix(es) for your data attributes (aliases are optional)
        breakpoints: [1280, 1024, 0], // min breakpoints (defaults for width/device-width)
        lazy: true // optional param - data attr contents lazyload rather than whole page at once
    });

    // apply placeholder polyfill to input elements
    //$('input, textarea').placeholder();

})();
