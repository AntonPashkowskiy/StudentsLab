/**
 * Created by anton.pashkouski on 05.08.2015.
 */
(function(){
    'use strict';

    function AccountCreatingController($scope, $location) {
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
                // service request
                $location.path('/chat');
            }
        }
    }

    var app = angular.module('ChatApp');
    app.controller('accountCreatingController', ['$scope', '$location', AccountCreatingController]);
})();