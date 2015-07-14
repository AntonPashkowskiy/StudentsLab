/**
 * Created by anton.pashkouski on 13.07.2015.
 */
(function(){
    'use strict';
    // Adding function to the namespace.
    FunctionalJS.removeFirstArgument = removeFirstArgument;

    // Task 1: Partial Application
    function removeFirstArgument( argument, targetFunction ) {
        return function() {
            return targetFunction.apply( this, Array.prototype.slice.call( arguments ).concat( argument ) );
        }
    }
})();

