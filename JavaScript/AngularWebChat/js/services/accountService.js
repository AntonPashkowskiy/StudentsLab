/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function AccountService($q) {
        var self = this;
        var user = null;

        self.createAccount = function(firstName, lastName, login, password) {
            var deferred = $q.defer();

            // request to server
            user = {
                accountId: 123,
                firstName: firstName,
                lastName: lastName,
                login: login,
                photoSrc: '../img/default.jpg'
            };
            //

            if (user) {
                deferred.resolve();
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.logon = function(login, password) {
            var deferred = $q.defer();
            // request to server
            user = {
                accountId: 123,
                firstName: 'Jack',
                lastName: 'Krouford',
                login: 'Himera',
                photoSrc: '../img/default.jpg'
            };
            //

            if (user) {
                deferred.resolve();
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.logout = function() {
            var deferred = $q.defer();
            // request to server
            var isSuccess = true;

            if (isSuccess) {
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
    app.service('$accountService', ['$q', AccountService]);
})();