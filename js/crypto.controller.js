angular
  .module('app')
  .controller('CryptoController', CryptoController);

function CryptoController(CryptoService) {
  var ctrl = this;
  var list = [];

  ctrl.onSearch = onSearch;

  function getCrypto() {
    CryptoService
      .retrieve()
      .then(function(response) {
          ctrl.list = response;
        });
  }

  function onSearch() {
    console.log("Changed!", ctrl.searchedCoin);
  }




  getCrypto();
}
