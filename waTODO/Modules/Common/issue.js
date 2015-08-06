/**
 * @Description
 * Generate issue Key
 **/
var issue={};
 
issue.generateKey=function(project,count){
	
	var b=project.split(" ",3);
    var result='';
     
	if(b.length==1){	
		result=b[0];
		result=result.toUpperCase();
		result=result.substr(0,3)+'-'+count;
	}
	else if(b.length==2){		
		var c1=b[0];
		var c2=b[1];
		c1=c1.toUpperCase();
		c2=c2.toUpperCase();
		c1=c1.substr(0,3);
		c2=c2.substr(0,1);
		result=c1+c2+'-'+count;
	}
	else{		
		var c1=b[0];
		var c2=b[1];
		var c3=b[2];
		c1=c1.toUpperCase();
		c2=c2.toUpperCase();
		c3=c3.toUpperCase();
		c1=c1.substr(0,2);
		c2=c2.substr(0,1);
		c3=c3.substr(0,1);
		result=c1+c2+c3+'-'+count;
	}
	return result; 
};
 
 exports.issue = issue;