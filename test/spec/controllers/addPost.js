'use strict';

describe('Controller: AddPostCtrl', function () {

  // load the controller's module
  beforeEach(module('angularClientApp'));

  var AddPostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddPostCtrl = $controller('AddPostCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of messages to the scope', function () {
    expect(scope.addpost.length).toBe(1);
  });
});
