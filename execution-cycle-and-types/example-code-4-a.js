// Objects are only implicitly converted if JavaScript expects a number or a string in an expression OR a statement. In the former case, the conversion takes three steps:
// Call valueOf(). If the result is primitive (not an object) then use it and convert it to a number.
// Otherwise, call toString(). If the result is primitive, use it and convert it to a number.
// Otherwise, throw a TypeError.


console.log(
    3 * { valueOf: function () { return 5; } }
)


// Example for step 3:
function returnObject() {
  return {};
}
console.log(
  3 * { 
    valueOf: returnObject, 
    toString: returnObject 
  }
)

//TypeError: Cannot convert object to primitive value


// If JavaScript converts to string, steps 1 and 2 are swapped: toString() is tried first, valueOf() second.