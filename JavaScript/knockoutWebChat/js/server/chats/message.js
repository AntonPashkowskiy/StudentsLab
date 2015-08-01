/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(
    function() {
        function Message(authorAccountId, messageText) {
            this.authorAccountId = authorAccountId;
            this.messageText = messageText;
            this.date = new Date();
        }

        return Message;
    }
);