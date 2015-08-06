model.User.entityMethods.validatePassword = function(password) {
    var ha1 = directory.computeHA1(this.ID, password);
    return (password === this.password);
};

/**
 * @description
 * Send reset password email request to user
 * @param {object} an email adress object
 * @return {object} return a Object result
 */

(model.User.methods.sendResetPasswordRequest = function(emailAdress) {
	

	
    var theUser = ds.User.find('emailAdress=:1', emailAdress);
    //Test if the user already exist in database
    if (theUser) {
        var content = loadText(ds.getModelFolder().path + "Scripts/template.txt");
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        //Create the temporally password
        for (var i = 0; i < 6; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        //Save the the temporally password
        theUser.password = text;
        theUser.save();

        var userName = theUser.userName;
        content = content.replace('fullName', userName);
        content = content.replace('userpassword', text);
        //Call sendEmail function
        var utils = require('Common/utils');
        var isOk = utils.sendEmail(content, emailAdress, 'waTodo reset password');
        return isOk;
    } else {
        return false;
    }

}).scope = "public";

/**
 * @description
 * Create a new user
 * @param {object} a user object
 * @return {object} return a Object result
 */

(model.User.methods.createUser = function(user) {
  
    
    var utils = require('Common/utils');
    var isExist = ds.User.find('emailAdress=:1 AND archived == false', user.email);
    var newUser = new ds.User();
    var notifications = require('Common/notifications/user');
    var addResult = {
        status: false,
        result: {
            message: '',
            notifResult: '',
            notification: '',
            users: null
        }
    };

    try {
        //	var permissionsConstants = require("Common/checkUserPermission/checkPermissionContants");
        // 	var check = require('Common/checkUserPermission/checkUserPermission');
        // 
        // 	var authorized = check.isAuthorized(permissionsConstants.ressource.USER,
        // 	    					   permissionsConstants.permission.IS_CREATE);
        // 	    	
        // 	if(authorized.status == false) {
        // 	    addResult.status = false;
        // 	    addResult.result.message = authorized.message;
        // 	    return addResult;
        // 	}    
        
            //Add data to the new entity
            newUser.firstName = user.firstName;
            newUser.lastName = user.lastName;
            newUser.emailAdress = user.email;
            newUser.userName = user.username;
            newUser.phone = user.phone;
            newUser.password = user.password;
            newUser.archived = false;
            newUser.createDate = new Date();
            newUser.HA1Key =  directory.computeHA1(newUser.ID, user.password);
            //Add user avatar
            var avatar = ds.getModelFolder().path + "ressources/photos/avatar.jpg";
            newUser.avatar = avatar;
            //Save the new user
            newUser.save();

            if (user.sendMailNotif) {
                var content = loadText(ds.getModelFolder().path + "Scripts/NotifTemplate.txt");

                content = content.replace('fullName', newUser.firstName + ' ' + newUser.lastName);
                content = content.replace('emailAdress', user.emailAdress);
                content = content.replace('userpassword', user.password);

                //Call sendEmail function
                var isOk = utils.sendEmail(content, user.emailAdress, 'Welcome to wascrum application');

                if (isOk) {
                    addResult.result.notifResult = 'info';
                    addResult.result.notification = notifications.succes.SUCCESS_EMAIL_SENT;
                } else {
                    addResult.result.notifResult = 'warning';
                    addResult.result.notification = notifications.errors.EMAIL_NOT_SENT;
                }
            }
            // fill the object result   
            addResult.result.message = notifications.succes.USER_CREATED;
            addResult.status = true;
            addResult.result.users = ds.User.query('archived == false').toArray('ID, firstName, lastName, fullName, emailAdress, phone');
        
    } catch (e) {
        addResult.result.message = e.message;
    }
    //send create user result
    return addResult;
}).scope = 'public';

/**
 * @description
 * Edit user
 * @param {object} a user object
 * @return {object} return a Object result
 */

(model.User.methods.editUser = function(user) {

    var utils = require('Common/utils');
    var theUser = ds.User.find('ID=:1', user.ID);
    var isExist = ds.User.find('ID != :1 AND emailAdress=:2', user.ID, user.emailAdress);
    var notifications = require('Common/notifications/user');
    var editResult = {
        status: false,
        result: {
            message: '',
            users: null
        }
    };

    try {
        //	var permissionsConstants = require("Common/checkUserPermission/checkPermissionContants");
        // 	var check = require('Common/checkUserPermission/checkUserPermission');
        // 
        // 	var authorized = check.isAuthorized(permissionsConstants.ressource.USER,
        // 	    					   permissionsConstants.permission.IS_EDIT);
        // 	    	
        // 	if(authorized.status == false) {
        // 	    editResult.status = false;
        // 	    editResult.result.message = authorized.message;
        // 	    return editResult;
        // 	}        
        if (user.firstName == '') {
            throw new Error(notifications.errors.FIRSTNAME_REQUIRED);
        } else if (user.lastName == '') {
            throw new Error(notifications.errors.LASTNAME_REQUIRED);
        } else if (user.emailAdress == '') {
            throw new Error(notifications.errors.EMAILADRESS_REQUIRED);
        } else if (!utils.validateEmail(user.emailAdress)) {
            throw new Error(notifications.errors.EMAILADRESS_INVALID);
        } else if (isExist) {
            throw new Error(notifications.errors.EMAILADRESS_EXIST);
        } else if (user.password == '') {
            throw new Error(notifications.errors.PASSWORD_REQUIRED);
        } else {
            //Add data to the new entity
            theUser.firstName = user.firstName;
            theUser.lastName = user.lastName;
            theUser.emailAdress = user.emailAdress;
            theUser.phone = user.phone;
            theUser.password = user.password;
            //Save the new user
            theUser.save();
            // fill object result   
            editResult.result.message = notifications.succes.SUCCESS_UPDATE_USER;
            editResult.status = true;
            editResult.result.users = ds.User.query('archived == false').toArray('ID, firstName, lastName, fullName, emailAdress, phone');
        }
    } catch (e) {
        editResult.result.message = e.message;
    }
    //send create user result
    return editResult;

}).scope = 'public';

/**
 * @description
 * Get the current user
 * @param {object} a mail object
 * @return {object} return a Object result
 */

(model.User.methods.getCurrentUser = function(mail) {

    var theUser = {
        status: false,
        result: {
            message: '',
            groups : [], 
            currentUser: {}
        }
    };

    try {
        var users = ds.User.query('emailAdress=:1', mail).toArray('ID, firstName, lastName, fullName, emailAdress, phone');
        theUser.result.currentUser = users[0];
        theUser.status = true;
    } catch (e) {
        theUser.result.message = e.message;
    }
    return theUser;

}).scope = 'public';


(model.User.methods.editUserProfile = function(user) {
    var utils = require('Common/utils');
    var theUser = ds.User.find('ID=:1', user.ID);
    var notifications = require('Common/notifications/user');
    var editResult = {
        status: false,
        result: {
            message: ''
        }
    };
    try {
        if (user.firstName == '') {
            editResult.result.message = notifications.errors.FIRSTNAME_REQUIRED;
        } else if (user.lastName == '') {
            editResult.result.message = notifications.errors.LASTNAME_REQUIRED;
        } else {
            //Add data to the new entity
            theUser.firstName = user.firstName;
            theUser.lastName = user.lastName;
            theUser.phone = user.phone;

            //Save the new user
            theUser.save();

            editResult.result.message = notifications.succes.SUCCESS_UPDATE_PROFILE;
            editResult.status = true;
        }
    } catch (e) {
        editResult.result.message = e.message;
    }
    //send create user result
    return editResult;
}).scope = 'public';


(model.User.methods.changePassword = function(user, confirmPwd) {

    var utils = require('Common/utils');
    var theUser = ds.User.find('ID=:1', user.ID);
    var notifications = require('Common/notifications/user');
    var editResult = {
        status: false,
        result: {
            message: ''
        }
    };
    try {
        if (user.password == '') {
            editResult.result.message = notifications.errors.PASSWORD_REQUIRED;
        } else if (user.password != confirmPwd) {
            editResult.result.message = notifications.errors.CONFIRM_PASSWORD;
        } else {
            theUser.password = user.password;
            theUser.save();
            editResult.status = true;
            editResult.result.message = notifications.succes.SUCCESS_UPDATE_PASSWORD;
        }
    } catch (e) {
        editResult.result.message = e.message;
    }
    return editResult;
}).scope = 'public';


(model.User.methods.getUserExveptGroup = function(group) {

    var notifications = require('Common/notifications/user');


    var returned = {
        status: false,
        result: {
            message: '',
            value: null
        }
    };

    try {

        var usersByGroup = ds.User.query("userGroups.group.ID == :1 AND archived == false", group.ID);
        var allUsers = ds.User.query('archived ==  false')
        
        if(usersByGroup.length != 0){
	        var usersExceptGroupPassed = allUsers.minus(usersByGroup);
	        returned.result.value = usersExceptGroupPassed.toArray('ID, firstName, lastName, fullName, emailAdress, phone');;
        }else{
        	returned.result.value = allUsers;
        }
        
        
        returned.status = true;
        returned.result.message = notifications.succes.GET_ALL_USERS_EXCEPT_GROUP_PASSED;
    } catch (e) {

        returned.result.message = e.message;
    } finally {
        return returned;
    }

}).scope = "public";


(model.User.methods.getMembersExceptTeam = function(team) {

    var notifications = require('Common/notifications/user');
    var returned = {
        status: false,
        result: {
            message: '',
            value: null
        }
    };

    try {
        if (team.ID == "" || team.ID == undefined) {
            throw new Error(notifications.errors.EMPTY_TEAM_ID);

        }
        var usersByTeam = ds.User.query("teams.team.ID == :1 AND archived  == false", team.ID)
        var allUsers = ds.User.query('archived  == false')
        var usersExceptTeamPassed = allUsers.minus(usersByTeam).toArray('ID, firstName, lastName, fullName, emailAdress, phone');
        returned.result.value = usersExceptTeamPassed;
        returned.status = true;
        returned.result.message = notifications.succes.GET_ALL_USERS_EXCEPT_TEAM_PASSED;
    } catch (e) {

        returned.result.message = e.message;
    } finally {
        return returned;
    }
}).scope = "public";

/**
 * @Description
 * Remove the selected user (send his assigned issues to backlog)
 * @Param {user object}
 * @Returns {result object}
 */
(model.User.methods.deleteUser = function(user) {

    var notifications = require('Common/notifications/user');
    var iStatus = require('Common/taskBoardWorkFlow');
    var removeResult = {
        status: false,
        result: {
            message: '',
            users: null
        }
    };

    try {
        
        if (!user) {
            throw new Error(notifications.errors.USER_REQUIRED);
        } else {
            var userToDelete = ds.User.find('ID =:1', user.ID);
            
            userToDelete.archived = true;
            userToDelete.save();
            // Fill object result
            removeResult.status = true;
            removeResult.result.message = notifications.succes.USER_DELETED;
            removeResult.result.users = ds.User.query('archived == false');
        }

    } catch (e) {
        removeResult.result.message = e.message;
    } finally {
        return removeResult;
    }
}).scope = "public";

/**
 * @Description
 * Get all user
 * @Param {no}
 * @Return {result object}
 */
(model.User.methods.getUsers = function() {

    var notifications = require('Common/notifications/user');
    var iStatus = require('Common/taskBoardWorkFlow');
    var getResult = {
        status: false,
        result: {
            message: '',
            users: null
        }
    };

    try {
        getResult.result.users = ds.User.query('archived == false').toArray('ID, firstName, lastName, fullName, emailAdress, phone');  
        getResult.status = true;

    } catch (e) {
        getResult.result.message = e.message;
    } finally {
        return getResult;
    }

}).scope = 'public';


