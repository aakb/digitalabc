abcApp.controller('HeaderController', function($scope) {
  $scope.menuOpen = false;

  $scope.toggleMenu = function(){
    $scope.menuOpen = !$scope.menuOpen;
  };
});