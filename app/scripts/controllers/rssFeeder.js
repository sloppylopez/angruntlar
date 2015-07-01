'use strict';

/**
 * @ngdoc function
 * @name angularClientApp.controller:RssFeederCtrl
 * @description
 * # RssFeederCtrl
 * Controller of the angularClientApp
 */
angular.module('angularClientApp')
  .controller('RssFeederCtrl',
    function ($scope, rssFeederServiceFactory) {
      $scope.rssFeeder = function (queryTerm) {
        rssFeederServiceFactory.rssFeeder(queryTerm)
          .then(function (data) {
            $scope.news = data || {};
          });
      };
      //we call the first time to get all results from elastic search
      $scope.rssFeeder();
    });
