abcApp.controller('HeaderController', function($scope) {
  $scope.menuOpen = false;
  $scope.menuClose = true;

  $scope.openMenu = function(){
    $scope.menuOpen = !$scope.menuOpen;
    $scope.menuClose = !$scope.menuClose;
  };

  $scope.closeMenu = function(){
    $scope.menuClose = !$scope.menuClose;
    $scope.menuOpen = !$scope.menuOpen;
  };
});