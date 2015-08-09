/**
 * Created by anton.pashkouski on 05.08.2015.
 */
(function(){
    'use strict';

    function AuthorizationController($scope, $location, $accountService) {
        $scope.authorizationFail = false;

        $scope.logon = function(login, password, authorizationForm) {
            if (authorizationForm.$valid) {
                $accountService.logon(login, password).then(
                    function() {
                        $scope.authorizationFail = false;
                        $location.path('/chat');
                    },
                    function() {
                        $scope.authorizationFail = true;
                    }
                );
            }
        };

        $scope.signUp = function() {
            $location.path('/account_creating');
        }
    }

    var app = angular.module('ChatApp');
    app.controller('authorizationController', ['$scope', '$location', '$accountService', AuthorizationController]);
})();