//need to do this code after the page has been created, otherwise it will fail (need to create buttons before the listeners)
$(document).ready(function() {
   
   //need a function to detect when a button with the class 'bottomMenuButton' has been clicked
   
   $(".bottomMenuButton").click(function() {
      //now we need to do different things depending on which button is pressed (ingredients, home, or scan)
      
      //first, we change which button is selected - we remove the 'selected' class from all buttons, then add it to the one that was just clicked.
      //then, we 'load' the corresponding page, by removing the 'hidden' class from all the pages, then applying it to the pages that aren't the one we want to show.
      
      switch ($(this).attr('id')) {
         case "ingredientsButton":
            $(".bottomMenuButton").removeClass("selectedButton");
            $("#ingredientsButton").addClass("selectedButton");
            
            $(".appPage").removeClass("hiddenPage");
            $("#homePage, #scanPage").addClass("hiddenPage");
            
            break;
         case "homeButton":
            $(".bottomMenuButton").removeClass("selectedButton");
            $("#homeButton").addClass("selectedButton");
            
            $(".appPage").removeClass("hiddenPage");
            $("#ingredientsPage, #scanPage").addClass("hiddenPage");
            
            break;
         case "scanButton":
            $(".bottomMenuButton").removeClass("selectedButton");
            $("#scanButton").addClass("selectedButton");
            
            $(".appPage").removeClass("hiddenPage");
            $("#ingredientsPage, #homePage").addClass("hiddenPage");
            
            
            break;
      }
      
      
      
   });
   
});