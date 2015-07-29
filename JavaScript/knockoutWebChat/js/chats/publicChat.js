/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(['user', 'chat'], function(User, Chat){
   function PublicChat(chatId, users, messages) {
       Chat.apply(this, [chatId, messages]);

       this.users = (function (arrayOfUsers) {
           if (Array.isArray(arrayOfUsers) &&
               arrayOfUsers.length > 0 &&
               arrayOfUsers[0] instanceof User) {
               return arrayOfUsers;
           } else {
               return [];
           }
       })(users);
   }

   return PublicChat;
});