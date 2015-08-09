/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function NotificationsController($scope, $notificationService) {
        $notificationService.getNotifications($scope.currentUser.accountId).then(
            function(notifications) {
                $scope.notifications = notifications;
            }
        );

        $scope.removeNotification = function($index) {
            $scope.notifications.splice($index, 1);
        };
    }

    var app = angular.module('ChatApp');
    app.controller('notificationsController', ['$scope', '$notificationsService', NotificationsController]);
})();