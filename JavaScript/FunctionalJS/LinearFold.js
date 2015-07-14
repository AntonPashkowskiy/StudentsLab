/**
 * Created by anton.pashkouski on 13.07.2015.
 */
(function(){
    'use strict';
    // Adding function to the namespace.
    FunctionalJS.fold = fold;
    
    // Task 3: linear fold
    function fold( targetArray, initialCounterValue, foldFunction ) {
        if( !Array.isArray( targetArray ) || typeof foldFunction !== 'function' ) {
            return undefined;
        }

        var counterValue = initialCounterValue;

        for( var i = 0; i < targetArray.length; i++ ) {
            counterValue = foldFunction( counterValue, targetArray[ i ] );
        }

        return counterValue;
    }

    var numbersArray = [ 1, 2, 3, 4, 5 ];
    var stringsArray = [ '1', '2', '3', '4', '5' ];

    alert( 'Fold example 1 [Numbers]: ' +
        fold( numbersArray, 1, function( counter, currentValue ) {
            return counter * currentValue;
    }));

    alert( 'Fold example 2 [Strings]: ' +
        fold( stringsArray, 'resulting string - ', function( counter, currentValue ) {
            return counter + currentValue;
    }));
})();