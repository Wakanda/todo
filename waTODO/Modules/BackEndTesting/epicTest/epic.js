
//var theProject=ds.Project.find('title=:1','P1');
var epic1=ds.Epic.find('name=:1','epic1');
//var epic1=ds.Epic.find('name=:1','epic1');
//epic1.project=theProject;
//epic1.save();
//epic2.project=theProject;
//epic2.save();

var issues=ds.Issue.query('status=="Done"');
//issue1.epic=epic2;
//issue1.save();


//var issue2=ds.Issue.find('name=:1','issue1');
//issue2.epic=epic1;
//issue2.save();
//epic2.issues;
issues;