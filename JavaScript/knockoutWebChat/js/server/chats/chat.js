/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(
    function() {
        function Chat(chatId, messagesQueueId, interlocutorsAccountsId) {
            this.chatId = chatId;
            this.messagesQueueId = messagesQueueId;
            this.interlocutorsAccountsId = interlocutorsAccountsId;
        }

        return Chat;
    }
);