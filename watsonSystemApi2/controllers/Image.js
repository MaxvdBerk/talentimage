'use strict';

var utils = require('../utils/writer.js');
var Image = require('../service/ImageService');

module.exports.image = function image (req, res, next) {
  var file1 = req.files['image'];
  
  Image.image(file1)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};