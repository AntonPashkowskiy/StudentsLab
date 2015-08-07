/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    function PrivateChatsController($scope, $contactsService) {
        $scope.privateChats = [
            {photoSrc: '../img/default.jpg', contactName: 'Ecma Terenss', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Sherlock Holms', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Doctor Vatson', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Nikitin Costya', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Pashkouski', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Lol', onlineStatus: 'Online'}
        ];

        $scope.removeChat = function(chat) {
        };

        $scope.startChat = function(chat) {
        };
    }

    var app = angular.module('ChatApp');
    app.controller('privateChatsController', ['$scope', '$contactsService', PrivateChatsController]);
})();