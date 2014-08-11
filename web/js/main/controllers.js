// Header controller.
abcApp.controller('HeaderController', function($scope, $document, $animate, $location, $rootScope, $timeout) {
  // Initialise variables.
  $scope.menuOpen = null;
  $scope.layoutClassSuffix = 'layout';

  // Disable animation for nav element.
  $animate.enabled(false, angular.element(document.getElementsByClassName('js-disable-animations')));

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

  // Handle active menu item
  $scope.setActiveMenuItem = function(path) {
    if ($location.path() === path) {
      return "is-active";
    } else {
      return "";
    }
  }

  // Handle active menu item
  $scope.setPdfLink = function(path) {
    if ($location.path() === path) {
      return true;
    } else {
      return false;
    }
  }

  // Function to scroll to the position of the different elements on the frontpage.
  var scrollToPosition = function() {
    // Handle video URLs
    if ($location.path().indexOf('/video') === 0) {
      $timeout(function() {
        $document.scrollToElement(angular.element(document.getElementById('video')), 0, 500);
      }, 1000);
    }
    else if ($location.path() == '/music-video') {
      $timeout(function() {
        $document.scrollToElement(angular.element(document.getElementById('rap')), 0, 500);
      }, 1000);
    } else {
      $(window).scrollTop(0);
    }
  }
  scrollToPosition();

  // Change route.
  $rootScope.$on('$routeChangeSuccess', function() {
    // Make sure menu is closed.
    if ($scope.menuOpen !== null) {
      $scope.menuOpen = false;
    }

    // Scroll to the correct position.
    scrollToPosition();

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

    // Change title dependant on current url.
    if ($location.path().indexOf("/quiz") === 0) {
      window.document.title = 'Quiz - Digital ABC';
    }
    else if ($location.path().indexOf("/undervisningsmateriale/sidste-omgang") === 0) {
      window.document.title = 'Sidste omgang - Digital ABC';
    }
    else if ($location.path().indexOf("/undervisningsmateriale/digital-parathed") === 0) {
      window.document.title = 'Digital parathed - Digital ABC';
    }
    else if ($location.path().indexOf("/undervisningsmateriale/farvel-forvalt-lingo") === 0) {
      window.document.title = '#FarvelForvaltLingo - Digital ABC';
    }
    else if ($location.path().indexOf("/undervisningsmateriale/lav-din-egen-film") === 0) {
      window.document.title = 'Lav din egen film - Digital ABC';
    }
    else if ($location.path().indexOf("/undervisningsmateriale") === 0) {
      window.document.title = 'Undervisningsmateriale - Digital ABC';
    }
    else if ($location.path().indexOf("/om-projektet/unge") === 0) {
      window.document.title = 'Til de unge - Digital ABC';
    }
    else if ($location.path().indexOf("/om-projektet/laererne") === 0) {
      window.document.title = 'Til lærerne - Digital ABC';
    }
    else if ($location.path().indexOf("/om-projektet/foraeldre") === 0) {
      window.document.title = 'Til forældrene - Digital ABC';
    }
    else if ($location.path().indexOf("/om-projektet/andre-kommuner") === 0) {
      window.document.title = 'Til andre kommuner - Digital ABC';
    }
    else if ($location.path().indexOf("/om-projektet/credits") === 0) {
      window.document.title = 'Credits - Digital ABC';
    }
    else if ($location.path().indexOf("/om-projektet/kontakt") === 0) {
      window.document.title = 'Kontakt - Digital ABC';
    }
    else if ($location.path().indexOf("/om-projektet/privatlivspolitik") === 0) {
      window.document.title = 'Cookie- og privatlivspolitik - Digital ABC';
    }
    else if ($location.path().indexOf("/om-projektet") === 0) {
      window.document.title = 'Om projektet - Digital ABC';
    }
    else if ($location.path().indexOf("/nyttige-links") === 0) {
      window.document.title = 'Nyttige links - Digital ABC';
    }
    else if ($location.path().indexOf("/music-video") === 0) {
      window.document.title = 'Musikvideo: Kom med mig (ingen stress) - Digital ABC';
    }
    else if ($location.path().indexOf("/video") === 0) {
      window.document.title = 'Videoer - Digital ABC';
    }
    else {
      window.document.title = 'Digital ABC';
    }
  });

  // Slideshow
  var slidesInSlideshow = 2;
  var slidesTimeIntervalInMs = 5000;

  $scope.slideshow = 1;

  var slideTimer =
    $timeout(function interval() {
      $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
      slideTimer = $timeout(interval, slidesTimeIntervalInMs);
    }, slidesTimeIntervalInMs);

  // Video controls.
  $scope.showVideo = false;

  $scope.videos = [];

  // Play video.
  $scope.playVideo = function(video) {
    if (video === 'troll-painter' || video === 'slave' || video === 'broke-teenager' || video === 'pain-in-the-butt' || video === 'moving-out') {
      return;
    }

    if (!$scope.videos[video]) {
      videojs($('.' + video)[0], {"width": 'auto', "height": '100%'}, function() {
        $scope.videos[video] = this;
        $scope.video = this;
        this.play();
      });
    } else {
      $scope.videos[video].currentTime(0);
      $scope.videos[video].play();
      $scope.video = $scope.videos[video];
    }

    // Show video container.
    $scope.showVideo = video;
  };

  // Stop video.
  $scope.stopVideo = function() {
    $scope.video.pause();

    $document.scrollToElement(angular.element(document.getElementById('video')), 0, 500);

    $scope.showVideo = '';
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

// Error 404 controller.
abcApp.controller('Error404Controller', function($scope, $location, $document) {
  // Change layout class.
  $scope.$emit('changeLayoutClassSuffix', 'error-404');
});
