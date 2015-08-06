'use strict';

/**
 * @ngdoc overview
 * @name waScrumApp.service:AuthService
 * @description
 * # waScrumApp
 * # AuthService
 * Service of the waScrumApp
 */
angular.module('waTODO').factory('AuthService', AuthService);

AuthService.$inject = ['$wakanda', '$q', '$http'];

function AuthService($wakanda, $q, $http) {
    var authService = {};

    /**
     * Login Fuction
     **/

    authService.login = function login1(username, password) {

        var login = $q.defer();

        $wakanda.$loginByPassword(username, password, 28800).then(function(res) {
            if (res.result) {
                login.resolve(true);
            }
            else {
                login.resolve(false);
            }
        });

        return login.promise;
    };

    /**
     * Logout Fuction
     **/

    authService.logout = function logout() {
        var logout = $q.defer();

        $wakanda.$logout().then(function(res) {
            if (res.result) {
                logout.resolve(true);
            }
            else {
                logout.resolve(false);
            }
        });

        return logout.promise;
    }

    /**
     * Get the currentUser Fuction
     **/

    authService.getCurrentUser = function getCurrentUser() {

        var currentUser = $q.defer();
        var user = {};

        $wakanda.$currentUser().then(function(res) {
            if (!res.result) {
                user.connected = false;
                user.data = null;
                currentUser.resolve(user);
            }
            else {
                user.connected = true;
                user.data = res.result;
                currentUser.resolve(user);
            }
        });

        return currentUser.promise;
    }

    authService.isConnected = function() {

        var deferred = $q.defer();

        this.getCurrentUser().then(function(res) {
            deferred.resolve(res.connected);
        });
        return deferred.promise;
    }

    /**
     * Send password reset email function
     **/

    authService.sendPasswordResetEmail = function(emailAdress) {

       return $http.get("/recoverPass?" + emailAdress);
    }

    /**
     * is valid user name function
     **/

    authService.isValidUserName = function(username) {

        return $http.get("/validateUserName?" + username);

    }

    authService.isValidEmail = function(emailAdress) {

        return $http.get("/validateEmaile?" + emailAdress);

    }

    authService.signUp = function(user) {

        return $http.put("/signUp" , user);

    }
    return authService;
}