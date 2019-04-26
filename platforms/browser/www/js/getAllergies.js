function getAllergies(localStorage){
    var userAllergies = JSON.parse(localStorage.getItem('allergies'));
    return userAllergies;
}

//window.addEventListener('pg_allergies',function(event){
//    alert(event.data);
//}, false);