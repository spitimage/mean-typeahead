'use strict';

describe('Controller: TypeaheadCtrl', function () {

  // load the controller's module
  beforeEach(module('meanTypeaheadApp'));

  var TypeaheadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TypeaheadCtrl = $controller('TypeaheadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
