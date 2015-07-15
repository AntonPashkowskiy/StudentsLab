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

        var cachedResult;

        return function() {
            if(cachedResult === undefined) {
                cachedResult = targetFunction.apply(this, Array.prototype.slice.call(arguments));
                return cachedResult;
            } else {
                return cachedResult;
            }
        }
    };
})();
