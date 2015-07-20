/**
 * Created by anton.pashkouski on 20.07.2015.
 */
Logger.handlers = (function(){
    'use strict';

    var constructorsList = [];
    var resultsToString = function(results) {
        var resultMessage = '';

        for ( var i = 0; i < results.length; i++ ) {
            resultMessage += results[i].toString() + '\n';
        }
        return resultMessage;
    };

    function AbstractEntryHandler(handlerName) {
        this.handlerName = handlerName;
    }

    AbstractEntryHandler.prototype.exceptionsHandlingFunction = function(exception){};
    AbstractEntryHandler.prototype.addingProcessingFunction = function(logEntryObject){};
    AbstractEntryHandler.prototype.resultsProcessingFunction = function(results){};
    constructorsList['Abstract'] = AbstractEntryHandler;



    function AlertEntryHandler(handlerName) {
        AbstractEntryHandler.call(this, handlerName);
    }

    AlertEntryHandler.prototype = Object.create(AbstractEntryHandler.prototype);
    AlertEntryHandler.prototype.constructor = AlertEntryHandler;
    constructorsList['Alert'] = AlertEntryHandler;

    AlertEntryHandler.prototype.exceptionsHandlingFunction = function(exception) {
        alert(exception.name + ' : ' + exception.message);
    };

    AlertEntryHandler.prototype.addingProcessingFunction = function(logEntryObject) {
        alert(logEntryObject.toString());
    };

    AlertEntryHandler.prototype.resultsProcessingFunction = function(results) {
        var resultMessage = resultsToString(results);
        alert(resultMessage);
    };



    function ConsoleEntryHandler(handlerName) {
        AbstractEntryHandler.call(this, handlerName);
    }

    ConsoleEntryHandler.prototype = Object.create(AbstractEntryHandler.prototype);
    ConsoleEntryHandler.prototype.constructor = ConsoleEntryHandler;
    constructorsList['Console'] = ConsoleEntryHandler;

    ConsoleEntryHandler.prototype.exceptionsHandlingFunction = function(exception) {
        console.log(exception.name + ' : ' + exception.message);
    };

    ConsoleEntryHandler.prototype.addingProcessingFunction = function(logEntryObject) {
        console.log(logEntryObject.toString());
    };

    ConsoleEntryHandler.prototype.resultsProcessingFunction = function(results) {
        var resultMessage = resultsToString(results);
        console.log(resultMessage);
    };



    var createHandler = function(handlerName) {
        if (constructorsList[handlerName] !== undefined) {
            return new constructorsList[handlerName](handlerName);
        }
    };

    var addHandlerConstructor = function(handlerName, handlerConstructor) {
        if (typeof handlerName === 'string' && handlerConstructor instanceof AbstractEntryHandler) {
            constructorsList[handlerName] = handlerConstructor;
        }
    };

    return {
        createHandler: createHandler,
        addHandlerConstructor: addHandlerConstructor,
        AbstractEntryHandler: AbstractEntryHandler
    };
})();