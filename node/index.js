const express = require('express');

const app = express();


app.get('/authorize',(req,res) => {
    console.log('request',req),
    res.sendStatus(200);
})

app.get('*',(req,res) => {
    res.end('hello')
})

app.listen(3000)