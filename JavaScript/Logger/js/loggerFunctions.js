/**
 * Created by anton.pashkouski on 20.07.2015.
 */
(function() {
    'use strict';

    var currentLoggerRepository = new Logger.entities.LoggerRepository();
    var defaultHandlerName = 'Console';
    var currentHandler = Logger.handlers.createHandler(defaultHandlerName);

    var isRepository = function(repository) {
        return (repository instanceof Logger.entities.LoggerRepository &&
                typeof repository.add === 'function' &&
                typeof repository.getAll === 'function'
        );
    };

    var isLogNotation = function(logEntry) {
        return (logEntry instanceof Logger.entities.LogEntryObject &&
                typeof logEntry.toString === 'function'
        );
    };

    var isValidLogHandler = function(handler) {
        return (typeof handler.exceptionsHandlingFunction === 'function' &&
                typeof handler.preprocessorFunction === 'function' &&
                typeof handler.resultsProcessingFunction === 'function'
        );
    };

    var toRepository = function(repository) {
        if(isRepository(repository)) {
            return repository;
        } else {
            throw new Logger.exceptions.IncorrectLogEntityError();
        }
    };

    var toLogNotation = function(informationObject) {
        if (typeof informationObject === 'string') {
            return new Logger.entities.LogEntryObject(informationObject, Logger.INFORMATION_PRIORITY);
        } else if (isLogNotation(informationObject)) {
            return informationObject;
        } else {
            throw new Logger.exceptions.IncorrectLogEntityError();
        }
    };

    var setCurrentHandler = function(handlerName) {
        if (handlerName === currentHandler.handlerName) {
            return;
        }
        var tempHandler = Logger.handlers.createHandler(handlerName);

        if (tempHandler === undefined) {
            throw new Logger.exceptions.IncorrectLoggerArgument(handlerName);
        } else if (!isValidLogHandler(tempHandler)) {
            throw new Logger.exceptions.OverrideFunctionError('\'Handler functions\'')
        }

        currentHandler = tempHandler;
    };

    Logger.log = function(information, handlerName, preprocessing) {
        handlerName = handlerName || defaultHandlerName;
        preprocessing = preprocessing || true;

        try {
            setCurrentHandler(handlerName);
            var logNotation = toLogNotation(information);

            if(preprocessing) {
                currentHandler.preprocessorFunction(logNotation);
            }
            currentLoggerRepository.add(logNotation);
        } catch(error) {
            Logger.handleException(error, currentHandler.exceptionsHandlingFunction);
        }
    };

    Logger.showHistory = function() {
        var logNotations = currentLoggerRepository.getAll();
        currentHandler.resultsProcessingFunction(logNotations);
    };

    Logger.setLoggerRepository = function(loggerRepository) {
        try {
            currentLoggerRepository = toRepository(loggerRepository);
        } catch(error) {
            if (error instanceof Logger.exceptions.IncorrectLogEntityError) {
                Logger.handleException(error, currentHandler.exceptionsHandlingFunction);
            }
        }
    };
})();