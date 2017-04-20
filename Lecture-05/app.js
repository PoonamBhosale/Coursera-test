(function(){

  'use strict';
  var x="he";

angular.module('MyFirstApp',[])

.controller('MyfirstController',function($scope){
$scope.name="Poonam";
$scope.sayHello = function(){
  return "Hello Poonam !! HW R U";
};
});


})();
