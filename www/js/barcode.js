app.initialize();

function process() {
  Quagga.decodeSingle({
    decoder: {
      readers: ["code_128_reader", "ean_reader"] // List of active readers
    },
    locate: true, // try to locate the barcode in the image
    src: document.getElementById('myImage').src, // or 'data:image/jpg;base64,' + data
  }, function(result) {
    if (result.codeResult) {
      console.log("result", result.codeResult.code);
      document.getElementById("result").innerHTML = "Barcode data = " + result.codeResult.code;
      getJSON(5054775980437);
    } else {
      console.log("not detected");
    }
  });
}

////// OLD BARCODE SCANNING //////
function setOptions() {
  var options = {
    // Some common settings are 20, 50, and 100
    quality: 100,
    destinationType: Camera.DestinationType.FILE_URI,
    encodingType: Camera.EncodingType.JPEG,
    mediaType: Camera.MediaType.PICTURE,
    allowEdit: false,
    correctOrientation: true, //Corrects Android orientation quirks
    cameraDirection: 1

  }
  return options;
}

////// OLD BARCODE SCANNING //////
function cameraTakePicture() {
  navigator.camera.getPicture(onSuccess, onFail, setOptions());

  function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = imageData;
  }

  function onFail(message) {
    alert('Failed because: ' + message);
  }
}

function getJSON(barcode) {
  //help here (example code) -> https://www.quackit.com/json/tutorial/json_with_http_jquery.cfm
  $.getJSON("https://world.openfoodfacts.org/api/v0/product/" + barcode + ".json", function(result) {

    var status = result.status_verbose;

    if (status == "product not found") {
      document.getElementById("product").innerHTML = status;
    } else {
      var product = result.product.product_name;
      var allergens = result.product.allergens_tags;
      document.getElementById("product").innerHTML = "Product Name = " + product;
      document.getElementById("allergens").innerHTML = "Allergens = " + allergens;
      document.getElementById("result").innerHTML = "Barcode data = " + barcode;
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