
var errors = {};
var success = {};

/**
 * @description
 * lang : English
 * Errors & Succes for Issue Class
 */
	// Errors Case
errors.ISSUE_NAME_REQUIRED    = "The Issue Name field is required.";
errors.ISSUE_IS_UNIQUE   = "The Issue Name Should be Unique,Please Enter a different Issue Name.";
errors.ISSUE_PROJECT_REQUIRED    = "The Project value is required.";
errors.ISSUE_TYPE_REQUIRED    = "The Issue Type value is required.";
errors.ISSUE_PRIORITY_REQUIRED   = "The Issue Priority value is required.";
errors.ISSUE_ORIGINALESTIMATE_REQUIRED    = "The Original Estimate value is required.";
errors.INVALID_ISSUE_ESTIMATION    = "The Original Estimate value is invalid, please enter a valid value";
errors.ISSUE_REQUIRED    = "No issue was selected, please select an issue.";
errors.SUBTASK_PARENT_NOT_SELECTED    = "The parent issue of the Sub-Task not selected or invalid";
errors.PARENT_TYPE_NOT_ALLOWED    = "You can't create Sub-Task for Task issue";
errors.SUBTASK_REQUIRED    = "No sub-task was selected, please select one to remove.";
errors.SUBTASK_STATUS_NOT_ALLOWED    = "The selected sub-task alreay en progress, we can't remove it";
errors.ISSUE_CANNOT_RESOLVED   = "The selected issue has sub-tasks to resolve, please resolve the sub-tasks to resolve the issue";
errors.ISSUES_NOT_FOUND   = "The issues project cannot found";

// Succes Case
success.ISSUE_CREATED    = "The New Issue Was Succesfuly Saved";
success.ISSUE_EDITED = "The Issue was Succesfuly edited";
success.ISSUE_ASSIGNED = "The Issue was Succesfuly assigned";
success.SUBTASK_CREATED = "Sub-Task created successfully";
success.SUBTASK_REMOVED = "Sub-Task removed successfully";
success.ISSUE_INPROGRESS = "Issue started successfully";
success.SUBTASKS_RESOLVED = "All sub-tasks are resolved for this issue, do you want to resolve it ?";
success.ISSUE_RESOLVED = "Issue resolved successfully";
success.ISSUE_REMOVED = "Issue deleted successfully";
success.ISSUE_REOPENED = "Issue reopened successfully";
success.ISSUE_ESTIMATION = "Estimation issue successfully updated";

/**
 * @description
 * Export variables
 */
exports.errors = errors;
exports.success=success;
