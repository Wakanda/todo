var errors = {};
var succes={};

/**
 * @description
 * lang : English
 * Errors & Succes for Group Class
 */ 
	// Error case 
errors.GROUPNAME_REQUIRED    = "The  group name field is required";
errors.GROUPNAME_IS_UNIQUE   = "The  group name already exist";
errors.INVALID_GROUP         = "Invalid geoup!!";
errors.EMPTY_USER_ID        = "The User ID empty or null";
	//Success case
succes.GROUP_CREATED        = "The group has been created successfully";
succes.ASSIGN_SUCCESS       = "The members list has been updated";
succes.SUCCESS_UPDATE_GROUP = "Group edited successfully";
succes.SUCCESS_REMOVE_GROUP = "Group removed successfully";
succes.GET_ALL_GROUPS_EXCEPT_USER_PASSED = "Groups Gotted";

/**
 * @description
 * Export variables
 */
exports.errors = errors;
exports.succes = succes;
