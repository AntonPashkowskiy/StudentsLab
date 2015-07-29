/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(['user'], function(User){
    function Message(text, author) {
        this.text = text;
        this.date = new Date();

        this.author = (function(messageAuthor){
            if (messageAuthor instanceof User) {
                return messageAuthor;
            } else {
                return null;
            }
        })(author);
    }

    return Message;
});