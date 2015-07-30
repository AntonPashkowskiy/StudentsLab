/**
 * Created by Антон on 30.07.2015.
 */
define(['knockout', 'dataService'], function(ko, service){
    'use strict';

    function AuthorizationModel() {
        var self = this;

        self.isAuthorized = ko.observable(false);
        self.login = ko.observable('');
        self.password = ko.observable('');

        self.authorizationIsFailed = ko.observable(false);
        self.failMessage = ko.observable('Invalid login or password.');

        self.fullName = ko.pureComputed(function(){
            return service.getUserName() + ' '+ service.getUserSurname();
        });

        self.photoPath = ko.pureComputed(function(){
            return service.getPhotoPath();
        });

        var resetAuthorizationFields = function() {
            self.login('');
            self.password('');
        };

        self.logon = function() {
            var isSuccess = service.logon(self.login(), self.password());

            if(isSuccess) {
                self.isAuthorized(true);
            } else {
                resetAuthorizationFields();
                self.authorizationIsFailed(true);
                self.authorizationIsFailed(false);
            }
        };

        self.logout = function() {
            service.logout();
            self.isAuthorized(false);
            resetAuthorizationFields();
        };
    }

    return AuthorizationModel;
});