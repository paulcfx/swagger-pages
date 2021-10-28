const express = require('express');
const app = express();
cors = require('cors')

app.get('/as/authorization.oauth2',(req,res) => {

    console.log('--- calling re direct')
    const {redirect_uri, client_id, state} = req.query
    console.log('query',req.query)
    res.redirect(`https://t61wfaguc5.execute-api.us-east-2.amazonaws.com/default/token?code=${client_id}&state=${state}`);
});

// app.get('/token', (req,res) => {
//     console.log('calling GET /token', req.query)
//     const {code, state} = req.query
//     res.redirect(`https://paulcfx.github.io/swagger-pages/oauth2-redirect.html?code=${code}&state=${state}`)
// })


// response_type: 'code',
// client_id: '9y9QslYzcyc5Kj4bp3bO1U0j',
// redirect_uri: 'https://paulcfx.github.io/swagger-pages/oauth2-redirect.html',
// state: 'V2VkIE9jdCAyNyAyMDIxIDIwOjE0OjI2IEdNVC0wNDAwIChFYXN0ZXJuIERheWxpZ2h0IFRpbWUp'


// app.options('/token/', cors());

// app.post('/token', cors(), (req,res) => {
//     console.log('done?', req);
//     res.send({
//         "access_token":"2YotnFZFEjr1zCsicMWpAA",
//         "token_type":"bearer"});
// })

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