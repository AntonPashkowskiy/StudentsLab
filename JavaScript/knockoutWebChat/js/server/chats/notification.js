/**
 * Created by Антон on 01.08.2015.
 */
define(
    function() {
        function Notification(notificationType, notificationData) {
            this.notificationType = notificationType;
            this.notificationData = notificationData;
        }

        return Notification;
    }
);