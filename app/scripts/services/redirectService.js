'use strict';
angular.module('angularClientApp')
  .service('redirectService', function ($location) {
    this.redirectTo = function (redirectTo) {
      $location.path(redirectTo);
    };
  });
