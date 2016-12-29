

//$("#main").append([yourname]);

//$(".super-header-wrapper").html("<img src = 'http//4.bp.blogspot.com/-0anN_xv3z6kE/U6nKrLJMjuI/AAAAAAAA9ls/1qcpaYfjtCY/s1600/AndroidProfesor_Udacity_trans.png'>");


//does not work

//$("#main").append([yourname]);



// var firstname = "james";;

//var age = 32;

//console.log(firstname);

//var awsomethoughts = "I am awsomwe!";

//consol.log(awsomeThoughts);



// $("#main").append("james");

//[string].replace([old],[new])

//var email = "cameron@udacity.com";

// var new email = email.replace("udacity","gmail");

//console.log(email);

//console.log(newemail);


// mixing.replace() and .append()

var formattedName = HTMLheaderName.replace("%data", name);

$("#header").append(formattedName);



// format data, build and resume header

var formattedANme = HTMLheaderName.replace("%data", name);

var role = "web Developer";
var formattedRole = HTMLheaderRole.replace("%data",role);

$("$header").prepend(formattedRole);
$("header").prepend(formattedName);


//String manipulation quiz 1

var s = "audacity";

var udacityzer = function(s) {
	//Right now, the variable s == "audacity"
	//manipulate s to make it equal to "udacity"
	//Your code goes here1


	return s;
};

//did you code work? line below will tell you!

console.log(udacityizer(s));


//arrays

var skills = ["awsomeness", "programming", "teaching", "js"];

$("#main").append(skills[0]);


//.append()ing Arrays Quiz

var skills = ["awsomeness", "programming", "teaching", "js"];

$("#main").append(skills.length);

4

//array manipulation

var sampleArray = [0,0,7];

var incrementlastArrayElement = function(_array) {

	var newArray = [];
	// Your code should make newArray equal to an array that has the same
	//values as _array, but the last number has increased by one.

	// For example
	// _array = [1, 2, 3];
	// turns into:
	// newArray = [1, 2, 4];
}


 

//objects literal notation

var bio = {
	"name" : "james",
	"agg" : 32,
	"skills" : skills
};

$("#main").append(bio.name);

james


//biography quiz

var bio = {
	"name" : "john doe",
	"role" : "web developer",
	"contacts": {
		"mobile": "650-555-5555",
		"email": "john@example.com"
		"github": "johndoe",
		"teitter": "@johndoe",
		"location": "San Francisco"
	},
	"welcomeMessage": "lorem ipsum dolor sit amet ect ect ect ect.",
	"skills":  [
	   "awsome", "delivering things", "cryogenic sleep", "saving the universe"
	   ],
	   "bioPic": "images/fry.jpg"
}

//dot and bracket notation

var bio {
	"name" : "James",
	"age" : 32,
	"skills" : skills
};

$("#main").append(bio.name);

bio city = "Mountain View";
bio email = "james.wiliams@udacity.com";

$("#main").appens(bio.city);

//practice with  obects

var work = {};
work.position = "course Developer";
work.employer = "Udacity";
work.years = 0.3;

var education = {};
education["name"] = "Nova Southeastern University";
education["years"] = "2005-2013"
education["city"] = "Fort Lauderdale, fl,  US";

$("#main").append(work["position"]);
$("#main").append(education.name);

// JSON

var education = {
	"schools":[
	{
		"name": "Eckerd College",
		"city": "Saint Petersburg, FL, US",
		"degree": "BA",
		"major" : ["Compsci"]
	},
	{
		"name" : "Nava Southeastern University",
		"city": "Fort Lauderdale, Fl, US",
		"degree": "Masters",
		"major": ["compsci"]
	}


	]

 }

 var education = {
 	"schools": [
 	 {
 		"name": "NOva Southeastern University",
 		"location": "Fort Lauderdale, FL",
 		"degree": "masters",
 		"majorrs": ["cs"],
 		"dates": 2013,
 		"url": "http://example.com"
     },
     {
     	"name": "Eckerd College",
     	"location": " Saint Petersberg, Fl",
     	"degree": "BA"
     	"majors": ["cs"],
     	"dates": 2003,
     	"url": "http://example.com"

     }





     ]
 },
 "onlineCourse": [
 	{
 		"title": "JavaScript Syntax",
 		"school" : "udacity",
 		"dates" : 2014,
 		"url": "http://www.udacity.com/course/ud804"

 	}

 	]

}

//if statements

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace(%data%, bio.skills[1]);

	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace(%data%, bio skill[1])
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace(%data%, bio skill[2])
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace(%data%, bio skill[3])
	$("#skill").appens(formattedSkill);

}