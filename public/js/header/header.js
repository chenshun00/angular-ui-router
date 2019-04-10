/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('routerApp')
  .directive('header', [function () {
    return {
      templateUrl: '/angular-ui-router/public/js/header/header.html',
      restrict: 'E',
      replace: true,
      controller: function ($scope) {
      }
    }
  }]);
