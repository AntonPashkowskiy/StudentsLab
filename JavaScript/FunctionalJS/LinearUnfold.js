/**
 * Created by anton.pashkouski on 13.07.2015.
 */
(function(){
    'use strict';
    // Task 4: linear unfold
    // unfoldState[1] - next state value
    // unfoldState[2] - next element of the sequence
    FunctionalJS.unfold = function(initialValue, unfoldFunction) {
        if(typeof unfoldFunction !== 'function') {
            return;
        }

        var unfoldResult = [];
        var unfoldState;

        do {
            unfoldState = unfoldFunction(initialValue);

            if(unfoldState && (unfoldState['First'] === undefined || unfoldState['Second'] === undefined)) {
                return;
            } else if(!unfoldState) {
                return unfoldResult;
            }

            initialValue = unfoldState['First'];
            unfoldResult.push(unfoldState['Second']);
        } while(true);
    };
})();