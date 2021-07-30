var FCM = require('fcm-node');
var serverKey = 'AAAADh7H9Uw:APA91bE1ncC3aZi7qq9bnr3Q47UWCoyzeEmXa9sUUW0tVjdxF8SUt3QgdCzOfcUnk4jPVUEUdaQsRlxaRK6EsxBWRj4Bq-W9eRB0INAGtJ0YGbjl4KAOH-sxC5hASxCGjhqLy1_2lmma'; //put your server key here
var fcm = new FCM(serverKey);

var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    // to: 'dbIpX0qgTrK3dcv9-Am2Yf:APA91bGfg8TXUhSoWopuxBtZIKTlJmkWJgp_2lcaqSt2SkS5pvpeQISXXApsSbAy_cINtk3VxZNamzSnXq0odf7lo0XPa59MQKGXDvVhTNcKGyU9Ibeew516Dcr0qA7XdWFP62mxAS8h', 
    to: " c0JT8sZoQ3K6Y-fAlyL9Jz:APA91bFkgWf3wqFeisyjPnjv4IU95bBY_BYaUicz5ZJEKzf2mwGqvWExd0n_n9B3QWXh_SCN--IX9vKWjXA5uUaxa1DjAQONp_b5rwkruEwyzO2C1QadFng-JsiL2ePThLlGC7GEFiik",
    collapse_key: 'your_collapse_key',
    
    notification: {
        title: 'Title of your push notification', 
        body: 'Good Morning'  
    },
    priority: 'high',
    data:{
       
    },
   
};

fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!", err);
    } else {
        console.log("Successfully sent with response: ", response);
    }
});