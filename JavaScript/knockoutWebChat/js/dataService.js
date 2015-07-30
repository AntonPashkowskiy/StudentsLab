/**
 * Created by anton.pashkouski on 30.07.2015.
 */
define(['server'], function(server){
    'use strict';

    var userAccount = null;

    var getUserName = function() {
        if (userAccount) {
            return userAccount.user.name;
        } else {
            return '';
        }
    };

    var getUserSurname = function() {
        if (userAccount) {
            return userAccount.user.surname;
        } else {
            return '';
        }
    };

    var getPhotoPath = function() {
        if (userAccount) {
            return userAccount.photoPath;
        } else {
            return '';
        }
    };

    var logon = function(login, password) {
        var account = server.authorizationRequest(login, password);

        if (account) {
            userAccount = account;
            return true;
        }
        return false;
    };

    var logout = function() {
        userAccount = null;
    };

    return {
        getUserName: getUserName,
        getUserSurname: getUserSurname,
        getPhotoPath: getPhotoPath,
        logon: logon,
        logout: logout
    }
});