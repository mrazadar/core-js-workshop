const timeoutFunc = function(){
    setTimeout(function(){
      console.log("timeoutFunc settimeout")
    });
  }
  
  let i =0
  for(i; i < 5; i++){
    console.log(`for ${i}`);
    timeoutFunc()
  } 