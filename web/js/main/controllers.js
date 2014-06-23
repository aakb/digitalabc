// Header controller.
abcApp.controller('HeaderController', function($scope, $location, $anchorScroll) {
  $scope.layoutClassSuffix = 'layout';

  // Added helper function for the menu.
  $scope.$on('changeLayoutClassSuffix', function(event, data) {
    $scope.layoutClassSuffix = data;
  });

  // Added helper function for the menu.
  $scope.$on('closeMenu', function(event, data) {
    $scope.menuOpen = false;
  });

  $scope.toggleMenu = function(){
    if ($scope.menuOpen === null) {
      $scope.menuOpen = false;
    }
    $scope.menuOpen = !$scope.menuOpen;
  };
});


// Frontpage controller.
abcApp.controller('FrontpageController', function($scope, $location, $anchorScroll) {
  // Change layout class.
  $scope.$emit('changeLayoutClassSuffix', 'layout');

  // Make sure menu is closed.
  $scope.$emit('closeMenu');
});


// Static page controller.
abcApp.controller('StaticPageController', function($scope, $location, $anchorScroll) {
  // Make sure menu is closed.
  $scope.$emit('closeMenu');

  // Change layout class.
  $scope.$emit('changeLayoutClassSuffix', 'static-page');
});