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
        //$rootScope.ngToast.set('This website uses cookies, please accept to continue', {type: 'info', sticky: true});
        $rootScope.ngToast.create({
            className: 'info',
            content: 'Web use cookies, close to accept',
            dismissOnClick: false,
            dismissButton: true,
            dismissOnTimeout: false,
            timeout: 1000000 //this is because the ngToast works buggy without it, i prefer to have it this way :(
        });
    }]);
