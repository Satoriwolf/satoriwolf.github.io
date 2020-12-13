(function(){
  var app = angular.module('benendenApp', []);
  app.controller('mainCtrl', function($scope) {
    $scope.currentPage = 'login';
    $scope.accountPageExit = false;
    $scope.getAccountPage = function(){
      switch($scope.accountPage) {
        case 1:
          return 'Personal Details';
          break;
        case 2:
          return 'Your Additinal Members';
          break;
        case 3:
          return 'Contact Preferences';
          break;
        case 4:
          return 'My Documents';
          break;
        case 5:
          return 'Change Password';
          break;
      }
    };
  });
})();
