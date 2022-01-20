/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let obj = {};
    
    for(let i=0; i<nums.length; i++) {
        if(obj[nums[i]] == undefined) {
            obj[nums[i]] = 1;
        }
        else {
            let prev = obj[nums[i]];
            obj[nums[i]] = prev+1;
        }
    }
   
    for(key in obj) {
        if(obj[key] != 1) {
            return true;
        }
    }
    return false;
};