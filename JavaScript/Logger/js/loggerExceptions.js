/**
 * Created by anton.pashkouski on 20.07.2015.
 */
define(function() {
    'use strict';

    function IncorrectLogEntityError() {
        Error.call(this);
        this.name = 'IncorrectLogEntityError';
        this.message = 'Log entity object don\'t satisfy the contract.';
        this.stack = (new Error()).stack;
    }

    IncorrectLogEntityError.prototype = Object.create(Error.prototype);
    IncorrectLogEntityError.prototype.constructor = IncorrectLogEntityError;

    function OverrideFunctionError(functionName) {
        Error.call(this, functionName);
        this.name = 'OverrideFunctionError';
        this.functionName = functionName;
        this.message = ['Override function', this.functionName, 'don\'t satisfy the contract.'].join(' ');
        this.stack = (new Error()).stack;
    }

    OverrideFunctionError.prototype = Object.create(Error.prototype);
    OverrideFunctionError.prototype.constructor = OverrideFunctionError;

    function IncorrectLoggerArgument(argumentName) {
        Error.call(this, argumentName);
        this.name = 'IncorrectLoggerArgument';
        this.argumentName = argumentName;
        this.message = ['Argument', this.argumentName, 'is incorrect.'].join(' ');
        this.stack = (new Error()).stack;
    }

    IncorrectLoggerArgument.prototype = Object.create(Error.prototype);
    IncorrectLoggerArgument.prototype.constructor = IncorrectLoggerArgument;

    return {
        IncorrectLogEntityError: IncorrectLogEntityError,
        OverrideFunctionError: OverrideFunctionError,
        IncorrectLoggerArgument: IncorrectLoggerArgument
    };
});