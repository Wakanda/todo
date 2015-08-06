/**
 * @description 
 * This File is for Test Only
 */
var permissionsConstants = require("Common/checkUserPermission/checkPermissionContants");

var isConnected = loginByPassword("mmesaoudi@4d.com", "123456789");


var isAuthed = require('Common/checkUserPermission/checkUserPermission').isAuthorized(permissionsConstants.ressource.TEAM, permissionsConstants.permission.IS_CREATE);
isAuthed;



/*
 * @description 
 * standard code fot verifying Permisions : 
 * 
 	var permissionsConstants = require("Common/checkUserPermission/checkPermissionContants");
 	var check = require('Common/checkUserPermission/checkUserPermission');
 
 	var authorized = check.isAuthorized(permissionsConstants.ressource.ROLE,
 	    					   permissionsConstants.permission.IS_CREATE);
 	    	
 	    	if(authorized.status == false) {
 	    		throw new Error(authorized.message);
 	    	}
*/