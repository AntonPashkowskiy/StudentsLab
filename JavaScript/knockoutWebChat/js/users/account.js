/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(
    function() {
        function Account(accountId, user, contacts, photoPath, publicChats, privateChats) {
            this.accountId = accountId;
            this.user = user;
            this.contacts = contacts;
            this.publicChats = publicChats;
            this.privateChats = privateChats;
            this.photoPath = photoPath;
        }

        return Account;
    }
);