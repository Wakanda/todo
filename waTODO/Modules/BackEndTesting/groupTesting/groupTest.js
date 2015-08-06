

/**
 * @description
 * Group Back End Test
 */


//		var roles = [];
//			roles.push({ID:87});
//			roles.push({ID:89});
//		var theGroup = ds.Group.find("ID = :1",2);
//			theGroup;
//		var group = {};
//			group.ID = 5;
////		var assignRoleToGroup = ds.RoleGroup.assignRolesToGroup(roles,theGroup);
////			assignRoleToGroup;

//		var allRolesFromGroup = ds.Group.query('ID = :1',2).toArray("ID, name, description, roles.role");
//			allRolesFromGroup;
//			
//			var roles = ds.Role.query(
//				    	'ID=:1',
//				    	group.ID
//				    );
//				    roles;


// Fix Redondance 
		var a = ds.User.query("userGroups.group.ID == :1",'BD17027C1E9D5F4EBD648324B9453E4B');
		var b = ds.User.all();
		var c = b.minus(a);
			c.length;