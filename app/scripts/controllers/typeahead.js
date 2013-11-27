'use strict';

angular.module('meanTypeaheadApp')
  .controller('TypeaheadCtrl', function($scope, $http) {
    $scope.selected = '';
    $scope.items = [];

    // Make a new query every time the search field is updated
    $scope.$watch('selected', function(newVal) {
      if (newVal) {
        $http.get('http://localhost:3000/api/widgets?q=' + newVal).then(function(data) {
          $scope.items = data.data;
        }, function(err) {
          console.log(err);
        });
      }
    });

    $scope.onSelect = function() {
      console.log('Selected:', $scope.selected);
    };

  });

