'use strict';


/**
 * receives the image to and send it to Watson
 * 
 *
 * image String The class of where to find the answer bv banana
 * file File file to upload (optional)
 * returns Response
 **/
exports.image = function(file2) {
  return new Promise(function(resolve, reject) {

    var outputs = handleWatson(file2);

    console.log(outputs)
    var examples = {};
    examples['application/json'] = {
  "score" : 0.8008282,
  "categorie" : "banana"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}



function handleWatson(incomingfile, callback) {
  var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

  var visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    iam_apikey: 'MaMjfzAIVkVve8QhfOLX-mLpx5hmZ4e-Sa3wCXzMyLZj'
  });

  var images_file= incomingfile[0].buffer;
  var classifier_ids = ["AI_VR_Project_1051469891"];
  var threshold = 0.0001;

  var params = {
    images_file: images_file,
    classifier_ids: classifier_ids,
    threshold: threshold
  };

  visualRecognition.classify(params, function(err, response) {
    if (err) {
        console.log(err);
    } else {
      
      console.log(JSON.stringify(response, null, 2));

    }
  });
};

