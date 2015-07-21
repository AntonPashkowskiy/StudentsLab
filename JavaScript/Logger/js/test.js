/**
 * Created by anton.pashkouski on 20.07.2015.
 */
define(['logger'], function(logger){
    //1. Default behaviour example
    logger.log('Information for logger 1.');
    logger.log(new logger.entities.LogNotationObject('Information for logger 2.', 3));

    // explicit output to console
    logger.log('Information for logger 3.', 'Console');

    // output to abstract web-device
    logger.log('Information for logger 4.', 'Abstract');

    // output via alert function
    logger.log('Information for logger 5.', 'Alert');
    logger.log('Information for logger 6.', 'Alert');

    // output without pretreatment notations
    logger.log('Information for logger 7.', 'Alert', false);
    logger.log('Information for logger 8.', 'Console', false);

    logger.showHistory();

    //2. Custom output handler
    function MyOutputHandler(handlerName) {
        logger.outputHandlersFactory.AbstractNotationsHandler.call(this, handlerName);
    }

    MyOutputHandler.prototype = Object.create(logger.outputHandlersFactory.AbstractNotationsHandler.prototype);
    MyOutputHandler.prototype.constructor = MyOutputHandler;

    MyOutputHandler.prototype.exceptionsHandlingFunction = function(exception) {
        alert('My exception handling: ' + exception.message);
    };

    MyOutputHandler.prototype.preprocessorFunction = function(notation) {
        alert('My notation handling: ' + notation.informationString);
    };

    MyOutputHandler.prototype.resultsProcessingFunction = function(results) {
        alert('Fun with results array.');
    };

    // register our custom handler in factory
    logger.outputHandlersFactory.addHandlerConstructor('MyOutputHandler', MyOutputHandler);
    // custom behaviour
    logger.log('Information for logger 9.', 'MyOutputHandler');
    // some error for exception
    logger.log('Information for logger 9.', 'MyOutputandler');
    // results processing...
    logger.showHistory();

    //3. Bad handler
    function MyBadHandler(handlerName) {
        logger.outputHandlersFactory.AbstractNotationsHandler.call(this, handlerName);
    }

    MyBadHandler.prototype = Object.create(logger.outputHandlersFactory.AbstractNotationsHandler.prototype);
    MyBadHandler.prototype.constructor = MyBadHandler;
    MyBadHandler.prototype.exceptionsHandlingFunction = undefined;
    MyBadHandler.prototype.preprocessorFunction = undefined;
    MyBadHandler.prototype.resultsProcessingFunction = undefined;

    // try register damaged constructor.
    logger.outputHandlersFactory.addHandlerConstructor('MyBadHandler', MyBadHandler);
    // try use damaged output handler...and exception...
    logger.log('Some important information.', 'MyBadHandler');
    // and logger work without bugs
    logger.log('Information after exception.');

    //5. event binding example
    window.onload = function() {
        alert('I\'m doing something important.');
    };
    // create event handler wrapping
    window.onload = logger.eventsBinding.createBindingFunction(window.onload, 'Window is loaded.');

    //6. Custom error handler
    logger.eventsBinding.setErrorHandler(function() {
        logger.log('Error! Custom handler is work.');
    });

    (function(){
        throw Error();
    })();

    logger.showHistory();
});

