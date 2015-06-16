'use strict';
/**
 * @ngdoc overview
 * @name angularclient:run
 * @description
 * # run.js
 */
angular.module('angularClientApp')
  .run(['$rootScope', '$location', 'firebaseFactory', 'FB_USER', 'ngNotify', function ($rootScope, $location, firebaseFactory, FB_USER, ngNotify) {
    $rootScope.fbRef = firebaseFactory.getFireBaseRef(FB_USER);//TODO ensure it's not calling the real firebase while testing
    ngNotify.config({
      theme: 'pure',
      position: 'bottom',
      duration: 3000,
      type: 'info',
      sticky: false
    });
    $rootScope.ngNotify = ngNotify;
    $rootScope.$on('$routeChangeStart', function (event, next) {
      if (next.resetCredentials) {
        $rootScope.authData = undefined;
      }
      if (next.loginRequired && typeof $rootScope.authData === 'undefined') {
        event.defaultPrevented = true;
        $rootScope.ngNotify.set('You need to be logged for that', {type: 'error'});
        $location.path('/authwithpassword');
      }
    });
  }]);
