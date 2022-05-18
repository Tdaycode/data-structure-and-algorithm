// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

var moveZeroes = function(nums) {
    if(nums.length == 1) return nums
    let arr1 = []
    let arr2 = []
    
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            arr1.push(nums[i])
        } else{
            arr2.push(nums[i])
        }
      
    } 
    
    return [...arr1, ...arr2]
   
   
    
};

console.log(moveZeroes([0,1,0,3,12]))