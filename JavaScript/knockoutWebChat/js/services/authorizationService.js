/**
 * Created by Антон on 02.08.2015.
 */
define(
    ['server'],

    function(server) {

        var logon = function(login, password) {
            return server.logon(login, password);
        };

        var logout = function(accountId) {
            server.logout(accountId);
        };

        return {
            logon: logon,
            logout: logout
        }
    }
);