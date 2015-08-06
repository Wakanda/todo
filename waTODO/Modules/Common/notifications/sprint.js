
var errors = {};
var success = {};

/**
 * @description
 * lang : English
 * Errors & Succes for Epic Class
 */
	// Errors Case
errors.SPRINT_NAME_REQUIRED       = "The Sprint Name field is required.";
errors.SPRINT_IS_UNIQUE           = "The Sprint Name Should be Unique,Please Enter a different sprint Name.";
errors.SPRINT_PROJECT_REQUIRED    = "The project is required, please select a project from the list";
errors.SPRINT_PROJECT_NOT_SELECTED    = "No project is selected. Please select a project to show the current sprint";
errors.SPRINT_NOT_SELECTED    = "NO Sprint Selected";
errors.SPRINT_FILLED = 'You have passed the capacity of the team (Team velocity)';
errors.SPRINTS_FAILED = 'The sprint collection is empty';
errors.SPRINT_ALREADY_STARTED = 'The sprint is already started';
errors.SPRINT_IS_OPEN = "We can't change the sprint status,the sprint status is open";
errors.SPRINT_ALREADY_DONE = "The selected sprint already done";
	
// Succes Case
success.SPRINT_CREATED            = "SPRINT Succesfuly Created";
success.SPRINT_EDITED             = "SPRINT was Succesfuly edited";
success.ISSUE_AFFECTED            = "ISSUE Succesfuly attached to sprint";
success.SPRINT_REMOVED            = "SPRINT was Succesfuly removed";
success.SPRINTS_CHANGED_SAVE      = "SPRINTS Changes was Succesfuly saved";
success.SPRINT_STARTED            = "SPRINT Started Succesfuly";
success.SPRINT_COMPLETED          = "SPRINT Completed Succesfuly";
success.SPRINT_DELETED          = "SPRINT deleted Succesfuly";
success.SPRINT_REOPENED          = "SPRINT reopened Succesfuly";

/**
 * @description
 * Export variables
 */
exports.errors = errors;
exports.success=success;
