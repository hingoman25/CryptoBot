(function(angular) {
  'use strict';
  angular
    .module('app')
    .component('coinSearch', {
      controller: CoinSearchController,
      controllarAs: 'coin',
      templateUrl: '../src/coinSearch.html',
    });
  })(angular);


  function CoinSearchController(CryptoService) {
    var coin = this;
    var list = [];
    coin.jank="something weird";
    coin.savedCoins = [];

    function getCrypto() {                      //pulls data from API
      CryptoService
        .retrieve()
        .then(function(response) {
            coin.list = response;
        });
    }

    coin.click = function() {
      console.log('HELLOOO');
    };

    coin.showSearch = function() {
      console.log('hello');               //gets rid of search list once input is cleared
      return searchedCoin === '';
    };

    coin.addToList = function(coins) {            //add coins to the savedCoins list
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
        coin.savedCoins.push(results);
      }
      console.log(coin.savedCoins);

    };

    // coin.setPrice = function() {                    //adds the
    //
    // };

      getCrypto();
  }
