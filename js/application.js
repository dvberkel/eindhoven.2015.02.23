;(function(){
    console.log('Write your application here!');
    var kwetterApp = angular.module('kwetterApp', []);

    kwetterApp.controller('timeline', function($scope){
        $scope.tweet = {
            'avatar': 'image/placeholder2.gif',
            'content': 'Kittens are awesome!',
            'favourite': 51
        };
    });
})();
