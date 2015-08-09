/**
 * Created by Антон on 09.08.2015.
 */
(function(){
    'use strict';

    function ServerEmulator() {
        var self = this;

        self.createAccount = function(firstName, lastName, login, password) {
            return {
                accountId: 123,
                firstName: firstName,
                lastName: lastName,
                login: login,
                photoSrc: '../img/default.jpg'
            };
        };

        self.logon = function(login, password) {
            return {
                accountId: 123,
                firstName: 'Jack',
                lastName: 'Krouford',
                login: 'Himera',
                photoSrc: '../img/default.jpg'
            };
        };

        self.logout = function() {
            return true;
        };

        self.getContacts = function(accountId) {
            return [
                {accountId: 0, photoSrc: '../img/default.jpg', contactName: 'Vasilii Kern', onlineStatus: 'Online'},
                {accountId: 1, photoSrc: '../img/default.jpg', contactName: 'Search Adaptation', onlineStatus: 'Online'},
                {accountId: 2, photoSrc: '../img/default.jpg', contactName: 'Vallgalla', onlineStatus: 'Online'},
                {accountId: 3, photoSrc: '../img/default.jpg', contactName: 'Kerunesh', onlineStatus: 'Online'},
                {accountId: 4, photoSrc: '../img/default.jpg', contactName: 'Anton Vita', onlineStatus: 'Online'},
                {accountId: 5, photoSrc: '../img/default.jpg', contactName: 'Anton Core', onlineStatus: 'Online'}
            ];
        };

        self.getPrivateChats = function(accountId) {
            return [
                {chatId: 0, photoSrc: '../img/default.jpg', contactName: 'Ecma Terenss', onlineStatus: 'Online'},
                {chatId: 1, photoSrc: '../img/default.jpg', contactName: 'Sherlock Holms', onlineStatus: 'Online'},
                {chatId: 2, photoSrc: '../img/default.jpg', contactName: 'Doctor Vatson', onlineStatus: 'Online'},
                {chatId: 3, photoSrc: '../img/default.jpg', contactName: 'Nikitin Costya', onlineStatus: 'Online'},
                {chatId: 4, photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski', onlineStatus: 'Online'},
                {chatId: 5, photoSrc: '../img/default.jpg', contactName: 'Lol', onlineStatus: 'Online'}
            ];
        };

        self.getPublicChats = function(accountId) {
            return [
                {chatId: 6, photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski1', interlocutorsCount: '5'},
                {chatId: 7, photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski2', interlocutorsCount: '4'},
                {chatId: 8, photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski3', interlocutorsCount: '3'},
                {chatId: 9, photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski4', interlocutorsCount: '2'},
                {chatId: 10, photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski5', interlocutorsCount: '2'},
                {chatId: 11, photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski6', interlocutorsCount: '6'}
            ];
        };

        self.removeContact = function(accountId, contactAccountId) {
            return true;
        };

        self.removeChat = function(accountId, chatId) {
            return true;
        };

        self.createChat = function(accountId, interlocutorAccountId) {
            return {
                type: 'created',
                chatId: 123,
                interlocutors: [{
                    login: 'Anton',
                    photoSrc: '../img/default.jpg',
                    contactName: 'Created contact',
                    onlineStatus: 'Online'
                }]
            };
        };

        self.getInformationAboutChat = function(chatId) {
            return {
                type: 'existed',
                chatId: 123,
                interlocutors: [{login: 'Anton'},{login: 'Leha'}]
            };
        };

        self.getMessages = function(chatId) {
            return [
                {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'},
                {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'},
                {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'},
                {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'},
                {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'}
            ];
        };

        self.sendMessage = function(chatId) {
            return true;
        };

        self.getNotifications = function() {
            return [
                'Notification 1',
                'Notification 2',
                'Notification 3',
                'Notification 4',
                'Notification 5'
            ];
        };

        self.getInformationForSearch = function() {
            return [
                {type: 'contact', accountId: 123, photoSrc: '../img/default.jpg', resultName: 'Anton Pashkouski', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 124, photoSrc: '../img/default.jpg', resultName: 'Andrei Buzuma', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 125, photoSrc: '../img/default.jpg', resultName: 'Anatolii Vasgura', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 126, photoSrc: '../img/default.jpg', resultName: 'Misha Peshko', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 127, photoSrc: '../img/default.jpg', resultName: 'Mike Ronalds', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 128, photoSrc: '../img/default.jpg', resultName: 'Leonid Varo', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 129, photoSrc: '../img/default.jpg', resultName: 'Emhur Var Emreis', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 130, photoSrc: '../img/default.jpg', resultName: 'Gerald from Rivia', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 131, photoSrc: '../img/default.jpg', resultName: 'Natalia Mireyco', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 132, photoSrc: '../img/default.jpg', resultName: 'Roma Grinowskiy', resultAdditionalInformation: 'Online'},
                {type: 'public chat', chatId: 133, photoSrc: '../img/default.jpg', resultName: 'Alexei Buzuma', resultAdditionalInformation: '5'}
            ];
        };
    }

    var app = angular.module('ChatApp');
    app.service('$serverEmulator', [ServerEmulator]);
})();