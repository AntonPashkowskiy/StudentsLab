/**
 * Created by Антон on 30.07.2015.
 */
define(['knockout','server'], function(ko, server){
    function AuthorizationModel() {
        var self = this;

        self.isAuthorized = ko.observable(false);
        self.login = ko.observable('');
        self.password = ko.observable('');
        self.userAccount = ko.observable(null);

        self.authorizationIsFailed = ko.observable(false);
        self.failMessage = ko.observable('Invalid login or password.');

        self.fullName = ko.pureComputed(function(){
            if (self.userAccount()) {
                var userInformation = self.userAccount().user;
                return userInformation.name + ' ' + userInformation.surname;
            } else {
                return '';
            }
        });

        var resetAuthorizationFields = function() {
            self.login('');
            self.password('');
        };

        self.logon = function() {
            var account = server.authorizationRequest(self.login(), self.password());
            if(account) {
                self.userAccount(account);
                self.isAuthorized(true);
                self.authorizationIsFailed(false);
            } else {
                resetAuthorizationFields();
                self.authorizationIsFailed(true);
            }
        };

        self.logout = function() {
            self.userAccount(null);
            self.isAuthorized(false);
            resetAuthorizationFields();
        };
    }

    return AuthorizationModel;
});