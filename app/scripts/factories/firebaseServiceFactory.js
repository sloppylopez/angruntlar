'use strict';
angular.module('angularClientApp')
  .factory('firebaseServiceFactory', ['firebaseFactory', '$location', '$q',
    function (firebaseFactory, $location, $q) {
      return {
        logout: function ($scope, $rootScope, redirectTo) {
          $rootScope.fbRef.unauth();
          $rootScope.ngNotify.set('Good bye', {type: 'info'});
          $location.path(redirectTo);
        },
        resetPassword: function ($scope, $rootScope) {
          var def = $q.defer(), model = this;
          $rootScope.fbRef.resetPassword({
              email: $scope.user.email
            }, model._resetPasswordCallback(def, $rootScope)
          );
          return def.promise;
        },
        _resetPasswordCallback: function (def, $rootScope) {
          return function (error) {
            if (error) {
              $rootScope.ngNotify.set('Error resetting password:' + error, {type: 'error'});
              def.reject(error);
            } else {
              $rootScope.ngNotify.set('Password reset email sent successfully!', {type: 'success'});
              def.resolve();
            }
          };
        },
        authWithPassword: function ($scope, $rootScope) {
          var def = $q.defer(), model = this;
          $rootScope.fbRef.authWithPassword({
            email: $scope.user.email,
            password: $scope.user.password
          }, model._authWithPasswordCallBack($rootScope, $scope, def), {
            remember: 'sessionOnly'
          });
          return def.promise;
        },
        _authWithPasswordCallBack: function ($rootScope, $scope, def) {
          return function (error, authData) {
            if (error) {
              $rootScope.ngNotify.set('Login Failed ' + error, {type: 'error'});
              def.reject(error);
            } else {
              $rootScope.ngNotify.set('Authenticated successfully ' + authData.password.email, {type: 'success'});
              $rootScope.authData = authData;
              def.resolve(authData);
            }
            $scope.showme = false;
          };
        },
        createUser: function ($scope, $rootScope) {
          var model = this;
          $rootScope.fbRef.createUser({
            email: $scope.user.email,
            password: model._randomizer()
          }, model._createUserCallBack(model, $rootScope, $scope));
        },
        _createUserCallBack: function (model, $rootScope, $scope) {
          return function (error, authData) {
            if (error) {
              $rootScope.ngNotify.set(error, {type: 'error'});
            } else {
              model.resetPassword($scope, $rootScope);
            }
            return error || authData;
          };
        },
        _randomizer: function () {
          var chars = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?_-'];
          var randomString = '';
          for (var i = 0; i <= 10; i++) {
            randomString += chars[Math.floor(Math.random() * chars.length)];
          }
          return randomString;
        }
      };
    }]
);
