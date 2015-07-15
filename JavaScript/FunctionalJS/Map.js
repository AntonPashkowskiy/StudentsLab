/**
 * Created by anton.pashkouski on 13.07.2015.
 */
(function(){
    'use strict';
    // Task 5: Map
    FunctionalJS.map = function(targetArray, mappingFunction) {
        if(!Array.isArray(targetArray) || typeof mappingFunction !== 'function') {
            return;
        }

        var result = [];

        for(var i = 0; i < targetArray.length; i++) {
            result.push(mappingFunction(targetArray[i]));
        }

        return result;
    };
})();