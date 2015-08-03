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
        'chatsModel': 'models/chatsModel',
        'messagesModel': 'models/messagesModel',
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
        'chatsModel',
        'messagesModel',
        'custom-bindings'
    ],

    function(server, ko, $, AuthorizationModel, ChatsModel, MessagesModel ) {
        'use strict';

        function ChatViewModel() {
            var self = this;
            self.authorization = new AuthorizationModel();
            self.chats = new ChatsModel();
            self.messages = new MessagesModel();

            self.authorization.isAuthorized.subscribe(function(newValue) {
                self.chats.userInformation = self.authorization.userInformation();
                self.messages.userInformation = self.authorization.userInformation();
                self.chats.functionSelectingOfChat = self.messages.functionSelectingOfChat.bind(self.messages);
                self.chats.getChatsServiceInformation();
                self.messages.checkState(newValue);
            });
        }

        ko.applyBindings(new ChatViewModel());
    }
);