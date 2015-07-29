/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(['user', 'chat'], function(User, Chat){
    function PrivateChat(chatId, firstUser, secondUser, messages) {
        Chat.apply(this, [chatId, messages]);
        this.firstUser = firstUser;
        this.secondUser = secondUser;
    }

    return PrivateChat;
});