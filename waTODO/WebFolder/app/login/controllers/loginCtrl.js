  'use strict';

  /**
   * @ngdoc function
   * @name waScrumApp.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Controller of the waScrumApp
   */
  angular.module('waTODO')
      .controller('LoginCtrl', Login);

  Login.$inject = ['$scope', '$routeParams', 'AuthService', '$window'];

  function Login($scope, $routeParams, AuthService, $window) {
      
      $scope.user = {
              username: '',
              password: ''
          }

          //Login event
      $scope.login = function(user) {

          AuthService.login(user.username, user.password)
            .then(function(res){
              if(res){
              	
                 $window.location = 'index.waPage/index.html';
                 /*if($routeParams.redirectTo){
                    $window.location = 'wascrum.html#' + $routeParams.redirectTo;
                 } else {
                    $window.location = 'index.waPage/index.html';
                 }*/
                 
              }else{
                $('.alert-invalidLogin').show();
              }
            });          
      }

 }
