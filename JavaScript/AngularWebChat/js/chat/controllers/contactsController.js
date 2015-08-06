/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    function ContactsController($scope) {
        $scope.contacts = [
            {photoSrc: '../img/default.jpg', contactName: 'Vasilii Kern', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Search Adaptation', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Vallgalla', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Kerunesh', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Vita', onlineStatus: 'Online'},
            {photoSrc: '../img/default.jpg', contactName: 'Anton Core', onlineStatus: 'Online'}
        ];

        $scope.removeContact = function($index) {
            $scope.contacts.splice($index, 1);
        };

        $scope.startChat = function($index) {
        };
    }

    var app = angular.module('ChatApp');
    app.controller('contactsController', ['$scope', ContactsController]);
})();