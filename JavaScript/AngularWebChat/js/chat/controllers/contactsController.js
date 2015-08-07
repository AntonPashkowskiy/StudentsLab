/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    function ContactsController($scope, $contactsService) {
        $scope.contacts = [
            {photoSrc: '../img/default.jpg', contactName: 'Vasilii Kern', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Search Adaptation', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Vallgalla', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Kerunesh', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Vita', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Core', onlineStatus: 'Online'}
        ];

        $scope.removeContact = function(contact) {
        };

        $scope.startChat = function(contact) {
        };

        $scope.$on('additionOfSearchResult', function(event, information) {
        });
    }

    var app = angular.module('ChatApp');
    app.controller('contactsController', ['$scope', '$contactsService', ContactsController]);
})();