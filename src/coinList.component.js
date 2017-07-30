
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

      coin.removeCoin = function(item, index) {     //removes coins from the saved list
          coin.savedCoins.splice(index, 1);
      };

      coin.setPrice = function() {                    //adds the

      };

    }
})(angular);
