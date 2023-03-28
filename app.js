const titleElement = document.getElementById("title");
const imageElement = document.getElementById("")

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


async function success(result) {

    const api_url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser?upc=' + result;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '78cbfacc47msh94ddcb4e6d0fb63p1b387ejsn35e5be18df4c',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };

    const response = await fetch(api_url, options);
    const data = await response.json();



    document.getElementById('result').innerHTML = `
    <h2>Success!</h2>
    <p>${result}</p>
    <p>${api_url}</p>
    <h1>${titleElement.textContent = data.hints[0].food.label}</h1>
    <h1>${imgElement.src = data.hints[0].food.image}</h1>
    <h1>${descElement.textContent = data.hints[0].food.foodContentsLabel}</h1>
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