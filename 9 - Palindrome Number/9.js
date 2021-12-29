/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str = x.toString();
    
    return check(str,0,str.length-1);
    
    function check(str,s,e) {
        if(s > e) {
            return true;
        }
        
        if(str[s] != str[e]) {
            return false;
        }
        
        return check(str, s+1, e-1);
    }
};