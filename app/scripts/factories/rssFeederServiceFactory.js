'use strict';

angular.module('angularClientApp')
  .service('rssFeederServiceFactory', ['esClientFactory', '$q', 'ES_IP', 'ES_PORT', 'ngNotify',
    function (esClientFactory, $q, ES_IP, ES_PORT, ngNotify) {
      return {
        _query: function (queryTerm) {
          if (queryTerm === '*') {//TODO refactor this crap...
            return {
              index: '_all',
              type: 'rss',
              size: 200,
              body: {
                sort: [{
                  'pubdate': {'order': 'desc'}
                }],
                query: {
                  match_all: {}
                }
              }
            };
          } else {
            return {
              index: '_all',
              type: 'rss',
              size: 200,
              body: {
                sort: [{
                  'pubdate': {'order': 'desc'}
                }],
                query: {
                  match: {
                    title: queryTerm
                  }
                }
              }
            };
          }
        },
        _successCallBack: function (deferred) {
          return function (resp) {
            deferred.resolve(resp.hits.hits);
          };
        },
        _errorCallBack: function (deferred, ngNotify) {
          return function (err) {
            ngNotify.set(err.message, {type: 'error'});
            deferred.reject(null);
          };
        },
        rssFeeder: function (queryTerm) {
          var deferred = $q.defer(), model = this;
          esClientFactory
            .getElasticSearchRef(ES_IP, ES_PORT)
            .search(model._query(queryTerm || '*')).then(
            model._successCallBack(deferred),
            model._errorCallBack(deferred, ngNotify)
          );
          return deferred.promise;
        }
      };
    }]
);


