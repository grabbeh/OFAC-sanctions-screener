var request = require('request');
var pdf = require('pdf2json');

request('http://www.treasury.gov/ofac/downloads/t11sdn.pdf', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(pdf.parseBuffer(body));
  }
})
