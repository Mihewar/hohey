'use strict';
angular.module('app.core').controller('homeCtrl', function($scope) {
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {

			screen.lockOrientation('landscape');

	}
});