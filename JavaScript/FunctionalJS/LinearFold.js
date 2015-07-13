/**
 * Created by anton.pashkouski on 13.07.2015.
 */
(function(){
    // Task 3: linear fold
    function fold( array, initialCounterValue, foldFunction ) {
        if( typeof foldFunction !== 'function' || array === undefined || array === null ) {
            return undefined;
        }

        for( var i = 0; i < array.length; i++ ) {
            initialCounterValue = foldFunction( initialCounterValue, array[ i ] );
        }

        return initialCounterValue;
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