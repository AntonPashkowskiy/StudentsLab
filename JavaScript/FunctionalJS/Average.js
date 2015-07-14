/**
 * Created by anton.pashkouski on 14.07.2015.
 */
(function(){
    'use strict';
    // Adding function to the namespace.
    FunctionalJS.averageEvenNumbers = averageEvenNumbers;

    // Task 7: Average even numbers.
    function averageEvenNumbers( targetArray ) {
        if( !Array.isArray( targetArray ) ) {
            return undefined;
        }

        var evenNumbersArray = FunctionalJS.filter( targetArray, function( x ) {
            return ( x % 2 === 0 );
        });

        return FunctionalJS.fold( evenNumbersArray, 0, function( counter, value ) {
            return counter + value;
        }) / evenNumbersArray.length;
    }
})();