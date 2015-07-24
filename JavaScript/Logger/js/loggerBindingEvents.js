/**
 * Created by anton.pashkouski on 21.07.2015.
 */
define(
    [   'loggerConstants',
        'logNotationObject',
        'loggerFunctions'
    ],
    function(constants, notation, logger) {
        'use strict';

        // creating functions-decorators around events
        var createBindingFunction = function(event, informationString, handlerName, preprocessing) {
            return function() {
                if (typeof event === 'function') {
                    event();
                }

                logger.log(
                    new notation.LogNotationObject(informationString, constants.EVENT_PRIORITY),
                    handlerName,
                    preprocessing
                );
            };
        };

        var defaultErrorHandler = function(errorMessage) {
            errorMessage = errorMessage ? 'Some unhandled error.' : errorMessage;

            logger.log(
                new notation.LogNotationObject(errorMessage, constants.ERROR_PRIORITY),
                'Console',
                true
            );
        };

        var errorHandlerFunction = defaultErrorHandler;
        // binding to all unhandled frontend errors
        window.addEventListener('error', errorHandlerFunction);

        var setErrorHandler = function(handlerFunction) {
            if (typeof handlerFunction === 'function') {
                window.removeEventListener('error', errorHandlerFunction);
                window.addEventListener('error', handlerFunction);
                errorHandlerFunction = handlerFunction;
            }
        };

        return {
            createBindingFunction: createBindingFunction,
            setErrorHandler: setErrorHandler
        };
    }
);