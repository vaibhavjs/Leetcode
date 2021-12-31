/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
    let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let small = "abcdefghijklmnopqrstuvwxyz";
    
    let output = "";
    for(i=0; i<s.length; i++) {
        if(caps.includes(s[i])){
            output = output + small[caps.indexOf(s[i])];
        }
        else {
            output = output + s[i];
        }
    }
    return output;
};