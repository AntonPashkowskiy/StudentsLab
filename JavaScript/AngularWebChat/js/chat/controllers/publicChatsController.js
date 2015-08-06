/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    function PublicChatsController($scope) {
        $scope.publicChats = [
            {photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski1', interlocutorsCount: '5'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski2', interlocutorsCount: '4'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski3', interlocutorsCount: '3'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski4', interlocutorsCount: '2'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski5', interlocutorsCount: '2'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski6', interlocutorsCount: '6'}
        ];

        $scope.removeChat = function($index) {
            $scope.publicChats.splice($index, 1);
        };

        $scope.startChat = function($index) {
        }
    }

    var app = angular.module('ChatApp');
    app.controller('publicChatsController', ['$scope', PublicChatsController]);
})();