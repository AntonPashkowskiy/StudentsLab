/**
 * Created by anton.pashkouski on 14.07.2015.
 */
(function(){
    'use strict';
    // Task 11: Memorization
    FunctionalJS.getMemorizationFunction = function(targetFunction) {
        if(typeof targetFunction !== 'function') {
            return;
        }

        var cachedResult = [];

        return function() {
            var key = JSON.stringify(arguments);

            if(key in cachedResult) {
                return cachedResult[key];
            } else {
                cachedResult[key] = targetFunction.apply(this, Array.prototype.slice.call(arguments));
                return cachedResult[key];
            }
        }
    };
})();
