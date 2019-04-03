// // Authentication

// var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

// var visualRecognition = new VisualRecognitionV3({
//     version: '2018-03-19',
//     iam_apikey: 'MaMjfzAIVkVve8QhfOLX-mLpx5hmZ4e-Sa3wCXzMyLZj'
// });

// Classify an image

var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    iam_apikey: 'MaMjfzAIVkVve8QhfOLX-mLpx5hmZ4e-Sa3wCXzMyLZj'
});

var images_file= fs.createReadStream('./test.jpg');
var classifier_ids = ["AI_VR_Project_1051469891"];
var threshold = 0.6;

var params = {
    images_file: images_file,
    classifier_ids: classifier_ids,
    threshold: threshold
};

visualRecognition.classify(params, function(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(response, null, 2))
    }
});