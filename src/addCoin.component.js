(function(angular) {
  'use strict';
  angular
    .module("app")
    .component('addCoin', {
        controller: AddCoinController,
        controllerAs: 'coin',
        bindings: {
          addcoin: '='
        },
        template: `
          <span><button                 ng-click="coin.addToList(coins);">Add</button></span>
        `
      });

function AddCoinController(CryptoService) {
  var coin = this;
  coin.savedCoins = [];


}

})(angular);
