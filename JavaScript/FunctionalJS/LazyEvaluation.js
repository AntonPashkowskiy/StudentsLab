/**
 * Created by anton.pashkouski on 14.07.2015.
 */
(function(){
    'use strict';
    // Task 10: Lazy evaluation.
    FunctionalJS.createLazyEvaluationFunction = function(targetFunction, parametersArray) {
        if(!Array.isArray(parametersArray) || typeof targetFunction !== 'function') {
            return;
        }

        return function() {
            return targetFunction.apply(this, parametersArray);
        };
    };
})();