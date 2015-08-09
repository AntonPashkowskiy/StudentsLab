/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function SearchService($q, $serverEmulator) {
        var cachedResults = null;

        this.getAllInformation = function() {
            var deferred = $q.defer();
            var searchResults = $serverEmulator.getInformationForSearch();

            if (searchResults) {
                deferred.resolve(searchResults);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };
    }

    var app = angular.module('ChatApp');
    app.service('$searchService', ['$q', '$serverEmulator', SearchService]);
})();