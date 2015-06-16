'use strict';
angular.module('angularClientApp')
  .service('redirectService', ['$location', function ($location) {
    this.redirectTo = function (redirectTo) {
      $location.path(redirectTo);
    };
  }]);
