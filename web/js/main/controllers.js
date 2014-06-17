abcApp.controller('HeaderController', function($scope, $location, $anchorScroll) {

  // Added helper function for the menu.

  $scope.menuOpen = null;

  $scope.toggleMenu = function(){
    if ($scope.menuOpen === null) {
      $scope.menuOpen = false;
    }
    $scope.menuOpen = !$scope.menuOpen;
  };


  // Create scrollTo functionality.
  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  }
});
