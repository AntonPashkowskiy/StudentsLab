/**
 * Created by anton.pashkouski on 05.08.2015.
 */
(function(){
    'use strict';

    function CurrentUserController($scope, $location, $accountService) {
        $scope.currentUser = {photoSrc: '../img/pashkouski.anton.jpg', userName: 'Anton Pashkouski'};

        $scope.logout = function() {
            // service request
            $location.path('/authorization');
        }
    }

    var app = angular.module('ChatApp');
    app.controller('currentUserController', ['$scope', '$location', '$accountService', CurrentUserController]);
})();