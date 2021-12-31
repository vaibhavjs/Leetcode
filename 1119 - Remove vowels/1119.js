/**
 * @param {string} s
 * @return {string}
 */
 var removeVowels = function(s) {
    let vowels = "aeiou";
    let arr = [];
    for(i=0; i<s.length; i++) {
        if(!vowels.includes(s[i])){
            arr.push(s[i]);
        }
    }
    return arr.join("");
};