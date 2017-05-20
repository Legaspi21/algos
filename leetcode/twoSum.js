// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1]

// Brute Force
// Complexity O(n^2)
var twoSum = function(nums, target) {
  var result = [];
  for(var i = 0; i < nums.length; i++){
    for(var j = i+1; j < nums.length; j++){
      if ((nums[j] + nums[i]) == target){
        result.push(i,j);
        return result;
      }
    }
  }
  return 0;
};

// Using Hash with 1 iteration
// Complexity O(n)
var twoSum = function(nums, target) {
  var numsHash = {};
  var result = [];
  for(var i = 0; i < nums.length; i++){
    var compliment = target - nums[i];
    numsHash[nums[i]] = i;
    if(numsHash.hasOwnProperty(compliment)){
      result.push(numsHash[compliment], i)
      return result;
    }
  }
  return 0;
};
