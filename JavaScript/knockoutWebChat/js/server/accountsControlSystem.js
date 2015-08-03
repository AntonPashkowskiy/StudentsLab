/**
 * Created by Антон on 01.08.2015.
 */
define(
    ['account', 'user'],

    function(Account, User) {
        'use strict';

        var accountsList = [];

        var getUniqueAccountId = function() {
            var maxId = -1;

            for (var i = 0; i < accountsList.length; i++) {
                if (accountsList[i].accountId > maxId) {
                    maxId = accountsList[i].accountId;
                }
            }
            return maxId + 1;
        };

        var getAccountIndexById = function(accountId) {
            for (var i = 0; i < accountsList.length; i++) {
                if (accountsList[i].accountId === accountId) {
                    return i;
                }
            }
            return -1;
        };

        var getAccountIndexByLogin = function(login) {
            for (var i = 0; i < accountsList.length; i++) {
                if (accountsList[i].accountUser.userLogin === login) {
                    return i;
                }
            }
            return -1;
        };

        var createAccount = function(firstName, lastName, photo, login, password) {
            var accountId = getUniqueAccountId();
            var user = new User(firstName, lastName, login, photo);
            var account = new Account(accountId, user, password);

            accountsList.push(account);
            return accountId;
        };

        var logon = function(login, password) {
            var accountIndex = getAccountIndexByLogin(login);

            if (accountIndex !== -1) {
                if (accountsList[accountIndex].accountPassword === password) {
                    accountsList[accountIndex].onlineStatus = true;
                    return accountsList[accountIndex].accountId;
                }
            }
            return -1;
        };

        var logout = function(accountId) {
            var accountIndex = getAccountIndexById(accountId);

            if (accountIndex !== -1) {
                accountsList[accountIndex].onlineStatus = false;
            }
        };

        var addContact = function(accountId, contactAccountId) {
            var accountIndex = getAccountIndexById(accountId);
            var contactAccountIndex = getAccountIndexById(contactAccountId);

            if (accountIndex !== -1 && contactAccountIndex !== -1) {
                accountsList[accountIndex].contactsAccounts.push(contactAccountId);
                return true;
            }
            return false;
        };

        var deleteContact = function(accountId, contactAccountId) {
            var accountIndex = getAccountIndexById(accountId);
            var contactAccountIndex = getAccountIndexById(contactAccountId);

            if (accountIndex !== -1 && contactAccountIndex !== -1) {
                var contactIndex = accountsList[accountIndex].contactsAccounts.indexOf(contactAccountId);

                if( contactIndex !== -1) {
                    accountsList[accountIndex].contactsAccounts.splice(contactIndex, 1);
                    return true;
                }
            }
            return false;
        };

        var addPrivateChat = function(accountsId, chatId) {
            if (Array.isArray(accountsId) && accountsId.length === 2) {
                var firstAccountIndex = getAccountIndexById(accountsId[0]);
                var secondAccountIndex = getAccountIndexById(accountsId[1]);

                if (firstAccountIndex !== -1 && secondAccountIndex !== -1) {
                    accountsList[firstAccountIndex].privateChats.push(chatId);
                    accountsList[secondAccountIndex].privateChats.push(chatId);
                    return true;
                }
            }
            return false;
        };

        var addPublicChat = function(accountsId, chatId, photo) {
            if (Array.isArray(accountsId) && accountsId.length > 2) {
                for (var i = 0; i < accountsId.length; i++) {
                    var accountIndex = getAccountIndexById(accountsId[i]);

                    if (accountIndex !== -1) {
                        accountsList[accountIndex].publicChats.push({chatId: chatId, photo: photo});
                    }
                }
                return true;
            }
            return false;
        };

        var deletePrivateChat = function(accountId, chatId) {
            var accountIndex = getAccountIndexById(accountId);

            if (accountIndex !== -1) {
                var chatIndex = accountsList[accountIndex].privateChats.indexOf(chatId);
                accountsList[accountIndex].privateChats.splice(chatIndex, 1);
                return true;
            }
            return false;
        };

        var getPublicChatIndex = function(accountIndex, chatId) {
            for (var i = 0; i < accountsList[accountIndex].publicChats.length; i++) {
                if (accountsList[accountIndex].publicChats[i].chatId === chatId) {
                    return i;
                }
            }
            return -1;
        };

        var deletePublicChat = function(accountId, chatId) {
            var accountIndex = getAccountIndexById(accountId);

            if (accountIndex !== -1) {
                var chatIndex = getPublicChatIndex(accountIndex, chatId);

                if (chatIndex !== -1) {
                    accountsList[accountIndex].publicChats.splice(chatIndex, 1);
                    return true;
                }
            }
            return false;
        };

        var getContacts = function(accountId) {
            var accountIndex = getAccountIndexById(accountId);

            if (accountIndex !== -1) {
                return accountsList[accountIndex].contactsAccounts.slice();
            }
        };

        var getPrivateChats = function(accountId) {
            var accountIndex = getAccountIndexById(accountId);

            if (accountIndex !== -1) {
                return accountsList[accountIndex].privateChats.slice();
            }
        };

        var getPublicChats = function(accountId) {
            var accountIndex = getAccountIndexById(accountId);

            if (accountIndex !== -1) {
                return accountsList[accountIndex].publicChats.slice();
            }
        };

        var getMainAccountsInformation = function(accountsId) {
            if (!Array.isArray(accountsId)) {
                return;
            }
            var result = [];

            for (var i = 0; i < accountsList.length; i++) {
                if (accountsId.indexOf(accountsList[i].accountId) !== -1) {
                    result.push({
                        accountId: accountsList[i].accountId,
                        firstName: accountsList[i].accountUser.userFirstName,
                        lastName: accountsList[i].accountUser.userLastName,
                        photoPath: accountsList[i].accountUser.userPhoto,
                        login: accountsList[i].accountUser.userLogin,
                        isOnline: accountsList[i].onlineStatus
                    });
                }
            }
            return result;
        };

        var addObserverOfNotifications = function(accountId, observer) {
            if (observer && typeof observer.update === 'function') {
                var accountIndex = getAccountIndexById(accountId);
                accountsList[accountIndex].observerOfNotifications = observer;
                return true;
            }
            return false;
        };

        var notifyAccounts = function(accountsId, notification) {
            if (!Array.isArray(accountsId)) {
                return;
            }

            for (var i = 0; i < accountsList.length; i++) {
                if (accountsId.indexOf(accountsList[i].accountId) !== -1) {
                    if (accountsList[i].onlineStatus && accountsList[i].observerOfNotifications) {
                        accountsList[i].observerOfNotifications.update(notification);
                    } else {
                        accountsList[i].notifications.push(notification);
                    }
                }
            }
        };

        var getNotifications = function(accountId) {
            var accountIndex = getAccountIndexById(accountId);

            if (accountIndex != -1) {
                return accountsList[accountIndex].notifications.slice();
            }
        };

        return {
            createAccount: createAccount,
            logon: logon,
            logout: logout,
            addContact: addContact,
            deleteContact: deleteContact,
            addPrivateChat: addPrivateChat,
            addPublicChat: addPublicChat,
            deletePrivateChat: deletePrivateChat,
            deletePublicChat: deletePublicChat,
            getContacts: getContacts,
            getPrivateChats: getPrivateChats,
            getPublicChats: getPublicChats,
            getMainAccountsInformation: getMainAccountsInformation,
            addObserverOfNotifications: addObserverOfNotifications,
            notifyAccounts: notifyAccounts,
            getNotifications: getNotifications
        };
    }
);