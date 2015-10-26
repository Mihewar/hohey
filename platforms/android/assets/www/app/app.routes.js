'use strict';

angular.module('app.routes', []).config(config);

function config($stateProvider, $urlRouterProvider) {
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home', {
		url : '/',
		templateUrl : 'app/components/home/index.html',
		controller : 'homeCtrl'
	})
	.state('catagory', {
		url : '/catagory',
		templateUrl : 'app/components/stage/catagory.html',
		controller : 'catagoryCtrl'
	}).state('stage_1', {
		url : '/stage_1',
		templateUrl : 'app/components/stage/stage_1.html',
		controller : 'stageCtrl'
	}).state('stage_2', {
		url : '/stage_2',
		templateUrl : 'app/components/stage/stage_2.html',
		controller : 'stageCtrl'
	}).state('stage_3', {
		url : '/stage_3',
		templateUrl : 'app/components/stage/stage_3.html',
		controller : 'stageCtrl'
	}).state('stage_4', {
		url : '/stage_4',
		templateUrl : 'app/components/stage/stage_4.html',
		controller : 'stageCtrl'
	}).state('level', {
		url : '/level/:l',
		templateUrl : 'app/components/stage/level.html',
		controller : 'levelCtrl'
	})

	.state('listening', {
		url : '/listening/:letter',
		templateUrl : 'app/components/stage/listening.html',
		controller : 'listeningCtrl'
	}).state('speaking', {
		url : '/speaking/:letter',
		templateUrl : 'app/components/stage/speaking.html',
		controller : 'speakingCtrl'
	}).state('reading', {
		url : '/reading/:letter',
		templateUrl : 'app/components/stage/reading.html',
		controller : 'readingCtrl'
	}).state('writing', {
		url : '/writing/:letter',
		templateUrl : 'app/components/stage/writing.html',
		controller : 'writingCtrl'
	})

	.state('parent', {
		url : '/parent',
		templateUrl : 'app/components/parent/index.html',
		abstract : true,
	}).state('parent.profile', {
		url : '/profile',
		views : {
			'menuContent' : {
				templateUrl : 'app/components/parent/profile.html',
				controller : 'profileCtrl',
			}
		}
	}).state('parent.detail', {
		url : '/detail/:uid',
		views : {
			'menuContent' : {
				templateUrl : 'app/components/parent/detail.html',
				controller : 'detailCtrl',
			}
		}
	}).state('parent.setting', {
		url : '/setting',
		views : {
			'menuContent' : {
				templateUrl : 'app/components/parent/setting.html',
				controller : 'settingCtrl'
			}
		}
	}).state('parent.help', {
		url : '/help',
		views : {
			'menuContent' : {
				templateUrl : 'app/components/parent/help.html',
				controller : 'helpCtrl'
			}
		}
	}).state('parent.credit', {
		url : '/credit',
		views : {
			'menuContent' : {
				templateUrl : 'app/components/parent/credit.html',
				controller : 'creditCtrl'
			}
		}
	}).state('parent.sync', {
		url : '/sync',
		views : {
			'menuContent' : {
				templateUrl : 'app/components/parent/sync.html',
				controller : 'syncCtrl'
			}
		}
	});

};
