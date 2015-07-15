/**
 * Created by anton.pashkouski on 14.07.2015.
 */
(function(){
    'use strict';
    // Task 9: First
    FunctionalJS.first = function first(targetArray, predicateFunction) {
        if(!Array.isArray(targetArray) || typeof predicateFunction !== 'function') {
            return;
        }

        for(var i = 0; i < targetArray.length; i++) {
            if(predicateFunction(targetArray[i])) {
                return targetArray[i];
            }
        }
    };
})();