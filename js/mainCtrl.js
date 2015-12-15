angular.module('quoteBook').controller('mainCtrl', function($scope, mainService){

  $scope.quotes = mainService.getData();
  $scope.addQuote = mainService.addData;
  $scope.removeQuote = mainService.removeData;
  $scope.getFilter = mainService.getFilter;

});
