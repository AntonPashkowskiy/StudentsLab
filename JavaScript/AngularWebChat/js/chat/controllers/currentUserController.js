/**
 * Created by anton.pashkouski on 05.08.2015.
 */
(function(){
    'use strict';

    function CurrentUserController($scope, $location, $accountService) {
        $scope.currentUser = $accountService.getCurrentUser();

        if (!$scope.currentUser) {
            $location.path('/authorization');
        }

        $scope.logout = function() {
            $accountService.logout().then(
                function() {
                    $location.path('/authorization');
                }
            );
        };
    }

    var app = angular.module('ChatApp');
    app.controller('currentUserController', ['$scope', '$location', '$accountService', CurrentUserController]);
})();