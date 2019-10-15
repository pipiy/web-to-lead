app.controller("HomeController", ['$scope', '$uibModal', '$document', function($scope, $uibModal, $document) {
  var user = localStorage;
  $scope.username = user.username ? user.username : "John Doe"
  $scope.tags = [];
  $scope.images = [
    {src: "assets/images/grid-2.jpg", tags: "Man", name: "", description: ""},
    {src: "assets/images/grid-1.jpg", tags: "Man", name: "", description: ""},
    {src: "assets/images/grid-1.jpg", tags: "Computer", name: "", description: ""},
    {src: "assets/images/grid-2.jpg", tags: "Woman", name: "", description: ""},
    {src: "assets/images/grid-3.jpg", tags: "Woman", name: "", description: ""},
    {src: "assets/images/grid-4.jpg", tags: "Computer", name: "", description: ""},
    {src: "assets/images/grid-5.jpg", tags: "Work", name: "", description: ""},
    {src: "assets/images/grid-6.jpg", tags: "City", name: "", description: ""},
    {src: "assets/images/grid-7.jpg", tags: "Nature", name: "", description: ""},
    {src: "assets/images/grid-8.jpg", tags: "Nature", name: "", description: ""},
    {src: "assets/images/grid-9.jpg", tags: "Business", name: "", description: ""},
    {src: "assets/images/grid-9.jpg", tags: "Business", name: "", description: ""},
    {src: "assets/images/grid-1.jpg", tags: "Animals", name: "", description: ""},
    {src: "assets/images/grid-8.jpg", tags: "Animals", name: "", description: ""},
    {src: "assets/images/grid-1.jpg", tags: "Man", name: "", description: ""},
    {src: "assets/images/grid-2.jpg", tags: "Man", name: "", description: ""},
    {src: "assets/images/grid-1.jpg", tags: "Man", name: "", description: ""},
    {src: "assets/images/grid-1.jpg", tags: "Computer", name: "", description: ""},
    {src: "assets/images/grid-2.jpg", tags: "Woman", name: "", description: ""},
    {src: "assets/images/grid-3.jpg", tags: "Woman", name: "", description: ""},
    {src: "assets/images/grid-4.jpg", tags: "Computer", name: "", description: ""},
    {src: "assets/images/grid-5.jpg", tags: "Work", name: "", description: ""},
  ];

  $scope.availableTags = [
    "Man",
    "Computer",
    "Woman",
    "Work",
    "City",
    "Nature",
    "Business",
    "Animals"
  ];

  $scope.hideAndShow = false;
  $scope.$watch('hideAndShow', function() {
    $scope.buttonValue = $scope.hideAndShow ? 'Hide Form' : 'Show Form';
  });
  $scope.addTag = function() {
    $scope.tags.push($scope.tag);
    $scope.tag = '';
  }
  $scope.removeTag = function(index) {
    $scope.tags.splice(index, 1);
  }
  $scope.ok = function () {
    $scope.images.push({ name: $scope.name, tags: $scope.tags, description: $scope.description, src: "assets/images/grid-1.jpg" });
    _.map($scope.tags, function(i) {
      $scope.availableTags.push(i);
    })
    $scope.name = '';
    $scope.tags = [];
    $scope.description = '';
    $scope.hideAndShow = false;
  };
  $( "#searchbar" ).autocomplete({
    source: $scope.availableTags
  });
}]);
