// var http = require("http");

// var options = {
//   "method": "POST",
//   "hostname": [
//     "10",
//     "1",
//     "126",
//     "43"
//   ],
//   "port": "3000",
//   "path": [
//     "profile"
//   ],
//   "headers": {
//     "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
//     "cache-control": "no-cache",
//     "Postman-Token": "d21f37ab-411b-4cf7-8eb3-e8c9b2618b88"
//   }
// };

// var req = http.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });
// });

// req.write("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"avatar\"; filename=\"C:\\Users\\MBERK90\\Pictures\\Camera Roll\\WIN_20190401_11_13_44_Pro.jpg\"\r\nContent-Type: image/jpeg\r\n\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--");
// req.end();
var ClientWatson  = require("./ClientWatson.js")
var WatsonRes = ClientWatson();
console.log(WatsonRes)