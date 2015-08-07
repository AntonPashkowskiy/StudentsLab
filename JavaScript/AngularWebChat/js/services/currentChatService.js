/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function CurrentChatService() {

    }

    var app = angular.module('ChatApp');
    app.service('$currentChatService', [CurrentChatService]);
})();