/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(['message'], function(Message){
    function Chat(chatId, messages) {
        this.chatId = chatId;

        this.messages = (function(arrayOfMessages){
            if (Array.isArray(arrayOfMessages) &&
                arrayOfMessages.length  > 0 &&
                arrayOfMessages[0] instanceof Message) {
                return arrayOfMessages;
            } else {
                return [];
            }
        })(messages);
    }

    return Chat;
});