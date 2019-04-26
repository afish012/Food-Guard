app.initialize();
//getJSON("5000328583839");
//getJSON("5000184321606");

function getJSON(barcode) {
  //help here (example code) -> https://www.quackit.com/json/tutorial/json_with_http_jquery.cfm
  $.getJSON("https://world.openfoodfacts.org/api/v0/product/" + barcode + ".json", function(result) {

    var status = result.status_verbose;

    if (status == "product not found") {
      document.getElementById("product").innerHTML = status;
      $("#scanpagebody").removeClass("hidden")
       $("#success").addClass("hidden")


    } else {
      var product = result.product.product_name;
      var allergens = result.product.allergens_tags;
      localStorage.ffAllergens = null;
      localStorage.ffAllergens = allergens;
      localStorage.ffAllergens = localStorage.ffAllergens.replace(/en:/g, "");
      localStorage.setObj("ffAllergens", localStorage.ffAllergens.split(","));
      var ffArray = localStorage.getObj("ffAllergens");
      var dbAll = getAllergies(localStorage);
      for(i in ffArray){
          for(j in dbAll){
             if(ffArray[i] == dbAll[j]){
                alert(ffArray[i]);
             } 
          }
      }
          
      var image = result.product.image_url;

      if(image == null){
        image = "img/default-thumbnail.png";
      }

      var ingredients = result.product.ingredients_text;

      if(ingredients == null){
        ingredients = "Ingredients data not available";
      }

      document.getElementById("product").innerHTML = product;
      document.getElementById("prodTitle").innerHTML = product;
      document.getElementById("allergens").innerHTML = "Allergens = " + allergens;
      document.getElementById("prodImg").src = image;
      document.getElementById("prodIng").innerHTML = ingredients;
      // document.getElementById("result").innerHTML = "Barcode data = " + barcode;
      $("#scanpagebody").addClass("hidden")
      $("#success").removeClass("hidden")
    }
  });

}

function cordovaBarcode() {
  //source = https://www.npmjs.com/package/cordova-plugin-barcodescanner
  cordova.plugins.barcodeScanner.scan(
    function(result) {
      // alert("We got a barcode\n" +
      //   "Result: " + result.text + "\n" +
      //   "Format: " + result.format + "\n" +
      //   "Cancelled: " + result.cancelled);
      getJSON(result.text);
    },
    function(error) {
      alert("Scanning failed: " + error);
    }, {
      showFlipCameraButton: true, // iOS and Android
      showTorchButton: true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      prompt: "Place a barcode inside the scan area", // Android
      resultDisplayDuration: 0, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      disableAnimations: true, // iOS
      disableSuccessBeep: false, // iOS and Android
      orientation : "portrait"
    }
  );
}

function testingLocal(){

  $(document).ready(function() {
    console.log(localStorage);
  })
}
