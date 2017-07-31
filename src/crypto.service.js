(function(angular) {
  'use strict';
  angular
    .module('app')
    .factory("CryptoService", CryptoService);

    function CryptoService($http) {
      var ctrl = this;
      var savedCoins = [];
      var priceCoins = [];

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

      function addPriceCoins(data) {    //for coins with user price
        priceCoins.push(data);
      }

      function getPriceCoins() {
        return priceCoins;
      }

      return {
        retrieve: retrieve,
        addSavedCoins: addSavedCoins,
        getSavedCoins: getSavedCoins
      };
    }
})(angular);
