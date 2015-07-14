/**
 * Created by anton.pashkouski on 13.07.2015.
 */
(function(){
    'use strict';
    // Adding function to the namespace.
    FunctionalJS.map = map;

    // Task 5: Map
    function map( targetArray, mappingFunction ) {
        if( !Array.isArray( targetArray ) || typeof mappingFunction !== 'function' ) {
            return undefined;
        }

        var result = [];

        for( var i = 0; i < targetArray.length; i++ ) {
            result.push( mappingFunction( targetArray[ i ] ) );
        }

        return result;
    }
})();