/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    function CurrentChatController($scope, $currentChatService) {
        $scope.interlocutors = ['Anton', 'Leha'];

        $scope.messages = [
            {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'},
            {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'},
            {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'},
            {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'},
            {senderPhoto: '../img/default.jpg', senderName: 'Anton Pashkouski', messageText: 'Some message text'}
        ];

        $scope.currentMessageText = '';

        $scope.send = function() {
            $scope.currentMessageText = '';
        };
    }

    var app = angular.module('ChatApp');
    app.controller('currentChatController', ['$scope', '$currentChatService', CurrentChatController]);
})();