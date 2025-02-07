/*
Given a binary array, find the maximum number of consecutive 1s in this array.
*/

class Solution {
  findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currentCount = 0;
    for (let i = 0; i < nums.length; i++) {
      //If nums[i] === 1, we increase currentCount.
      if (nums[i] === 1) {
        currentCount++;
        //Then, we update maxCount to store the highest consecutive count found so far.
        maxCount = Math.max(maxCount, currentCount);
      } else {
        //If we encounter a 0, currentCount resets, but maxCount retains the highest streak seen.
        currentCount = 0;
      }
    }
    return maxCount;
  }
}

const solution = new Solution();
console.log(solution.findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

/*
Given an array nums of integers,
return how many of them contain an even number of digits
*/
//solution 1
const findNumbers1 = function (nums) {
  let evenNumberOfDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      let numDigits = nums[i].toString().split("").length;
      if (numDigits % 2 === 0) {
        evenNumberOfDigits++;
      }
    }
  }
  return evenNumberOfDigits;
};
console.log(findNumbers1([12, 345, 2, 6, 7896]));
console.log(findNumbers1([555, 901, 482, 1771]));
//solution2

const findNumbers = function (nums) {
  let evenNumberOfDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let digitCount = 0;
    while (num > 0) {
      num = Math.floor(num / 10);
      digitCount++;
    }
    if (digitCount % 2 === 0) {
      evenNumberOfDigits++;
    }
  }
  return evenNumberOfDigits;
};
console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
