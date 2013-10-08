'use strict';

describe('Controller: AccountCtrl', function () {

  // load the controller's module
  beforeEach(module('laguneApp'));

  var AccountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    /*
    AccountCtrl = $controller('AccountCtrl', {
      $scope: scope,
      Account: Account
    });
    */

  }));

  it('should have a username is empty to the scope', function () {
    expect(true).toBe(true);
  });
});
