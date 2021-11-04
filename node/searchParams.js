let searchParams = new URLSearchParams(paramsString);

//Iterate the search parameters.
for (let p of searchParams) {
  console.log(p);
}

searchParams.has('topic') === true;      // true
searchParams.get('topic') === "api";     // true
searchParams.getAll('topic');            // ["api"]
searchParams.get('foo') === null;        // true


fetch('https://example.com/login', {
    method: 'POST',
    body: new URLSearchParams({
        'userName': 'test@gmail.com',
        'password': 'Password!',
        'grant_type': 'password'
    })
});
