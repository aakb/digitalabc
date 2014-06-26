// Header controller.
abcApp.controller('HeaderController', function($scope, $location, $rootScope) {
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

  $rootScope.$on('$routeChangeSuccess', function() {
    // Make sure menu is closed.
    $scope.$emit('closeMenu');

    // Add class to animation overlay and remove it when the CSS animation ends.
    $('.js-animation-overlay')
      .addClass('is-animating')
      .one('webkitAnimationEnd oAnimationend animationend',
      function() {
        $(this).removeClass('is-animating');
      });
  });
});


// Frontpage controller.
abcApp.controller('FrontpageController', function($scope, $location) {
  // Change layout class.
  $scope.$emit('changeLayoutClassSuffix', 'layout');
});


// Static page controller.
abcApp.controller('StaticPageController', function($scope, $location, $document) {
  // Change layout class.
  $scope.$emit('changeLayoutClassSuffix', 'static-page');
});