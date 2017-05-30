var app = angular.module('WikiApp', ['ngAnimate']);
app.controller('MainCtrl', function($scope, $http, $timeout) {
  var form = $('form');
  var close = $('.eks');
  var input = $('input');
  var search = $('#search');
  var help = $('#help');

  $scope.result = [];

  close.on('click', function() {
    form.toggleClass('open');

    if(!form.hasClass('open') && $scope.searchTxt !== '' && typeof $scope.searchTxt !== 'undefined') {
      search.toggleClass('fullHeight');
      help.toggleClass('hide');
      $scope.searchTxt = '';
    }
    $scope.results = [];
    $scope.$apply();
  });

  input.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
    if (form.hasClass('open')) {
      input.focus();
    } else {
      return;
    }
  });
});
