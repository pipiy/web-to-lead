app.controller("SignInController", ['$scope', function($scope) {
  $scope.signIn = function() {
    var alert = document.getElementById('alert');
    // stored data from the register-form
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    // entered data from the login-form
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById('password').value;

    var validUser = storedEmail == userEmail;
    var validPsw = storedPassword == userPassword;
    if ($scope.myForm.$valid) {
      if (validUser && validPsw) {
        window.location.href = "home.html";
      } else if (!validUser) {
        alert.innerText = `Username ${userEmail} has not been registered`;
        $('#alert').show();
      } else if (!validPsw) {
        alert.innerText = `Incorrect password for username ${userEmail}`;
        $('#alert').show();
      }
    }
  };

  $scope.showPsw = function() {
    var x = document.getElementById('password')

    if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
}]);
