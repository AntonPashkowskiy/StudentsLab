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
})();


