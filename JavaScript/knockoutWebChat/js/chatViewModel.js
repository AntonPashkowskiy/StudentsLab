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
        'authorizationModule': 'modules/authorizationModel'
    }
});

define(
    [   'server',
        'knockout',
        'jquery',
        'modules/authorizationModel'
    ],

    function(server, ko, $, AuthorizationModel) {
        'use strict';

        ko.bindingHandlers.fadeVisible = {
            init: function(element, valueAccessor) {
                var shouldDisplay = valueAccessor();
                $(element).toggle(shouldDisplay);
            },
            update: function(element, valueAccessor) {
                var shouldDisplay = valueAccessor();
                shouldDisplay ? $(element).fadeIn() : $(element).fadeOut();
            }
        };

        function ChatViewModel() {
            this.authorization = new AuthorizationModel();
        }

        ko.applyBindings(new ChatViewModel());
    }
);