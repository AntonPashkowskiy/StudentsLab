/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    function PrivateChatsController($scope, $contactsService, $currentChatService) {
        $contactsService.getPrivateChats($scope.currentUser.accountId).then(
            function(privateChats) {
                $scope.privateChats = privateChats;
            }
        );

        $scope.removeChat = function(chat) {
            if ($scope.privateChats) {
                $contactsService.removeContact($scope.currentUser.accountId, chat.chatId).then(
                    function() {
                        var index = $scope.privateChats.indexOf(chat);
                        $scope.privateChats.splice(index, 1);
                    }
                );
            }
        };

        $scope.startChat = function(chat) {
            $currentChatService.startChat(chat.chatId);
        };

        this.update = function(informationAboutChat) {
            if (informationAboutChat.type === 'created') {
                var interlocutor = informationAboutChat.interlocutors[0];
                interlocutor.chatId = informationAboutChat.chatId;

                if ($scope.privateChats) {
                    $scope.privateChats.push(interlocutor);
                }
            }
        };

        $currentChatService.attachToChatChanges(this);
    }

    var app = angular.module('ChatApp');
    app.controller(
        'privateChatsController',
        ['$scope', '$contactsService', '$currentChatService', PrivateChatsController]
    );
})();