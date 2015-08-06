  'use strict';

  /**
   * @ngdoc function
   * @name waScrumApp.controller:RecoveryPwdCtrl
   * @description
   * # RecoveryPwdCtrl
   * Controller of the waScrumApp
   */
  angular.module('waTODO')
      .controller('RecoveryPwdCtrl', RecoveryPwd);

  RecoveryPwd.$inject = ['$scope', 'AuthService', '$location'];

  function RecoveryPwd($scope, AuthService, $location) {
      
      $scope.emailAdress = '';
     
          //send password reset email request event
      $scope.sendMail = function(emailAdress) {
           AuthService.sendPasswordResetEmail(emailAdress).then(function(res) {


              if (res.status == 200) {
                 $location.path('/reset_email');   
               }
            
        });
      
      }
      
      
 }
