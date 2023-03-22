https://api.barcodelookup.com/v3/products?key=9jzxk18jpnh8kt7pi4ya2hzbl6q5wv

To do:
    Edit Scanner Interface (Library 'Pro Mode')
    Fix Weird Mobile UI Glitches
    Fix/Disable Scan Image File
    
               

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