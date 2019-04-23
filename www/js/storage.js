app.initialize();

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

var allergies = localStorage.getObj("allergies");


console.log(localStorage.getObj("allergies"));

function check(aller) {
    document.getElementById(aller).checked = true;
}
window.onload = function() {
  for(i = 0; i < allergies.length; i++){
    check(allergies[i]);
  }
}


function submitAller(){
  var newAllergies = []
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
