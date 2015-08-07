/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    function PublicChatsController($scope, $contactsService) {
        $scope.publicChats = [
            {photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski1', interlocutorsCount: '5'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski2', interlocutorsCount: '4'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski3', interlocutorsCount: '3'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski4', interlocutorsCount: '2'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski5', interlocutorsCount: '2'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski6', interlocutorsCount: '6'}
        ];

        $scope.removeChat = function(chat) {
        };

        $scope.startChat = function(chat) {
        };

        $scope.$on('additionOfSearchResult', function(event, information) {
        });
    }

    var app = angular.module('ChatApp');
    app.controller('publicChatsController', ['$scope', '$contactsService', PublicChatsController]);
})();