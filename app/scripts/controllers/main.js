'use strict';

/* Controllers */


var appC = angular.module('laguneApp.controllers', []);



appC.controller('AccountCtrl', ['$scope','Account', function($scope, Account) {
    //console.log($routeParams);
    //to show in header
    $scope.username = null;
    // user information
    $scope.$on( 'user.update', function( event, user ) {
      console.log('event user.update');
      $scope.user = user;
      if(user !== null){
        $scope.username = user.username;
        $scope.account = Account.get({accountId: $scope.username }, function(account) {
          console.log(account);
        });
      }
      //$routeParams.accountId

    });

    $scope.login = function(){
      console.log('login: '+$scope.username + $scope.password);
      $scope.username = 'salamander';
      $scope.user = { username : $scope.username, password: $scope.password };
      $scope.$emit( 'user.update', this.user );
    };

    $scope.logout = function(){
      console.log('logout: '+$scope.username);
      $scope.username = '';
      $scope.user = null;
      $scope.account = null;
      $scope.$broadcast( 'user.update');
      //ng-click='$broadcast('MyEvent')'
    };
  }]);

appC.controller('LanguageCtrl', ['$scope','Language', function($scope, Language) {
    $scope.languages = Language.query();
    $scope.language=''; // ES

  }]);


appC.controller('NodesCtrl', ['$scope', 'Node', function($scope, Node ) {
    $scope.nodes = Node.query();
  }]);


appC.controller('WordsCtrl', ['$scope', 'Word', function($scope, Word ) {
    if ($scope.account){
      console.log($scope.account);
    }
    $scope.words = Word.query();//default en

    // move to directive
    $scope.play = function (audioId) {
        var audio = document.getElementById(audioId);
        audio.load();
        audio.play();
      };

  }]);


appC.controller('WordsLlCtrl', ['$scope', 'Word', function($scope, Word ) {
    if ($scope.account){
      $scope.words = Word.query({wordId:'words_'+$scope.account.ll},function(){ });//word
    }


  }]);


appC.controller('CoursesCtrl', ['$scope', 'Course','CourseService', function($scope, Course, CourseService ) {
    $scope.courses = Course.query();

    $scope.setCourse = function (course){
      console.log($scope.courses);
      console.log(course);
      CourseService.setCourse(course);
    };
  }]);


//,'courseListModel'
appC.controller('CourseCtrl', ['$scope','$routeParams', 'CourseService', function($scope, $routeParams, CourseService ) {

    $scope.course = CourseService.getCourse();
    console.log($scope.course);

    $scope.position=0;
    $scope.step=$scope.course.nodes[$scope.position];

    $scope.next = function(){
      $scope.position = $scope.position + 1;
      $scope.step=$scope.course.nodes[$scope.position];
    };

    $scope.back = function(){
      $scope.position = $scope.position - 1;
      $scope.step=$scope.course.nodes[$scope.position];
    };


  }]);

