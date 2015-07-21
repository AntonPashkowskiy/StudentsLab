/**
 * Created by anton.pashkouski on 21.07.2015.
 */
define(
    [   'loggerFunctions',
        'loggerBindingEvents',
        'handlersFactory',
        'loggerRepository',
        'logNotationObject',
        'loggerConstants'
    ],
    function( loggerFunctions, eventsFunctions, outputHandlersFactory, repository, notation, constants ) {
        var logger = {};
        logger.outputHandlersFactory = {};
        logger.eventsBinding = {};
        logger.entities = {};

        logger.log = loggerFunctions.log;
        logger.showHistory = loggerFunctions.showHistory;
        logger.setLoggerRepository = loggerFunctions.setLoggerRepository;
        logger.ERROR_PRIORITY = constants.ERROR_PRIORITY;
        logger.EVENT_PRIORITY = constants.EVENT_PRIORITY;
        logger.INFORMATION_PRIORITY = constants.INFORMATION_PRIORITY;

        logger.entities.LoggerRepository = repository.LoggerRepository;
        logger.entities.LogNotationObject = notation.LogNotationObject;

        logger.outputHandlersFactory.createHandler = outputHandlersFactory.createHandler;
        logger.outputHandlersFactory.addHandlerConstructor = outputHandlersFactory.addHandlerConstructor;
        logger.outputHandlersFactory.AbstractNotationsHandler = outputHandlersFactory.AbstractNotationsHandler;

        logger.eventsBinding.createBindingFunction = eventsFunctions.createBindingFunction;
        logger.eventsBinding.setErrorHandler = eventsFunctions.setErrorHandler;

        return logger;
    }
);