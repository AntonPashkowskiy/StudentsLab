/**
 * Created by anton.pashkouski on 15.07.2015.
 */
MiniJSLibrary.check = (function(){
    var checkFunctions = {};

    checkFunctions.isArray = function(argument) {
        return Object.prototype.toString.call(argument) === '[object Array]';
    };

    checkFunctions.isBoolean = function(argument) {
        return typeof argument === 'boolean';
    };

    checkFunctions.isDate = function(argument) {
        return argument instanceof Date && !isNaN(argument.valueOf());
    };

    checkFunctions.isNumber = function(argument) {
        return typeof argument === 'number';
    };

    checkFunctions.isString = function(argument) {
        return typeof argument === 'string';
    };

    checkFunctions.isFunction = function(argument) {
        return typeof argument === 'function';
    };

    checkFunctions.isUndefined = function(argument) {
        return typeof argument === 'undefined';
    };

    checkFunctions.isNull = function(argument) {
        return argument === null;
    };

    return checkFunctions;
})();