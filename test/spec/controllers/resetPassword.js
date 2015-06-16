'use strict';
describe('ResetPasswordCtrl', function () {
  var controller, scope, $location, firebaseServiceFactory, $q, ngNotify, def;

  beforeEach(module('angularClientApp'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _$location_, _firebaseServiceFactory_, _$q_, _ngNotify_) {
    $q = _$q_;
    def = $q.defer();
    scope = _$rootScope_.$new();
    controller = _$controller_('ResetPasswordCtrl', {
      $scope: scope
    });
    $location = _$location_;
    firebaseServiceFactory = _firebaseServiceFactory_;
    ngNotify = _ngNotify_;
  }));

  describe('resetPassword Controller', function () {
    it('submit should call resetPassword and not fail', function () {
      spyOn(firebaseServiceFactory, 'resetPassword').and.returnValue(def.promise);
      scope.resetPassword(true);
      expect(firebaseServiceFactory.resetPassword).toHaveBeenCalled();
      def.resolve();
      scope.$digest();           // This makes sure that all callbacks of promises will be called
    });
    it('submit should fail when called with invalid parameters', function () {
      spyOn(ngNotify, 'set').and.returnValue(def.promise);
      scope.resetPassword(false);
      expect(ngNotify.set).toHaveBeenCalled();
    });
  });
});
