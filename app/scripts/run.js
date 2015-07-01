'use strict';
/**
 * @ngdoc overview
 * @name angularclient:run
 * @description
 * # run.js
 */
angular.module('angularClientApp')
    .run(['$rootScope', '$location', 'firebaseFactory', 'FB_USER', 'ngToast', function ($rootScope, $location, firebaseFactory, FB_USER, ngToast) {
        $rootScope.fbRef = firebaseFactory.getFireBaseRef(FB_USER);//TODO ensure it's not calling the real firebase while testing
        $rootScope.ngToast = ngToast;
        $rootScope.$on('$routeChangeStart', function (event, next) {
            if (next.loginRequired && typeof $rootScope.authData === 'undefined') {
                event.defaultPrevented = true;
                $rootScope.ngToast.create({
                    className: 'danger',
                    content: 'You need to be logged for that'
                });
                $location.path('/authwithpassword');
            }
            if (next.resetCredentials) {
                $rootScope.authData = undefined;
                $rootScope.ngToast.create({
                    className: 'info',
                    content: 'Good bye'
                });
            }
        });
    }]);
