/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(
    ['user', 'message', 'account', 'privateChat', 'publicChat'],
    function(User, Message, Account, PrivateChat, PublicChat){
        'use strict';

        var userList = [
            { accountId: 1, user:  new User('Anton', 'Pashkouski', 'pashkouski.anton'), password: '12345' },
            { accountId: 2, user:  new User('Victor', 'Makoed', 'makoed.victor'), password: '12345' },
            { accountId: 3, user:  new User('Alexei', 'Buzuma', 'buzuma.alexei'), password: '12345' },
            { accountId: 4, user:  new User('Dmitrii', 'Pendo', 'pendo.dmitrii'), password: '12345' },
            { accountId: 5, user:  new User('Uriy', 'Zaycev', 'Zajakun'), password: '12345' },
            { accountId: 6, user:  new User('Misha', 'Peshko', 'peshko.misha'), password: '12345' }
        ];

        var accountList = [
            new Account(1, userList[0].user,
                [
                    { contact: userList[1].user, isOnline: userList[1].isOnline },
                    { contact: userList[2].user, isOnline: userList[2].isOnline },
                    { contact: userList[3].user, isOnline: userList[3].isOnline }
                ],
                'img/pashkouski.anton.jpg',
                [1],
                [1, 2, 3]
            ),
            new Account(2, userList[1].user,
                [
                    { contact: userList[0].user, isOnline: userList[0].isOnline }
                ],
                'img/makoed.victor.jpg',
                [1],
                [1]
            ),
            new Account(3, userList[2].user,
                [
                    { contact: userList[0].user, isOnline: userList[0].isOnline }
                ],
                'img/buzuma.alexei.jpg',
                [1],
                [2]
            ),
            new Account(4, userList[3].user,
                [
                    { contact: userList[0].user, isOnline: userList[0].isOnline }
                ],
                'img/pendo.dmitrii.jpg',
                [],
                [3]
            ),
            new Account(5, userList[4].user,
                [
                    { contact: userList[0].user, isOnline: userList[0].isOnline }
                ],
                'img/Zajakun.jpg',
                [],
                []
            ),
            new Account(6, userList[5].user,
                [
                    { contact: userList[0].user, isOnline: userList[0].isOnline }
                ],
                'img/peshko.misha.jpg',
                [],
                []
            )
        ];

        var privateChatsList = [
            new PrivateChat(1, userList[0].user, userList[1].user ),
            new PrivateChat(2, userList[0].user, userList[2].user ),
            new PrivateChat(3, userList[0].user, userList[3].user )
        ];

        var publicChatList = [
            new PublicChat(1, [userList[0].user, userList[1].user, userList[2].user])
        ];

        var getAccountById = function(id) {
            for (var i = 0; i < accountList.length; i++) {
                if (id === accountList[i].accountId) {
                    return accountList[i];
                }
            }
        };

        var authorizationRequest = function(login, password) {
            for (var i = 0; i < userList.length; i++) {
                if (userList[i].user.login === login.toString() &&
                    userList[i].password === password.toString()) {
                    userList[i].isOnline = true;
                    return getAccountById(userList[i].accountId);
                }
            }
        };

        return {
            authorizationRequest: authorizationRequest
        };
    }
);