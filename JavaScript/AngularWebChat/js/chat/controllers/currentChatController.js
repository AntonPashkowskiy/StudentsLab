/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    function CurrentChatController($scope, $currentChatService) {
        $scope.currentChatId = undefined;
        $scope.interlocutors = [];
        $scope.messages = [];

        $scope.currentMessageText = '';

        $scope.send = function() {
            if ($scope.currentChatId !== undefined) {
                $currentChatService.sendMessage(
                    $scope.currentChatId,
                    $scope.currentUser.accountId,
                    $scope.currentMessageText
                ).then(
                    function() {
                        $scope.messages.push({
                            senderName: $scope.currentUser.firstName + ' ' + $scope.currentUser.lastName,
                            senderPhoto: $scope.currentUser.photoSrc,
                            messageText: $scope.currentMessageText
                        });
                        $scope.currentMessageText = '';
                    }
                );
            }
        };

        this.update = function(informationAboutChat) {
            $scope.currentChatId = informationAboutChat.chatId;
            $scope.interlocutors = informationAboutChat.interlocutors.map(
                function(interlocutor) {
                    return interlocutor.login;
                }
            );
            $currentChatService.getMessages($scope.currentChatId).then(
                function(messages) {
                    $scope.messages = messages;
                }
            );
        };

        $currentChatService.attachToChatChanges(this);
    }

    var app = angular.module('ChatApp');
    app.controller('currentChatController', ['$scope', '$currentChatService', CurrentChatController]);
})();