/**
 * Created by anton.pashkouski on 13.07.2015.
 */
(function() {
    'use strict';
    // Adding function to the namespace.
    FunctionalJS.carry = carry;

    // Task 2: Carrying
    function carry( targetFunction, expectedNumberArguments ) {
        if( expectedNumberArguments === undefined ) {
            expectedNumberArguments = targetFunction.length;
        }

        function getCurryingFunction( previousArguments ) {
            return function( nextArgument ) {
                var functionArguments = previousArguments.concat( nextArgument );

                if( functionArguments.length < expectedNumberArguments ) {
                    return getCurryingFunction( functionArguments );
                }

                return targetFunction.apply( this, functionArguments );
            };
        }

        return getCurryingFunction( [] );
    }

    // Function for example
    function stringsConcat( firstString, secondString, thirdString ) {
        var result = "";

        for( var i = 0; i < arguments.length; i++ ) {
            result += arguments[ i ];
        }

        return result;
    }

    var resultingString = stringsConcat( 'I\'m ', 'little ', 'pony!' );
    alert( 'Example 1: Result without carrying: ' + resultingString );

    var carriedFunction = carry( stringsConcat );
    resultingString = carriedFunction( 'I\'m ' )( 'little ' )( 'pony!' );
    alert( 'Example 2: Result with carrying: ' + resultingString );

    carriedFunction = carry( stringsConcat, 5 );
    resultingString = carriedFunction( 'Who ' )( 'I\'m? ' )( 'I\'m ' )( 'a little' )( ' pony!' );
    alert( 'Example 3: Result with carrying. Two arguments: ' + resultingString );
})();


