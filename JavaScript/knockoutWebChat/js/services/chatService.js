/**
 * Created by Антон on 02.08.2015.
 */
define(
    ['server'],

    function(server) {
        'use strict';

        var getAllMessages = function(chatId, success, error) {
            var messages = server.getAllMessagesFromChat(chatId);

            if (messages && typeof success === 'function') {
                success(messages);
            } else if (typeof error === 'function') {
                error();
            }
        };

        var sendMessage = function(parameters, success, error) {
            var isCame = server.sendMessageToChat(
                parameters.chatId,
                parameters.authorAccountId,
                parameters.messageText
            );

            if (isCame && typeof success === 'function') {
                success();
            } else if (typeof error === 'function') {
                error();
            }
        };

        function delay(targetFunction, milliseconds) {
            return function() {
                var savedThis = this;
                var savedArgs = arguments;

                setTimeout(function() {
                    targetFunction.apply(savedThis, savedArgs);
                }, milliseconds);
            };
        }

        return {
            getAllMessages: delay(getAllMessages, 500),
            sendMessage: delay(sendMessage, 200)
        }
    }
);
