'use strict';
angular.module('app.core').controller('homeCtrl',
		function($scope, $cordovaMedia,$ionicLoading) {
			document.addEventListener("deviceready", onDeviceReady, false);
			function onDeviceReady() {

				screen.lockOrientation('landscape');

				playMP3();

			};

			document.addEventListener('deviceready', onDeviceReady, false);



			var playMP3=function () {
			    var mp3URL = getMediaURL("mp3/bg.mp3");
			    var media = new Media(mp3URL, null, mediaError);
			    media.play();
			}

			var getMediaURL=function (s) {
			    if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
			    return s;
			}

			var mediaError=function (e) {
			    alert('Media Error');
			    alert(JSON.stringify(e));
			}

			$scope.exitApp= function (){
				alert('Chwe chawe');
				navigator.app.exitApp();
			};



		});