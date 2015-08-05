/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    var app = angular.module('ChatApp');

    app.directive('contact', function(){
        return {
            restrict: 'E',
            templateUrl: '../js/chat/templates/contact.template.html',
            replace: true,
            scope: {
                photoSrc: '@',
                contactName: '@',
                additionalInformation: '@',
                removeClick: '@',
                chatClick: '@'
            }
        }
    });
})();