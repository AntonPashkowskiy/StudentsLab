/**
 * Created by anton.pashkouski on 07.08.2015.
 */
(function(){
    'use strict';

    function SearchService($q) {
        var cachedResults = null;

        this.getAllInformation = function() {
            var deferred = $q.defer();
            var searchResults = [
                {type: 'contact', accountId: 123, photoSrc: '../img/default.jpg', resultName: 'Anton Pashkouski', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 124, photoSrc: '../img/default.jpg', resultName: 'Andrei Buzuma', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 125, photoSrc: '../img/default.jpg', resultName: 'Anatolii Vasgura', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 126, photoSrc: '../img/default.jpg', resultName: 'Misha Peshko', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 127, photoSrc: '../img/default.jpg', resultName: 'Mike Ronalds', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 128, photoSrc: '../img/default.jpg', resultName: 'Leonid Varo', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 129, photoSrc: '../img/default.jpg', resultName: 'Emhur Var Emreis', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 130, photoSrc: '../img/default.jpg', resultName: 'Gerald from Rivia', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 131, photoSrc: '../img/default.jpg', resultName: 'Natalia Mireyco', resultAdditionalInformation: 'Online'},
                {type: 'contact', accountId: 132, photoSrc: '../img/default.jpg', resultName: 'Roma Grinowskiy', resultAdditionalInformation: 'Online'},
                {type: 'public chat', chatId: 133, photoSrc: '../img/default.jpg', resultName: 'Alexei Buzuma', resultAdditionalInformation: '5'}
            ];

            if (searchResults) {
                deferred.resolve(searchResults);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        };
    }

    var app = angular.module('ChatApp');
    app.service('$searchService', ['$q', SearchService]);
})();