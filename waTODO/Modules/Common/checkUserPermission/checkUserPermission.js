

/**
 * @description
 * Get the permissions status
 * @param {string} ressource Pass a Ressource Name.
 * @param {string} permission  Pass a permission which you want to view if authorized
 * @return {object} return an Object with status and Message.
 * @Error {Error} if something wrong the exception returned
 */
exports.isAuthorized = function isAuthorized(ressource, permission) {

    var returned = {
        status: false,
        message: ""
    };
    var notifications = require('Common/notifications/checkUserPermission');
	var pConstants = require("Common/checkUserPermission/checkPermissionContants");
		
    try {

        var current = currentUser();
   	
        if (current.ID == null || current.fullName == "default guest") {
            throw new Error(notifications.errors.USER_IS_NOT_LOGGED);

        }

        var theUser = ds.User.query('ID =:1', current.ID);
        if (theUser == null) {
            throw new Error(notifications.errors.USER_NOT_EXIST);
        }
        var s = theUser.userGroups.group.roles.role.permission.toArray("");
        var isAuthorized = false;


        switch (permission) {

        case pConstants.permission.IS_CREATE : 
            var thePermission;
            for (var i in s) {
                thePermission = s[i];
                if (thePermission.ressource == ressource && thePermission.isCreate == true) {
                    isAuthorized = true;
                    break;
                }
            }
            break;
        case pConstants.permission.IS_EDIT :
            var thePermission;
            for (var i in s) {
                thePermission = s[i];
                if (thePermission.ressource == ressource && thePermission.isEdit == true) {
                    isAuthorized = true;
                    break;
                }
            }
            break;
        case pConstants.permission.IS_READ :
            var thePermission;
            for (var i in s) {
                thePermission = s[i];
                if (thePermission.ressource == ressource && thePermission.isRead == true) {
                    isAuthorized = true;
                    break;
                }
            }
            break;

        case pConstants.permission.IS_DESCRIBE :
            var thePermission;
            for (var i in s) {
                thePermission = s[i];
                if (thePermission.ressource == ressource && thePermission.isDescribe == true) {
                    isAuthorized = true;
                    break;
                }
            }
            break;

        case pConstants.permission.IS_DELETE :
            var thePermission;
            for (var i in s) {
                thePermission = s[i];
                if (thePermission.ressource == ressource && thePermission.isDelete == true) {
                    isAuthorized = true;
                    break;
                }
            }
            break;
        default:
            throw new Error(notifications.errors.PERMISSION_NOT_EXIST);
        }

        if (isAuthorized == true) {
            returned.status = isAuthorized;
            returned.message = notifications.succes.OPERATION_AUTHORIZED;
        }
        else {
            throw new Error(notifications.errors.OPERATION_NOT_AUTHORIZED);
        }
    }
    catch (e) {
        returned.message = e.message;
    }
    finally {
        return returned;
    }
};