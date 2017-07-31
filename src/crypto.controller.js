(function(angular) {
  'use strict';
  angular.module('app')
    .controller("CryptoController", CryptoController);
})(angular);

function CryptoController(CryptoService) {
  var coin = this;
  var list = [];
  coin.searchedCoin = '';
  coin.savedCoins = CryptoService.getSavedCoins();

  function getCrypto() {              //pulls data from API
    CryptoService
      .retrieve()
      .then(function(response) {
          coin.list = response;
      });
  }

  coin.showSearch = function() {
    return coin.searchedCoin === '';
  };

  coin.addToList = function(coins) {
    var temp = 0;
    var results = {
      name: coins.name,
      price_usd: coins.price_usd,
      symbol: coins.symbol
    };
    if(coin.savedCoins.length > 0) {
      for(var i = 0; i < coin.savedCoins.length; i++) {
        if(coins.name === coin.savedCoins[i].name) {
          alert("You have already added this coin!");
          temp = 1;
        }
      }
    }
    if(temp === 0) {
      CryptoService.addSavedCoins(results);
    }
  };

    getCrypto();

}
