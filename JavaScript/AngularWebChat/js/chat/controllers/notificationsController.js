/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function NotificationsController($scope, $notificationService) {
        $scope.notifications = [
            'Notification 1',
            'Notification 2',
            'Notification 3',
            'Notification 4',
            'Notification 5'
        ];

        $scope.removeNotification = function($index) {
            $scope.notifications.splice($index, 1);
        };
    }

    var app = angular.module('ChatApp');
    app.controller('notificationsController', ['$scope', '$notificationsService', NotificationsController]);
})();