var activity = {};

/**
 * @Description
 * Get user color for colorint timesheet event
 * @Param {project object, assignee object}
 * @Return {user color}
 */
activity.getUserColor = function(project, assignee){

	var colors = new Array( "#FF6103", "#FF0000", "#0080FF", "#ACC475", "#6BBA70", "#006E2E", "#738B9C", "#4096EE", "#356AA0", "#FF0096", "#B02B2C", "#8181F7", "#B18904", "#086A87", "#FE642E", "#B18904" );
	var timesheets = ds.Timesheet.query('issue.project.ID =:1',project.ID);
	var color = colors[2];
	var found = false;
	
	if(timesheets.length == 0){
		color = colors[0];
	} else {
		
		timesheets.forEach(
		
			function(t){
				
				if(t.author.ID == assignee.ID){
					color = t.color;
					found = true;
				} 
			});
			
			if(!found){
				
				timesheets.forEach(
		
					function(t){
					
						colors.forEach(
		
							function(c){
								
								if(t.color != c && t.color == color){
									color = c;
									
								}
							});
					
					});
			
			}
	}
	return color;
}

/**
 * @Description
 * Get user today's timesheet
 * @Param {issue object}
 * @Return {true or false}
 */
activity.getUserTimesheet = function(timesheets){
	
	var w=0;
	var d = 0;
	var h = 0;
	
	if(timesheets.length != 0){
		
		timesheets.forEach(function(timesheet){
			var b=timesheet.finalEstimation.split('w');
			var a=[];
			if(b.length != 1){
				var c = b[1].split('d');
				w += parseInt(b[0]);
				
				if(c.length != 1){
					d += parseInt(c[0]);
					var x = c[1].split('h');
					if(x.length != 1){
						h += parseInt(x[0]);
					}
				}else{
					var x = b[1].split('h');
					if(x.length != 1){
						h += parseInt(x[0]);
					}
				}
						
			} else {
				var c = timesheet.finalEstimation.split('d');
				if(c.length != 1){
					d += parseInt(c[0]);
					
					var y = c[1].split('h');
					if(y.length != 1){
						h += parseInt(y[0]);
					}
					
				}else{
					var y = timesheet.finalEstimation.split('h');
					h += parseInt(y[0]);
				}
			}
	});
	
	var timesheet =(w*5*8) + (d*8) + h + 'h';
	
	return timesheet;
	
	}else{
		return '0h';
	}
}


/**
 * @Description
 * Get the user week's activities
 * @Param {issue object}
 * @Return {true or false}
 */
activity.getUserWeekActivities = function(user, project, weekActivity){
	
	var curr = new Date;
	var n = curr.getDay();
	var timesheets = [];
	
	if(weekActivity){
		
		for(var i=0;i<=n;i++){	
			var curr = new Date; // get current date
			var first = curr.getDate() - curr.getDay();
			var firstday = new Date(curr.setDate(first));
			var f = firstday.getDate()+i;
			var date = new Date(firstday.setDate(f));
			var date1 = new Date(date.setHours(0, 0, 0, 0));
			var date2 = new Date(date.setHours(23, 59, 59, 0));
			
			var dayActivity = ds.Timesheet.query('author.ID =:1 AND issue.project.ID =:2 AND(endDate >:3 AND endDate <:4)',user.ID, project.ID, date1, date2);
			
			if(dayActivity.length !=0){
				var dateActivity = activity.getUserTimesheet(dayActivity);
		        timesheets.push(dateActivity);
			}		
		}
	}else{
			
		for(var i=0;i<=6;i++){	
			var curr = new Date; // get current date
			var lastweekDay = new Date(curr.setDate(curr.getDate()-7));
			var first = lastweekDay.getDate() - lastweekDay.getDay();
			var firstday = new Date(lastweekDay.setDate(first));
			var f = firstday.getDate()+i;
			var date = new Date(firstday.setDate(f));
			var date1 = new Date(date.setHours(0, 0, 0, 0));
			var date2 = new Date(date.setHours(23, 59, 59, 0));
			
			var dayActivity = ds.Timesheet.query('author.ID =:1 AND issue.project.ID =:2 AND(endDate >:3 AND endDate <:4)',user.ID, project.ID, date1, date2);
			
			if(dayActivity.length !=0){
				var dateActivity = activity.getUserTimesheet(dayActivity);
		        timesheets.push(dateActivity);
			}		
		}
	}
	

	var w=0;
	var d = 0;
	var h = 0;
	
	if(timesheets.length != 0){
		
		timesheets.forEach(function(timesheet){
			var b=timesheet.split('w');
			var a=[];
			if(b.length != 1){
				var c = b[1].split('d');
				w += parseInt(b[0]);
				
				if(c.length != 1){
					d += parseInt(c[0]);
					var x = c[1].split('h');
					if(x.length != 1){
						h += parseInt(x[0]);
					}
				}else{
					var x = b[1].split('h');
					if(x.length != 1){
						h += parseInt(x[0]);
					}
				}
						
			} else {
				var c = timesheet.split('d');
				if(c.length != 1){
					d += parseInt(c[0]);
					
					var y = c[1].split('h');
					if(y.length != 1){
						h += parseInt(y[0]);
					}
					
				}else{
					var y = timesheet.split('h');
					h += parseInt(y[0]);
				}
			}
	});
	
	var timesheet =(w*5*8) + (d*8) + h + 'h';
	
	return timesheet;
	
	}else{
		return '0h';
	}
}

/**
 * @description
 * Export variables
 */
exports.timesheet = activity;
