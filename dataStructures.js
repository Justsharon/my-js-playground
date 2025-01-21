let listOfNumbers = [2, 3, 5, 7, 11];
listOfNumbers.push(12);

// console.log(listOfNumbers.pop(5));

let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
Object.assign(day1, { walk: true });
console.log(day1);

let objectA = { a: 1, b: 2 };
//objects are mutable
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);

/**
 * ARRAY OF OBJECTS
 */

/*let journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false,
  },
  {
    events: [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth",
    ],
    squirrel: false,
  },
  {
    events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true,
  },
  And so on... 
];
console.log(journal.find((journal) => journal.events));*/

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

/*When you compare objects with JavaScript’s == operator, it compares
by identity: it will produce true only if both objects are precisely the
same value*/
console.log(object1 == object2);
console.log(object1 == object3);
object1.value = 15;
console.log(object2);
console.log(object3.value);

let journal = [];

const addEntry = (events, squirrel) => {
  journal.push({ events, squirrel });
};

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth",
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
//extract starting from index four till before index 7 techncally 4 to 7 minus 1
console.log("coconuts".slice(4, 7));
console.log("coconut".indexOf("u"));
//remove white spaces, newlines, tabs, and similar characters
console.log("  okay \n ".trim());

/**
 * You can split a string on every occurrence of another string with split
and join it again with join:
 */

let sentences = "Secretarybirds specialize in stomping";
let words = sentences.split(" ");
console.log(words);
console.log(words.join("."));

//destructure
let { name: firstname } = { name: "Sharon", age: 16 };
console.log(firstname);

/*
Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to and in-
cluding end.
*/
const range = (start, end) => {
  //initialize an empty array to store the range
  let result = [];
  //loop from strart to end
  for (let index = start; index <= end; index++) {
    result.push(index);
  }
  return result;
};
console.log(range(1, 5));
/**
 * modify your range function to take an op-
tional third argument that indicates the “step” value used when build-
ing the array. If no step is given, the elements should go up by in-
crements of one, corresponding to the old behavior. The function call
range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also
works with negative step values so that range(5, 2, -1) produces [5,
4, 3, 2].
 */

let ranges = (start, end, step = 1) => {
  const result = [];

  // Handle cases where the step is positive or negative
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  return result;
};
console.log(ranges(1, 10, 2));
console.log(ranges(10, 1, -2));
console.log(ranges(5, 2, -1));


/**
 * Arrays have a reverse method that changes the array by inverting the
order in which its elements appear. For this exercise, write two func-
tions, reverseArray and reverseArrayInPlace. The first, reverseArray,
should take an array as its argument and produce a new array that has
the same elements in the inverse order. The second, reverseArrayInPlace
, should do what the reverse method does: modify the array given as
its argument by reversing its elements. Neither may use the standard
reverse method.
 */

const reverseArray = (arr) => {
  let arrayReversed = [];

  // Iterate through the array from the end to the beginning
  //>= 0 because were starting from the last index
  for (let index = arr.length - 1; index >= 0; index--) {
    arrayReversed.push(arr[index])
  }
  return arrayReversed;
};
console.log(reverseArray([1, 2, 3, 4, 5]));

const reverseArrayInPlace = (arr) => {
  let length = arr.length;
    // Swap elements from start and end, moving toward the center
    for (let i = 0; i < Math.floor(length / 2); i++) {
      // const element = arr[i]; access each element in the array
      // console.log(element);

      // Temporary storage for the current element
      const temp = arr[i];
  
      // Swap the current element with its counterpart from the end
      arr[i] = arr[length - 1 - i];
      arr[length - 1 - i] = temp;
    }
    return arr; // Return the same array (modified in place)
}

const arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);
console.log(arr);

/**
 * A nice thing about lists is that they can share parts of their structure. 
 * For example, if I create two new values {value: 0, rest: list} 
 * and {value: -1, rest: list} (with list referring to the binding defined
 * earlier), they are both independent lists, but they share the structure
 * that makes up their last three elements. The original list is also still a
 * valid three-element list.
 * Write a function arrayToList that builds up a list structure like the
 * one shown when given [1, 2, 3] as argument. 
 * Also write a listToArray function that produces an array from a list.
 * Add the helper functions prepend, which takes an element and a list and
 * creates a new list that adds the element to the front of the input list, and nth, which takes a
 * list and a number and returns the element at the given position in the
 * list (with zero referring to the first element) or undefined when there is no such element.
 * If you haven’t already, also write a recursive version of nth.
 */





/**
 * Write a function deepEqual that takes two values and returns true
 * only if they are the same value or are objects with the same properties,
 * where the values of the properties are equal when compared with
 * recursive call to deepEqual.
 * To find out whether values should be compared directly (using the
 * === operator for that) or have their properties compared, you can use
 * the typeof operator. If it produces "object" for both values, you should
 * do a deep comparison. But you have to take one silly exception into
 * account: because of a historical accident, typeof null also produces
 * "object".
 * The Object.keys function will be useful when you need to go over the
 * properties of objects to compare them.
 */