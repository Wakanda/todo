/**
 * @description
 * Test Add Role
 */

 

//////////// add Role to Database
			var newRole = {};
			debugger;
			newRole.ID = '';
			newRole.name = 'Role STT';
			newRole.description = 'this Role allow you to permit you all';
			newRole.permissions = [];
			newRole.permissions.push({ressource:'Task',isCreate:true,isRead:true});
			newRole.permissions.push({ressource:'Team',isCreate:true,isDelete:true});
		    newRole.permissions.push({ressource:'Sprint',isCreate:false,isDelete:true,isRead:true,isEdit:true});
			
			try {
			var test  = ds.Role.addRole(newRole);
			test;
            } catch(e){
           e
           }
          
////            
////    // Edit Role to Database        
            var existingRole = {};
			debugger;
			existingRole.ID = 11;
			existingRole.name = 'Role ASAS';
			existingRole.description = ',gkoojgop ';
			existingRole.permissions = [];
			existingRole.permissions.push({ressource:'Task',isCreate:true,isDelete:true});
			existingRole.permissions.push({ressource:'project',isCreate:true,isDelete:false});
		    existingRole.permissions.push({ressource:'group',isCreate:true,isDelete:false});
			
			try {
			var test  = ds.Role.editRole(existingRole);
			test;
            } catch(e){
          e
            }

    // find All Roles
    
    var allRoles = ds.Role.findAll();
		allRoles;

	// Delete a Role
	var role = {};
		role.ID = 73;
	var roleDeleted = ds.Role.deleteRole(role);
		roleDeleted;
		
