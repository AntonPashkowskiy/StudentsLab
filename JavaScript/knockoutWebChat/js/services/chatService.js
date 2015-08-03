/**
 * Created by Антон on 02.08.2015.
 */
define(
    ['server'],

    function(server) {
        'use strict';

        var getAllMessages = function(chatId, success, error) {
            var messages = server.getAllMessagesFromChat(chatId);

            if (messages) {
                if (typeof success === 'function') {
                    success(messages);
                }
            } else {
                if (typeof error === 'function') {
                    error();
                }
            }
        };

        var sendMessage = function(chatId, authorAccountId, messageText, error) {
            var isCame = server.sendMessageToChat(chatId, authorAccountId, messageText);

            if (!isCame && typeof error === 'function') {
                error();
            }
        };

        return {
            getAllMessages: getAllMessages,
            sendMessage: sendMessage
        }
    }
);
