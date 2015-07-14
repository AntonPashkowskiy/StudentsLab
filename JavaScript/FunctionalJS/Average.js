/**
 * Created by anton.pashkouski on 14.07.2015.
 */
(function(){
    'use strict';

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

    var array = [ 1, 23, 2, 6, 12, 0 ];
    alert( 'Array for average: ' + array );
    alert( 'Average result: ' + averageEvenNumbers( array ) );
})();