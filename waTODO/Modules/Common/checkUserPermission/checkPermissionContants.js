

var ressource = {};
var permission = {};

/**
 * @description
 * lang : English
 * Errors & Succes for CheckPermission Class
 */
	// Ressources Object
ressource.USER    = "User";
ressource.ROLE	   = "Role";
ressource.GROUP	   = "Group";
ressource.PROJECT   = "Project";
ressource.TEAM	   = "Team";

	// Permissions Object
permission.IS_CREATE    = "isCreate";
permission.IS_EDIT    = "isEdit";
permission.IS_READ    = "isRead";
permission.IS_DESCRIBE    = "isDescribe";
permission.IS_DELETE    = "isDelete";


/**
 * @description
 * Export variables
 */
exports.ressource = ressource;
exports.permission = permission;
