const express = require('express');

const app = express();


app.get('/as/authorization.oauth2',(req,res) => {
    const {redirect_uri, client_id, state} = req.query

    console.log('query',req.query)
    console.log('calling:', redirect_uri)
    res.redirect(`${redirect_uri}?code=${client_id}&state=${state}`);
    
})

app.get('*',(req,res) => {
    res.end('hello')
})

app.listen(3000)