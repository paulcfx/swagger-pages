const url = require('url');
const https = require('https');

const parse = (queryString) => queryString.split("&").reduce( (obj, pair) => {
    var keyVal = pair.split("=");
    var key = keyVal[0];
    var val = keyVal[1];

    obj[ decodeURIComponent(key) ] = decodeURIComponent(val);
    return obj;
}, {});



exports.handler = async (event,context) => {
    
    const { httpMethod, queryStringParameters } = event
    
    // if(httpMethod && httpMethod === 'GET'){
        
    //     console.log({type: 'GET', qs: queryStringParameters, event: httpMethod})
    //     const  {code, state} = queryStringParameters || {}
    //     return {
    //         statusCode: 301,
    //         headers: {
    //             Location: `https://paulcfx.github.io/swagger-pages/oauth2-redirect.html?code=${code}&state=${state}`
    //         }
    //     }
    // }
    //  console.log({type: 'POST', qs: queryStringParameters, event: httpMethod})
    
    //res.redirect(`https://paulcfx.github.io/swagger-pages/oauth2-redirect.html?code=${code}&state=${state}`)
    
    console.log('event:',JSON.stringify(event,null,2))
    
    const qs = parse(event.body || '')
    
    console.log('qs:',qs)
    console.log('code:',qs['code'])
    
    return {
        statusCode: 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "x-requested-with"
        },
        body: JSON.stringify({
            "access_token":"2YotnFZFEjr1zCsicMWpAA",
             "token_type":"bearer"
        })
    }
};