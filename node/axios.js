var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://YOUR_DOMAIN/oauth/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: {
    grant_type: 'authorization_code',
    client_id: 'YOUR_CLIENT_ID',
    code_verifier: 'YOUR_GENERATED_CODE_VERIFIER',
    code: 'YOUR_AUTHORIZATION_CODE',
    redirect_uri: 'https://YOUR_APP/callback'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
