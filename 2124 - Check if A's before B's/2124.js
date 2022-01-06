/**
 * @param {string} s
 * @return {boolean}
 */
 var checkString = function(s) {
    for(let i=0; i<s.length; i++) {
        if(s[i] == "b") {
            for(let j=i; j<s.length; j++) {
                if(s[j] == "a") {
                    return false;
                }
            }
        }
    }
    return true;
};