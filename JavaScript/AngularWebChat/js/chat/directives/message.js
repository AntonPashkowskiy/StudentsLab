/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    var app = angular.module('ChatApp');

    app.directive('message', function(){
        return {
            restrict: 'E',
            templateUrl: '../js/chat/templates/message.template.html',
            replace: true,
            transclude: true,
            scope: {
                senderPhoto: '@',
                senderName: '@'
            }
        }
    });
})();