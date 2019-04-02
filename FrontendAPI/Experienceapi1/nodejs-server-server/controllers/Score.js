'use strict';

var utils = require('../utils/writer.js');
var Score = require('../service/ScoreService');

module.exports.postScore = function postScore (req, res, next) {
  var chanceBody = req.swagger.params['chanceBody'].value;
  Score.postScore(chanceBody)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
