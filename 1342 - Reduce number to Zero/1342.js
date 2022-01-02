/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    let steps = 0;
    
    function numOfSteps(num,steps) {
        if(num == 0) {
            return steps;
        }
        
        if(num % 2 == 0) {
            return numOfSteps(num/2, steps+1);
        }
        
        if(num % 2 == 1) {
            return numOfSteps(num-1, steps+1);
        }
    }
    
    return numOfSteps(num,steps);
};