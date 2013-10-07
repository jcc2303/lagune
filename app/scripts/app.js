'use strict';

/*
  .config(function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'views/main.html',  controller: 'MainCtrl' })
      .otherwise({
        redirectTo: '/'
      });
*/

angular.module('laguneApp', ['laguneApp.filters', 'laguneApp.services', 'laguneApp.directives', 'laguneApp.controllers'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/account/login', {templateUrl: 'views/login.html', controller: 'AccountCtrl'});
    $routeProvider.when('/account/:accountId', {templateUrl: 'views/account.html', controller: 'AccountCtrl'});


    $routeProvider.when('/nodes', {templateUrl: 'views/nodes.html', controller: 'NodesCtrl'});

    $routeProvider.when('/courses', {templateUrl: 'views/courses.html', controller: 'CoursesCtrl'});
    $routeProvider.when('/courses/:courseId', {templateUrl: 'views/course.html', controller: 'CourseCtrl'});


    $routeProvider.otherwise({redirectTo: '/courses'});
  }]);
