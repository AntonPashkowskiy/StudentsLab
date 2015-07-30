/**
 * Created by anton.pashkouski on 30.07.2015.
 */
define(['knockout', 'dataService'], function(ko, service){

    function MenuItem(name, items) {
        this.name = name;
        this.items = items;
    }

    function ChatsModel() {
        var self = this;

        self.contacts = ko.observableArray([]);
        self.privateChats = ko.observableArray([]);
        self.publicChat = ko.observableArray([]);

        self.menuItems =  ko.observableArray([
            new MenuItem('Contacts ', self.contacts),
            new MenuItem('Private chats', self.privateChats),
            new MenuItem('Public chats', self.publicChat)
        ]);

        self.getChatsServiceInformation = function() {
            var privateChatsArray = service.getPrivateChats();
            var publicChatsArray = service.getPublicChats();
            var contactsArray = service.getContacts();

            self.privateChats(privateChatsArray);
            self.publicChat(publicChatsArray);
            self.contacts(contactsArray);
        };
    }

    return ChatsModel;
});