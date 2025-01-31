const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length);

/**
 * iteration methods such as forEach don't visit empty slots at all.
 * Other methods, such as concat, copyWithin, etc.,
 * preserve empty slots when doing the copying, so in the end the array is still sparse.
 */

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";

colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
colors.reverse();

/**
 * Newer methods (e.g. keys) do not treat empty slots specially and treat them as if they contain undefined.
 */

const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
}
const newColors = colors.toReversed();

/**
 * CONCAT
 * Used to merge two or more arrays
 * Does not change the existing arrays, but instead returns a new array
 */

const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const finalArray = arr1.concat(arr2);

console.log(finalArray);

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));

/**
 * The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
 */

const a = ["a", "b", "c"];
for (const [index, element] of a.entries()) {
  console.log(index, element);
}

/**
 * The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function.
 * It returns a Boolean value
 */

const isBigEnough = (element, index, array) => {
  return element >= 10;
};
[12, 5, 8, 130, 44].every(isBigEnough);

/**
 * Check if one array is a subset of another array
 * tests if all the elements of an array are present in another array.
 */

const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]));

/**
 * Using the third argument of callbackFn
 * The array argument is useful if you want to access another element in the array.
 * The following example first uses filter() to extract the positive values and
 * then uses every() to check whether the array is strictly increasing.
 */

const numbers = [-2, 4, -8, 16, -32];
const isIncreasing = numbers.filter((num) => num > 0).every((num, idx, arr) => {
    if (idx === 0) return true;
    return num > arr[idx - 1];
});

console.log(isIncreasing);

/**
 * Filter
 * creates a shallow copy of a portion of a given array, 
 * filtered down to just the elements from the given array that pass the test implemented by the provided function.
 */

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);

//Find all prime numbers in an array
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i === 0) {
            return false;
        }
        return num > 1;
    }
};
console.log(array.filter(isPrime));

/**
 * Filtering invalid entries from JSON
 * The following example uses filter() to create a filtered JSON of all elements with non-zero, numeric id.
 */

const arrr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
];

let invalidEntries = 0;
const filterById = (item) => {
    if(Number.isFinite(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
};

const arrById = arrr.filter(filterById);
console.log("Filtered Array\n", arrById);
console.log("Number of Invalid Entries =", invalidEntries);

/**
 * Searching in array 
 * use filter() to filter array content based on search criteria.
 */

const fruits1 = ["apple", "banana", "grapes", "mango", "orange"];

const filterItems = (arr4, query) => {
    return arr4.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits1, "ap"));
console.log(filterItems(fruits, "AN")); 

/**
 * Using the third argument of callbackFn
 * The array argument is useful if you want to access another element in the array, 
 * especially when you don't have an existing variable that refers to the array. 
 * The following example first uses map() to extract the numerical ID from each name and 
 * then uses filter() to select the ones that are greater than its neighbors.
 */

const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
const greatIDs = names
  .map((name) => parseInt(name.match(/[0-9]+/)[0], 10))
  .filter((id, idx, arr5) => {
    if (idx > 0 && id <= arr5[idx - 1]) return false;
    if (idx < arr5.length - 1 && id <= arr5[idx + 1]) return false;
    return true;
  });
console.log(greatIDs);