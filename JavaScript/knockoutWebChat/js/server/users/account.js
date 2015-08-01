/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(
    function() {
        'use strict';
        
        function Account(
            accountId,
            accountUser,
            contactsAccountsId,
            publicChatsId,
            privateChatsId
        ) {
            this.accountId = accountId;
            this.accountUser = accountUser;
            this.contactAccountsId = contactsAccountsId;
            this.publicChatsId = publicChatsId;
            this.privateChatsId = privateChatsId;
            this.notifications = [];
            this.notificationsService = null;
        }

        return Account;
    }
);