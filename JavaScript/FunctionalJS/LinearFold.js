/**
 * Created by anton.pashkouski on 13.07.2015.
 */
(function(){
    'use strict';
    // Task 3: linear fold
    FunctionalJS.fold = function(targetArray, initialCounterValue, foldFunction) {
        if(!Array.isArray(targetArray) || typeof foldFunction !== 'function') {
            return;
        }

        var counterValue = initialCounterValue;

        for(var i = 0; i < targetArray.length; i++) {
            counterValue = foldFunction(counterValue, targetArray[i]);
        }

        return counterValue;
    };
})();