/**
 * Created by anton.pashkouski on 17.07.2015.
 */
/*
* Default notes repository.
* Derivative object can be set via setLoggerRepository function.*/
define(function() {
    'use strict';

    function LoggerRepository() {
        this.repositoryArray = [];
    }

    LoggerRepository.prototype.add = function(object) {
        this.repositoryArray.push(object);
    };

    LoggerRepository.prototype.getAll = function() {
        return this.repositoryArray.slice();
    };

    return {
        LoggerRepository: LoggerRepository
    };
});
