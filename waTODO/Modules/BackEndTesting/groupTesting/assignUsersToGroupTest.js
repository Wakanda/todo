

// userGroups == Null || userGroups.group.ID != B5EFD84C51BA8442BB67ED4D7197344A

////////// assign users to group to Database
			var theGroup = {};
			debugger;
			theGroup.ID = 6;
			theGroup.name = 'demo';
			
			var members=[];
			members.push({ID :1,firstName:'Amine',lastName:'EL MAROUFI'});
			members.push({ID :47,firstName:'demo',lastName:'demo'});
		  //  members.push({ID :'Sprint',isCreate:false,isDelete:true,isRead:true,isEdit:true});
			
			try {
			var test  = ds.UserGroup.assignUsers(members,theGroup);
			test;
            } catch(e){
           e
           }