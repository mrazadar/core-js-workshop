const timeoutFunc = function(i){
    setTimeout(function(){
      console.log("timeoutFunc "+i)
    });
  }
  
  let i =0
  for(i; i < 5; i++){
    console.log(`for ${i}`);//is a synchronous function
    timeoutFunc(i)
  } 