/*
- Map - a data structure that stores key-value pairs, where each key is unique.
- Creating a Map
    Map()constuctor allows two ways to create a Map in Javascript
      1. Passing an Array to new Map()
      2. CReate a Map and use Map.set()
*/
let myMap = new Map();
let anotherMap = new Map([
  ["name", "GFG"],
  ["age", 30],
  ["city", "Noida"],
]);
console.log(anotherMap);
/*
Properties of Map
1. set(key, val) : Adds or updates an element with a specified key and value.
2. get(key) : Returns the value associated with the specified key.
3. has(key) : Returns a boolean indicating whether an element with the specified key exists.
4. delete(key) : Removes the element with the specified key.
5. clear(): Removes all elements from the Map.
6. size: Returns the number of key-value pairs in the Map.
7. keys() – Returns all keys in a Map
8. values() – Returns all values in a Map
9. entries() – Returns all keys and values in a Map

*/
myMap.set("name", "GFG");
myMap.set("age", 25);
myMap.set(1, "One");
console.log(myMap);

console.log(myMap.get("name"));
console.log(myMap.get("age"));
console.log(myMap.get(1));
console.log(myMap.get("invalidKey"));

console.log(myMap.has("name"));
console.log(myMap.has("address"));
console.log(myMap.has(1));

myMap.delete("age");
console.log(myMap.has("age"));
console.log(myMap);

myMap.clear();
console.log(myMap);
console.log(myMap.size);
myMap.set("a", 1);
myMap.set("b", 2);
console.log(myMap.size);
console.log(myMap);

//Iterating Map with for...of
for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

for (const key of myMap.keys()) {
  console.log(key);
}

for (const value of myMap.values()) {
  console.log(value);
}

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}

//Iterating Map with forEach()

myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

//Relation with array objects
const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap1 = new Map(kvArray);
console.log(myMap1.get("key1"));

//cloning and merging maps
const original = new Map([[1, "one"]]);
const clone = new Map(original);

console.log(clone.get(1));
console.log(original === clone);

//merging maps
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

const merged = new Map([...first, ...second]);
console.log(merged);
console.log(merged.get(1));
console.log(merged.get(2));
console.log(merged.get(3));

//Caching with Map()
const expensive = (num) => {
  for (let i = 0; i < 1000000; i++) {}
  return num * 2;
};
const cache = new Map();

const cachedExpensive = (num) => {
  if (cache.has(num)) {
    return cache.get(num);
  }
  const result = expensive(num);
  cache.set(num, result);
  return result;
};

console.log(cachedExpensive(5));
console.log(cachedExpensive(6));

//removing duplicates values with Map()
const items = [1, 2, 3, 2, 1, 5];
const unique = new Map();
for (let item of items) {
  unique.set(item, true);
}
console.log([...unique.keys()]);
