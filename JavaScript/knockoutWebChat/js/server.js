/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(
    ['user', 'message', 'account', 'privateChat', 'publicChat'],
    function(User, Message, Account, PrivateChat, PublicChat){
        var userList = [
            { accountId: 1, user:  new User('Anton', 'Pashkouski', 'pashkouski.anton'), password: '12345', isOnline: false },
            { accountId: 2, user:  new User('Victor', 'Makoed', 'makoed.victor'), password: '12345', isOnline: false },
            { accountId: 3, user:  new User('Alexei', 'Buzuma', 'buzuma.alexei'), password: '12345', isOnline: false },
            { accountId: 4, user:  new User('Dmitrii', 'Pendo', 'pendo.dmitrii'), password: '12345', isOnline: false },
            { accountId: 5, user:  new User('Uriy', 'Zaycev', 'Zajakun'), password: '12345', isOnline: false },
            { accountId: 6, user:  new User('Misha', 'Peshko', 'peshko.misha'), password: '12345', isOnline: false }
        ];

        var accountList = [
            new Account(1, userList[0].user,
                [
                    userList[1].user,
                    userList[2].user,
                    userList[3].user
                ],
                'somePhotoPath',
                [1],
                [1, 2, 3]
            ),
            new Account(2, userList[1].user,
                [
                    userList[0].user
                ],
                'somePhotoPath',
                [1],
                [1]
            ),
            new Account(3, userList[2].user,
                [
                    userList[0].user
                ],
                'somePhotoPath',
                [1],
                [2]
            ),
            new Account(4, userList[3].user,
                [
                    userList[0].user
                ],
                'somePhotoPath',
                [],
                [3]
            ),
            new Account(5, userList[4].user,
                [
                    userList[0].user
                ],
                'somePhotoPath',
                [],
                []
            ),
            new Account(6, userList[5].user,
                [
                    userList[0].user
                ],
                'somePhotoPath',
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
                    return getAccountById(userList[i].accountId);
                }
            }
        };

        return {
            authorizationRequest: authorizationRequest
        };
    }
);