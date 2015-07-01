'use strict';

/**
 * @ngdoc function
 * @name angularClientApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the angularClientApp
 */
angular.module('angularClientApp')
  .controller('ResetPasswordCtrl',
    function ($scope, $rootScope, firebaseServiceFactory, redirectService) {
      $scope.resetPassword = function (isValid) {
        if (isValid) {
          firebaseServiceFactory.resetPassword($scope, $rootScope)
            .then(function () {
              redirectService.redirectTo('/login');
            });
        } else {
            $rootScope.ngToast.create({
                className: 'danger',
                content: 'There are still invalid fields'
            });
        }
      };
    });

