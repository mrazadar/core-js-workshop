//undefined means a variable has not been declared, or has been declared but has not yet been assigned a value.

// Javascript sets unassigned variables with a default value of undefined.

// undefined is not valid in JSON while null is.

// undefined typeof is undefined.
console.log("checking undefined type")
let person;
console.log(typeof person)

// In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address. The meaning of a null reference varies among language implementations.

// In JS null is an assignment value that means “no value”.

// Javascript never sets a value to null. It is used by programmers to indicate that a variable has no value.
console.log("checking null type")
console.log(typeof null); // is  an object. Why?


//Both are primitives
//Both are falsy 

console.log("evaluating falsy value")
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false

console.log("evaluating truthy value")

//You can know if a variable is undefined 
console.log(typeof variable === "undefined")

//You can check if a variable is null 
let employee = null;
console.log(employee === null)

// The equality operator considers them equal, but the identity doesn’t
console.log("equality vs identity")
console.log(null == undefined); // true
console.log(null === undefined); // false

// Similarly, JavaScript assigns undefined to missing parameters:
function id(x) { return x; }
id(); //undefined


//You can use undeclared variable with typeof
typeof undeclaredVariable //underfined
