'use strict';
angular.module('app.core').controller(
		'writingCtrl',
		function($scope, $stateParams) {
			document.addEventListener("deviceready", onDeviceReady, false);
			function onDeviceReady() {

				screen.lockOrientation('landscape');

			}

			$scope.$on('$viewContentLoaded', function(event) {
				console.log('statechanged');
				var game = new Phaser.Game(200, 200, Phaser.CANVAS,
						'phaser-example', {
							create : create
						});

				function create() {

					var text = "- phaser -\n with a sprinkle of \n pixi dust.";
					var style = {
						font : "65px Arial",
						fill : "#ff0044",
						align : "center"
					};

					var t = game.add.text(game.world.centerX - 300, 0, text,
							style);

				}
			});
		});