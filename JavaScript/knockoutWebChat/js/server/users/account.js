/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(
    function() {
        'use strict';
        
        function Account(
            accountId,
            accountUser,
            accountPassword
        ) {
            this.accountId = accountId;
            this.accountUser = accountUser;
            this.accountPassword = accountPassword;
            this.onlineStatus = false;
            this.contactsAccounts = [];
            this.publicChats = [];
            this.privateChats = [];
            this.notifications = [];
            this.observerOfNotifications = null;
        }

        return Account;
    }
);