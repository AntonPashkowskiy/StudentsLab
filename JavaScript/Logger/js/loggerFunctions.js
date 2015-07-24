/**
 * Created by anton.pashkouski on 20.07.2015.
 */
define(
    [   'loggerConstants',
        'logNotationObject',
        'loggerRepository',
        'loggerExceptions',
        'loggerExceptionsHandler',
        'handlersFactory'
    ],
    function(constants, notation, repository, exceptions, handleException, outputHandlersFactory) {
        'use strict';

        var currentLoggerRepository = new repository.LoggerRepository();
        var defaultLoggingType = 'Console';
        var currentHandler = outputHandlersFactory.createHandler(defaultLoggingType);

        var isRepository = function(repository) {
            return (repository instanceof repository.LoggerRepository &&
                    typeof repository.add === 'function' &&
                    typeof repository.getAll === 'function'
            );
        };

        var isLogNotation = function(logNotation) {
            return (logNotation instanceof notation.LogNotationObject &&
                    typeof logNotation.toString === 'function'
            );
        };

        var isValidLogHandler = function(handler) {
            return (typeof handler.exceptionsHandlingFunction === 'function' &&
                    typeof handler.preprocessorFunction === 'function' &&
                    typeof handler.resultsProcessingFunction === 'function'
            );
        };

        var checkRepositoryType = function(repository) {
            if (isRepository(repository)) {
                return repository;
            } else {
                throw new exceptions.IncorrectLogEntityError();
            }
        };

        var toLogNotation = function(informationObject) {
            if (typeof informationObject === 'string') {
                return new notation.LogNotationObject(informationObject, constants.INFORMATION_PRIORITY);
            } else if (isLogNotation(informationObject)) {
                return informationObject;
            } else {
                throw new exceptions.IncorrectLogEntityError();
            }
        };

        var setCurrentHandler = function(loggingType) {
            if (loggingType === currentHandler.handlerName) {
                return;
            }
            var tempHandler = outputHandlersFactory.createHandler(loggingType);

            if (tempHandler === undefined) {
                throw new exceptions.IncorrectLoggerArgument(loggingType);
            } else if (!isValidLogHandler(tempHandler)) {
                throw new exceptions.OverrideFunctionError('\'Handler functions\'')
            }

            currentHandler = tempHandler;
        };

        var log = function(dataToLog, loggingType, preprocessing) {
            loggingType = loggingType || defaultLoggingType;
            preprocessing = preprocessing === undefined ? true : preprocessing;

            try {
                setCurrentHandler(loggingType);
                var logNotation = toLogNotation(dataToLog);

                if(preprocessing) {
                    currentHandler.preprocessorFunction(logNotation);
                }
                currentLoggerRepository.add(logNotation);
            } catch(error) {
                handleException(error, currentHandler.exceptionsHandlingFunction);
            }
        };

        var showHistory = function() {
            var logNotations = currentLoggerRepository.getAll();
            currentHandler.resultsProcessingFunction(logNotations);
        };

        var setLoggerRepository = function(loggerRepository) {
            try {
                currentLoggerRepository = checkRepositoryType(loggerRepository);
            } catch(error) {
                if (error instanceof exceptions.IncorrectLogEntityError) {
                    handleException(error, currentHandler.exceptionsHandlingFunction);
                }
            }
        };

        return {
            log: log,
            showHistory: showHistory,
            setLoggerRepository: setLoggerRepository
        };
    }
);