/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    let subarrs = [];
    for(i=0; i<arr.length; i++) {
        for(j=i+1; j<=arr.length; j++) {
            subarrs.push(arr.slice(i,j));
        }
    }
    
    let oddlen = [];
    for(i=0; i<subarrs.length; i++) {
        if(subarrs[i].length%2 == 1) {
            oddlen.push(subarrs[i]);
        }
    }
    
    let sum = 0;
    for(i=0; i<oddlen.length; i++) {
        for(j=0; j<oddlen[i].length; j++) {
            sum = sum + oddlen[i][j];
        }
    }
    return sum;
};