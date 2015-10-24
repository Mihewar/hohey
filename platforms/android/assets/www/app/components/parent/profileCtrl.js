'use strict';
angular
    .module('app.core')
    .controller('profileCtrl', function($scope,$stateParams) {
    	document.addEventListener("deviceready", onDeviceReady, false);
    	function onDeviceReady() {

    			screen.unlockOrientation();

    	}
    });