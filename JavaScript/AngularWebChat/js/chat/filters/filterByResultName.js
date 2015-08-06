/**
 * Created by anton.pashkouski on 06.08.2015.
 */
(function(){
    'use strict';

    var app = angular.module('ChatApp');

    app.filter('filterByResultName', function() {
        return function(items, requestedName) {
            if(requestedName) {
                return items.filter(function(item){
                    return item.resultName.indexOf(requestedName) !== -1;
                });
            } else {
                return [];
            }
        }
    });
})();