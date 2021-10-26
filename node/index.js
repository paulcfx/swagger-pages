const express = require('express');
const app = express();
cors = require('cors')

app.get('/as/authorization.oauth2',(req,res) => {

    console.log('--- calling re direct')
    const {redirect_uri, client_id, state} = req.query
    console.log('query',req.query)
    console.log('passing:', `${redirect_uri}?code=${client_id}&state=${state}`)
    res.redirect(`${redirect_uri}?code=${client_id}&state=${state}`);
    
})
app.options('/token/', cors());

app.post('/token', cors(), (req,res) => {
    console.log('done?', req);
    res.send({
        "access_token":"2YotnFZFEjr1zCsicMWpAA",
        "token_type":"bearer"});
})

app.options('/secure-endpoint', cors());

app.post('/secure-endpoint',cors(),(req,res) => {
    const {authorization} = req.headers;
    if(!authorization){
        res.status(403).send('Unauthorized request')
    }
    res.send(`Authorized: token -- ${authorization}`)
})

app.get('*',(req,res) => {
    res.end('hello')
})

app.listen(3000)