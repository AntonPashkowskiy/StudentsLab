/**
 * Created by anton.pashkouski on 14.07.2015.
 */
(function(){
    'use strict';
    // Task 7: Average even numbers.
    FunctionalJS.averageEvenNumbers = function(targetArray) {
        if(!Array.isArray(targetArray)) {
            return;
        }

        var evenNumbersArray = FunctionalJS.filter(targetArray, function(x) {
            return x % 2 === 0;
        });

        return FunctionalJS.fold(evenNumbersArray, 0, function(counter, value) {
            return counter + value;
        }) / evenNumbersArray.length;
    };
})();