'use strict';

angular.module('meanTypeaheadApp')
  .controller('TypeaheadCtrl', function($scope, $http) {
    $scope.selected = '';
    $scope.items = [];
    $scope.count = "Unknown";

    var getCount = function(){
      $http.get('http://localhost:3000/api/widgets/count').then(function(data) {
        $scope.count = data.data.count;
      }, function(err) {
        console.log(err);
      });
    };

    // Make a new query every time the search field is updated
    $scope.$watch('selected', function(newVal) {
      if (newVal) {
        $http.get('http://localhost:3000/api/widgets?limit=10&q=' + newVal).then(function(data) {
          $scope.items = data.data;
        }, function(err) {
          console.log(err);
        });
      }
    });

    $scope.onSelect = function() {
      console.log('Selected:', $scope.selected);
    };

    $scope.onMore = function(){
      $http.post('http://localhost:3000/api/widgets').then(function() {
        console.log('Added more widgets');
        getCount();
      }, function(err) {
        console.log(err);
      });
    };

    getCount();

  });

