
var status = {};
var type = {};
var priority = {};
var assignee = {};
var remaining = {}
/**
 * @description
 * lang : English
 * Issue status
 */
	// status Object
status.OPEN        = "Open";
status.INPROGRESS  = "In progress";
status.TESTING	   = "Testing";
status.DONE        = "Done";
// type object
type.SUB_TASK = "Sub-Task";
type.BY_TYPE = "By Type";
priority.BY_PRIORITY = "By Priority";
assignee.BY_ASSIGNEE = "By Priority";

/**
 * @Description
 * Get sprint total points work by assignee
 * @Param {issue object}
 * @Return {true or false}
 */
assignee.getTotalPoints = function(issues){
	
	var w=0;
	var d = 0;
	var h = 0;
	
	if(issues.length != 0){
		
		issues.forEach(function(issue){
			var b=issue.originalEstimate.split('w');
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
				var c = issue.originalEstimate.split('d');
				if(c.length != 1){
					d += parseInt(c[0]);
					
					var y = c[1].split('h');
					if(y.length != 1){
						h += parseInt(y[0]);
					}
					
				}else{
					var y = issue.originalEstimate.split('h');
					h += parseInt(y[0]);
				}
			}
	});
	
	var estimation ='';
	
	if(d >=5){
		w+=parseInt(d/5);
		d = d%5; 
	}else if(h >= 8){
		d+=parseInt(h/8);
		h = h%8;
	}
	
	if(w != 0){
		estimation += w+'w';
		
		if(d != 0){
			estimation += ' '+d+'d';
			
			if(h != 0){
				estimation += ' '+h+'h';
			}
		}else{
			if(h != 0){
				estimation += ' '+h+'h';
			}
		}
	}else{
		if(d != 0){
			estimation += d+'d';
			
			if(h != 0){
				estimation += ' '+h+'h';
			}
		}else{
			if(h != 0){
			estimation += h+'h';
		}
		}
	}
	return estimation;
	
	}else{
		return '0w 0d 0h';
	}
}

/**
 * @Description
 * Get sprint total points work by assignee
 * @Param {body mail, destination user, subject}
 * @Return {true or false}
 */
remaining.getIssueRemaining = function(issue,subTasks){
	
	var w=0;
	var d = 0;
	var h = 0;
	
	if(subTasks.length != 0){
		
			var b=issue.originalEstimate.split('w');
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
				var c = issue.originalEstimate.split('d');
				if(c.length != 1){
					d += parseInt(c[0]);
					
					var y = c[1].split('h');
					if(y.length != 1){
						h += parseInt(y[0]);
					}
					
				}else{
					var y = issue.originalEstimate.split('h');
					h += parseInt(y[0]);
				}
			}
			
			subTasks.forEach(
				function(issue){
					var b=issue.originalEstimate.split('w');
					var a=[];
					
					if(b.length != 1){
						var c = b[1].split('d');
						w -= parseInt(b[0]);
						
						if(c.length != 1){
							d -= parseInt(c[0]);
							var x = c[1].split('h');
							if(x.length != 1){
								h -= parseInt(x[0]);
							}
						}else{
							var x = b[1].split('h');
							if(x.length != 1){
								h -= parseInt(x[0]);
							}
						}
								
					} else {
						var c = issue.originalEstimate.split('d');
						
						if(c.length != 1){
							d -= parseInt(c[0]);
							
							var y = c[1].split('h');
							if(y.length != 1){
								h -= parseInt(y[0]);
							}
							
						}else{
							var y = issue.originalEstimate.split('h');
							
							if(h != 0){
								
								if(h > parseInt(y[0])){								
									h = h - parseInt(y[0]);
								} else {
									d =d-1;
									h = h + (8-parseInt(y[0]));
								}
								
							}else{
								d =d-1;
								h = 8-parseInt(y[0]);							
							}
							
						}
					}
				});
	
	
	var estimation ='';
	
	if(d >=5){
		w+=parseInt(d/5);
		d = d%5; 
	}else if(h >= 8){
		d+=parseInt(h/8);
		h = h%8;
	}
	
	if(w != 0){
		estimation += w+'w';
		
		if(d != 0){
			estimation += ' '+d+'d';
			
			if(h != 0){
				estimation += ' '+h+'h';
			}
		}else{
			if(h != 0){
				estimation += ' '+h+'h';
			}
		}
	}else{
		if(d != 0){
			estimation += ' '+d+'d';
			
			if(h != 0){
				estimation += ' '+h+'h';
			}
		}else{
			if(h != 0){
			estimation += h+'h';
		}
		}
	}
	return estimation;
	
	}else{
		return '0w 0d 0h';
	}
}

/**
 * @description
 * Export variables
 */
exports.type = type;
exports.status = status;
exports.priority = priority;
exports.assignee = assignee;
exports.remaining = remaining;