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
  $scope.currentVideo = '';
  $scope.showVideo = function(item) {
    if (item === $scope.currentVideo) {
      return true;
    }
    else {
      return false;
    }
  }
  $scope.video;

  // Play video.
  $scope.playVideo = function(video) {
    $scope.video = $('.' + video)[0].player;
    console.log($scope.video);
    $scope.video.height = '100%';
    $scope.video.play();
    $scope.currentVideo = video;
/*    videojs($('.' + video), {"width": 'auto', "height": '100%'}, function() {
      $scope.video = this;
      $scope.currentVideo = video;
      this.play();
    });*/

    // Scroll to video.
    setTimeout(function () {
      $document.scrollToElement(angular.element(document.getElementById('video-container')), 0, 500);
    }, 500);
  };

  // Stop video.
  $scope.stopVideo = function() {
    $scope.video.pause();
    $document.scrollToElement(angular.element(document.getElementById('video')), 0, 500);
    $timeout(function(){
      $scope.currentVideo = '';
    }, 700);
  }

  // Handle video URLs
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
