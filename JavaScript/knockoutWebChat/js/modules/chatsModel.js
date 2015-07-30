/**
 * Created by anton.pashkouski on 30.07.2015.
 */
define(['knockout', 'dataService'], function(ko, service){

    function MenuItem(name, itemsCount) {
        this.name = name;
        this.itemsCount = itemsCount;
    }

    function ChatsModel() {
        var self = this;

        self.contacts = ko.observableArray(service.getContacts());
        self.privateChats = ko.observableArray(service.getPrivateChats());
        self.publicChat = ko.observableArray(service.getPublicChats());
        self.menuItems =  [
            new MenuItem('Contacts ', self.contacts().length),
            new MenuItem('Private chats', self.privateChats().length),
            new MenuItem('Public chats', self.publicChat().length)
        ];
    }

    return ChatsModel;
});