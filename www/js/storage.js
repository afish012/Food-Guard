app.initialize();

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

//variables for storing local storage
var allergies = localStorage.getObj("allergies");
var recentScans = localStorage.getObj("recentScans");


//~ console.log(localStorage.getObj("allergies"));


//two functions for checking previously stored data and displaying it correctly
function check(aller) {
    document.getElementById(aller).checked = true;
}
window.onload = function() {
  for(i = 0; i < allergies.length; i++){
    check(allergies[i]);
  }
  
  
}

function delRecentScans_All() {
	localStorage.setObj("recentScans", []); //when the user wants to delete the recent scans, just set the contents to empty array
	location.reload();
}

//not utilising any refresh functions, as name will be sent in a form so page will refresh automatically
function delRecentScans_One(name) {
	newScans = []
	for (i = 0; i < window.recentScans.length; i++) {
		if (window.recentScans[i][0] != name) {
			newScans.push(window.recentScans[i]);
		}
	}
	
	localStorage.setObj("recentScans", newScans);
}

function formRemove() {
	console.log(document.forms["removeMe"]["name"]);
	delRecentScans_One(document.forms["removeMe"]["name"]);
}

function addScan(name, allergyList, picURL) {
	delRecentScans_One(name);
	localStorage.setObj("recentScans", window.recentScans.concat([[name, allergyList, picURL]]));
}

function getScan(name) {
	for (scan in window.recentScans) {
		if (scan[0] == name) {
			return scan;
		}
	}
}

function getSeverityColor(scan) {
	if (scan[1].length == 0 || allergies.length == 0) {
		return "green";
	}
	
	for (scanAllergen in scan[1]) {
		for (userAllergen in allergies) {
			if (scanAllergen == userAllergen) {
				return "red";
			}
		}
	}
	return "green";
}

function submitAller(){
  var newAllergies = []
  
  //booleans for seeing if elements are checked
  var gluten = document.forms["allergyForm"]["Gluten"].checked;
  var peanuts = document.forms["allergyForm"]["Peanuts"].checked;
  var seafood = document.forms["allergyForm"]["Seafood"].checked;
  var strawberry = document.forms["allergyForm"]["Strawberry"].checked;

  if(gluten == true){
    newAllergies.push("Gluten");
  }

  if(peanuts == true){
    newAllergies.push("Peanuts");
  }

  if(seafood == true){
    newAllergies.push("Seafood");
  }

  if(strawberry == true){
    newAllergies.push("Strawberry");
  }

  localStorage.setObj("allergies",newAllergies);

}
