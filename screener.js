var request = require('request');

request('http://www.treasury.gov/ofac/downloads/t11sdn.pdf', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
