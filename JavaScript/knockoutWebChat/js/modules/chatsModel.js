/**
 * Created by anton.pashkouski on 30.07.2015.
 */
define(['knockout', 'dataService'], function(ko, service){
    'use strict';

    function ChatsModel() {
        var self = this;

        self.contacts = ko.observableArray([]);
        self.privateChats = ko.observableArray([]);
        self.publicChats = ko.observableArray([]);

        self.getChatsServiceInformation = function() {
            var privateChatsArray = service.getPrivateChats();
            var publicChatsArray = service.getPublicChats();
            var contactsArray = service.getContacts();

            self.publicChats(publicChatsArray);
            self.contacts(contactsArray);
            self.privateChats(privateChatsArray);
        };

        self.removeContact = function(contact) {

        };

        self.removePrivateChat = function(chat) {

        };

        self.removePublicChat = function(chat) {

        };

        self.startPrivateChat = function(contact) {

        };

        self.selectPrivateChat = function(chat) {

        };

        self.selectPublicChat = function(chat) {

        };
    }

    return ChatsModel;
});