'use strict';

angular.module('meanTypeaheadApp', ['ngRoute','ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/typeahead.html',
        controller: 'TypeaheadCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
