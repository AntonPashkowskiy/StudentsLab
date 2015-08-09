/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    function ContactsController($scope, $contactsService, $currentChatService) {
        $contactsService.getContacts($scope.currentUser.accountId).then(
            function(contacts) {
                $scope.contacts = contacts;
            }
        );

        $scope.removeContact = function(contact) {
            if ($scope.contacts) {
                $contactsService.removeContact($scope.currentUser.accountId, contact.accountId).then(
                    function() {
                        var index = $scope.contacts.indexOf(contact);
                        $scope.contacts.splice(index, 1);
                    }
                );
            }
        };

        $scope.startChat = function(contact) {
            $currentChatService.createChat($scope.currentUser.accountId, contact.accountId);
        };

        $scope.$on('additionOfSearchResult', function(event, information) {
            if (information.type === 'contact' && $scope.contacts) {
                for (var i = 0; i < $scope.contacts.length; i++) {
                    if ($scope.contacts[i].accountId === information.accountId) {
                        return;
                    }
                }
                $scope.contacts.push({
                    accountId: information.accountId,
                    contactName: information.resultName,
                    photoSrc: information.photoSrc,
                    onlineStatus: information.resultAdditionalInformation
                });
            }
        });
    }

    var app = angular.module('ChatApp');
    app.controller(
        'contactsController',
        ['$scope', '$contactsService', '$currentChatService', ContactsController]
    );
})();