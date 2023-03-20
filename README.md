Testing
Local Test

                    <ion-title id="title" class="ion-text-start">ALLERGY</ion-title>
                    <ion-title>
                    <img id="logo" src="Assets\asset1.png" alt="Logo"></img>
                    </ion-title>
                    <ion-title id="title" class="ion-text-end">ATTACK</ion-title>

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