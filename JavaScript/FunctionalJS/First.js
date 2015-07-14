/**
 * Created by anton.pashkouski on 14.07.2015.
 */
(function(){
    'use strict';
    // Adding function to the namespace.
    FunctionalJS.first = first;

    // Task 9: First
    function first( targetArray, predicateFunction ) {
        if( !Array.isArray( targetArray ) || typeof predicateFunction !== 'function' ) {
            return undefined;
        }

        for( var i = 0; i < targetArray.length; i++ ) {
            if( predicateFunction( targetArray[ i ] ) ) {
                return targetArray[ i ];
            }
        }

        return undefined;
    }
})();