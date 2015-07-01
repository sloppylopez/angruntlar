'use strict';

describe('Controller: BlogCtrl', function () {

    // load the controller's module
    beforeEach(module('angularClientApp'));

    var scope, $rootScope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$controller_, _$rootScope_) {
        scope = _$rootScope_.$new();
        $rootScope = _$rootScope_;
        _$controller_('BlogCtrl', {
            $scope: scope
        });
        $rootScope.showCookieMessage = 'dummy imaginary data';
        _$controller_('BlogCtrl', {
            $scope: scope
        });
    }));

    it('should call blog controller and it should have a message in the scope', function () {
        expect(scope.message).toBe('Click & Live, Bang!');
    });
});
