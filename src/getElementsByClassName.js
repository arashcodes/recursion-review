/* eslint-disable func-style */
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var parent = document.body;
  var result = [];
  // use a helper function to access each element to check if the className matches the input
  function checkClassName (node) {
    if (node.classList && node.classList.contains(className)) {
      result.push(node);
    }
    for (var i = 0; i < node.childNodes.length; i++) {
      checkClassName(node.childNodes[i])
    }
  }

  checkClassName(parent);
  // console.log(result);
  return result;
  // if there is a match, we return the element / node by pushing it to a result array

  // for child nodes, we can loop through the children and check the children's className matches the input

  // return result array
};
