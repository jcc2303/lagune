'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

//angular.module('myApp.services', []).
//  value('version', '0.1');

var appS = angular.module('laguneApp.services', ['ngResource']);
appS.value('version', '0.1');


appS.factory('Account', function($resource){
  return $resource('data/account-:accountId.json', {}, {
    query: {method:'GET', params:{accountId:'account'}, isArray:false}
  });
});

appS.factory('Language', function($resource) {
    return $resource('data/:languageId.json', {}, {
      query: {method:'GET', params:{languageId:'languages'}, isArray:true}
    });
});

appS.factory('Node', function($resource){
  return $resource('data/nodes.json', {}, {
    query: {method:'GET', isArray:true}
  });
});

appS.factory('Word', function($resource){
  return $resource('data/:wordId.json', {}, {
    query: {method:'GET', params:{wordId:'words_en'}, isArray:true}
  });
});

appS.factory('Course', function($resource){
  return $resource('data/:courseId.json', {}, {
    query: {method:'GET', params:{courseId:'courses'}, isArray:true}
  });
});



appS.service('CourseService', function(){
  this.courseData = {};

  this.course = function() {
      return this.courseData;
  };  


  this.setCourse = function(course) {
      this.courseData = course;
  };

  this.getCourse = function() {
      return this.courseData;
  };



});









/*
    var en = { name: "english", ac:"EN" },
        es = { name: "spanish", ac:"ES" };
    this.list = [en, es];


appS.service("courseListModel", function() {
    this.list = [
      {name:'body part', 
       description: 'essential part of the body',
       pictures: [
        {url:'img/face.png', ml:'face',ll:'cara'},
        {url:'img/face-man.png', ml:'man',ll:'hombre'},
        {url:'img/face-woman.png', ml:'woman',ll:'mujer'}
       ]
      }
    ];    

});
*/


/*
appS.service("pictureListModel", function() {
    this.list = [
    {url:'img/face.png'},
    {url:'img/face-man.png'},
    {url:'img/face-woman.png'}];    
});


appS.service("wordListModel", function() {
    this.list = [
    {text:'saludos', like:true, likes:5},
    {text:'Hola', like:false, likes:7},
    {text:'Dame 5', like:false, likes:4}];
    
});
*/