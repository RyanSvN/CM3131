    // <p>${api_url}</p>

            document.getElementById('result').innerHTML = `
            <h2>Success!</h2>
            <p>${result}</p>
            `;

To do:
    Edit Scanner Interface (Library 'Pro Mode')
    Fix Weird Mobile UI Glitches
    Fix/Disable Scan Image File
<script>
      const api_key = "9jzxk18jpnh8kt7pi4ya2hzbl6q5wv";
        console.log("https://api.barcodelookup.com/v3/products?barcode=" + result + "&formatted=y&key=" + api_key);
            function getAPIdata() {
            const api_key = "9jzxk18jpnh8kt7pi4ya2hzbl6q5wv";
            const url = "https://api.barcodelookup.com/v3/products?barcode=8593893774759&formatted=y&key=" + api_key;
            fetch(url)
                    .then(response => response.json())
                    .then((data) => {
                    document.getElementById("BarcodeNumber").innerHTML = (data.products[0].barcode_number);
                    document.getElementById("Title").innerHTML = (data.products[0].title);
                    document.getElementById("EntireResponse").innerHTML = JSON.stringify(data, null,"<br/>");
                    })
                    .catch(err => { 
                        throw err 
                    });
        } 
    </script>
               

<script src="https://unpkg.com/html5-qrcode" type="text/javascript"></script>
    <script type="text/javascript">
        function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
            console.log(`Scan result: ${decodedText}`, decodedResult);
        }

        

        function onScanError(errorMessage) {
            // handle on error condition, with error message
        }

        var html5QrcodeScanner = new Html5QrcodeScanner(
            "reader", { fps: 10, qrbox: 250 });
        html5QrcodeScanner.render(onScanSuccess, onScanError);
            </script>