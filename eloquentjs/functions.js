const square = function (x) {
  return x * x;
};

console.log(square(12));

const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingridientAmount = amount * factor;
    if (ingridientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingridientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(2);

// Function declarations are not part of the regular
// top-to-bottom flow of control. this this works but with const doesn't

console.log("The future says:", future());
function future() {
    return "You'll never have flying cars";
}

// const future = () => {
//     return "I will be hacking it in this software engineering thing!!"
// }

const horn = () => {
    console.log("Toot");
};
horn();

function greet(who) {
    console.log("Hello " + who);
}

greet("Kay");
console.log("Bye");

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(10));
console.log(minus(10, 5));

// Recursion
function power(base, exponent) {
    if(exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1)
    }
}

console.log(power(2, 3));

function findSolution(target) {
    function find(current, history) {
        if(current == target) {
            return history
        } else if (current > target) {
            return null
        } else {
            return find(current + 5, `(${history} + 5)`) ?? find(current * 3, `(${history} * 3)`  )
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));

/**
 * We want to write a program that prints two numbers: the numbers
of cows and chickens on a farm, with the words Cows and Chickens after
them and zeros padded before both numbers so that they are always
three digits long:
 */

// Answer option 1

// function printFarmInventory(cows, chickens) {
//     let cowString = String(cows);
//     while (cowString.length < 3) {
//         cowString = "0" + cowString;
//     }
//     console.log(`${cowString} Cows`);

//     let chickenString = String(chickens);
//     while (chickenString.length < 3) {
//         chickenString = "0" + chickenString;
//     }

//     console.log(`${chickenString} Chickens`);
// };
// printFarmInventory(7, 11);

// Answer option 2

// function printZeroPaddedWithLabel(number, label) {
//     let numberString = String(number);
//     while (numberString.length < 3) {
//         numberString = "0" + numberString;
//     }
//     console.log(`${numberString} ${label}`);
// }
// function printFarmInventory(cows, chickens, pigs) {
//     printZeroPaddedWithLabel(cows, "Cows");
//     printZeroPaddedWithLabel(chickens, "Chickens");
//     printZeroPaddedWithLabel(pigs, "Pigs");
// };

// printFarmInventory(7, 11, 3);

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
    string = "0" + string;
    }
    return string;
    }
    function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);

/** Define the function min that takes two arguments and returns their
minimum. */

const min = (c, d) => {
    if (c < d) {
        return c 
    } else {
        return d
    }
}
console.log(min(3, 17))

/**
 * • Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole num-
ber) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. 
 */

const isEven =(number) => {
    if (number == 0 ) {
        return true
    } else if ( number == 1) {
        return false;
    } else if (number < 0) {
        return isEven(-number)
    } else {
        return isEven(number - 2)
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

/** 
 * Write a function called countBs that takes a string as its only ar-
gument and returns a number that indicates how many uppercase B
characters there are in the string.
Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that
is to be counted (rather than counting only uppercase B characters).
Rewrite countBs to make use of this new function.
*/

const countBs = (string) => {
    let count = 0;
    for (let index = 0; index < string.length; index++) {
        if (string[index] === "B") {
            count ++
        }
    }
    return count;  
}
console.log(countBs("BaBieB"));
console.log(countBs("Hello, World!"));

const countChar = (string, character) => {
    let count = 0;
    for (let index = 0; index < string.length; index++) {
        if (string[index] === character) {
            count ++
        }
    }
    return count;  
}
console.log(countChar("BaBieB", "e"));
console.log(countChar("Hello, World!", "W"));
console.log(countChar("kakkerlak", "k")); 