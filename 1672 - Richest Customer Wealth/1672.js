/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let max = 0;
    for(i=0; i<accounts.length; i++) {
        let sum = 0;
        for(j=0; j<accounts[0].length; j++) {
            sum = sum + accounts[i][j];
        }
        if(sum > max) {
            max = sum;
        }
    }
    return max;
};