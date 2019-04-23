// Dit roep je aan, en dan stuurt het een json naar mongo API
// MongoUrl is de URL excl poort (poort is hardcoded op 4000)
// Watsonres is het resultaat van watson voor een gegeven plaatje.


ClientMongo = function ClientMongo(MongoUrl = 'http://localhost', Watsonres = { class: 'clock', score: 0.678 }, MongoPort= '4000', res) { 

  var http = require("http");
  var options = {
      "method": "POST",
      "hostname": MongoUrl,
      "port": MongoPort,
      "path": [
        "/post"
      ],
      "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      }
    };
    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.write(JSON.stringify(Watsonres));
  req.end();
}
module.exports = ClientMongo