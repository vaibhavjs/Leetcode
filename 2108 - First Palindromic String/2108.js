/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
    for(let i=0; i<words.length; i++) {
        let str = words[i];
        let rev = str.split("").reverse().join("");
        if(str == rev) {
            return str;
        }
    }
    return "";
};