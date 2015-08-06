

var errors = {};
var succes={};

/**
 * @description
 * lang : English
 * Errors & Succes for User Class
 */
	 //Error case
errors.PASSWORD_REQUIRED    = "The Password field is required";
errors.CONFIRM_PASSWORD     = "Confirm Password did not match";
errors.FIRSTNAME_REQUIRED   = "The First Name field is required";
errors.LASTNAME_REQUIRED    = "The Last Name field is required";
errors.EMAILADRESS_INVALID  = "Invalid email adress";
errors.EMAILADRESS_EXIST    = "Email adress already exist";
errors.EMAILADRESS_REQUIRED = "The Email Adress field is required";
errors.EMAIL_NOT_SENT       = "Faild to Send The User Email Notification";
errors.GROUPS_NOT_ASSIGNED_TO_USER = "This Groups Cannot be Assigned to this User";
errors.EMPTY_GROUPS_TO_ASSIGN = "No Groups to Assign";
errors.EMPTY_TEAM_ID = "Empty or null Team ID";
errors.USER_REQUIRED = "No user was selected, select an user to remove";
// Succes case
succes.USER_CREATED        = "User created successufully";
succes.SUCCESS_EMAIL_SENT  = "The Notification has been sent to the User";
succes.SUCCESS_UPDATE_USER = "User edit successufully";
succes.SUCCESS_UPDATE_PROFILE = "Profile updated successufully";
succes.SUCCESS_UPDATE_PASSWORD = "Password updated successufully";
succes.GROUPS_ASSIGNED_TO_USER = "Groups Assigned To User ."
succes.GET_ALL_USERS_EXCEPT_GROUP_PASSED = "Users gotted ."
succes.GET_ALL_USERS_EXCEPT_TEAM_PASSED = "Users gotted "
succes.USER_DELETED = "User deleted successfully"

/**
 * @description 
 * export variables
 */
exports.errors = errors;
exports.succes = succes;
