/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(
    ['user', 'message', 'account', 'privateChat', 'publicChat'],
    function(User, Message, Account, PrivateChat, PublicChat){
        'use strict';

        var userList = [
            { accountId: 1, user:  new User('Anton', 'Pashkouski', 'pashkouski.anton', 'img/pashkouski.anton.jpg'), password: '12345' },
            { accountId: 2, user:  new User('Victor', 'Makoed', 'makoed.victor', 'img/makoed.victor.jpg'), password: '12345' },
            { accountId: 3, user:  new User('Alexei', 'Buzuma', 'buzuma.alexei', 'img/buzuma.alexei.jpg'), password: '12345' },
            { accountId: 4, user:  new User('Dmitrii', 'Pendo', 'pendo.dmitrii', 'img/pendo.dmitrii.jpg'), password: '12345' },
            { accountId: 5, user:  new User('Uriy', 'Zaycev', 'Zajakun', 'img/Zajakun.jpg'), password: '12345' },
            { accountId: 6, user:  new User('Misha', 'Peshko', 'peshko.misha', 'img/peshko.misha.jpg'), password: '12345' }
        ];

        var accountList = [
            new Account(1, userList[0].user,
                [
                    { contact: userList[1].user, isOnline: userList[1].isOnline },
                    { contact: userList[2].user, isOnline: userList[2].isOnline },
                    { contact: userList[3].user, isOnline: userList[3].isOnline }
                ],
                [1],
                [1, 2, 3]
            ),
            new Account(2, userList[1].user,
                [
                    { contact: userList[0].user, isOnline: userList[0].isOnline }
                ],
                [1],
                [1]
            ),
            new Account(3, userList[2].user,
                [
                    { contact: userList[0].user, isOnline: userList[0].isOnline }
                ],
                [1],
                [2]
            ),
            new Account(4, userList[3].user,
                [
                    { contact: userList[0].user, isOnline: userList[0].isOnline }
                ],
                [],
                [3]
            ),
            new Account(5, userList[4].user,
                [
                    { contact: userList[0].user, isOnline: userList[0].isOnline }
                ],
                [],
                []
            ),
            new Account(6, userList[5].user,
                [
                    { contact: userList[0].user, isOnline: userList[0].isOnline }
                ],
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

        var getPrivateChats = function(chatsId) {
            return [
                { chatId:  1, chatName: 'Makoed Victor', isOnline: true, photo: 'img/makoed.victor.jpg' },
                { chatId:  2, chatName: 'Buzuma Alexei', isOnline: true, photo: 'img/buzuma.alexei.jpg' },
                { chatId:  3, chatName: 'Pendo Dmitrii', isOnline: true, photo: 'img/pendo.dmitrii.jpg' }
            ]
        };

        var getPublicChats = function(chatsId) {
            return [
                {
                    chatId: 1,
                    chatName: 'Great talking',
                    photo: 'img/default.jpg',
                    members: ['pashkouski.anton', 'makoed.victor', 'buzuma.alexei']
                }
            ];
        };

        return {
            authorizationRequest: authorizationRequest,
            getPrivateChats: getPrivateChats,
            getPublicChats: getPublicChats
        };
    }
);