/* Problem Statement and test case 1
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

// Given Array from example 1 (Test Case 1) in Leetcode 
arr = [2,7,11,15];

// Condition to increase each counter
for(var i=0; i<arr.length; i++){
    for(var j=i+1; j<arr.length; j++){
    // Condition to print only the index of the array which matches the sum of equal to 9 
        if(arr[i]+arr[j]==9){
             document.write(i , ",",  j);
        }
    }
}