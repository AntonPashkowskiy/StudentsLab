/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    function PublicChatsController($scope, $contactsService, $currentChatService) {
        $contactsService.getPublicChats($scope.currentUser.accountId).then(
            function(publicChats) {
                $scope.publicChats = publicChats;
            }
        );

        $scope.removeChat = function(chat) {
            if ($scope.publicChats) {
                $contactsService.removeContact($scope.currentUser.accountId, chat.chatId).then(
                    function() {
                        var index = $scope.publicChats.indexOf(chat);
                        $scope.publicChats.splice(index, 1);
                    }
                );
            }
        };

        $scope.startChat = function(chat) {
            $currentChatService.startChat(chat.chatId);
        };

        $scope.$on('additionOfSearchResult', function(event, information) {
            if (information.type === 'public chat' && $scope.publicChats) {
                for (var i = 0; i < $scope.publicChats.length; i++) {
                    if ($scope.publicChats[i].chatId === information.chatId) {
                        return;
                    }
                }
                $scope.publicChats.push({
                    chatId: information.chatId,
                    contactName: information.resultName,
                    photoSrc: information.photoSrc,
                    interlocutorsCount: information.resultAdditionalInformation
                });
            }
        });
    }

    var app = angular.module('ChatApp');
    app.controller(
        'publicChatsController',
        ['$scope', '$contactsService', '$currentChatService', PublicChatsController]
    );
})();