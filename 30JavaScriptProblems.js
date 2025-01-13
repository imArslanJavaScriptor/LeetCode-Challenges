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