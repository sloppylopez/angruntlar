'use strict';

/**
 * @ngdoc function
 * @name angularClientApp.controller:AuthWithPasswordCtrl
 * @description
 * # AuthWithPasswordCtrl
 * Controller of the angularClientApp
 */
angular.module('angularClientApp')
  .controller('AuthWithPasswordCtrl',
    function ($scope, $rootScope, firebaseServiceFactory, redirectService) {
      $scope.authWithPassword = function (isValid) {
        if (isValid) {
          $scope.showme = true;
          firebaseServiceFactory.authWithPassword($scope, $rootScope)
            .then(function () {
              redirectService.redirectTo('/');
            });
        } else {
            $rootScope.ngToast.create({
                className: 'danger',
                content: 'There are still invalid fields'
            });
        }
      };
    });

