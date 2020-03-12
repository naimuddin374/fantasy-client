(function ($) {
    var paymentID = '';
    bKash.init({
        paymentMode: 'checkout', //fixed value ‘checkout’ 
        //paymentRequest format: {amount: AMOUNT, intent: INTENT} 
        //intent options 
        //1) ‘sale’ – immediate transaction (2 API calls) 
        //2) ‘authorization’ – deferred transaction (3 API calls) 
        paymentRequest: {
            amount: '100.50', //max two decimal points allowed 
            intent: 'sale'
        },
        createRequest: function (request) { //request object is basically the paymentRequest object, automatically pushed by the script in createRequest method 
            $.ajax({
                url: 'https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js',
                type: 'POST',
                contentType: 'application/json',
                success: function (data) {
                    data = JSON.parse(data);
                    if (data && data.paymentID != null) {
                        paymentID = data.paymentID;
                        bKash.create().onSuccess(data); //pass the whole response data in bKash.create().onSucess() method as a parameter 
                    } else {
                        bKash.create().onError();
                    }
                },
                error: function () {
                    bKash.create().onError();
                }
            });
        },
        executeRequestOnAuthorization: function () {
            $.ajax({
                url: 'https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    "paymentID": paymentID
                }),
                success: function (data) {
                    data = JSON.parse(data);
                    if (data && data.paymentID != null) {
                        //window.location.href = "success.html";//Merchant’s success page 
                        window.location.href = "http://localhost:3020/faq";//Merchant’s success page 
                    } else {
                        bKash.execute().onError();
                    }
                },
                error: function () {
                    bKash.execute().onError();
                }
            });
        }
    });
})(jQuery);
