/**
 * Created by anton.pashkouski on 13.07.2015.
 */
(function(){
    'use strict';
    // Task 1: Partial Application
    FunctionalJS.removeFirstArgument = function(argument, targetFunction) {
        return function() {
            return targetFunction.apply(this, Array.prototype.slice.call(arguments).concat(argument));
        };
    };
})();

