
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


// Starts Scanner
scanner.render(success, error);


async function success(result) {

    //API URL & OPTIONS
    const api_url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser?upc=' + result;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '78cbfacc47msh94ddcb4e6d0fb63p1b387ejsn35e5be18df4c',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };

    //Allergy Array
    var allergyWords = ['Milk', 'Peanuts', 'Mustard'];

    //Fetch API Data
    const response = await fetch(api_url, options);
    const data = await response.json();

    //Give the ingredients data variable 'ingredientsElement'
    var ingredientsElement = data.hints[0].food.foodContentsLabel;
    
    //Compare arrays and flag matching allergy words
    for (var i = 0; i < allergyWords.length; i++) {
        var regex = new RegExp(allergyWords[i], 'gi');
        ingredientsElement = ingredientsElement.replace(regex, '<span id="highlight">' + allergyWords[i] + '</span>');
    }



    document.getElementById('result').innerHTML = `
    <h1>Success!</h1>
    <h2>${data.hints[0].food.label}</h2>
    <img src="${data.hints[0].food.image}" alt="Error: No Image Available"></img>
    <p>${ingredientsElement}</p>
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