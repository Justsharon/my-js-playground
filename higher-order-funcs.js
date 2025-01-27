const repeat = (n, action) => {
    for (let index = 0; index < n; index++) {
       action(index);
    }
}

repeat(3, console.log); 

let labels = [];
repeat(5, i => {
    labels.push(`unit ${i + 1}`)
});

console.log(labels)

//HIGHER ORDER FUNCTIONS
const greaterThan = (n) => {
    return m => m > n
};

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

const noisy = (f) => {
    return (...args) => {
        console.log("Calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    }
}

noisy(Math.min)(3, 2, 1);

const unless = (test, then) => {
    if (!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even")
    });
});

//1. Filtering Arrays
//filter  out elements in an array that do not pass a test
// const filter = (array, test) => {
//     let passed = [];
//     for (let element of array) {
//         if (test(element)) {
//             passed.push(element);
//         }
//     }
//     return passed;
// };

// console.log(filter(SCRIPTS, script => script.living));

//2. Transforming with map


// const map = (array, transform) => {
//     let mapped = [];
//     for (let element of array) {
//         mapped.push(transform(element));
//     }
//     return mapped;
// }

// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// console.log(map(rtlScripts, s => s.name));


//3. Summarizing with reduce
//Another common thing to do with arrays is to compute a single value from them

/**
 * It builds a value by repeatedly taking a single element from the array and combining it with the current value. 
 * When summing numbers, you’d start with the number zero and,for each element, add that to the sum.
 * The parameters to reduce are, apart from the array, a combining function and a start value.
 */

const reduce = (array, combine, start) => {
    let current = start;
    for (let element of array) {
        current = combine(current, element)
    }
    return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0))