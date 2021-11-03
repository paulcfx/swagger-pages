var parse = (queryString) => queryString.split("&").reduce( (obj, pair) => {
    var keyVal = pair.split("=");
    var key = keyVal[0];
    var val = keyVal[1];

    obj[ decodeURIComponent(key) ] = decodeURIComponent(val);
    return obj;
}, {});