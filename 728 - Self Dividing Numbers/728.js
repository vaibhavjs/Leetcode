/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    function checkNum(num) {
        let temp = num.toString().split("").map(Number);
        for(let i=0; i<temp.length; i++) {
            if(num%temp[i] != 0) {
               return false;
            }
        }
        return true;
    }
    
    let ans = [];
    
    for(let i=left; i<=right; i++) {
        if(checkNum(i)) {
            ans.push(i);
        }
    }
    return ans;
};