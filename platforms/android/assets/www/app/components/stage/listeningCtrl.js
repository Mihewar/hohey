'use strict';
angular
    .module('app.core')
    .controller('listeningCtrl', function($scope,$stateParams) {
        //Setup the view model object
        var vm = this;
        $scope.data = 'test info';
        $scope.user=$stateParams;
    });