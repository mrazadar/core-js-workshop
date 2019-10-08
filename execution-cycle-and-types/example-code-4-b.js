// Objects are only implicitly converted if JavaScript expects a number or a string in an expression OR a statement. In the former case, the conversion takes three steps:
// Call valueOf(). If the result is primitive (not an object) then use it and convert it to a number.
// Otherwise, call toString(). If the result is primitive, use it and convert it to a number.
// Otherwise, throw a TypeError.


console.log(
    3 * { valueOf: function () { return 5; } }
)


// Example for step 3:
function returnObject() {
  return false;
}

const obj1 = { 
  valueOf: returnObject, 
  toString: returnObject 
}
console.log(3 * obj1);

//TypeError: Cannot convert object to primitive value


// If JavaScript converts to string, steps 1 and 2 are swapped: toString() is tried first, valueOf() second.



//=====================
  
// 4b

// You can only add numbers and strings, all other values will be converted to either one of those types. 

// Converting values
// The plus operator performs three kinds of conversion: It converts values to primitives, numbers and strings.
// Converting values to primitives via ToPrimitive()
// The internal operation ToPrimitive() has the following signature:
//    ToPrimitive(input, PreferredType?)


// The optional parameter PreferredType is either Number or String. It only expresses a preference, the result can always be any primitive value. If PreferredType is Number, the following steps are performed to convert a value input (§9.1):
// If input is primitive, return it as is.
// Otherwise, input is an object. Call obj.valueOf(). If the result is primitive, return it.
// Otherwise, call obj.toString(). If the result is a primitive, return it.
// Otherwise, throw a TypeError.
// If PreferredType is String, steps 2 and 3 are swapped. If PreferredType is missing then it is set to String for instances of Date and to Number for all other values.

console.log({} + {}); // "[object Object][object Object]"

console.log(String({})); //string makes [object, object]

let someObj = {
   valueOf: function () {
     console.log("valueOf");
     return {}; // not a primitive
   },
   toString: function () {
     console.log("toString");
     return {}; // not a primitive
   }
 }


console.log(someObj+{}); //error

someObj.toString = function () {
  console.log("toString");
  return 123; // not a primitive
}
console.log(someObj+{});
 
let anotherObj = {
   valueOf: function () {
     console.log("valueOf");
     return {}; // not a primitive
   },
   toString: function () {
     console.log("toString");
     return "Good"; // not a primitive
   }
 }
 
console.log(someObj+{});
console.log(anotherObj + " Morning"); 


 
 
 