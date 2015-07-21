/**
 * Created by anton.pashkouski on 21.07.2015.
 */
Logger.eventBinding = (function(){
    'use strict';

    // creating functions-decorators around events
    var createBindingFunction = function(event, informationString, handlerName, preprocessing) {
        return function() {
            if(typeof event === 'function') {
                event();
            }

            Logger.log(
                new Logger.entities.LogEntryObject(informationString, Logger.EVENT_PRIORITY),
                handlerName,
                preprocessing
            );
        };
    };

    var errorHandlerName = 'Console';
    var errorHandlerFunction = null;

    var setErrorHandler = function(outputHandlerName, handlerFunction) {
        errorHandlerName = typeof outputHandlerName === 'string' ? outputHandlerName : errorHandlerName;
        errorHandlerFunction = typeof handlerFunction === 'function' ? handlerFunction : errorHandlerFunction;
    };

    var defaultErrorHandler = function(errorMessage) {
        errorMessage = errorMessage ? 'Some unhandled error.' : errorMessage;

        Logger.log(
            new Logger.entities.LogEntryObject(errorMessage, Logger.ERROR_PRIORITY),
            errorHandlerName,
            false
        );
    };

    // binding to all unhandled frontend errors
    if (errorHandlerFunction === null) {
        window.addEventListener('error', defaultErrorHandler);
    } else {
        window.addEventListener('error', errorHandlerFunction);
    }

    return {
        createBindingFunction: createBindingFunction,
        setErrorHandler: setErrorHandler
    };
})();