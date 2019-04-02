'use strict';

var utils = require('../utils/writer.js');
var Image = require('../service/ImageService');

module.exports.postImage = function postImage (req, res, next) {
  var file = req.swagger.params['file'].value;
  Image.postImage(file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
