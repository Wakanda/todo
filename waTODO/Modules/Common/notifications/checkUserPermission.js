

var errors = {};
var succes = {};

/**
 * @description
 * lang : English
 * Errors & Succes for is Authorized Method
 */
	// Errors Case
errors.USER_NOT_EXIST  = "This User is Not stored in Datastore";
errors.USER_IS_NOT_LOGGED  = "This User is Not Connected";
errors.RESSOURCE_NOT_EXIST  = "This User is Not Connected";
errors.PERMISSION_NOT_EXIST =	"This Permission not Stored in DataStore";
errors.OPERATION_NOT_AUTHORIZED = "This Ressource Not Authorized";
	// Succes Case
succes.OPERATION_AUTHORIZED = "This Ressource Authorized";


/**
 * @description
 * Export variables
 */
exports.errors = errors;
exports.succes=succes;


		
		
		
