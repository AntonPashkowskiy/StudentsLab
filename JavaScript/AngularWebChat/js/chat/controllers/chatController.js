/**
 * Created by anton.pashkouski on 05.08.2015.
 */
(function(){
    'use strict';

    function ChatController($scope, $location) {
        $scope.currentUser = {photoSrc: '../img/pashkouski.anton.jpg', userName: 'Anton Pashkouski'};

        $scope.logout = function() {
            // service request
            $location.path('/authorization');
        }
    }

    var app = angular.module('ChatApp');
    app.controller('chatController', ['$scope', '$location', ChatController]);
})();