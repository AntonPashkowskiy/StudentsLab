/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function ContactsService($q) {
        var self = this;

        self.getContacts = function(accountId) {
            var deferred = $q.defer();

            var contacts = [
                {accountId: 0, photoSrc: '../img/default.jpg', contactName: 'Vasilii Kern', onlineStatus: 'Online'},
                {accountId: 1, photoSrc: '../img/default.jpg', contactName: 'Search Adaptation', onlineStatus: 'Online'},
                {accountId: 2, photoSrc: '../img/default.jpg', contactName: 'Vallgalla', onlineStatus: 'Online'},
                {accountId: 3, photoSrc: '../img/default.jpg', contactName: 'Kerunesh', onlineStatus: 'Online'},
                {accountId: 4, photoSrc: '../img/default.jpg', contactName: 'Anton Vita', onlineStatus: 'Online'},
                {accountId: 5, photoSrc: '../img/default.jpg', contactName: 'Anton Core', onlineStatus: 'Online'}
            ];

            if (contacts) {
                deferred.resolve(contacts);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.getPrivateChats = function(accountId) {
            var deferred = $q.defer();

            var privateChats = [
                {chatId: 0, photoSrc: '../img/default.jpg', contactName: 'Ecma Terenss', onlineStatus: 'Online'},
                {chatId: 1, photoSrc: '../img/default.jpg', contactName: 'Sherlock Holms', onlineStatus: 'Online'},
                {chatId: 2, photoSrc: '../img/default.jpg', contactName: 'Doctor Vatson', onlineStatus: 'Online'},
                {chatId: 3, photoSrc: '../img/default.jpg', contactName: 'Nikitin Costya', onlineStatus: 'Online'},
                {chatId: 4, photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski', onlineStatus: 'Online'},
                {chatId: 5, photoSrc: '../img/default.jpg', contactName: 'Lol', onlineStatus: 'Online'}
            ];

            if (privateChats) {
                deferred.resolve(privateChats);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.getPublicChats = function(accountId) {
            var deferred = $q.defer();

            var publicChats = [
                {chatId: 6, photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski1', interlocutorsCount: '5'},
                {chatId: 7, photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski2', interlocutorsCount: '4'},
                {chatId: 8, photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski3', interlocutorsCount: '3'},
                {chatId: 9, photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski4', interlocutorsCount: '2'},
                {chatId: 10, photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski5', interlocutorsCount: '2'},
                {chatId: 11, photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski6', interlocutorsCount: '6'}
            ];

            if (publicChats) {
                deferred.resolve(publicChats);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.removeContact = function(accountId, contactAccountId) {
            var deferred = $q.defer();

            var success = true;

            if (success) {
                deferred.resolve();
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };

        self.removeChat = function(accountId, chatId) {
            var deferred = $q.defer();

            var success = true;

            if (success) {
                deferred.resolve();
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };
    }

    var app = angular.module('ChatApp');
    app.service('$contactsService', ['$q', ContactsService]);
})();