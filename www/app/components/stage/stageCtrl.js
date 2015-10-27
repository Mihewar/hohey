'use strict';
angular.module('app.core').controller('stageCtrl',
		function($scope, $stateParams, letterSrvc) {
			document.addEventListener("deviceready", onDeviceReady, false);
			function onDeviceReady() {

				screen.lockOrientation('landscape');

			}



			//console.log(letter);
		});