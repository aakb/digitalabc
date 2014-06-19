// Header controller.
abcApp.controller('HeaderController', function($scope, $location, $anchorScroll) {
  $scope.layoutClassSuffix = 'layout';

  // Added helper function for the menu.
  $scope.$on('changeLayoutClassSuffix', function(event, data) {
    $scope.layoutClassSuffix = data;
  });

  $scope.menuOpen = null;

  $scope.toggleMenu = function(){
    if ($scope.menuOpen === null) {
      $scope.menuOpen = false;
    }
    $scope.menuOpen = !$scope.menuOpen;
  };
});


// Frontpage controller.
abcApp.controller('FrontpageController', function($scope, $location, $anchorScroll) {
  $scope.layoutClassSuffix = 'layout';

  // Create scrollTo functionality.
  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  }
});


// Static page controller.
abcApp.controller('StaticPageController', function($scope, $location, $anchorScroll) {
  // Change layout class.
  $scope.$emit('changeLayoutClassSuffix', 'static-page');
});