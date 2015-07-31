/**
 * Created by anton.pashkouski on 31.07.2015.
 */
define(['knockout'], function(ko){
    'use strict';

    function MessagesModel() {
        var self = this;

        self.message = ko.observable('');
        self.messages = ko.observableArray([]);
        self.recepients = ko.observableArray([]);

        self.send = function() {
            alert(self.message());
            self.message('');
        }
    }

    return MessagesModel;
});