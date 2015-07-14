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

    var array = [ 1, 2, 3, 4, 5 ];
    var resultArray = map(array, function ( x ) {
        return x * 2;
    });

    alert( 'My map result: ' +  resultArray );

    resultArray = array.map( function( x ) {
       return x * 2;
    });

    alert( 'Array.prototype.map result: ' + resultArray );


})();