/**
 * Created by Антон on 01.08.2015.
 */
define(
    ['chat', 'message', 'messagesControlSystem'],

    function(Chat, Message, messagesControlSystem) {
        var chatsList = [];

        var getUniqueChatId = function() {
            var maxId = -1;

            for (var i = 0; i < chatsList.length; i++) {
                if (chatsList[i].chatId > maxId) {
                    maxId = chatsList[i].chatId;
                }
            }
            return maxId + 1;
        };

        var getChatIndexById = function(chatId) {
            for (var i = 0; i < chatsList.length; i++) {
                if (chatsList[i].chatId === chatId) {
                    return i;
                }
            }
            return -1;
        };

        var getAccountIndexById = function(chat, accountId) {
            for (var i = 0; i < chat.interlocutorsAccountsId.length; i++) {
                if (chat.interlocutorsAccountsId[i] === accountId) {
                    return i;
                }
            }
            return -1;
        };

        var createChat = function(interlocutorsAccountsId) {
            var uniqueChatId = getUniqueChatId();
            var messagesQueueId = messagesControlSystem.createMessagesQueue();
            chatsList.push(new Chat(uniqueChatId, messagesQueueId, interlocutorsAccountsId));

            return uniqueChatId;
        };

        var deleteChat = function(chatId) {
            var chatIndex = getChatIndexById(chatId);

            if (chatIndex !== -1) {
                messagesControlSystem.deleteMessagesQueue(chatsList[chatIndex].messagesQueueId);
                chatsList.splice(chatIndex, 1);
                return true;
            }
            return false;
        };

        var deleteUserFromChat = function(userAccountId, chatId) {
            var chatIndex = getChatIndexById(chatId);

            if (chatIndex !== -1) {
                var accountIndex = getAccountIndexById(chatsList[chatIndex], userAccountId);

                if (accountIndex !== -1) {
                    chatsList[chatIndex].interlocutorsAccountsId.splice(accountIndex, 1);

                    if(chatsList[chatIndex].interlocutorsAccountsId.length <= 1) {
                        deleteChat(chatId);
                    }
                    return true;
                }
            }
            return false;
        };

        var getInterlocutorsAccountsId = function(chatId) {
            var chatIndex = getChatIndexById(chatId);

            if (chatIndex !== -1) {
                return chatsList[chatIndex].interlocutorsAccountsId.slice();
            }
        };

        var addMessageToChat = function(chatId, authorAccountId, messageText) {
            var chatIndex = getChatIndexById(chatId);

            if (chatIndex !== -1) {
                var accountIndex = getAccountIndexById(chatsList[chatIndex], authorAccountId);

                if (accountIndex !== -1) {
                    var message = new Message(authorAccountId, messageText);
                    return messagesControlSystem.addMessageToQueue(message, chatsList[chatIndex].messagesQueueId);
                }
            }
            return false;
        };

        var getAllMessagesFromChat = function(chatId) {
            var chatIndex = getChatIndexById(chatId);

            if (chatIndex !== -1) {
                return messagesControlSystem.getAllMessagesFromQueue(chatsList[chatIndex].messagesQueueId);
            }
        };

        var getLastMessagesFromChat = function(chatId, count) {
            var chatIndex = getChatIndexById(chatId);

            if (chatIndex !== -1) {
                return messagesControlSystem.getLastMessagesFromQueue(chatsList[chatIndex].messagesQueueId, count);
            }
        };

        return {
            createChat: createChat,
            deleteUserFromChat: deleteUserFromChat,
            getInterlocutorsAccountsId: getInterlocutorsAccountsId,
            addMessageToChat: addMessageToChat,
            getAllMessagesFromChat: getAllMessagesFromChat,
            getLastMessagesFromChat: getLastMessagesFromChat
        };
    }
);