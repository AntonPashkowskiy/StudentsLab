/**
 * Created by anton.pashkouski on 06.08.2015.
 */
(function(){
    'use strict';

    var app = angular.module('ChatApp');

    app.filter('filterByContactName', function() {
        return function(items, requestedName) {
            return items.filter(function(item){
                return item.contactName.indexOf(requestedName) !== -1;
            });
        }
    });
})();