const AWS = require('aws-sdk');
const s3 = new AWS.S3();

(async () => {
    try{
        (function() {
            setInterval((function fn() {
             console.log('foo'); // Your code goes here
             return fn;
            })(), 500);
           })();

    }catch (e) {
        console.log('error:',e);
    }
})()
