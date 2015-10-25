'use strict';
angular
    .module('app.core')
    .controller('speakingCtrl', function($scope,$stateParams) {
    	document.addEventListener("deviceready", onDeviceReady, false);
    	function onDeviceReady() {

    			screen.lockOrientation('landscape');

    	}
    });