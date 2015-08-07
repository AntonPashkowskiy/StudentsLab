/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    var app = angular.module('ChatApp');

    app.directive('notification', function(){
        return {
            restrict: 'E',
            templateUrl: '../js/chat/templates/notification.template.html',
            replace: true,
            transclude: true,
            scope: {
                removeClick: '&'
            }
        }
    });
})();