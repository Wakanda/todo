
var errors = {};
var succes = {};

/**
 * @description
 * lang : English
 * Errors & Succes for Role Class
 */
	// Errors Case
errors.ROLE_NAME    = "The Role_Name field is required.";
errors.ROLE_IS_UNIQUE   = "The Role_Name Should be Unique,Please Enter a different Role Name.";
errors.ROLE_NOT_EXIST = "This Role is Not Exist.";
errors.ROLE_NOT_DELETED = "This Role Cannot be deleted.";
errors.ROLE_ALREADY_DELETED = "This Role Already Deleted.";
errors.ROLES_EMPTY_TO_ASSIGN = "No Roles To Assign.";
errors.ROLES_NOT_ASSIGNED_TO_GROUP = "Roles Cannot Assigned To Group. ";
errors.EMPTY_GROUP_ID = "Empty or null Group ID";
	// Succes Case
succes.ROLE_CREATED    = "The Role Succesfuly Saved";
succes.ROLE_EDITED = "The Role Succesfuly edited";
succes.ALL_ROLES_GOTTED = "All Roles Getted";
succes.ROLE_DELETED = "The Role Succesfuly Deleted"; 
succes.ROLES_ASSIGNED_TO_GROUP = "Roles Assigned To Group Succesfuly.";
succes.GET_ALL_ROLES_EXCEPT_GROUP_PASSED = "Roles Gotted";

/**
 * @description
 * Export variables
 */
exports.errors = errors;
exports.succes=succes;