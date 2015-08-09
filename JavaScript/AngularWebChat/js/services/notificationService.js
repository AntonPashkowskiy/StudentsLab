/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function NotificationsService($q) {
        var self = this;

        self.getNotifications = function(accountId) {
            var deferred = $q.defer();
            // request to server
            var notifications = [
                'Notification 1',
                'Notification 2',
                'Notification 3',
                'Notification 4',
                'Notification 5'
            ];

            if (notifications) {
                deferred.resolve(notifications);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };
    }

    var app = angular.module('ChatApp');
    app.service('$notificationsService', ['$q', NotificationsService]);
})();