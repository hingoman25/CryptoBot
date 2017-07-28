(function(angular) {
  'use strict';
  angular
    .module('app')
    .component('coinList', {
        controller: CoinListController,
        controllerAs: 'coin',
        templateUrl: 'src/coinList.html',
        bindings: {
          coinlist: '='
        }
      });

    function CoinListController(CryptoService) {
      var coin = this;

      coin.removeCoin = function(coin, index) {         //removes coins from the saved list
          coin.coinlist.splice(index, 1);
      };

      coin.setPrice = function() {                    //adds the

      };

    }
})(angular);
