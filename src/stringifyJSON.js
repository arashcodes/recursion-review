// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // If obj is an array
    // do something
  // If obj is an object
    // do something else

  // all the other cases
    // add a string to obj


  if (obj === null) {
    return "" + obj;
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  } else if (Array.isArray(obj)) {
    let resArr = [];
    if (obj.length === 0) {
      return "[]";
    }
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'number') {
        resArr.push(obj[i]);
      } else {
        resArr.push(stringifyJSON(obj[i]))
      }
    }
    return `[${resArr}]`;
  } else if (!Array.isArray(obj) && (typeof obj === 'object')) {
    var keys = Object.keys(obj);
    var resObj = "";
    var lastKey = keys[keys.length - 1];
    if (Object.keys(obj).length === 0) {
      return "{}";
    } else {
      for (let key in obj) {
        if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
          return "{}";
        } else if (key === lastKey) {
          let pair = stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
          resObj += pair;
        } else {
          let pair = stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
          resObj += pair;
        }
      }
      return "{" + resObj + "}";
    }
  } else {
    return "" + obj;
  }
};
