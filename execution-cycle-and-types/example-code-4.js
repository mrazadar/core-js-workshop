// Identity (==)
// Equals
// Comparing two values. Values with different types are never equal. If both values have the same type then the following assertions hold.
console.log("identity")
console.log(undefined === undefined); //true

console.log(null === null); //true

console.log("ali" === "ali"); //true

console.log("1" === 1); //false


// Equity (==)
// Equals

// Comparing two values. If both values have the same type: compare with ===. 

// Otherwise: if you use == one of the following statement will happen. 
// 
// undefined == null

// One number, one string: convert the string to a number
// A boolean and a non-boolean: convert the boolean to a number and then perform the comparison.
// Comparing a string or a number to an object: try to convert the object to a primitive and then make the comparison.


//equity comparison with
console.log("equity")


console.log("one operand is boolean")

console.log(false == 1); //false
console.log(true == 1); //true
console.log(2 == true); //false

//javascript always convert boolean to a number and then compares the values.

console.log(2 ? true : false); //true // because 2 !== 0

// One number, one string: convert the string to a number
console.log("one operand is string and other is number")

console.log("" == 0); //true 
//const n = Number(""); // 0
 // 0==0
//because "" empty string is a falsy value in js, when you convert it to a number you will get 0 and then compare with 0.

console.log("123" == 123); //true


console.log("" == false); //true
//const n = Number(""); // 0
//const f = Number(false); // 0
//     true


console.log("1" == true); // true
console.log("2" == true); //false
//first booleanToNumber 
// console.log("2" == 1);
// false


