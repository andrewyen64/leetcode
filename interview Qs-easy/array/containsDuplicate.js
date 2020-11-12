// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, 
// and it should return false if every element is distinct.


// 1st Solution
var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] == nums[i]) return true;  
        }
    }
    return false;
};

// 2nd Solution using sort method (Faster Runtime)
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] == nums[i]) return true;  
        }
    }
    return false;
};

// Solution using 'Set' 
// ** set.size = .length **
var containsDuplicate = function(nums) {
    let set = new Set(nums);
    return (set.size < nums.length);
};