(function(){

  'use strict';

angular.module('NameCalculator',[])

.controller('NameCalculatorController',function($scope){
$scope.myname = "";
$scope.totalValue = 0,

$scope.displaynum = function(){
  var totalNameValue = calculateNumForString($scope.myname);
  $scope.totalValue = totalNameValue;
};

function calculateNumForString(string) {

  var totalStringValue = 0;
  for (var i = 0; i < string.length; i++) {
    totalStringValue += string.charCodeAt(i)
  }
return totalStringValue;
}

});


})();
