
'use strict';

/**
 * @ngdoc overview
 * @name waScrumApp
 * @description
 * # waScrumApp
 *
 * Main module of the application.
 */
angular
    .module('waTODO', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'wakanda',
        'toaster',
        'validation.match',
        'ngQuickDate',
        'angularFileUpload',
        'ngjsColorPicker',
        'ui.sortable',
        'ui.calendar',
        'angular-spinkit',
        'angularValidator'
    ])
    .config(function($routeProvider,$locationProvider) {
        
        $routeProvider
            .when('/login/:redirect?', {
                templateUrl: 'app/login/views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/recovery_pwd', {
                templateUrl: 'app/login/views/recovery_pwd.html',
                controller: 'RecoveryPwdCtrl'
            })
            .when('/reset_pwd', {
                templateUrl: 'app/login/views/reset_pwd.html',
                controller: 'ResetPwdCtrl'
            })
            .when('/reset_email', {
                templateUrl: 'app/login/views/emailSent.html'
            })
            .when('/home', {
                templateUrl: 'app/views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/sign_up', {
                templateUrl: 'app/login/views/signUp.html',
                controller: 'SignUpCtrl'
            })
            .when('/users', {
                templateUrl: 'app/user/views/user.html',
                controller: 'UserCtrl'
            })
            .when('/groups', {
                templateUrl: 'app/group/views/group.html',
                controller: 'GroupCtrl'
            })
            .when('/teams', {
                templateUrl: 'app/team/views/team.html',
                controller: 'TeamCtrl'
            })
            .when('/projects/:id?', {
                templateUrl: 'app/project/views/project.html',
                controller: 'ProjectCtrl'
            })
            .when('/issues/:id?/:selectedIssue?', {
                templateUrl: 'app/issues/views/issues.html',
                controller: 'IssuesCtrl'
            })
            .when('/sprint/:id?/:selectedIssue?', {
                templateUrl: 'app/sprint/views/sprint.html',
                controller: 'SprintCtrl'
            })
            .when('/sprints/:id?/:selectedIssue?', {
                templateUrl: 'app/sprint/views/sprints.html',
                controller: 'SprintsCtrl'
            })
            .when('/work/:id?/:selectedIssue?/:showView?', {
                templateUrl: 'app/taskBoard/views/board.html',
                controller: 'BoardCtrl'
            })
            .when('/completed_sprints/:id?/:selectedIssue?', {
                templateUrl: 'app/sprint/views/completedSprints.html',
                controller: 'CompletedSprintsCtrl'
            })
            .when('/roles', {
                templateUrl: 'app/role/views/role.html',
                controller: 'RoleCtrl'
            })
            .when('/profile', {
                templateUrl: 'app/user/views/profile.html',
                controller: 'UserProfileCtrl'
            })
            .when('/timesheet_calendar/:id?', {
                templateUrl: 'app/timesheet/views/timesheet.html',
                controller: 'TimesheetCtrl'
            })
            .when('/timesheet_activities/:id?', {
                templateUrl: 'app/timesheet/views/activities.html',
                controller: 'TimesheetCtrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
               
    })

.run(function ($route, $routeParams, $location, $rootScope, $timeout, $window, AuthService) {
  
  AuthService.getCurrentUser().then(function(res){

    var currUser = res;

    if(!currUser.connected){

        if($location.$$path != '/login'){
            $routeParams = $location.$$path;
            $window.location = 'index.html#/login'+'?redirectTo='+encodeURIComponent($location.$$path);
        }
        
    } else {

        if($location.$$path == '/login'){
            $window.location = "index.waPage/index.html";
        }
        
    } 
  });

  var original = $location.path;
        
        $location.path = function (path, reload) {
            
            if (reload === false) {
                var lastRoute = $route.current;
                var un = $rootScope.$on('$locationChangeSuccess', function () {
                    $route.current = lastRoute;
                    un();
                });
            }

            return original.apply($location, [path]);
        };


})
