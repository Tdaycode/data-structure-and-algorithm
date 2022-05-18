// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

var maxSubArray = function(nums) {
    let currentSum= nums[0];  let maxSum = nums[0];
    if(nums.length == 1) return nums
    
    for(let i = 1; i < nums.length; i++) {
        console.log(currentSum)
        
        if(currentSum < 0) {
            currentSum = nums[i]
        }else {
            currentSum += nums[i]
            console.log(currentSum)
        }
         if(currentSum > maxSum) {
        maxSum = currentSum
    }
    }
    
   
    
    return maxSum
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))