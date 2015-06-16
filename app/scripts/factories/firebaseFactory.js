'use strict';

angular.module('angularClientApp')
  .factory('firebaseFactory', function () {
    return {
      getFireBaseRef: function (fireBaseUser) {
        return new Firebase('//' + fireBaseUser + '.firebaseio.com');
      }
    };
  }
);
