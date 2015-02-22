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
        $scope.tweets = [
            aTweet('Kittens are fantastic', 128, 'image/placeholder1.gif'),
            aTweet('Kittens are awesome', 51, 'image/placeholder2.gif'),
            aTweet('Kittens are stupid', 0, 'image/placeholder3.gif')
        ];
    });
})();
