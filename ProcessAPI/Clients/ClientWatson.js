WatsonClient = function WatsonClient(file = './klok.jpg', thresholdvalue = 0.8, me = 'me'){

const fs = require('fs');
const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

if (file === String)
const classifyParams = {
  images_file: fs.createReadStream(file),
  owners: [me],
  threshold: thresholdvalue,
};
else (file === Buffer)
const classifyParams = {
  images_file: file,
  owners: [me],
  threshold: thresholdvalue,
};

const visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  iam_apikey: 'MaMjfzAIVkVve8QhfOLX-mLpx5hmZ4e-Sa3wCXzMyLZj',
});


visualRecognition.classify(classifyParams)
  .then(classifiedImages => {
    console.log(JSON.stringify(classifiedImages, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });
}

module.exports = WatsonClient