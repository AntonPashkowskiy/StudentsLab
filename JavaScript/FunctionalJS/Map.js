/**
 * Created by anton.pashkouski on 13.07.2015.
 */
(function(){
    // Task 5: Map
    function map( array, mappingFunction ) {
        var result = [];

        for( var i = 0; i < array.length; i++ ) {
            result.push( mappingFunction( array[ i ] ) );
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