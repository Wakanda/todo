var errors = {};
var succes={};

/**
 * @description
 * lang : English
 * Errors & Succes for Team Class
 */ 
	// Error case 
errors.PROJECTNAME_REQUIRED    = "The project name field is required";
errors.PROJECTNAME_IS_UNIQUE   = "The project name already exist";
errors.PROJECT_STARTDATE_REQUIRED   = "The project start date is required";
errors.PROJECT_ENDDATE_REQUIRED   = "The project end date is required";
errors.PROJECT_REQUIRED   = "No project was selected, please select a project";

	//Success case
succes.PROJECT_CREATED        = "The new project has been created successfully";
succes.PROJECT_UPDATED = "The project edit has been saved successfully";
succes.PROJECT_CLOSED = "The project was closed successfully";

/**
 * @description
 * Export variables
 */
exports.errors = errors;
exports.succes = succes;
