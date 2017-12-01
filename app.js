var app = angular.module('app', []);

app.controller('firstCtrl', function($scope, $http){
 $http.get('blog.json').then(function(response){ 
$scope.posts = response.data;
console.log(response.data);
});
  $scope.addComment = function(post) {
      $scope.comment={"content":"","author":" "};
      var newComment = {
        content:post.comment.content,
        author:post.comment.author
            };
      post.comments.push(newComment);
      post.comment="";
  };
});

