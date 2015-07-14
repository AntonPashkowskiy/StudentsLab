/**
 * Created by anton.pashkouski on 14.07.2015.
 */
(function(){
    'use strict';
    // Adding function to the namespace.
    FunctionalJS.getMemorizationFunction = getMemorizationFunction;

    // Task 11: Memorization
    function getMemorizationFunction( targetFunction ) {
        if( typeof targetFunction !== 'function' ) {
            return undefined;
        }

        var cachedResult;

        return function() {
            if( cachedResult === undefined ) {
                cachedResult = targetFunction.apply( this, Array.prototype.slice.call( arguments ) );
                return cachedResult;
            } else {
                return cachedResult;
            }
        }
    }
})();
