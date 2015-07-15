/**
 * Created by anton.pashkouski on 14.07.2015.
 */
(function(){
    'use strict';
    // Task 8: Sum of n random numbers.
    FunctionalJS.randomSum = function randomSum(numberOfTerms) {
        if(typeof numberOfTerms !== 'number' || numberOfTerms <= 0) {
            return;
        }

        var arrayOfRandomNumbers = [];
        for(var i = 0; i < numberOfTerms; i++) {
            arrayOfRandomNumbers[ i ] = Math.random();
        }

        return FunctionalJS.fold(arrayOfRandomNumbers, 0, function(counter, value){
            return counter + value;
        });
    };
})();
