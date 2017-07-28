(function(angular) {
  'use strict';
  angular
    .module('app')
    .factory("CryptoService", CryptoService);

    function CryptoService($http) {
      var ctrl = this;
      var savedCoins = [];

      var API = "https://api.coinmarketcap.com/v1/ticker/";

      function retrieve() {
        return $http.get(API).then(function(response) {
            return response.data;
          });
      }

      function addSavedCoins(data) {
        savedCoins.push(data);
      }

      function getSavedCoins() {
        return savedCoins;
      }

      return {
        retrieve: retrieve,
        addSavedCoins: addSavedCoins,
        getSavedCoins: getSavedCoins
      };
    }
})(angular);
