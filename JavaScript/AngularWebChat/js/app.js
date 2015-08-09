/**
 * Created by anton.pashkouski on 05.08.2015.
 */
(function(){
    'use strict';

    angular.module('ChatApp', ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider.when('/authorization', {
                templateUrl: 'authorization.html',
                controller: 'authorizationController'
            });
            $routeProvider.when('/account_creating', {
                templateUrl: 'account_creating.html',
                controller: 'accountCreatingController'
            });
            $routeProvider.when('/chat', {
                templateUrl: 'chat.html',
                controller: 'currentUserController'
            });
            $routeProvider.otherwise({redirectTo: '/authorization'});
        });
})();

