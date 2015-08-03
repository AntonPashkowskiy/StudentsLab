/**
 * Created by Антон on 30.07.2015.
 */
define(['knockout', 'authorizationService'], function(ko, service){
    'use strict';

    function AuthorizationModel() {
        var self = this;

        self.isAuthorized = ko.observable(false);
        self.login = ko.observable('');
        self.password = ko.observable('');
        self.userInformation = ko.observable(null);

        self.authorizationIsFailed = ko.observable(false);
        self.failMessage = ko.observable('Invalid login or password.');

        self.fullName = ko.pureComputed(function() {
            if (self.userInformation()) {
                return self.userInformation().firstName + ' ' + self.userInformation().lastName;
            }
            return '';
        }).extend({ notify: 'always' });

        self.photoPath = ko.pureComputed(function(){
            if (self.userInformation()) {
                return self.userInformation().photoPath;
            }
            return '';
        }).extend({ notify: 'always' });

        var resetAuthorizationFields = function() {
            self.login('');
            self.password('');
        };

        self.logon = function() {
            var userInformation = service.logon(self.login(), self.password());

            if(userInformation) {
                self.userInformation(userInformation);
                self.isAuthorized(true);
            } else {
                resetAuthorizationFields();
                self.authorizationIsFailed(true);
                self.authorizationIsFailed(false);
            }
        };

        self.logout = function() {
            service.logout(self.userInformation().accountId);

            resetAuthorizationFields();
            self.isAuthorized(false);
            self.userInformation(null);
        };
    }

    return AuthorizationModel;
});