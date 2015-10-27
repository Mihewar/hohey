'use strict';
//Ionic Starter App

//angular.module is a global place for creating, registering and retrieving Angular modules
//'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
//the 2nd parameter is an array of 'requires'
angular.module('app', [ 'ionic', 'ngCordova','app.routes', 'app.core', 'app.services', 'app.config' ])

.run(function($ionicPlatform,$rootScope) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory
		// bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.hide();
		}
	});
	$rootScope.url='mp3/bg.mp3';

	$rootScope.media=null;

	$rootScope.load= function(){
		var getMediaURL= function (s) {
		    if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
		    return s;
		}
		var mp3URL = getMediaURL($rootScope.url);

		$rootScope.media = new Media(mp3URL, null, function (e) {
		    alert('Media Error');
		    alert(JSON.stringify(e));
		});




	}
	$rootScope.play = function(){

		if($rootScope.media){
			$rootScope.media.play();
			console.log('play');
		}

	}
	$rootScope.stop = function (){
		if($rootScope.media){
			$rootScope.media.stop();
		}
	}

	//$rootScope

});
