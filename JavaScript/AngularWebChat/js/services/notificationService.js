/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function NotificationsService($q, $serverEmulator) {
        var self = this;

        self.getNotifications = function(accountId) {
            var deferred = $q.defer();
            var notifications = $serverEmulator.getNotifications(accountId);

            if (notifications) {
                deferred.resolve(notifications);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };
    }

    var app = angular.module('ChatApp');
    app.service('$notificationsService', ['$q', '$serverEmulator', NotificationsService]);
})();