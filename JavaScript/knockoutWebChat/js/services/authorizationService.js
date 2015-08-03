/**
 * Created by Антон on 02.08.2015.
 */
define(
    ['server'],

    function(server) {

        var logon = function(parameters, success, error) {
            var userInformation = server.logon(parameters.login, parameters.password);

            if (userInformation && typeof success === 'function') {
                success(userInformation);
            } else if (typeof error === 'function') {
                error();
            }
        };

        var logout = function(accountId, success, error) {
            var isSuccess = server.logout(accountId);

            if(isSuccess && typeof success === 'function') {
                success();
            } else if (typeof error === 'function') {
                error();
            }
        };

        function delay(targetFunction, milliseconds) {
            return function() {
                var savedThis = this;
                var savedArgs = arguments;

                setTimeout(function() {
                    targetFunction.apply(savedThis, savedArgs);
                }, milliseconds);
            };
        }

        return {
            logon: delay(logon, 500),
            logout: delay(logout, 500)
        }
    }
);