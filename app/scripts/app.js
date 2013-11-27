'use strict';

angular.module('meanTypeaheadApp', ['ngRoute','ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/typeahead', {
        templateUrl: 'views/typeahead.html',
        controller: 'TypeaheadCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
