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
/**
pop()
This method of array instances removes the last element from an array
and returns that element. THis method changes the length of the array

*/
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop());

const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};

console.log(Array.prototype.pop.call(arrayLike));

//Using an oobject in an array like fashion
const collection = {
  length: 0,
  addElements(...elements) {
    return [].push.call(this, ...elements);
  },
  removeElement() {
    return [].pop.call(this);
  },
};

collection.addElements(10, 20, 30);
console.log(collection.length);
collection.removeElement();
console.log(collection.length);
/*
push()
this method adds a specified element to the end of the array and
returns the new length of the array
*/
const animals1 = ["pigs", "goats", "sheep"];
const count = animals1.push("cows");
console.log(count);

const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];
vegetables.push(...moreVegs);
console.log(vegetables);

/*
The reduce() method of array instances executes a user supplied reducer
callback function on each element of the array, in order, passing in  the return
value from the calculations on the preceding element
*/

const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);

//reduce() works without an  initial value
const arrayA = [15, 16, 17, 18, 19];

const reducer = (accumulator, currentValue, index) => {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
};
console.log(arrayA.reduce(reducer));

//with initial value
console.log(
  arrayA.reduce((accumulator, currentValue) => accumulator + currentValue, 10),
);

//Function sequential ppiping
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

console.log(multiply6(6));
console.log(multiply9(9));
console.log(multiply16(6));
console.log(multiply24(10));

//Reverse()
//The reverse() method of Array instances reverses an array in place
//and returns the reference to the same array,
//the first array element now becoming the last, and the last array element becoming the first.
const reversed = [...vegetables].reverse();
console.log(reversed[0]);
console.log(vegetables[0]);

/*
shift()
To insert an element at the start of an Array,
we'll need to shift all other elements in the Array to the right by one index to create space for the new element.
This is a very costly operation, since each of the existing elements has to be shifted one step to the right.
The need to shift everything implies that this is not a constant time operation.
In fact, the time taken for insertion at the beginning of an Array
will be proportional to the length of the Array.
In terms of time complexity analysis, this is a linear time complexity:
O(N), where N is the length of the Array.
this method of Array instances removes the first element from an array and returns that removed element
*/

const myFish = ["angel", "clown", "mandarin", "surgeon"];
console.log("myFish before:", myFish);
const shifted = myFish.shift();
console.log("myFish after:", myFish);
console.log("Removed this element:", shifted);

/*
slice()
returns a shallow copy of a portion of an array into anew array object
selected from start to end(end not included)where start and end represents index of items in that array
does not modify the original array
When using a negative index with the slice method,
negative indices are counted from the end of the array,
starting at -1 for the last element, -2 for the second-to-last element,
and so on. The negative index -2 itself is included because it is the starting point of the extraction.
*/
const mammals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(mammals.slice(2));
console.log(mammals.slice(2, 4));
console.log(mammals.slice(1, 5));
console.log(mammals.slice(-2)); // extracts the last two elements of the array
const fruitss = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
const slicedFruitss = fruitss.slice(1, -1);
console.log(slicedFruitss);
/*
// In this example, slice(1, -1) starts extracting from index 1 and goes up to,
// but does not include, the element at index -1 (which is the last element).
// This results in a new array with ['Banana', 'Orange', 'Mango'].
// The slice method always excludes the element at the final index specified,
// regardless of whether it is positive or negative.
*/
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = myCar.slice(0, 2);
console.log("myCar =", myCar);
console.log("newCar =", newCar);
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);
myHonda.color = "purple";
console.log("The new color of my Honda is", myHonda.color);

/**
some()
tests whether at least one element in the array passes the test implemented by the provided function.
*/
function isBiggerThan10(element, index, array) {
  return element > 10;
}
console.log([2, 5, 8, 1, 4].some(isBiggerThan10));
console.log([12, 5, 8, 1, 4].some(isBiggerThan10));

//sort()
const data = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
data.sort((a, b) => a.value - b.value);

// sort by name
data.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
//splice()
//changes the contents of an array by removing or
//replacing existing elements and or adding new elements in place
//params: start, deleteCount(integer indicating the number of elements after position is specified by start then all the elements from start to the end of the array will be deleted. )

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months);
months.splice(4, 1, "May");
console.log(months);

//toLocaleString()
/*
The elements of the array are converted to strings using their toLocaleString methods.
For example, this snippet implicitly calls the Number.prototype.toLocaleString() method
to display the currency for the strings and numbers in the prices array:
*/
const prices = ["￥7", 500, 8123, 12];
console.log(
  prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);

/*
toSorted()
method of Array instances is the copying version of the sort() method.
It returns a new array with the elements sorted in ascending order.
*/
const months1 = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months1.toSorted();
console.log(sortedMonths);

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => b - a);
// const sortedValues = values.toSorted((a, b) => b - a); sorted in descending order
console.log(sortedValues);

/*
Challenge 2:
Given an array of strings, return an array where
the first letter of each string is capitalized
*/

const namess = ["alice", "bob", "charlie", "danielle"].map(
  (name) => name[0].toUpperCase() + name.slice(1),
);

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"].map((poke) => {
  return `<p>${poke}</p>`;
});

// const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"].map((ninjaTurtle) => <h2>{ninjaTurtle}</h2>)
//     return (
//         <main>
// react stuff
//             {ninjaTurtles}
//         </main>
//     )
