app.controller("SignUpController", ['$scope', function($scope) {
  $scope.signUp = function() {
    if ($scope.myForm.$valid) {
      if ($scope.password === $scope.retypePassword) {
        localStorage.setItem('email', $scope.email);
        localStorage.setItem('password', $scope.password);
        localStorage.setItem('username', $scope.username);
        window.location.href = "home.html";
      } else {
        $scope.alert = true;
      };
    };
  };
}]);
