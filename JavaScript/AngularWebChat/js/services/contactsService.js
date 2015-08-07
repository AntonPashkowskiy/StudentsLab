/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function ContactsService() {

    }

    var app = angular.module('ChatApp');
    app.service('$contactsService', [ContactsService]);
})();