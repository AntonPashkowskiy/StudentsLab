/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function AccountService() {

    }

    var app = angular.module('ChatApp');
    app.service('$accountService', [AccountService]);
})();