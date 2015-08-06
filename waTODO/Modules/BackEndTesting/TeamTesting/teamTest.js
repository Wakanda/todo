


var members = [];
	members.push({ID: "949F4F9642506B4083B271A5BBDDF787" ,
               name : "Mohammed"});
               
    var team ;           
		team = ds.Team.query("ID == :1",3).toArray("ID, name, description, members.user");
		typedef team.members
		
		
//	var result = ds.UserTeam.assignMembers(members,team);	
//		result;
	