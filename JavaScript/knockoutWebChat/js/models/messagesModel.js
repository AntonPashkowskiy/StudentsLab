/**
 * Created by anton.pashkouski on 31.07.2015.
 */
define(['knockout', 'chatService'], function(ko, service){
    'use strict';

    function MessagesModel() {
        var self = this;

        self.userInformation = null;
        self.currentChatId = ko.observable(undefined);
        self.interlocutorsInformation = ko.observableArray([]);
        self.message = ko.observable('');
        self.messages = ko.observableArray([]);
        self.recipients = ko.observableArray([]);

        self.functionSelectingOfChat = function(chatId, interlocutors) {
            self.messages([]);
            self.currentChatId(self.currentChatId);
            self.interlocutorsInformation(interlocutors);

            var recepients = interlocutors.map(function(interlocutor) {
                return interlocutor.login;
            });
            recepients.push(self.userInformation.login);
            self.recipients(recepients);

            self.getChatsServiceInformation();
        };

        self.send = function() {
            if (!self.userInformation || !self.currentChatId) {
                self.message('');
                return;
            }
            service.sendMessage(self.currentChatId, self.userInformation.accountId, self.message());
            self.messages.push({
                senderName: [self.userInformation.firstName, self.userInformation.lastName].join(' '),
                photo: self.userInformation.photoPath,
                messageText: self.message()
            });
            self.message('');
        };

        self.getChatsServiceInformation = function() {
            service.getAllMessages(self.currentChatId(), self.receiveMessages.bind(this))
        };

        self.checkState = function(authorizationStatus) {
            if (!authorizationStatus) {
                self.interlocutorsInformation([]);
                self.message('');
                self.messages([]);
                self.currentChatId(undefined);
            }
        };

        var transformInterlocutorInformation = function(user) {
            return {
                senderName: [user.firstName, user.lastName].join,
                photo: user.photoPath
            }
        };

        var getAuthorInformation = function(accountId) {
            if (accountId === self.userInformation.accountId) {
                return transformInterlocutorInformation(self.userInformation);
            }

            var interlocutors = self.interlocutorsInformation();

            for (var i = 0; i < interlocutors.length; i++) {
                if (interlocutors.accountId === accountId) {
                    return transformInterlocutorInformation(interlocutors[i]);
                }
            }
        };

        self.receiveMessages = function(messages) {
            var author;
            var result = [];

            for (var i = 0; i < messages.length; i++) {
                author = getAuthorInformation(messages[i].authorAccountId);
                author.messageText = messages[i].messageText;
                result.push(author);
            }

            self.messages(result);
        };
    }

    return MessagesModel;
});