/**
 * Created by anton.pashkouski on 30.07.2015.
 */
define(['knockout', 'server'], function(ko, server){
    'use strict';

    var userAccount = ko.observable(null);
    var privateChats = ko.observable(null);
    var publicChats = ko.observable(null);
    var contacts = ko.observable(null);

    var getUserName = function() {
        if (userAccount()) {
            return userAccount().user.name;
        }
        return '';
    };

    var getUserSurname = function() {
        if (userAccount()) {
            return userAccount().user.surname;
        }
        return '';
    };

    var getPhotoPath = function() {
        if (userAccount()) {
            return userAccount().user.photo;
        }
        return '';
    };

    var logon = function(login, password) {
        var account = server.authorizationRequest(login, password);


        if (account) {
            userAccount(account);
            getPrivateChats();
            getPublicChats();
            getContacts();
            return true;
        }
        return false;
    };

    var logout = function() {
        userAccount(null);
        privateChats(null);
        publicChats(null);
        // submit data to server
    };

    var getPrivateChats =  function() {
        if (userAccount()) {
            var chats = server.getPrivateChats(userAccount().privateChats);
            privateChats(chats);
            return privateChats();
        }
        return [];
    };

    var getPublicChats = function() {
        if (userAccount()) {
            var chats = server.getPublicChats(userAccount().privateChats);
            publicChats(chats);
            return publicChats();
        }
        return [];
    };

    var mapContactsFunction = function(item) {
        return {
            contactPhoto: item.contact.photo,
            contactFullName: item.contact.name + ' ' + item.contact.surname,
            isOnline: item.isOnline
        }
    };

    var getContacts = function() {
        if(userAccount()) {
            contacts(userAccount().contacts.map(mapContactsFunction));
        }
        return [];
    };

    return {
        getUserName: getUserName,
        getUserSurname: getUserSurname,
        getPhotoPath: getPhotoPath,
        getPrivateChats: privateChats,
        getPublicChats: publicChats,
        getContacts: contacts,
        logon: logon,
        logout: logout
    }
});