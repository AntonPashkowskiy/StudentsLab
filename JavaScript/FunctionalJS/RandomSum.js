/**
 * Created by anton.pashkouski on 14.07.2015.
 */
(function(){
    'use strict';
    // Adding function to the namespace.
    FunctionalJS.randomSum = randomSum;

    // Task 8: Sum of n random numbers.
    function randomSum( numberOfTerms ) {
        if( typeof numberOfTerms !== 'number' || numberOfTerms <= 0 ) {
            return undefined;
        }

        var arrayOfRandomNumbers = [];
        for( var i = 0; i < numberOfTerms; i++ ) {
            arrayOfRandomNumbers[ i ] = Math.random();
        }

        return FunctionalJS.fold( arrayOfRandomNumbers, 0, function( counter, value ){
            return counter + value;
        });
    }
})();