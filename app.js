

function getDetails() {

    const products = "https://api.barcodelookup.com/v3/products?barcode=8593893774759&formatted=y&key=9jzxk18jpnh8kt7pi4ya2hzbl6q5wv"

    fetch(products)
    .then(getJson)
    .then(updateDisplay)
    .catch(reportError);
}

function getJson(aResponse){
    return aResponse.json();
  }


function updateDisplay(jsonObj){
    let productInfo = jsonObj.results;

    console.log(productInfo);

  }

function reportError(anError){
    console.log(anError);
  }

  console.log(getDetails());