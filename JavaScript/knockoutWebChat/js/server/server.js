/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(
    ['accountsControlSystem', 'chatsControlSystem', 'notification'],
    function(accountsControlSystem, chatsControlSystem, Notification){
        'use strict';

        // creating accounts
        (function(){
            var anton = accountsControlSystem.createAccount('Anton', 'Pashkouski', 'img/pashkouski.anton.jpg', 'anton', '12345');
            var victor = accountsControlSystem.createAccount('Victor', 'Makoed', 'img/makoed.victor.jpg', 'victor', '12345');
            var leha = accountsControlSystem.createAccount('Alexei', 'Buzuma', 'img/buzuma.alexei.jpg', 'leha', '12345');
            var dima = accountsControlSystem.createAccount('Dmitrii', 'Pendo', 'img/pendo.dmitrii.jpg', 'dima', '12345');
            var ura = accountsControlSystem.createAccount('Ura', 'Zaycev', 'img/Zajakun.jpg', 'ura', '12345');
            var misha = accountsControlSystem.createAccount('Misha', 'Peshko', 'img/peshko.misha.jpg', 'misha', '12345');
            var avChat = chatsControlSystem.createChat([anton, victor]);
            var alChat = chatsControlSystem.createChat([anton, leha]);
            var admChat = chatsControlSystem.createChat([anton, dima, misha]);
            var alvChat = chatsControlSystem.createChat([anton, leha, victor]);
            accountsControlSystem.addContact(anton, victor);
            accountsControlSystem.addContact(anton, misha);
            accountsControlSystem.addContact(anton, leha);
            accountsControlSystem.addContact(leha, misha);
            accountsControlSystem.addPrivateChat([anton, victor], avChat);
            accountsControlSystem.addPrivateChat([anton, leha], alChat);
            accountsControlSystem.addPublicChat([anton, dima, misha], admChat, 'img/default.jpg');
            accountsControlSystem.addPublicChat([anton, leha, victor], alvChat, 'img/default.jpg');
        })();

        var logon = function(login, password) {
            var accountId = accountsControlSystem.logon(login, password);

            if (accountId !== -1) {
                var userInformation = accountsControlSystem.getMainAccountsInformation([accountId]);
                return userInformation[0];
            }
        };

        var logout = function(accountId) {
            accountsControlSystem.logout(accountId);
        };

        var getContacts = function(accountId) {
            var contactsAccountsId = accountsControlSystem.getContacts(accountId);
            return accountsControlSystem.getMainAccountsInformation(contactsAccountsId);
        };

        var getInterlocutorsId = function(accountId, chatId) {
            var interlocutors = chatsControlSystem.getInterlocutorsAccountsId(chatId);

            if (!interlocutors) {
                return;
            }
            return interlocutors.filter(function(item){
                return item !== accountId;
            });
        };

        var getInterlocutorsInformation = function(accountId, chatsId) {
            var interlocutorsId = [];
            var interlocutorsInformation = [];
            var result = [];

            for (var i = 0; i < chatsId.length; i++) {
                interlocutorsId = getInterlocutorsId(accountId, chatsId[i]);
                interlocutorsInformation = accountsControlSystem.getMainAccountsInformation(interlocutorsId);

                if (interlocutorsInformation) {
                    for (var j = 0; j < interlocutorsInformation.length; j++) {
                        interlocutorsInformation[j].chatId = chatsId[i];
                    }
                    result = result.concat(interlocutorsInformation);
                } else {
                    return;
                }
            }
            return result;
        };

        var getPrivateChats = function(accountId) {
            var privateChatsId = accountsControlSystem.getPrivateChats(accountId);

            if (privateChatsId) {
                return getInterlocutorsInformation(accountId, privateChatsId);
            }
        };

        var getPublicChats = function(accountId) {
            var publicChats = accountsControlSystem.getPublicChats(accountId);
            var interlocutorsId = [];
            var interlocutorsInformation = [];

            if (publicChats) {
                for (var i = 0; i < publicChats.length; i++) {
                    interlocutorsId = getInterlocutorsId(accountId, publicChats[i].chatId);
                    interlocutorsInformation = accountsControlSystem.getMainAccountsInformation(interlocutorsId);
                    publicChats[i].interlocutorsInformation = interlocutorsInformation;
                }
            }
            return publicChats;
        };

        var deleteContact = function(accountId, contactAccountId) {
            accountsControlSystem.deleteContact(accountId, contactAccountId);
        };

        var removeUserFromPrivateChat = function(accountId, chatId) {
            accountsControlSystem.deletePrivateChat(accountId, chatId);
            chatsControlSystem.deleteUserFromChat(accountId, chatId);
        };

        var removeUserFromPublicChat = function(accountId, chatId) {
            accountsControlSystem.deletePublicChat(accountId, chatId);
            chatsControlSystem.deleteUserFromChat(accountId, chatId);
        };

        var createPrivateChat = function(accountId, interlocutorAccountId) {
            var accountsId = [accountId, interlocutorAccountId];
            var chatId = chatsControlSystem.createChat(accountsId);

            accountsControlSystem.addPrivateChat(accountsId, chatId);
            accountsControlSystem.addPrivateChat(interlocutorAccountId, chatId);

            return chatId;
        };

        var getAllMessagesFromChat = function(chatId) {
            return chatsControlSystem.getAllMessagesFromChat(chatId);
        };

        var sendMessageToChat = function(chatId, authorAccountId, messageText) {
            return chatsControlSystem.addMessageToChat(chatId, authorAccountId, messageText);
        };

        return {
            logon: logon,
            logout: logout,
            getContacts: getContacts,
            getPrivateChats: getPrivateChats,
            getPublicChats: getPublicChats,
            deleteContact: deleteContact,
            removeUserFromPrivateChat: removeUserFromPrivateChat,
            removeUserFromPublicChat: removeUserFromPublicChat,
            createPrivateChat: createPrivateChat,
            getAllMessagesFromChat: getAllMessagesFromChat,
            sendMessageToChat: sendMessageToChat
        };
    }
);