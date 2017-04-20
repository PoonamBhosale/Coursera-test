(function() {
        'use strict';
        angular.module('DIApp', [])
            .controller('DIController', DIController);

        function DIController($scope, $filter) {
            $scope.name = "Poonam";
            $scope.stateofbeing = "1";
                $scope.sayMessage = function() {
                    return "Poonam UR SO TALENTED!";

                };
                $scope.feedPoonam = function() {
                    $scope.stateofbeing = "2";
                };
              }
        })();
