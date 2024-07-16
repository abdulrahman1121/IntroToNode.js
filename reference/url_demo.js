const url = require('url');

const myUrl = new URL('https://mywebsite.com/hello.html?id=100&status=active');

// Seperated URL
console.log(myUrl.href);

// Host {root domain}
console.log(myUrl.host);

// Hostname(does not include port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
