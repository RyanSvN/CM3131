const titleElement = document.getElementById("title");

// Scanner will be initialized in DOM inside element with id of 'reader'
const scanner = new Html5QrcodeScanner('reader', { 
    // Sets dimensions of scanning box (set relative to reader element width)
    qrbox: {
        width: 250,
        height: 250,
    },  
    // Frames per second to attempt a scan
    fps: 40, 
});


// Starts scanner
scanner.render(success, error);

async function getData(eancode) {

    const api_url = 'https://barcodes1.p.rapidapi.com/?query=' + eancode;

    const newTitle = "";

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '78cbfacc47msh94ddcb4e6d0fb63p1b387ejsn35e5be18df4c',
            'X-RapidAPI-Host': 'barcodes1.p.rapidapi.com'
        }
    };

    const response = await fetch(api_url, options);
    const data = await response.json();

    console.log(data.product.title);

    return data
    //
}

function success(result) {

    const api_key = "9jzxk18jpnh8kt7pi4ya2hzbl6q5wv";
    const url = "https://api.barcodelookup.com/v3/products?barcode=" + result + "&formatted=y&key=" + api_key;
    

    document.getElementById('result').innerHTML = `
    <h2>Success!</h2>
    <p>${result}</p>
    <p>${url}</p>
    `
    // Prints result as a link inside result element


    scanner.clear();
    // Clears scanning instance

    document.getElementById('reader').remove();
    // Removes reader element from DOM since no longer needed

}



function error(err) {
    console.error(err);
    // Prints any errors to the console
}