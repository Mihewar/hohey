'use strict';
angular.module('app.core').controller('stageCtrl',
		function($scope, $stateParams, letterSrvc) {
			document.addEventListener("deviceready", onDeviceReady, false);
			function onDeviceReady() {

				screen.lockOrientation('landscape');

			}

			var myScroll;

			function loaded() {
				myScroll = new IScroll('#wrapper', {
					eventPassthrough : true,
					scrollX : true,
					scrollY : false,
					preventDefault : false,
					bindToWrapper:true,
				});

			}
			loaded();
			$scope.letter = letterSrvc.getLetter();
			//console.log(letter);
		});