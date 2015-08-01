/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(
    ['users/user', 'message', 'account'],
    function(User, Message, Account){
        'use strict';

        var getAccountById = function(id) {

        };

        var authorizationRequest = function(login, password) {

        };

        var getPrivateChats = function(chatsId) {

        };

        var getPublicChats = function(chatsId) {

        };

        return {
            authorizationRequest: authorizationRequest,
            getPrivateChats: getPrivateChats,
            getPublicChats: getPublicChats
        };
    }
);