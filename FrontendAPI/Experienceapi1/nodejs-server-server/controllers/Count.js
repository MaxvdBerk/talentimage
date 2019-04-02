'use strict';

var utils = require('../utils/writer.js');
var Count = require('../service/CountService');

module.exports.postCount = function postCount (req, res, next) {
  var countBody = req.swagger.params['countBody'].value;
  Count.postCount(countBody)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
