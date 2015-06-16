'use strict';

/**
 * @ngdoc function
 * @name angularClientApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the angularClientApp
 */
angular.module('angularClientApp')
  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.message = 'Click & Live, Bang!';
  }]);
