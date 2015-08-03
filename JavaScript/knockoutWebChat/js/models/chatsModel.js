/**
 * Created by anton.pashkouski on 30.07.2015.
 */
define(['knockout', 'contactsInformationService'], function(ko, service){
    'use strict';

    function ContactView(contact) {
        this.contactPhoto = contact.photoPath;
        this.contactFullName = [contact.firstName, contact.lastName].join(' ');
        this.isOnline = contact.isOnline ? 'online' : 'offline';
        this.accountId = contact.accountId;
    }

    function PrivateChatView(privateChat) {
        this.photo = privateChat.photoPath;
        this.name = [privateChat.firstName, privateChat.lastName].join(' ');
        this.login = privateChat.login;
        this.isOnline = privateChat.isOnline ? 'online' : 'offline';
        this.accountId = privateChat.accountId;
        this.chatId = privateChat.chatId;
    }

    function PublicChatView(publicChat) {
        this.photo = publicChat.photo;
        this.chatId = publicChat.chatId;
        this.interlocutors = publicChat.interlocutorsInformation;
    }

    function ChatsModel() {
        var self = this;

        self.userInformation = null;
        self.contacts = ko.observableArray([]);
        self.privateChats = ko.observableArray([]);
        self.publicChats = ko.observableArray([]);

        self.functionSelectingOfChat = null;

        self.getChatsServiceInformation = function() {
            if (self.userInformation) {
                service.getAllContacts(self.userInformation.accountId, self.setAllContacts.bind(this));
            } else {
                self.contacts([]);
                self.privateChats([]);
                self.publicChats([]);
            }
        };

        self.setAllContacts = function(contacts, privateChats, publicChats) {
            var contactsView = contacts.map(function(contact) {
                return new ContactView(contact);
            });

            var privateChatsView = privateChats.map(function(privateChat) {
                return new PrivateChatView(privateChat);
            });

            var publicChatView = publicChats.map(function(publicChat) {
                return new PublicChatView(publicChat);
            });

            self.contacts(contactsView);
            self.privateChats(privateChatsView);
            self.publicChats(publicChatView);
        };

        self.removeContact = function(contact) {
            service.deleteContact(self.userInformation.accountId, contact.accountId);
            self.contacts.remove(contact);
        };

        self.removePrivateChat = function(chat) {
            service.removeUserFromPrivateChat(self.userInformation.accountId, chat.chatId);
            self.privateChats.remove(chat);
        };

        self.removePublicChat = function(chat) {
            service.removeUserFromPublicChat(self.userInformation.accountId, chat.chatId);
            self.publicChats.remove(chat);
        };

        self.startPrivateChat = function(contact) {
            for (var i = 0; i < self.privateChats().length; i++) {
                if (self.privateChats()[i].accountId === contact.accountId) {
                    self.selectPrivateChat(self.privateChats()[i]);
                    return;
                }
            }
            var chatId = service.createPrivateChat(self.userInformation.accountId, contact.accountId);
            var newPrivateChat = {
                photo: contact.contactPhoto,
                name: contact.contactFullName,
                isOnline: contact.isOnline,
                accountId: contact.accountId,
                chatId: chatId
            };
            self.privateChats.push(newPrivateChat);
            self.selectPrivateChat(newPrivateChat);
        };

        self.selectPrivateChat = function(chat) {
            var firstAndLastName = chat.name.split(' ');
            var interlocutorInformation = {
                firstName: firstAndLastName[0],
                lastName: firstAndLastName[1],
                photoPath: chat.photo,
                login: chat.login,
                isOnline: chat.isOnline,
                accountId: chat.accountId
            };

            if (self.functionSelectingOfChat && typeof self.functionSelectingOfChat === 'function') {
                self.functionSelectingOfChat(chat.chatId, [interlocutorInformation]);
            }
        };

        self.selectPublicChat = function(chat) {
            if (self.functionSelectingOfChat && typeof self.functionSelectingOfChat === 'function') {
                self.functionSelectingOfChat(chat.chatId, [chat.interlocutors]);
            }
        };
    }

    return ChatsModel;
});