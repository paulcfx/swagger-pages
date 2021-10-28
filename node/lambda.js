exports.handler = async (event,context) => {
    
    const { httpMethod, queryStringParameters } = event
    
    if(httpMethod && httpMethod === 'GET'){
        //console.log({type: 'GET', qs: queryStringParameters, event: httpMethod})
        const  {code, state} = queryStringParameters || {}
        return {
            statusCode: 301,
            headers: {
                Location: `https://paulcfx.github.io/swagger-pages/oauth2-redirect.html?code=${code}&state=${state}`
            }
        }
    }
     console.log({type: 'POST', qs: queryStringParameters, event: httpMethod})
    
    //res.redirect(`https://paulcfx.github.io/swagger-pages/oauth2-redirect.html?code=${code}&state=${state}`)
    return {
        statusCode: 200,
        body: {
            "access_token":"2YotnFZFEjr1zCsicMWpAA",
            "token_type":"bearer"
        }
    }
};