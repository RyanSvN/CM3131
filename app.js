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
    //const api_url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser?upc=' + result;

    const api_url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?app_key=63fe82819f9d29625952101be4390ef5&app_id=356ba3dd&nutrition-type=cooking&health%5B0%5D=alcohol-free&upc=' + result + '&category%5B0%5D=generic-foods';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '78cbfacc47msh94ddcb4e6d0fb63p1b387ejsn35e5be18df4c',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };

    //Allergy Array
    var allergyWords = ['Milk', 'Peanuts', 'Tree Nuts', 'Hazelnut', 'Almonds', 'Brazil Nuts', 'Cashew Nuts', 'Pecan','Pine Nuts', 'Pistachios', 'Mustard', 'Crustaceans', 'Celery', 'Moluscs', 'Sulphites', 'Sesame', 'Gluten', 'Mustard', 'Fish', 'Lupin', 'Soya', 'Eggs', 'Egg', 'Wheat'];

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


    //Post data to result div
    document.getElementById('result').innerHTML = `
    <h1>Success!</h1>
    <h2>${data.hints[0].food.label}</h2>
    <img src="${data.hints[0].food.image}" alt="Error: No Image Available"></img>
    <p>${ingredientsElement}</p>
    `


    // Clears scanning instance
    scanner.clear();
    
    // Removes reader element from DOM since no longer needed
    document.getElementById('reader').remove();
    

}


// Prints any errors to the console
function error(err) {
    console.error(err);
    
}