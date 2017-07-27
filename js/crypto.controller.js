angular
  .module('app')
  .controller('CryptoController', CryptoController);

function CryptoController(CryptoService) {
  var ctrl = this;
  var list = [];
  ctrl.savedCoins = [];
  ctrl.searchedCoin = '';

  // ctrl.searchedCoin = '';

  function getCrypto() {                      //pulls data from API
    CryptoService
      .retrieve()
      .then(function(response) {
          ctrl.list = response;
        });
  }

  ctrl.showSearch = function() {                //gets rid of search list once input is cleared
    return ctrl.searchedCoin === '';
  };

  ctrl.addToList = function(coins) {            //add coins to the savedCoins list
    var temp = 0;
    var results = {
      name: coins.name,
      price_usd: coins.price_usd,
      symbol: coins.symbol
    };
    if(ctrl.savedCoins.length > 0) {
      for(var i = 0; i < ctrl.savedCoins.length; i++) {
        if(coins.name === ctrl.savedCoins[i].name) {
          alert("You have already added this coin!");
          temp = 1;
        }
      }
    }
    if(temp === 0) {
      ctrl.savedCoins.push(results);
    }
    console.log(ctrl.savedCoins);

  };

  ctrl.removeCoin = function(coin, index) {         //removes coins from the saved list
      ctrl.savedCoins.splice(index, 1);
  };

  ctrl.setPrice = function() {                    //adds the

  };

  
    getCrypto();
}
