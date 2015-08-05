/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    var app = angular.module('ChatApp');

    app.directive('searchResult', function(){
        return {
            restrict: 'E',
            templateUrl: '../js/chat/templates/searchResult.template.html',
            replace: true
        }
    });
})();