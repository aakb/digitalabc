abcApp.controller('HeaderController', function($scope) {
  $scope.menuOpen = null;

  $scope.toggleMenu = function(){
    if ($scope.menuOpen === null) {
      $scope.menuOpen = false;
    }
    $scope.menuOpen = !$scope.menuOpen;
  };
});
