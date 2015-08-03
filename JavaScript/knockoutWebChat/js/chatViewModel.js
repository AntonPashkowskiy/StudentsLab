/**
 * Created by anton.pashkouski on 29.07.2015.
 */
require.config({
    paths: {
        'knockout': 'knockout-3.3.0',
        'jquery': 'jquery-2.1.4.min',
        'jquery-ui': 'jquery-ui.min',
        'user': 'server/users/user',
        'account': 'server/users/account',
        'chat': 'server/chats/chat',
        'message': 'server/chats/message',
        'notification': 'server/chats/notification',
        'messagesControlSystem': 'server/messagesControlSystem',
        'chatsControlSystem': 'server/chatsControlSystem',
        'accountsControlSystem': 'server/accountsControlSystem',
        'server': 'server/server',
        'authorizationModel': 'models/authorizationModel',
        'contactsModel': 'models/contactsModel',
        'chatModel': 'models/chatModel',
        'authorizationService': 'services/authorizationService',
        'chatService': 'services/chatService',
        'contactsInformationService': 'services/contactsInformationService',
        'notificationService': 'services/notificationsService',
        'custom-bindings': 'bindings/customBindings'
    }
});

define(
    [   'server',
        'knockout',
        'jquery',
        'authorizationModel',
        'contactsModel',
        'chatModel',
        'custom-bindings'
    ],

    function(server, ko, $, AuthorizationModel, ContactsModel, ChatModel ) {
        'use strict';

        function ChatViewModel() {
            var self = this;
            self.authorization = new AuthorizationModel();
            self.contacts = new ContactsModel();
            self.chat = new ChatModel();

            self.authorization.isAuthorized.subscribe(function(newValue) {
                self.contacts.userInformation = self.authorization.userInformation();
                self.chat.userInformation = self.authorization.userInformation();
                self.contacts.functionSelectingOfChat = self.chat.functionSelectingOfChat.bind(self.chat);
                self.contacts.getChatsServiceInformation();
                self.chat.changeState(newValue);
            });
        }

        ko.applyBindings(new ChatViewModel());
    }
);