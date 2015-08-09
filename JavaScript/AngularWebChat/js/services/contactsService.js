/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function ContactsService($q, $serverEmulator) {
        var self = this;
        var chatRemovesObservers = [];

        var notifyAllAboutRemoves = function(chatId) {
            chatRemovesObservers.forEach(function(observer) {
                observer.check(chatId);
            });
        };

        self.attachToChatRemoves = function(observer) {
            if (typeof observer.check === 'function') {
                chatRemovesObservers.push(observer);
            }
        };

        self.getContacts = function(accountId) {
            var deferred = $q.defer();
            var contacts = $serverEmulator.getContacts(accountId);

            if (contacts) {
                deferred.resolve(contacts);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.getPrivateChats = function(accountId) {
            var deferred = $q.defer();
            var privateChats = $serverEmulator.getPrivateChats(accountId);

            if (privateChats) {
                deferred.resolve(privateChats);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.getPublicChats = function(accountId) {
            var deferred = $q.defer();
            var publicChats = $serverEmulator.getPublicChats(accountId);

            if (publicChats) {
                deferred.resolve(publicChats);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.removeContact = function(accountId, contactAccountId) {
            var deferred = $q.defer();
            var success = $serverEmulator.removeContact(accountId, contactAccountId);

            if (success) {
                deferred.resolve();
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.removeChat = function(accountId, chatId) {
            var deferred = $q.defer();
            var success = $serverEmulator.removeChat(accountId, chatId);

            if (success) {
                notifyAllAboutRemoves(chatId);
                deferred.resolve();
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };
    }

    var app = angular.module('ChatApp');
    app.service('$contactsService', ['$q', '$serverEmulator', ContactsService]);
})();