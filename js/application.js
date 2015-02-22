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

    kwetterApp.directive('tweet', function(){
        return {
            'template': '<div class="tweet col-md-8 col-md-offset-2">' +
          '<div class="content">' +
            '<img class="avatar" src="{{tweet.avatar}}" alt="">' +
            '<p class="tweet-text" >{{tweet.content}}</p>' +
          '</div>' +
          '<div class="info"><span class="favourite">{{tweet.favourite}}</span></div>' +
        '</div>'
        }
    });
})();
