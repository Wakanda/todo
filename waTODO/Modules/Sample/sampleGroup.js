

////////// assign users to group to Database
//			var theGroup = {};
//			debugger;
//			theGroup.ID = 6;
//			theGroup.name = 'demo';
//			
//			var members=[];
//			members.push({ID :1,firstName:'Amine',lastName:'EL MAROUFI'});
//			members.push({ID :47,firstName:'demo',lastName:'demo'});
//		  //  members.push({ID :'Sprint',isCreate:false,isDelete:true,isRead:true,isEdit:true});
//			
//			try {
//			var test  = ds.UserGroup.assignUsers(members,theGroup);
//			test;
//            } catch(e){
//           e
//           }
var myGroups=ds.UserGroup.query('group.ID !=:1',"4014E85EB4204C4BB61167B819346DFD");
    var a=ds.User.query('userGroups.ID in :1',myGroups.ID);
    //var b=ds.User.query('ID in :1',a.ID);
a;
