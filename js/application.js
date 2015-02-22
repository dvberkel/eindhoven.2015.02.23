;(function(){
    console.log('Write your application here!');
    var kwetterApp = angular.module('kwetterApp', []);

    function aTweet(content, favourite, avatar) {
        return {
            'avatar': avatar || 'image/placeholder1.gif',
            'favourite': favourite || 0,
            'content': content || 'Hello World!'
        };
    }

    kwetterApp.controller('timeline', function($scope){
        $scope.tweet = aTweet('Kittens are fantastic', 128, 'image/placeholder1.gif');
    });
})();
