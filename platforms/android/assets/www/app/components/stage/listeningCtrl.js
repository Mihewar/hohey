'use strict';
angular.module('app.core').controller(
		'listeningCtrl',
		function($scope, $stateParams, $rootScope, letterSrvc) {
			document.addEventListener("deviceready", onDeviceReady, false);
			function onDeviceReady() {

				screen.lockOrientation('landscape');

			}
			$rootScope.stop();

			$scope.letter = letterSrvc.getLetter($stateParams.s,
					$stateParams.l, $stateParams.i);

			var p = parseInt($stateParams.i - 1);
			var n = parseInt(parseInt($stateParams.i) + 1);

			if (p >= 0) {
				$scope.prev = $stateParams.s + '/' + $stateParams.l + '/' + p;
			}
			if (n <= 5) {
				$scope.next = $stateParams.s + '/' + $stateParams.l + '/' + n;
			}

			console.log('mp3/' + $stateParams.s + '-' + $stateParams.l
					+ '-' + $stateParams.i + '.mp3');

			$scope.playletter = function() {
				$rootScope.url = 'mp3/' + $stateParams.s + '-' + $stateParams.l
						+ '-'+
				$stateParams.i + '.mp3';
				$rootScope.load();
				$rootScope.play();


			}

		});