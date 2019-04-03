const util = require('util');


visualRecognition.classify(params, function(err, response) {
    if (err) {
        console.log(err);
    } else {
      
      console.log(JSON.stringify(response, null, 2));

    }
  });

const callbackFunction = util.callbackify(visualRecognition);

console.log(callbackFunction);

callbackFunction((err, ret) => {
 if (err) throw err;
 console.log(ret);
 JSON.stringify(ret, null, 2)
});