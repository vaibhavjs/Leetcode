/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    let ans = [];
    for(i=0; i<address.length; i++) {
        if(address[i] == ".") {
            ans.push("[.]");
        } else {
            ans.push(address[i]);
        }
    }
    return ans.join("");
};