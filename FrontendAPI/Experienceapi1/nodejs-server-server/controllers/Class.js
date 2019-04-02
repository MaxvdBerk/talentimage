'use strict';

var utils = require('../utils/writer.js');
var Class = require('../service/ClassService');

module.exports.postClass = function postClass (req, res, next) {
  var body = req.swagger.params['body'].value;
  Class.postClass(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
