'use strict';

/**
 * @ngdoc function
 * @name angularClientApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the angularClientApp
 */
angular.module('angularClientApp')
  .controller('LogoutCtrl',
    function ($scope, $rootScope, $window, firebaseServiceFactory) {
      $scope.logout = function () {
        if (typeof $window.authData !== 'undefined') {//TODO this will change when we put REAL security behind the nodejs
          firebaseServiceFactory.logout($scope, $rootScope, '/');
        }
      };
    }
);

