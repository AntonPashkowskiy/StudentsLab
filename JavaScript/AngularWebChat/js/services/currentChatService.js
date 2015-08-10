/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function CurrentChatService($q, $serverEmulator) {
        var self = this;
        var chatChangesObservers = [];

        var notifyAllAboutChanges = function(information) {
            chatChangesObservers.forEach(function(observer) {
                observer.update(information);
            });
        };

        self.attachToChatChanges = function(observer) {
            if (typeof observer.update === 'function') {
                chatChangesObservers.push(observer);
            }
        };

        self.createChat = function(accountId, interlocutorAccountId) {
            var deferred = $q.defer();
            var informationAboutChat = $serverEmulator.createChat(accountId, interlocutorAccountId);

            if (informationAboutChat) {
                deferred.resolve();
                notifyAllAboutChanges(informationAboutChat);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.startChat = function(charId) {
            var deferred = $q.defer();
            var informationAboutChat = $serverEmulator.getInformationAboutChat(charId);

            if (informationAboutChat) {
                deferred.resolve();
                notifyAllAboutChanges(informationAboutChat);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.getMessages = function(chatId) {
            var deferred = $q.defer();
            var messages = $serverEmulator.getMessages(chatId);

            if (messages) {
                deferred.resolve(messages);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.sendMessage = function(chatId, senderAccountId, messageText) {
            var deferred = $q.defer();
            var success = $serverEmulator.sendMessage(chatId, senderAccountId, messageText);

            if (success) {
                deferred.resolve();
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };
    }

    var app = angular.module('ChatApp');
    app.service('$currentChatService', ['$q', '$serverEmulator', CurrentChatService]);
})();