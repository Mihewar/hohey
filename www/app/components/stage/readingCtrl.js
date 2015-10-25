'use strict';
angular
    .module('app.core')
    .controller('readingCtrl', function($scope,$stateParams) {
    	document.addEventListener("deviceready", onDeviceReady, false);
    	function onDeviceReady() {

    			screen.lockOrientation('landscape');

    	}
    });