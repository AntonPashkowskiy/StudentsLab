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
            return targetFunction.apply( this, argumentsToArray( arguments ).concat( argument ) );
        }
    }

    // Function create array from of the arguments object.
    function argumentsToArray( argumentsObject ) {
        var argumentsArray = [];

        for( var i = 0; i < argumentsObject.length; i++ ) {
            argumentsArray.push( argumentsObject[ i ] );
        }

        return argumentsArray;
    }

    function sum() {
        var result = 0;

        for( var i = 0; i < arguments.length; i++ ) {
            result += arguments[ i ];
        }

        return result;
    }

    var sumResult = sum( 1, 2, 3, 4, 5 );

    alert( 'Result without partial function using: ' + sumResult );

    var partialSum = removeFirstArgument( 1, sum );
    sumResult = partialSum( 2, 3, 4, 5 );

    alert( 'Result with partial function using: ' + sumResult );
})();

