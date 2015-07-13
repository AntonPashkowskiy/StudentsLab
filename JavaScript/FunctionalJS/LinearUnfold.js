/**
 * Created by anton.pashkouski on 13.07.2015.
 */
(function(){
    // Task 4: linear unfold
    // unfoldState[ 1 ] - next state value
    // unfoldState[ 2 ] - next element of the sequence
    function unfold( initialValue, unfoldFunction ) {
        var unfoldResult = [];
        var unfoldState;

        do {
            unfoldState = unfoldFunction( initialValue );

            if( unfoldState && ( unfoldState[ 1 ] === undefined || unfoldState[ 2 ] === undefined ) ) {
                return undefined;
            } else if( !unfoldState ) {
                return unfoldResult.reverse();
            }

            initialValue = unfoldState[ 1 ];
            unfoldResult.push( unfoldState[ 2 ] );
        } while( true );
    }

    // Unfold function example
    function unfoldIncreasingSequence( number ) {
        var nextState = {}
        nextState[ 1 ] = number - 1;
        nextState[ 2 ] = number - 1;

        if( nextState[ 1 ] < 0 ) {
            return undefined;
        } else {
            return nextState;
        }
    }

    var numberArray = unfold( 10, unfoldIncreasingSequence );
    alert( numberArray );
})();