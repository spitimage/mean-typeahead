'use strict';

angular.module('meanTypeaheadApp')
  .controller('TypeaheadCtrl', function ($scope, $http) {
    // Fallback data in case we don't have the backend running or we're in dev mode
    $scope.items = ['apples','oranges','bananas','carrots','celery'];

  });
