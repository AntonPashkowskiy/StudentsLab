/**
 * Created by anton.pashkouski on 14.07.2015.
 */
(function(){
    'use strict';
    // Adding function to the namespace
    FunctionalJS.createLazyEvaluationFunction = createLazyEvaluationFunction;

    // Task 10: Lazy evaluation
    function createLazyEvaluationFunction( targetFunction, parametersArray ) {
        if( !Array.isArray( parametersArray ) || typeof targetFunction !== 'function' ) {
            return undefined;
        }

        return function() {
            return targetFunction.apply( this, parametersArray );
        }
    }
})();