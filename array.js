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
const isIncreasing = numbers
  .filter((num) => num > 0)
  .every((num, idx, arr) => {
    if (idx === 0) return true;
    return num > arr[idx - 1];
  });

console.log(isIncreasing);

/**
 * Filter
 * creates a shallow copy of a portion of a given array,
 * filtered down to just the elements from the given array that pass the test implemented by the provided function.
 */

const words = ["spray", "elite", "exuberant", "destruction", "present"];
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
}
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
  if (Number.isFinite(item.id) && item.id !== 0) {
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
};

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

/**
 * The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function.
 * If no values satisfy the testing function, undefined is returned.
 * If you need the index of the found element in the array, use findIndex().
 * If you need to find if a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.
 * If you need to find if any element satisfies the provided testing function, use some().
 * If you need to find all elements that satisfy the provided testing function, use filter().
 * If you need the index of a value, use `indexOf(). its similar to findIndex(), byt checks each element for equalitywith the value instead of using a testing function.)
 */

//Find an object in an array by one of its properties
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

// function isCherries(fruits) {
//   return fruits.name === "cherries"
// }

// console.log(inventory.find(isCherries));

//Using arrow functions & Destructuring
const result1 = inventory.find(({ name }) => name === "cherries");
console.log(result1);

//2. Find the first number in an array
function isPrimeNUmber(el, index, arrrayy) {
  let start = 2;
  while (start <= Math.sqrt(el)) {
    if (el % start++ < 1) {
      return false;
    }
  }
  return el > 1;
}

console.log([4, 6, 8, 12].find(isPrime));
console.log([4, 5, 8, 12].find(isPrime));

const nambers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = nambers
  .filter((num) => num > 0)
  .find((num, index, array) => {
    if (index > 0 && num >= array[index - 1]) return false;
    if (index < array.length - 1 && num >= array[index + 1]) return false;
    return true;
  });
console.log(firstTrough);

//Find the index of the first prime number in an array
const isPrimee = (element) => {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor < Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
};

console.log([4, 6, 8, 9, 12].findIndex(isPrimee));
console.log([4, 6, 7, 9, 12].findIndex(isPrime));

// Find last object in an array matching on element properties

const inventory1 = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

const isNotEnough = (item) => {
  return item.quantity < 2;
};

console.log(inventory1.findLast(isNotEnough));

//Find the last prime number in an array
const isItPrime = (element) => {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor < Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
};
console.log([4, 6, 8, 12].findLast(isPrime));
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime));
console.log([4, 6, 8, 12].findLastIndex(isPrime));
console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime));

/**
 * FLAT
 * The flat() method of array instances creates a new array with all sub-aray elements concatenated into it recursively upto the specified depth
 */
const arrar1 = [1, 2, [3, 4]];
console.log(arrar1.flat());

const arrar2 = [1, 2, [3, 4, [5, 6]]];
console.log(arrar2.flat());

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity));

/**
 * FLATMAP()
 * The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array,
 * and then flattening the result by one level.
 * It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.
 */

const arrayF = [1, 2, 3, 4];
arrayF.flatMap((x) => [x, x * 2]);
const n = arrayF.length;
const acc = new Array(n * 2);

for (let i = 0; i < n; i++) {
  const x = arrayF[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}

/**
 * forEach()
 * executes a provided function once for each array element
 * forEach() expects a synchronous function — it does not wait for promises.
 * Make sure you are aware of the implications while using promises (or async functions) as forEach callbacks.
 */

const ratings = [4, 6, 7, 9, 8];
let sum = 0;
const sumFuction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFuction(sum, rating);
});

console.log(sum);
// Naively expected output: 34
// Actual output: 0

//Converting a for loop to forEach

const items = ["item1", "item2", "item3"];
const copyItems = [];

for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

items.forEach((item) => {
  copyItems.push(item);
});

/**
 * includes();
 *  determines whether an array includes a certain value among its entries,
 * returning true or false as appropriate.
 */
console.log([1, 2, 3].includes(2));

/**
 * The indexOf() method compares searchElement to elements of the array using strict equality (the same algorithm used by the === operator).
 * NaN values are never compared as equal, so indexOf() always returns -1 when searchElement is NaN.
 */
console.log(items.indexOf("item2"));

//Finding all the occurrences of an element
const indices = [];
const alphabets = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = alphabets.indexOf(element);

while (idx !== -1) {
  indices.push(idx);
  idx = alphabets.indexOf(element, idx + 1);
}
console.log(indices);

//Finding if an element exists in the array or not and updating the array
const updateVegetablesCollection = (veggies, veggie) => {
  //if veggies index pf veggie does not exist -1 means it is not in the array
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log(`New veggies collection is: ${veggies}`);
  } else {
    console.log(`${veggie} already exists in the veggies collection.`);
  }
};

const veggies = ["potato", "tomato", "chillies", "green-pepper"];
console.log(updateVegetablesCollection(veggies, "spinach"));
console.log(updateVegetablesCollection(veggies, "spinach"));

/**
 * join()
 * The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array,
 * separated by commas or a specified separator string.
 * If the array has only one item, then that item will be returned without using the separator.
 */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join("."));
console.log(matrix.join(";"));
console.log(matrix.join());

/**
 * keys()
 * The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.
 */
const iterator1 = alphabets.keys();

for (const key of iterator1) {
  console.log(key);
}
/*
 *The lastIndexOf() method of array instances returns the last index
 *at which a given element can be found in the array,
 *or -1 if it is not present
 */

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo"));
console.log(animals.lastIndexOf("Tiger"));

/*
map() method of array instances creates a new array populated with
the results of calling a provided function on every element in the calling array
*/

const arrayy1 = [1, 4, 9, 16];
const map1 = arrayy1.map((x) => x * 2);
const roots = arrayy1.map((num) => Math.sqrt(num));
console.log(map1);
console.log(roots);

console.log(["1", "2", "3"].map((str) => parseInt(str, 10)));
//or use Number() function
//But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
console.log(["1", "2", "3"].map(Number));
const filteredNumbers = arrayy1.map((num, index) => {
  if (index < 3) {
    return num;
  }
});
console.log(filteredNumbers);

const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});
console.log(withTax);
console.log(total);
