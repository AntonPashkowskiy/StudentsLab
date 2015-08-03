/**
 * Created by Антон on 02.08.2015.
 */
define(
    ['server'],

    function(server) {
        'use strict';

        var getAllContacts = function(accountId, success, error) {
            if (typeof success === 'function') {
                var contacts = server.getContacts(accountId);
                var privateChats = server.getPrivateChats(accountId);
                var publicChats = server.getPublicChats(accountId);

                if (contacts && privateChats && publicChats) {
                    success(contacts, privateChats, publicChats);
                } else if (typeof error === 'function') {
                    error();
                }
            }
        };

        var deleteContact = function(parameters, success, error) {
            var deletingCompleted = server.deleteContact(parameters.accountId, parameters.contactAccountId);

            if (deletingCompleted && typeof success === 'function') {
                success();
            } else if (typeof error === 'function') {
                error();
            }
        };

        var removeUserFromPrivateChat = function(parameters, success, error) {
            var removingCompleted = server.removeUserFromPrivateChat(parameters.accountId, parameters.chatId);

            if (removingCompleted && typeof success === 'function') {
                success();
            } else if (error === 'function') {
                error();
            }
        };

        var removeUserFromPublicChat = function(parameters, success, error) {
            var removingCompleted = server.removeUserFromPublicChat(parameters.accountId, parameters.chatId);

            if (removingCompleted && typeof success === 'function') {
                success();
            } else if (error === 'function') {
                error();
            }
        };

        var createPrivateChat = function(parameters, success, error) {
            var chatId = server.createPrivateChat(parameters.accountId, parameters.interlocutorAccountId);

            if (chatId !== undefined && typeof success === 'function') {
                success(chatId);
            } else if (error === 'function') {
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
            getAllContacts: delay(getAllContacts, 400),
            deleteContact: delay(deleteContact, 300),
            removeUserFromPrivateChat: delay(removeUserFromPrivateChat, 200),
            removeUserFromPublicChat: delay(removeUserFromPublicChat, 200),
            createPrivateChat: delay(createPrivateChat, 200)
        };
    }
);