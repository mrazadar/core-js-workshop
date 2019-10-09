//ask audiance how this will work in JS 

function foo(b){
    return b + 10
  }
  
  function bar(x){
    const y = 3;
    return foo(x * y);
  }
  
  console.log(bar(6))