/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    var sum = 0;
    var d1 = [];
    var d2 = [];
    
    for(let i=0; i<mat.length; i++) {
        for(let j=0; j<mat.length; j++) {
            if(i==j) {
                d1.push(mat[i][j]);
            }
        }
    }
    for(let i=0; i<mat.length; i++) {
        for(let j=mat.length-1; j>=0; j--) {
            if(i+j == mat.length-1) {
                if(i==j) {
                    continue;
                }
                d2.push(mat[i][j]);
            }
        }
    }
    
    var sum1 = 0;
    for(let i=0; i<d1.length; i++) {
        sum1 = sum1 + d1[i];
    }
    
    var sum2 = 0;
    for(let i=0; i<d2.length; i++) {
        sum2 = sum2 + d2[i];
    }
    
    sum = sum1+sum2;
    return sum;
    
};