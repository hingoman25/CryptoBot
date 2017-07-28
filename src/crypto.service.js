(function(angular) {
  'use strict';
  angular
    .module('app')
    .factory("CryptoService", CryptoService);

    function CryptoService($http) {

      var API = "https://api.coinmarketcap.com/v1/ticker/";

      function retrieve() {
        return $http.get(API).then(function(response) {
            return response.data;
          });
      }

      return {
        retrieve: retrieve
      };
    }
})(angular);
