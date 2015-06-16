'use strict';

/**
 * @ngdoc function
 * @name angularClientApp.controller:CreateUserCtrl
 * @description
 * # CreateUserCtrl
 * Controller of the angularClientApp
 */
angular.module('angularClientApp')
  .controller('CreateUserCtrl', ['$scope', '$rootScope', 'firebaseServiceFactory',
    function ($scope, $rootScope, firebaseServiceFactory) {
      $scope.createUser = function (isValid) {
        if (isValid) {
          firebaseServiceFactory.createUser($scope, $rootScope);
        } else {
          $rootScope.ngNotify.set('There are still invalid fields', {type: 'error'});
        }
      };
    }]);