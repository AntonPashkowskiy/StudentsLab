/**
 * Created by anton.pashkouski on 14.07.2015.
 */
(function(){
    'use strict';
    // Task 6: Filter
    FunctionalJS.filter = function(targetArray, predicateFunction) {
        if(!Array.isArray(targetArray) || typeof predicateFunction !== 'function') {
            return;
        }

        var result = [];

        for(var i = 0; i < targetArray.length; i++) {
            if(predicateFunction(targetArray[i])) {
                result.push(targetArray[i]);
            }
        }

        return result;
    };
})();