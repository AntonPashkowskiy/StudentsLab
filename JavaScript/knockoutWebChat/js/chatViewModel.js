/**
 * Created by anton.pashkouski on 29.07.2015.
 */
require.config({
    paths: {
        'knockout': 'knockout-3.3.0',
        'jquery': 'jquery-2.1.4.min',
        'user': 'users/user',
        'account': 'users/account',
        'chat': 'chats/chat',
        'message': 'chats/message',
        'privateChat': 'chats/privateChat',
        'publicChat': 'chats/publicChat',
        'authorizationModel': 'modules/authorizationModel',
        'chatsModel': 'modules/chatsModel',
        'custom-bindings': 'bindings/customBindings'
    }
});

define(
    [   'server',
        'knockout',
        'jquery',
        'authorizationModel',
        'chatsModel',
        'custom-bindings'
    ],

    function(server, ko, $, AuthorizationModel, ChatsModel ) {
        'use strict';

        function ChatViewModel() {
            this.authorization = new AuthorizationModel();
            this.chats = new ChatsModel();
        }

        ko.applyBindings(new ChatViewModel());
    }
);