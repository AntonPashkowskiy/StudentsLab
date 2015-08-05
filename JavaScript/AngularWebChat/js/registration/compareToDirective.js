/**
 * Created by anton.pashkouski on 05.08.2015.
 */
(function(){
    'use strict';

    var app = angular.module('ChatApp');

    app.directive('compareTo', [function(){
        return {
            require: 'ngModel',
            restrict: 'A',
            scope: {
                passwordConfirmation: '=compareTo'
            },
            link: function(scope, element, attributes, controller) {

                controller.$validators.compareTo = function(value) {
                    return scope.passwordConfirmation == value;
                };

                scope.$watch('passwordConfirmation', function(){
                    controller.$validate();
                });
            }
        }
    }]);
})();