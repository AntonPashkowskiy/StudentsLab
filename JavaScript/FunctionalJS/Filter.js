/**
 * Created by anton.pashkouski on 14.07.2015.
 */
(function(){
    'use strict';
    // Adding function to the namespace.
    FunctionalJS.filter = filter;

    // Task 6: Filter
    function filter( targetArray, predicateFunction ) {
        if( !Array.isArray( targetArray ) || typeof predicateFunction !== 'function' ) {
            return undefined;
        }

        var result = [];

        for( var i = 0; i < targetArray.length; i++ ) {
            if( predicateFunction( targetArray[ i ] ) ) {
                result.push( targetArray[ i ] );
            }
        }

        return result;
    }
})();