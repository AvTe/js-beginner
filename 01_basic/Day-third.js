// How memory work 

// Primitive datatypes 
// are in the 7 types 
//  String, Number, Boolean, null, undefined, symbol, BigInt

// Is js dynamic or not 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Refreence (Non primitive)
// Array, Objects, Functions

const heros = ["shakiman", "ironman", "superman"]
let myobj = {
    name: "Amit",
    age: 22,
}

const myfunction = function() {
    console.log("Hello world")
}

console.log(typeof anotherId);

