'use strict';

/**
 * @ngdoc function
 * @name angularClientApp.controller:BlogCtrl
 * @description
 * # BlogCtrlr
 * Controller of the angularClientApp
 */
angular.module('angularClientApp')
    .controller('BlogCtrl', function ($scope, $rootScope) {
        $scope.message = 'Click & Live, Bang!';
        if (typeof $rootScope.showCookieMessage === 'undefined') {
            $rootScope.ngToast.create({
                className: 'info',
                content: 'Using cookies, close to accept',
                dismissOnClick: false,
                dismissButton: true,
                dismissOnTimeout: false,
                timeout: 1000000 //this is because the ngToast works buggy without it, i prefer to have it this way :(
            });
            $rootScope.showCookieMessage = false;
        }
    });
