/**
 * Created by anton.pashkouski on 30.07.2015.
 */
define(['knockout', 'server/server'], function(ko, server){
    'use strict';

    var userAccount = ko.observable(null);

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
            return true;
        }
        return false;
    };

    var logout = function() {
        userAccount(null);
        // submit data to server
    };

    var getPrivateChats =  function() {
        if (userAccount()) {
            return server.getPrivateChats(userAccount().privateChats);
        }
        return [];
    };

    var getPublicChats = function() {
        if (userAccount()) {
            return server.getPublicChats(userAccount().privateChats);
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
            return userAccount().contacts.map(mapContactsFunction);
        }
        return [];
    };

    return {
        getUserName: getUserName,
        getUserSurname: getUserSurname,
        getPhotoPath: getPhotoPath,
        getPrivateChats: getPrivateChats,
        getPublicChats: getPublicChats,
        getContacts: getContacts,
        logon: logon,
        logout: logout
    }
});