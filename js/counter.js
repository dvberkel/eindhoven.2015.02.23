;(function($){
    /* create your demo here! */
    var demoApp = angular.module('demoApp', []);

    demoApp.controller("demoController", function($scope){
        $scope.count = 0;
    });
})(window.demo = window.demo || {});
