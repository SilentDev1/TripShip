'use strict';

angular.module('main')

// Wallet controller
.controller('WalletCtrl', function($scope, BalanceTransactions) {
  // get all balance transactions
  $scope.records = BalanceTransactions.all();
});
