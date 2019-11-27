// baseClass
// Capital Letters for constructors
var Job = function(){
	this.pays = true;
};

// prototype method
Job.prototype.print= function() {
	console.log(this.pays ? 'Please hire me' : 'no thank you');
};

// subClass
var TechJob = function(title,pays) {
    // inherits baseClass, but not the prototype.print method;
    // inherits all properties and methods inside job, which means this.pay = true
    Job.call(this);

	this.title = title;
	this.pays = pays;
};

// This line will make TechJob.prototype inherit from Job.prototype
TechJob.prototype = Object.create(Job.prototype);
// Setting constructor for TechJob
TechJob.prototype.constructor = TechJob;
// Insert this piece of code last, it will override the print function in the parent.prototype;
TechJob.prototype.print = function() {
	console.log(this.pays ? 'overridden1','overriden2')
}

/* 
If there are no Job.prototype.print() or TechJob.prototype.print();
The computer will go down the parent, until the root object looking 
for the print function.

Object is the master object.
All objects are created from "Object"
*/

/*
Object.prototype.print= function() {
	console.log('this is the master object');
};
*/

var softwarePosition = new TechJob('Javascript Programmer',true);
var softwarePosition2 = new TechJob('vs Programmer', false);
/* 
In the Job constructor, this.pay is true
But the argument in softwarePosition2 has overidden it.
*/