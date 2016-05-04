angular.module('app.controllers', [])

    .controller('MoviesController', function ($scope, $http)
    {

        $http({
            method: 'GET',
            url: 'https://api.usergrid.com/leggc/sandbox/movies'
        })
         .success(function (data)
         {             
             $scope.movies = data;
         });
        

    });