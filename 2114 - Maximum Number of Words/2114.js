/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    let max = 0;
    for(let i=0; i<sentences.length; i++) {
        let ans = 1;
        for(let j=0; j<sentences[i].length; j++) {
            if(sentences[i][j] == " "){
                ans++;
            }
        }
        if(ans > max) {
            max = ans;
        }
    }
    return max;
};