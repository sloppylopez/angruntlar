'use strict';
/**
 * @ngdoc overview
 * @name angularclient:routes
 * @description
 * # routes.js
 */
angular.module('angularClientApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                loginRequired: false
            })
            .when('/rssfeeder', {
                templateUrl: 'views/rssFeeder.html',
                controller: 'RssFeederCtrl',
                loginRequired: true
            })
            .when('/authwithpassword', {
                templateUrl: 'views/authWithPassword.html',
                controller: 'AuthWithPasswordCtrl',
                loginRequired: false
            })
            .when('/createuser', {
                templateUrl: 'views/createUser.html',
                controller: 'CreateUserCtrl',
                loginRequired: false
            })
            .when('/resetpassword', {
                templateUrl: 'views/resetPassword.html',
                controller: 'ResetPasswordCtrl',
                loginRequired: false
            })
            .when('/logout', {
                controller: 'LogoutCtrl',
                templateUrl: 'views/authWithPassword.html',
                loginRequired: true,
                resetCredentials: true
            })
            .otherwise({redirectTo: '/'});
    }])
    .config(['ngToastProvider', function (ngToastProvider) {
        ngToastProvider.configure({
            animation: 'slide', // or 'fade'
            dismissOnClick: true,
            horizontalPosition: 'center',
            maxNumber: 1,
            timeout: 3000,
            dismissOnTimeout: true,
            additionalClasses: 'ngtoast-custom'
        });
    }]);
