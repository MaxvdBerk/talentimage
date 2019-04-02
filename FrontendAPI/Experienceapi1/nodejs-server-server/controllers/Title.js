'use strict';

var utils = require('../utils/writer.js');
var Title = require('../service/TitleService');

module.exports.postClass = function postClass (req, res, next) {
  var body = req.swagger.params['body'].value;
  Title.postClass(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
