// Q#1: Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld() {
    return function() {
        return "Hello World"
    }
}

// Q#2: Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function createCounter(n) {
    let currentValue = n
    return function() {
        return currentValue++
    }
}

const counter = createCounter(99)
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

//Q#3: Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

function expect(val) {
    return {
        toBe: function(anotherVal) {
            if(val === anotherVal) {
                return true
            }
            throw new Error("Not Equal")
        },
        notToBe: function(anotherVal) {
            if(val !== anotherVal) {
                return true
            }
            throw new Error("Equal")

        }
    }
}


try {
    expect(10).toBe(10)
    expect(20).notToBe(40)
    expect(5).toBe(2)
} catch (error) {
    console.log(error.message)   
}

//Q#4: Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

function createCounter(init) {
    let currentValue = init
    return {
        increment: function() {
            return ++currentValue
        },
        decrement: function() {
            return --currentValue
        },
        reset: function() {
            currentValue = init
            return currentValue
        }
    }
}

// let counter2 = createCounter(10)
// console.log(counter2.increment())
// console.log(counter2.increment())
// console.log(counter2.decrement())
// console.log(counter2.reset())


//Q#5: Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

let map = function(arr, fn) {
    let result = []

    for(let i = 0; i< arr.length; i++) {
        result.push(fn(arr[i], i))
    }

    return result
}

let newArray = [1,2,3,4,5]
let newFunction = (val, index) => val * 10 + index

let transformedArray = map(newArray, newFunction)
console.log(transformedArray)

//Q#5: Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

// function filterArray(arr, fn) {
//     const filteredArr = []; // Initialize an empty array to store the results.
//     for (let i = 0; i < arr.length; i++) { // Iterate over the array.
//         if (fn(arr[i], i)) { // Call the fn function with arr[i] and i.
//             filteredArr.push(arr[i]); // If truthy, add arr[i] to filteredArr.
//         }
//     }
//     return filteredArr; // Return the result.
// }
// const arr = [1, 2, 3, 4];
// const fn = (value) => value % 2 === 0; // Filter even numbers.

// let result = filterArray(arr, fn)
// console.log(result)

//Q#7: Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

var reduce = function(nums, fn, init) {
  let val = init
  for(let i = 0; i < nums.length; i++)  {
    val = fn(val, nums[i])
  } 
  return val
};

// let numArr = [1,2,3,4,5]
let numArr = []
let reducerFunc = (acc,curr) => acc + curr;
let initialVlaue = 10

let finalRes = reduce(numArr, reducerFunc, initialVlaue)
console.log(finalRes)
