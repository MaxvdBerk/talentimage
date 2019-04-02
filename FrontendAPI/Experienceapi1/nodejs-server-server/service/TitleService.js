'use strict';


/**
 * posts class of image
 *
 * body Body body of the title
 * returns response
 **/
exports.postClass = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "chance" : 0,
  "count" : 6,
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

