/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function AccountService($q, $serverEmulator) {
        var self = this;
        var user = null;

        self.createAccount = function(firstName, lastName, login, password) {
            var deferred = $q.defer();
            user = $serverEmulator.createAccount(firstName, lastName, login, password);

            if (user) {
                deferred.resolve();
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.logon = function(login, password) {
            var deferred = $q.defer();
            user = $serverEmulator.logon(login, password);

            if (user) {
                deferred.resolve();
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.logout = function() {
            var deferred = $q.defer();
            var success = $serverEmulator.logout();

            if (success) {
                deferred.resolve();
                user = null;
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.getCurrentUser = function() {
            if (user) {
                var copy = {};

                for(var key in user) {
                    copy[key] = user[key];
                }
                return copy;
            }
        };
    }

    var app = angular.module('ChatApp');
    app.service('$accountService', ['$q', '$serverEmulator', AccountService]);
})();