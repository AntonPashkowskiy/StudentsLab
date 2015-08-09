/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    function SearchController($scope, $searchService) {
        $scope.searchFieldValue = '';
        $scope.searchResults = [];
        $scope.resultsRepository = [];

        $scope.addSearchResult = function(result) {
            $scope.$broadcast('additionOfSearchResult', result);
        };

        $scope.requestTheResults = function() {
            $searchService.getAllInformation().then(
                function(searchResults) {
                    $scope.searchResults = searchResults;
                }
            );
        };
    }

    var app = angular.module('ChatApp');
    app.controller('searchController', ['$scope', '$searchService', SearchController]);
})();