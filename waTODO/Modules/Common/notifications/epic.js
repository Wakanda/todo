
var errors = {};
var success = {};

/**
 * @description
 * lang : English
 * Errors & Succes for Epic Class
 */
	// Errors Case
errors.EPIC_NAME_REQUIRED       = "The Epic Name field is required.";
errors.EPIC_IS_UNIQUE           = "The Epic Name Should be Unique,Please Enter a different Issue Name.";
errors.EPIC_PROJECT_REQUIRED    = "The Epic project is required.";
errors.EPIC_PROJECT_NOT_SELECTED    = "No project is selected. Please select a project to show epics";
errors.EPIC_NOT_SELECTED    = "No epic is selected. Please select epic to filter project issues";
errors.EPIC_NOT_EXIST    = "Epic not exist. Please select epic to remove";
errors.EPIC_TOEDIT_NOT_EXIST    = "Epic not exist. Please select epic to edit";
errors.EPIC_INVALID_PROJECT = "Invalid project value";	
// Succes Case
success.EPIC_CREATED            = "Epic Was Succesfuly Saved";
success.EPIC_EDITED             = "Epic was Succesfuly edited";
success.EPIC_REMOVED             = "Epic was Succesfuly removed";

/**
 * @description
 * Export variables
 */
exports.errors = errors;
exports.success=success;
