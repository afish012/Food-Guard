$(document).ready(function () {

    //need a function to detect when a button with the class 'bottomMenuButton' has been clicked

    $("#topMenuButton").click(function () {
        $("#topMenuArea").removeClass("hiddenPage");


    });

    $("#topMenuClose").click(function () {
        $("#topMenuArea").addClass("hiddenPage");


    });


});
