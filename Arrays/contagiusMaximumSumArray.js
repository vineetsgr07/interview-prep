/**
 * Leetcode 53: https://leetcode.com/problems/maximum-subarray/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   
    var localMax = 0;
    var globalMax = -Number.MAX_VALUE;
    
    for(let i=0; i<nums.length; i++){
        localMax = Math.max(nums[i], nums[i]+localMax)
        if(localMax > globalMax){
            globalMax = localMax
        }
    }
    
    return globalMax
};