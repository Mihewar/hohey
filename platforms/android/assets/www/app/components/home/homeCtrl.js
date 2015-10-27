'use strict';
angular.module('app.core').controller('homeCtrl',
		function($scope, $cordovaMedia,$ionicLoading,playerSrvc,$rootScope) {
			document.addEventListener("deviceready", onDeviceReady, false);
			function onDeviceReady() {

				screen.lockOrientation('landscape');

				$rootScope.url="mp3/bg.mp3";
				$rootScope.load();
				$rootScope.play();


			};




			$scope.exitApp= function (){
				alert('Chwe chawe');
				navigator.app.exitApp();
			};



		});