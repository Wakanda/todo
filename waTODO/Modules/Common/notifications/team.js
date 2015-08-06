var errors = {};
var succes={};

/**
 * @description
 * lang : English
 * Errors & Succes for Team Class
 */ 
// Error case 
errors.TEAMNAME_REQUIRED    = "The team name field is required";
errors.TEAMNAME_IS_UNIQUE   = "The team name already exist";
errors.MEMBERS_NOT_ASSIGNED_TO_TEAM = "These Members Cannot be Assigned to this Team";
errors.TEAM_NOT_SELECTED = "No team is selected";
errors.INVALID_VELOCITY_VALUE = "Invalid velocity value";
	
//Success case
succes.TEAM_CREATED        = "The team has been created successfully";
succes.SUCCESS_UPDATE_TEAM = "Team edited successfully";
succes.SUCCESS_DELETE_TEAM = "Team removed successfully";
succes.MEMBERS_ASSIGNED_TO_TEAM = "Members Assigned successfully to This Team";
succes.ALL_TEAMS_GOTTED = "All Teams Gotted";
succes.VELOCITY_UPDATED = "Team velocity updated successfully";

/**
 * @description
 * Export variables
 */
exports.errors = errors;
exports.succes = succes;
