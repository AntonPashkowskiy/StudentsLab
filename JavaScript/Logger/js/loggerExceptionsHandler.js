/**
 * Created by anton.pashkouski on 20.07.2015.
 */
define(function() {
    'use strict';

     return function(exception, handlerFunction) {
        if (exception instanceof Error && typeof handlerFunction === 'function') {
            handlerFunction(exception);
        }
     };
});