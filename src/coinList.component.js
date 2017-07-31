
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
      coin.priceCoins = CryptoService.getPriceCoins();

      coin.removeCoin = function(item, i) {     //removes coins from the saved list
          coin.savedCoins.splice(i, 1);
      };

      coin.setPrice = function(price, i) {         //inserts user price into object of coin
        var specIndex = coin.savedCoins[i];
        specIndex.user_price = price;
        CryptoService.addPriceCoins(coin.savedCoins[i]);
      };

      // coin.click = function() {
      //   for(var i = 0; i < coin.savedCoins.length; i++) {
      //     var actualPrice = parseFloat(coin.savedCoins[i].price_usd, 10);
      //     var myPrice = coin.savedCoins[i].user_price;
      //
      //     if(actualPrice === myPrice) {
      //       console.log("HOORAY");
      //     } else {
      //       console.log("BBOOOOO");
      //     }
      //   }
      // };

      coin.click = function() {

      };
    }
})(angular);
