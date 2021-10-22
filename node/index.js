const express = require('express');
const app = express();
cors = require('cors')

app.get('/as/authorization.oauth2',(req,res) => {
    const {redirect_uri, client_id, state} = req.query
    console.log('query',req.query)
    console.log('calling:', redirect_uri)
    res.redirect(`${redirect_uri}?code=${client_id}&state=${state}`);
    
})
app.options('/token/', cors());

app.post('/token', cors(), (req,res) => {
    console.log('done?', req.query)
    res.send({
        "access_token":"2YotnFZFEjr1zCsicMWpAA",
        "token_type":"bearer"});
})

app.options('/authorize-endpoint', cors());

app.post('/authorize-endpoint',cors(),(req,res) => {
    console.log(req);
    res.send('done')
})

app.get('*',(req,res) => {
    res.end('hello')
})

app.listen(3000)