// Header controller.
abcApp.controller('HeaderController', function($scope, $document, $location, $rootScope, $timeout) {
  // Set variables.
  $scope.menuOpen = null;
  $scope.layoutClassSuffix = 'layout';

  // Added helper function for the menu.
  $scope.$on('changeLayoutClassSuffix', function(event, data) {
    $scope.layoutClassSuffix = data;
  });

  // Function for open/close menu.
  $scope.toggleMenu = function() {
    if ($scope.menuOpen === null) {
      $scope.menuOpen = false;
    }

    $scope.menuOpen = !$scope.menuOpen;

    // Add toggle to html tag to avoid scrolling when the menu is open.
    // We add the class this way because the <html> is not in $scope.
    $('html').toggleClass('is-locked');
  };

  // Change route.
  $rootScope.$on('$routeChangeSuccess', function() {
    // Make sure menu is closed.
    if ($scope.menuOpen !== null) {
      $scope.menuOpen = false;
    }

    // Add toggle to html tag to avoid scrolling when the menu is open.
    // We add the class this way because the <html> is not in $scope.
    $('html').removeClass('is-locked');

    // Add class to animation overlay and remove it when the CSS animation ends.
    $('.js-animation-overlay')
      .addClass('is-animating')
      .one('webkitAnimationEnd oAnimationend animationend',
      function() {
        $(this).removeClass('is-animating');
      });
  });

  // Video controls.
  $scope.showVideo = false;

  $scope.playVideo = function(video) {
    videojs(video, {"width": 'auto', "height": '100%'}, function() {
      this.play();
    });

    // Show video container.
    $scope.showVideo = true;

    // Scroll to video.
    setTimeout(function () {
      $document.scrollToElement(angular.element(document.getElementById('video-container')), 0, 500);
    }, 500);
  };


  if ($location.path() === '/video') {
    $timeout(function(){
      $document.scrollToElement(angular.element(document.getElementById('video')), 0, 500);
    }, 1000);
  }
  else if ($location.path() === '/video/troll-painter') {
    $timeout(function(){
      $scope.playVideo('troll-painter');
    }, 1000);
  }

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
