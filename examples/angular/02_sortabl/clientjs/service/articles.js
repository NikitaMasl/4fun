/**
 * Created with JetBrains WebStorm.
 * User: reznichenko
 *
 */

angular
    .module('App.services', ['ngResource'])
    .factory('Articles', ['$resource', function ($resource) {
        return $resource('api/articles', {}, {
            query: {
                method: 'get',
                params: { count: 50, from: 0 },
                transformResponse: function (data, header) {
                    data = angular.fromJson(data);
                    return data.articles;
                },
                isArray: true,
                responseType: 'json'
            }
        });
    }]);
