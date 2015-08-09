/**
 * Created by anton.pashkouski on 05.08.2015.
 */
(function(){
    'use strict';

    function AccountCreatingController($scope, $location, $accountService) {
        $scope.data = {
            firstName: '',
            lastName: '',
            login: '',
            password: '',
            passwordConfirmation: ''
        };

        $scope.loginAlreadyExist = false;

        $scope.createAccount = function(registrationForm) {
            if (registrationForm.$valid) {
                $accountService.createAccount(
                    $scope.data.firstName,
                    $scope.data.lastName,
                    $scope.data.login,
                    $scope.data.password
                ).then(
                    function() {
                        $location.path('/chat');
                    }
                );
            }
        }
    }

    var app = angular.module('ChatApp');
    app.controller('accountCreatingController', ['$scope', '$location', '$accountService', AccountCreatingController]);
})();