/**
 * Created by anton.pashkouski on 29.07.2015.
 */
require.config({
    paths: {
        'knockout': 'knockout-3.3.0',
        'jquery': 'jquery-2.1.4.min',
        'jquery-ui': 'jquery-ui.min',
        'user': 'users/user',
        'account': 'users/account',
        'chat': 'chats/chat',
        'message': 'chats/message',
        'privateChat': 'chats/privateChat',
        'publicChat': 'chats/publicChat',
        'authorizationModel': 'modules/authorizationModel',
        'chatsModel': 'modules/chatsModel',
        'messagesModel': 'modules/messagesModel',
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

            self.authorization.isAuthorized.subscribe(function() {
                self.chats.getChatsServiceInformation();
            });
        }

        ko.applyBindings(new ChatViewModel());
    }
);