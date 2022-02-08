/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let arr = [];
  for (let str of s.split(" ")) {
    let i = str[str.length - 1] - 1;
    arr[i] = str.slice(0, str.length - 1);
  }
  return arr.join(" ");
};
