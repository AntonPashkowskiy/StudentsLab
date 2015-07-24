/**
 * Created by anton.pashkouski on 20.07.2015.
 */
/*
* Output handlers factory. Can create object with 3 default functions:
* 1. exceptionsHandlingFunction - function that executed when caught exception.
* 2. preprocessorFunction - function that executed before adding notation in repository.
* 3. resultsProcessingFunction - function that executed when showing history.
* It is a possible add custom handler. */

define(function() {
    'use strict';

    var constructorsList = {};
    var resultsToString = function(results) {
        if (!Array.isArray(results)) {
            return;
        }
        var resultMessage = '';

        for ( var i = 0; i < results.length; i++ ) {
            resultMessage += results[i].toString() + '\n';
        }
        return resultMessage;
    };

    function AbstractNotationsHandler(handlerName) {
        this.handlerName = handlerName;
    }

    AbstractNotationsHandler.prototype.exceptionsHandlingFunction = function(exception){};
    AbstractNotationsHandler.prototype.preprocessorFunction = function(logEntityObject){};
    AbstractNotationsHandler.prototype.resultsProcessingFunction = function(results){};
    constructorsList['Abstract'] = AbstractNotationsHandler;



    function AlertNotationsHandler(handlerName) {
        AbstractNotationsHandler.call(this, handlerName);
    }

    AlertNotationsHandler.prototype = Object.create(AbstractNotationsHandler.prototype);
    AlertNotationsHandler.prototype.constructor = AlertNotationsHandler;
    constructorsList['Alert'] = AlertNotationsHandler;

    AlertNotationsHandler.prototype.exceptionsHandlingFunction = function(exception) {
        alert(exception.name + ' : ' + exception.message);
    };

    AlertNotationsHandler.prototype.preprocessorFunction = function(logEntityObject) {
        alert(logEntityObject.toString());
    };

    AlertNotationsHandler.prototype.resultsProcessingFunction = function(results) {
        var resultMessage = resultsToString(results);
        alert(resultMessage);
    };



    function ConsoleNotationsHandler(handlerName) {
        AbstractNotationsHandler.call(this, handlerName);
    }

    ConsoleNotationsHandler.prototype = Object.create(AbstractNotationsHandler.prototype);
    ConsoleNotationsHandler.prototype.constructor = ConsoleNotationsHandler;
    constructorsList['Console'] = ConsoleNotationsHandler;

    ConsoleNotationsHandler.prototype.exceptionsHandlingFunction = function(exception) {
        console.log(exception.name + ' : ' + exception.message);
    };

    ConsoleNotationsHandler.prototype.preprocessorFunction = function(logEntityObject) {
        console.log(logEntityObject.toString());
    };

    ConsoleNotationsHandler.prototype.resultsProcessingFunction = function(results) {
        var resultMessage = resultsToString(results);
        console.log(resultMessage);
    };

    /*
    * @ argument handlerName : a one of the default handlers name (Abstract, Alert, Console)
    *   or the name of a custom handler specified */
    var createHandler = function(handlerName) {
        if (constructorsList[handlerName]) {
            return new constructorsList[handlerName](handlerName);
        }
    };

    /*
    * @ argument handlerName : the name of the new handler for factory.
    * @ argument handlerConstructor : constructor inherited from AbstractNotationsHandler*/
    var addHandlerConstructor = function(handlerName, handlerConstructor) {
        if (typeof handlerName === 'string') {
            constructorsList[handlerName] = handlerConstructor;
        }
    };

    return {
        createHandler: createHandler,
        addHandlerConstructor: addHandlerConstructor,
        AbstractNotationsHandler: AbstractNotationsHandler
    };
});