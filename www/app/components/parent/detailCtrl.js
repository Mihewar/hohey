'use strict';
angular.module('app.core').controller('detailCtrl',
		function($scope, $stateParams) {
			document.addEventListener("deviceready", onDeviceReady, false);
			function onDeviceReady() {

				screen.lockOrientation('portrate');

			}

			$scope.takepicture = function() {
				alert('take pic')
				navigator.camera.getPicture(onSuccess, onFail, {
					quality : 50,
					destinationType : Camera.DestinationType.DATA_URL
				});

				function onSuccess(imageData) {
					var image = document.getElementById('myImage');
					image.src = "data:image/jpeg;base64," + imageData;
				}

				function onFail(message) {
					alert('Failed because: ' + message);
				}
			};
		});