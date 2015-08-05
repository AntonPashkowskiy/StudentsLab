/**
 * Created by anton.pashkouski on 05.08.2015.
 */
(function(){
    'use strict';

    function AuthorizationController($scope, $location) {
        $scope.authorizationFail = false;

        $scope.logon = function(login, password, authorizationForm) {
            if (authorizationForm.$valid) {
                // service request
            }
        };

        $scope.signUp = function() {
            $location.path('/account_creating');
        }
    }

    var app = angular.module('ChatApp');
    app.controller('authorizationController', ['$scope', '$location', AuthorizationController]);
})();