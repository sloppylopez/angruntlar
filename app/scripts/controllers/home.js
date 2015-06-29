'use strict';

/**
 * @ngdoc function
 * @name angularClientApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the angularClientApp
 */
angular.module('angularClientApp')
    .controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.message = 'Click & Live, Bang!';
        //$rootScope.ngNotify.set('This website uses cookies, please accept to continue', {type: 'info', sticky: true});
        $rootScope.ngNotify.set('This website uses cookies, close this message to accept and continue', {
            sticky: true
        });
    }]);
