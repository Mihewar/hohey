'use strict';
angular
    .module('app.core')
    .controller('stageCtrl', function($scope,$stateParams,letterSrvc) {
    	$scope.letter=letterSrvc.getLetter();
       //console.log(letter);
    });