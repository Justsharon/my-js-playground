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

//squares of a sorted array
/*
Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in a non decreasing order
input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
*/
//solution a
const sortedSquares = function (nums) {
  const result = nums.map((num) => num * num);
  return result.toSorted((a, b) => a - b);
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));

//solution b
const sortedSquares1 = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    const squared = num * num;
    result.push(squared);
  }
  return result.sort((a, b) => a - b);
};
console.log(sortedSquares1([-4, -1, 0, 3, 10]));

//Duplicate zeros
/*
Given a fixed-length integer array, arr,
duplicate each occurence of zero, shifting the remaining elements to the right
Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
*/
const duplicateZeros = function (arr) {
  let arrayLength = arr.length;
  for (let i = 0; i < arrayLength; i++) {
    let element = arr[i];
    let target = 0;

    if (element === target) {
      arr.splice(i, 0, target); // Insert duplicate zero at the same index
      i++; // Skip over the newly inserted zero
    }
  }
  arr.length = arrayLength;
  // return arr.slice(arrayLength, arr.length); this returns the removed part so as to make array length remain the same even after duplication of zeros
};
let arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
console.log(arr);

/*
//Merge Sorted Array
you are given two integers arrays nums1 and nums2,
sorted in a non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
To accommodate this, nums1 has a length of m + n,
where the first m elements denote the elements that should be merged,
and the last n elements are set to 0 and should be ignored. nums2 has a length of n
*/
const merge = function (nums1, m, nums2, n) {
  let i = m - 1; //(last valid element in nums1)
  let j = n - 1; // (last element in nums2)
  let k = m + n - 1; //(last position in nums1)

  while (j >= 0) {
    //Compare nums1[i] and nums2[j], place the larger one at nums1[k].
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      //Move backwards to avoid overwriting elements in nums1
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1);
/*
Remove Element:
Given an integer array `nums` and an integer `val`,remove all occurrences of `val` in `nums` in place
The order of the elements may be changed.Then return the number of elements in nums which are not equal to val
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/
// loop through all el to iterate through nums and check if an element is not equal to val.
// If an element is not val, move it to the k-th position and increment k.
// k stores the count of elements that are not val. This is returned after the loop finishes.
const removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // Move the non-val element to the front
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
let nums = [3, 2, 2, 3];
let val = 3;
console.log(removeElement(nums, val));

//solution2(this solution is not ideal since it creates a new array)
const removeElement1 = function (nums, val) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      newArray.push(nums[i]); //add non-value els
    }
  }
  // Copy elements from newArray back to nums
  for (let i = 0; i < newArray.length; i++) {
    nums[i] = newArray[i];
  }
  return newArray.length;
};
nums = [3, 2, 2, 3];
val = 3;
console.log(removeElement1(nums, val));

//Deletion
/*
cases:
1. Deleting the last element of the Array.pop()very fast (O(1)).
2. Deleting the first element of the Array.shift() very slow  O(N) in time complexity
3. Deletion at any given index.splice(index, count)
*/

/*
Remove Duplicates from Sorted Array exercise
Given an integer array `nums` sorted in non-decreasing order,
remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same.
Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted,
you need to do the following things:
Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let k = 1; //pointer for the next unique item
  for (let i = 1; i < nums.length; i++) {
    //check whether the current element nums[i] is different from the previous element(nums[i-1])
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;

  //solution2
  //let k = 0
  //let seen = new Set();
  //nums.forEach((element) => {
  //if (!seen.has(element)) { seen.add(element); k++}
  //})
  //return k
};
console.log(
  "removed count is",
  removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]),
);

//if you were to return the array containing nus with no duplicates this would be the solution
const removeDuplicates1 = function (nums) {
  let result = [];
  nums.forEach((element, index) => {
    if (nums.indexOf(element) === index) {
      result.push(element);
    }
  });
  return result;
};
console.log("New array is", removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

const removeDuplicatesb = (nums) => {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (!newArray.includes(nums[i])) {
      newArray.push(nums[i]);
    }
  }
  /*
  option 2
  for(const item of nums) {
  if new array does not include item
    if (!newArray.includes(item) === -1) {
      newArray.push(item)
    }
  }
  */
  return newArray;
};
console.log("New array is", removeDuplicatesb([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
