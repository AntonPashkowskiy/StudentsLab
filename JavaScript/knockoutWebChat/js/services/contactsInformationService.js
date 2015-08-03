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

        var deleteContact = function(accountId, contactAccountId) {
            server.deleteContact(accountId, contactAccountId);
        };

        var removeUserFromPrivateChat = function(accountId, chatId) {
            server.removeUserFromPrivateChat(accountId, chatId);
        };

        var removeUserFromPublicChat = function(accountId, chatId) {
            server.removeUserFromPublicChat(accountId, chatId);
        };

        var createPrivateChat = function(accountId, interlocutorAccountId) {
            server.createPrivateChat(accountId, interlocutorAccountId);
        };

        return {
            getAllContacts: getAllContacts,
            deleteContact: deleteContact,
            removeUserFromPrivateChat: removeUserFromPrivateChat,
            removeUserFromPublicChat: removeUserFromPublicChat,
            createPrivateChat: createPrivateChat
        };
    }
);