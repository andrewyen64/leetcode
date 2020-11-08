// ## Remove Duplicates from Sorted Array
// Given a sorted array nums, 
// remove the duplicates in-place such that each element appears only once and returns the new length.
// ** Do not allocate extra space for another array, 
// ** you must do this by modifying the input array in-place with O(1) extra memory

var nums = [1,1,2];
var removeDuplicates = function(nums) {
    nums.splice(0, nums.length, ...(new Set(nums)));
};
console.log(removeDuplicates(nums))

// var nums = [1,1,2];
// var removeDuplicates = function(nums) {
//     var removedArray = [];
//     nums.forEach(num => {
//         if (!nums.includes(num)) {
//             removedArray.push(num);
//         }
//     });
//     console.log(removedArray);
// }
