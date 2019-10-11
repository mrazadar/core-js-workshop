//ask audiance how this will work in JS 

function foo(b){
    return b + 10
}
  
function bar(x){
    const y = 3;
    return foo(x * y);
}
  
console.log(bar(6))
  
  
/// another example

console.log("Murad");

setTimeout(function(){
    console.log("Shoaib")
}, 0);

console.log("Ihtram");
  
  
  
//another example 
let n = 0;

setTimeout(function(){
    console.log("When will it run?")
}, 10);


while(n < 500){
    console.log(n)
    n++;
}

  