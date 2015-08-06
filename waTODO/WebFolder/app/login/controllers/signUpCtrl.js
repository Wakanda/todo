  'use strict';

  /**
   * @ngdoc function
   * @name waScrumApp.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Controller of the waScrumApp
   */

  var watodo = angular.module('waTODO');

  watodo.controller('SignUpCtrl', SignUp);

  SignUp.$inject = ['$scope', '$routeParams', 'AuthService', '$window', "toaster"];

  function SignUp($scope, $routeParams, AuthService, $window, toaster) {

      $scope.user = {
          username: '',
          password: ''
      }

      //Login event
      $scope.signUp = function(user) {

          AuthService.signUp(user).then(function(res) {


              if (res.status == 200) {


                  toaster.pop('success', "Creation Notification", 'Your Account is successfully created. Click here to navigate to login page', 5000, 'trustedHtml', function(toaster) {
                  	
                      $window.location = "index.html#/login";
                      return true;
                  });



              }



          });
      }




  }





  watodo.directive('username', function(AuthService, $q) {

      return {
          require: 'ngModel',
          link: function(scope, element, attrs, ngModel) {

              ngModel.$asyncValidators.username = function(viewValue) {

                  var defer = $q.defer();

                  AuthService.isValidUserName(viewValue).then(function(res) {

                      if (res.data == "true") {

                          defer.resolve();
                      }
                      else {
                          defer.reject();

                      }

                  });

                  return defer.promise;

              }
          }
      };
  });


  watodo.directive('email', function(AuthService, $q) {

      return {
          require: 'ngModel',
          link: function(scope, element, attrs, ngModel) {

              ngModel.$asyncValidators.email = function(viewValue) {

                  var defer = $q.defer();

                  AuthService.isValidEmail(viewValue).then(function(res) {

                      if (res.data == "true") {

                          defer.resolve();
                      }
                      else {
                          defer.reject();

                      }

                  });

                  return defer.promise;

              }
          }
      };
  });