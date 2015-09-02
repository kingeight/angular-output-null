(function() {
  'use strict';
  angular.module('app', ['app.output']
  )
  .controller('myCtrl',['$scope',function($scope){
  	$scope.mywords="abc";
  	$scope.mywords1="":
  	$scope.mywords2=null;
  	$scope.mywords3=false;
  }]);
}).call(this);
