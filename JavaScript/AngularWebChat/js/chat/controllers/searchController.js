/**
 * Created by Антон on 06.08.2015.
 */
(function(){
    'use strict';

    function SearchController($scope) {
        $scope.searchFieldValue = '';

        $scope.searchResults = [];

        $scope.resultsRepository = [
            {photoSrc: '../img/default.jpg', resultName: 'Anton Pashkouski', resultAdditionalInformation: 'Online'},
            {photoSrc: '../img/default.jpg', resultName: 'Andrei Buzuma', resultAdditionalInformation: 'Online'},
            {photoSrc: '../img/default.jpg', resultName: 'Anatolii Vasgura', resultAdditionalInformation: 'Online'},
            {photoSrc: '../img/default.jpg', resultName: 'Misha Peshko', resultAdditionalInformation: 'Online'},
            {photoSrc: '../img/default.jpg', resultName: 'Mike Ronalds', resultAdditionalInformation: 'Online'},
            {photoSrc: '../img/default.jpg', resultName: 'Leonid Varo', resultAdditionalInformation: 'Online'},
            {photoSrc: '../img/default.jpg', resultName: 'Emhur Var Emreis', resultAdditionalInformation: 'Online'},
            {photoSrc: '../img/default.jpg', resultName: 'Gerald from Rivia', resultAdditionalInformation: 'Online'},
            {photoSrc: '../img/default.jpg', resultName: 'Natalia Mireyco', resultAdditionalInformation: 'Online'},
            {photoSrc: '../img/default.jpg', resultName: 'Roma Grinowskiy', resultAdditionalInformation: 'Online'},
            {photoSrc: '../img/default.jpg', resultName: 'Alexei Buzuma', resultAdditionalInformation: 'Online'}
        ];

        $scope.add = function($index) {
        };

        $scope.requestTheResults = function() {
            // service request
            $scope.searchResults = $scope.resultsRepository;
        };
    }

    var app = angular.module('ChatApp');
    app.controller('searchController', ['$scope', SearchController]);
})();