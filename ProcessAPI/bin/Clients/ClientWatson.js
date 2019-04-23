ClientWatson = function ClientWatson(file = '../../lib/klok.jpg', thresholdvalue = 0.7, ids = ["AIVRV2_1758773086"], me = 'me') {

  const fs = require('fs');
  const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

  if (file === String)
    var classifyParams = {
      images_file: fs.createReadStream(file),
      owners: [me],
      classifier_ids: ids,
      threshold: thresholdvalue,
    };
  else(file === Buffer)
  var classifyParams = {
    images_file: file,
    owners: [me],
    classifier_ids: ids,
    threshold: thresholdvalue,
  };

  var visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    iam_apikey: 'MaMjfzAIVkVve8QhfOLX-mLpx5hmZ4e-Sa3wCXzMyLZj',
  });

  visualRecognition.classify(classifyParams)
    .then(classifiedImages => {
      Result = JSON.stringify(classifiedImages.images[0].classifiers[0].classes[0], null, 2);
    })
    .catch(err => {
      console.log('error:', err);
    });
// need to resolve thenable object created in the classify. thereby making asynch into synch process..

}
module.exports = ClientWatson