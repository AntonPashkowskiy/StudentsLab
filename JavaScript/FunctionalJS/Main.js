/**
 * Created by anton.pashkouski on 14.07.2015.
 */
(function(){
    'use strict';

    // Task 1 : Partial Application
    var sum = function() {
        var result = 0;

        for(var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }

        return result;
    };

    var sumResult = sum(1, 2, 3, 4, 5);
    alert('Result without partial function using: ' + sumResult);

    var partialSum = FunctionalJS.removeFirstArgument(1, sum);
    sumResult = partialSum(2, 3, 4, 5);
    alert('Result with partial function using: ' + sumResult);



    // Task 2: Carrying
    // Function for example
    var stringsConcat = function(firstString, secondString, thirdString) {
        var result = '';

        for(var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }

        return result;
    };

    var resultingString = stringsConcat('I\'m ', 'little ', 'pony!');
    alert('Example 1: Result without carrying: ' + resultingString);

    var carriedFunction = FunctionalJS.carry(stringsConcat);
    resultingString = carriedFunction('I\'m ')('little ')('pony!');
    alert('Example 2: Result with carrying: ' + resultingString);

    carriedFunction = FunctionalJS.carry(stringsConcat, 5);
    resultingString = carriedFunction('Who ')('I\'m? ')('I\'m ')('a little')(' pony!');
    alert('Example 3: Result with carrying. Two arguments: ' + resultingString);



    // Task 3: Linear fold
    var numbersArray = [1, 2, 3, 4, 5];
    var stringsArray = ['1', '2', '3', '4', '5'];

    alert('Fold example 1 [Numbers]: ' +
        FunctionalJS.fold(numbersArray, 1, function(counter, currentValue) {
            return counter * currentValue;
    }));

    alert('Fold example 2 [Strings]: ' +
        FunctionalJS.fold(stringsArray, 'resulting string - ', function(counter, currentValue) {
            return counter + currentValue;
    }));



    // Task 4: Linear unfold.
    // Unfold function example
    var unfoldDecreasingSequence = function(number) {
        var nextState = {};
        nextState['First'] = number - 1;
        nextState['Second'] = number - 1;

        return nextState['First'] < 0 ? undefined : nextState;
    };

    var numberArray = FunctionalJS.unfold(10, unfoldDecreasingSequence);
    alert('Unfold result: ' + numberArray);



    // Task 5: Map
    var arrayForMap = [1, 2, 3, 4, 5];
    var resultArray = FunctionalJS.map(arrayForMap, function (x) {
        return x * 2;
    });
    alert('My map result: ' +  resultArray);

    resultArray = arrayForMap.map(function(x) {
        return x * 2;
    });
    alert('Array.prototype.map result: ' + resultArray);



    // Task 6: Filter
    var arrayForFilter = [3, 5, 12, 8, 1, 11, 5, 7, 14];
    resultArray = FunctionalJS.filter(arrayForFilter, function(x) {
        return x % 2 === 1;
    });
    alert('My filter result: ' + resultArray);

    resultArray = arrayForFilter.filter(function(x) {
        return x % 2 === 1;
    });
    alert('Array.prototype.filter result: ' + resultArray);



    // Task 7: Average even numbers
    var arrayForAverage = [1, 23, 2, 6, 12, 0];
    alert('Array for average: ' + arrayForAverage);
    alert('Average result: ' + FunctionalJS.averageEvenNumbers(arrayForAverage));



    // Task 8: Sum of n random numbers.
    alert('Sum of 10 random numbers: ' + FunctionalJS.randomSum(10));



    // Task 9: First
    var arrayForFirst = [1, 4, 2, 134, 5, 56, 123];
    alert('Target array for \'first\' function: ' + arrayForFirst);

    var result = FunctionalJS.first(arrayForFirst, function(x){
        return x > 100;
    });
    alert('A first number greater than 100:  ' + result);



    // Task 10: Lazy evaluation
    var multiply = function(first, second) {
        return first * second;
    };

    alert('Result without lazy evaluation: ' + multiply(2, 2));
    var lazyEvaluationMultiply = FunctionalJS.createLazyEvaluationFunction(multiply, [2, 2]);
    alert('Result with lazy evaluation: ' + lazyEvaluationMultiply());



    // Task 11: Memorization
    var memorizationMultiply = FunctionalJS.getMemorizationFunction(function(first, second) {
        return first * second;
    });

    alert('Memorization function (f = 2 * 4) result: ' + memorizationMultiply(2, 4));
    alert('Do something.');
    alert('Function cached result: ' + memorizationMultiply());
})();