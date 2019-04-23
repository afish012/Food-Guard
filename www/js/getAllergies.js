function getAllergies(localStorage){
    var userAllergies = JSON.parse(localStorage.getItem('allergies'));
    return userAllergies;
}