



		
		
//		var groups = [
//					 {ID:4,name:"",description:""},
//					 {ID:5,name:"",description:""}
//					 ];
//		
//		
//		var theUser = ds.User.find("ID =:1",2);
//			theUser;
//			
//		var ug = ds.UserGroup.assignGroups(theUser,groups);	
//			ug;

//var a='demo test aa';
//var b=a.split(" ",3)

//if(b.length==1){
//	
//	var c=b[0]
//	c=c.toUpperCase()
//	c=c.substr(0,3)
//	c;
//}
//else if(b.length==2){
//	
//	var c1=b[0];
//	var c2=b[1];
//	c1=c1.toUpperCase();
//	c2=c2.toUpperCase();
//	c1=c1.substr(0,3)
//	c2=c2.substr(0,1)
//	var c3=c1+c2;
//	c3
//}
//else if(b.length==3){
//	
//	var c1=b[0];
//	var c2=b[1];
//	var c3=b[2];
//	c1=c1.toUpperCase();
//	c2=c2.toUpperCase();
//	c3=c3.toUpperCase();
//	c1=c1.substr(0,2)
//	c2=c2.substr(0,1)
//	c3=c3.substr(0,1)
//	var c4=c1+c2+c3;
//	c4
//^[1-9]w)|(^[1-9]d)|(^[1-9]h)|(^([1-9])w)([ ]?([1-9]d))|(^([1-9])w)([ ]?([1-9]h))|(^([1-9])d)([ ]?([1-9]h))
//var exp=new RegExp("((^[1-9]+w$)|(^[1-5]d$)|(^[1-8]h$)|(^[1-9]+w)([ ]?[1-5]d)([ ]?[1-8]h$)|(^[1-9]+w)([ ]?[1-5]d$)|(^[1-9]+w)([ ]?[1-8]h$)|(^[1-5]d)([ ]?[1-8]h$))","g");
//exp.test('1w1d1h');
//var a=[];
//var w=0;
//var d = 0;
//var h = 0;
//a.push('1d');
//a.push('4h');
////a.push('3h');
////a.push('1w 2h');
////a.push('2d 3h');
////a.push('2w 3h');
//a.forEach(function(e){
//	var b=e.split('w');
//	
//	if(b.length != 1){
//		var c = b[1].split('d');
//		w += parseInt(b[0]);
//		
//		if(c.length != 1){
//			d += parseInt(c[0]);
//			var x = c[1].split('h');
//			if(x.length != 1){
//				h += parseInt(x[0]);
//			}
//		}else{
//			var x = b[1].split('h');
//			if(x.length != 1){
//				h += parseInt(x[1]);
//			}
//		}
//				
//	} else {
//		var c = e.split('d');
//		if(c.length != 1){
//			d += parseInt(c[0]);
//			
//			var y = c[1].split('h');
//			if(y.length != 1){
//				h += parseInt(y[0]);
//			}
//			
//		}else{
//			var y = e.split('h');
//			h += parseInt(y[0]);
//		}
//	}
//});
//var estimation ='';
//if(w != 0){
//	estimation += w+'w';
//	
//	if(d != 0){
//		estimation += ' '+d+'d';
//		
//		if(h != 0){
//			estimation += ' '+h+'h';
//		}
//	}else{
//		if(h != 0){
//			estimation += ' '+h+'h';
//		}
//	}
//}else{
//	if(d != 0){
//		estimation += ' '+d+'d';
//		
//		if(h != 0){
//			estimation += ' '+h+'h';
//		}
//	}else{
//		if(h != 0){
//		estimation += ' '+h+'h';
//	}
//	}
//}
//estimation
//var curr = new Date; // get current date
//var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
//var last = first + 6; // last day is the first day + 6

//var firstday = new Date(curr.setDate(first));
//var lastday = new Date(curr.setDate(last));

//var currWeek = [];

//var curr = new Date;
//	var timesheets = [];
//	var currUser = currentUser();
//	for(var i=0;i<7;i++){	
//		var curr = new Date; // get current date
//		var first = curr.getDate() - curr.getDay();
//		var firstday = new Date(curr.setDate(first));
//		var f = firstday.getDate()+i;
//		var date = new Date(firstday.setDate(f));
//		var date1 = new Date(date.setHours(0, 0, 0, 0));
//		var date2 = new Date(date.setHours(23, 59, 59, 0));
//		
//		var timesheet = ds.Timesheet.query('author.ID =:1 AND (endDate >:2 AND endDate <:3)',currUser.ID, date1, date2);
//		debugger;
//        timesheets.push(timesheet);
//	}
//var date =  new Date((new Date()).setHours(1, 0, 0, 0));
//var today =  new Date((new Date()).setHours(24, 59, 59, 0));
////    debugger;
//// date.setDate(date.getDate()-1);
//// today.setDate(date.getDate()-1);
////date = date.getDate() + '/' +date.getMonth() + '/' +date.getFullYear();
//// date = date.get
////debugger;
// date = date.toISOString();
// today = today.toISOString();
////    var yesterdayDate = date.getDate();
////	
//;
////	var myTimesheets = ds.Issue.query('createDate >:1 AND createDate <:2)',date, today);
////	myTimesheets
//timesheets

var exp=new RegExp("((^[1-9]w$)|(^[1-4]d$)|(^[1-7]h$)|(^[1-9]w)([ ]?[1-4]d)([ ]?[1-7]h$)|(^[1-9]w)([ ]?[1-4]d$)|(^[1-9]w)([ ]?[1-7]h$)|(^[1-4]d)([ ]?[1-7]h$))","g");
exp.test('3w 4d 3d');