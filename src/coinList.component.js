
(function(angular) {
  'use strict';
  angular
    .module('app')
    .component('coinList', {
        controller: CoinListController,
        controllerAs: 'coin',
        templateUrl: 'src/coinList.html'
      });

    function CoinListController(CryptoService) {
      var coin = this;
      coin.savedCoins = CryptoService.getSavedCoins();

      coin.removeCoin = function(item, i) {     //removes coins from the saved list
          coin.savedCoins.splice(i, 1);
      };


      coin.setPrice = function(price, i) {         //inserts user price into object of coin
        var specIndex = coin.savedCoins[i];
        specIndex.user_price = price;
        CryptoService.addPriceCoins(coin.savedCoins);
      };

      coin.click = function() {
        console.log(x);
      };
    }
})(angular);
