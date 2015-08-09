/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function CurrentChatService($q) {
        var self = this;
        var chatChangesObservers = [];

        var notifyAll = function(information) {
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
            //request to server
            var informationAboutChat = {
                type: 'created',
                chatId: 123,
                interlocutors: [{
                        login: 'Anton',
                        photoSrc: '../img/default.jpg',
                        contactName: 'Created contact',
                        onlineStatus: 'Online'
                    }
                ]
            };

            if (informationAboutChat) {
                deferred.resolve();
                notifyAll(informationAboutChat);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.startChat = function(charId) {
            var deferred = $q.defer();
            //request to server
            var informationAboutChat = {
                type: 'existed',
                chatId: 123,
                interlocutors: [{login: 'Anton'},{login: 'Leha'}]
            };

            if (informationAboutChat) {
                deferred.resolve();
                notifyAll(informationAboutChat);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.getMessages = function(chatId) {
            var deferred = $q.defer();
            //request to server
            var messages = [
                {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'},
                {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'},
                {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'},
                {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'},
                {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'}
            ];

            if (messages) {
                deferred.resolve(messages);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.sendMessage = function(chatId) {
            var deferred = $q.defer();

            //request to server
            var success = true;

            if (success) {
                deferred.resolve();
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };
    }

    var app = angular.module('ChatApp');
    app.service('$currentChatService', ['$q', CurrentChatService]);
})();