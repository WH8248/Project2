var bio = {
	"name" : "Bill Harris",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "wh8248@att.com",
		"mobile" : "847-330-7594",
		"location" : "Schaumburg, IL",
		"twitter" : "ndnber1",
		"gethub" : "WH8248"
},	
	"welmessage" : "Welcome! This is my Bio",
	"skills" : [
	"Leadership", "Project Managment", "Troubleshooting", "Programming"
	],
	"bioPic" : "images/fry.jpg"	
}
bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	var formattedLocation =	HTMLlocation.replace("%data%", bio["contacts"]["location"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGethub = HTMLgithub.replace("%data%", bio.contacts.gethub);
	var formattedWelmessage = HTMLWelcomeMsg.replace("%data%", bio.welmessage);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedbioPic);
	$("#header").append(formattedWelmessage);
	$("#header").append(HTMLskillsStart);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedLocation);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGethub);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedLocation);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedGethub);	
	for(SK in bio.skills) {
		var formattedSkils = HTMLskills.replace("%data%", bio.skills[SK]);
		$('#header').append(formattedSkils);
	}
	
}
bio.display();

//Start of Education section
var education = {
	"schools":[    //changed from school
	{
		"name":"Sandburg High School",
		"location":"Orland Park, IL",  
		"degree" : "High School",
		"majors" : ["High School Education", "Electrical"],
		"dates" : 1993,
		"url" : "http://sandburg.d230.org/"
	},
	{
		"name":"Northern Illinois University",
		"location":"Dekalb, IL", 
		"degree" : "Bachelor of Science ",
		"majors" : ["Electrical Engineering"],
		"dates" : 2000,
		"url" : "http://www.niu.edu/index.shtml"
	}
	],
	"onLineCourses":[
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": 2014,
		"url": "https://www.udacity.com/course/ud304"
	},
	{
		"title": "How to Use Git and GitHub",
		"school": "Udacity",
		"dates": 2014,
		"url": "https://www.udacity.com/course/ud775"
	},
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": 2014,
		"url": "http://www.udacity.com/course/ud804"
	},
	{
		"title": "Intro to jQuery",
		"school": "Udacity",
		"dates": 2014,
		"url": "https://www.udacity.com/course/ud245"
	}
	]
}
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var SchName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchName = SchName.replace("#", education.schools[school].url);
		$(".education-entry:last").append(formattedSchName);
		var formattedSchLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchLoc);
		var formattedSchDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchDates);
		var formattedSchDeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchDeg);
		var formattedSchMaj = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedSchMaj);
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for (OnLine in education.onLineCourses) {
		var OLTitle = HTMLonlineTitle.replace("%data%", education.onLineCourses[OnLine].title);
		var formattedOLTitle = OLTitle.replace("#", education.onLineCourses[OnLine].url);
		$(".education-entry:last").append(formattedOLTitle);
		var formattedOLSchool = HTMLonlineSchool.replace("%data%", education.onLineCourses[OnLine].school);
		$(".education-entry:last").append(formattedOLSchool);
		var formattedOLDates = HTMLonlineDates.replace("%data%", education.onLineCourses[OnLine].dates);
		$(".education-entry:last").append(formattedOLDates);
	}
}
education.display();

//Start of Work Section
var work = {
	"jobs":[
	{
		"employer":"AT&T",
		"location":"Schaumburg, IL",
		"title" : "Professional-Tech Project Mgmt",
		"dates" : "2001-present",
		"description" : "Improved the Wireless and Wireline networks",
		"url" : "http://www.att.com"
	},
	{
		"employer":"Fox's Pizza",
		"location":"Orland Park, IL",
		"title" : "Delivery Driver",
		"dates" : "1997-2001",
		"description" : "Delivered pizza and other food to customers",
		"url" : "http://www.foxspubs.com/"	
	}
		]
}
function displayWork(){
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var EmployerName = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedEmployer = EmployerName.replace("#",work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;	
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);	
		var formattedDisc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDisc);	
	}
}
displayWork();

//Start of projects section
var projects = {
	"projects":[
	{
		"title":"Wiki Space",
		"dates" : "2014",
		"description" : "Created a Wiki Space for Mobility Operations",
		"images" : ["images/197x148.gif",
		"images/197x148.gif"
		]
	},
	{
		"title":"Code 4 improvment",
		"dates" : "2011",
		"description" : "Helped create and pilot a department that improved all code 4 tickets across the nation",
		"images" : ["images/197x148.gif",
		"images/197x148.gif"
		]
	}
	]
}
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if(projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

//Google Map section
$("#mapDiv").append(googleMap);

//Funtion to get click locations on page
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

/*
CODE USED AND NO LONGER NEEDED, keeping for reference


function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " +name[1]
;
}
$('#main').append(internationalizeButton);

var formattedName = 
	HTMLheaderName.replace("%data%", "bio.name");

var formattedRole = 
	HTMLheaderRole.replace("%data%", "bio.role");

//var formattedbioPic = 
//	HTMLbioPic.replace("%dat%", bio.bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//$("#header").prepend(formattedbioPic);

*/

/*

// Top Header
var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
//Contact info
var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
var formattedEmail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
//var formattedGitHub = HTMLgithub.replace("%data%", bio["contacts"]["github"]);
//var formattedTwitter = HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"]["location"]);
//var formattedPic = HTMLbioPic.replace("%data%", bio["bioPic"]);
var formattedSkills = HTMLskills.replace("%data%", bio["skills"]);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
//$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
//$("#header").append(formattedPic);
$("#header").append(formattedSkills);

*/

/*
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle    = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle
	$(".work-entry:last").append(formattedEmployerTitle);
}
*/


/*
var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<a href='#'>%data%";
var HTMLschoolDegree = " -- %data%</a>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em><br>Major: %data%</em>"

var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='#'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<br><a href='#'>%data%</a>";

for (ED in education.school) {
	$("#education").append(HTMLschoolStart);
	var formattedSchName = HTMLworkEmployer.replace("%data%", education.school[ED].name);
	var formattedSchmajors    = HTMLworkTitle.replace("%data%", education.school[ED].majors);
	var formattedSchNameMajors = formattedSchName + formattedSchmajors
	$(".education-entry:last").append(formattedSchNameMajors);
}
*/

/*
for (PJ in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	var formattedPJtitle = HTMLprojectTitle.replace("%data%", projects.projects[PJ].title);
	var formattedPJdate    = HTMLprojectDates.replace("%data%", projects.projects[PJ].dates);
	var formattedPJtitledate = formattedPJtitle + formattedPJdate
	$(".project-entry:last").append(formattedPJtitledate);
}
*/

/*
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedbioPic);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
var formattedLocation =	HTMLlocation.replace("%data%", bio["contacts"]["location"]);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGethub = HTMLgithub.replace("%data%", bio.contacts.gethub);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGethub);
var formattedWelmessage = HTMLWelcomeMsg.replace("%data%", bio.welmessage);
$("#header").append(formattedWelmessage);

for(SK in bio.skills) {
	var formattedSkils = HTMLskills.replace("%data%", bio.skills[SK]);
	$('#skills').append(formattedSkils);
}

/*var formattedSkils = HTMLskills.replace("%data%", bio.skills);
$("#topContacts").append(HTMLskillsStart);
$("#topContacts").append(formattedSkils);*/