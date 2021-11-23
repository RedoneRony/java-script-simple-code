function reverse(str){
  // check
  
  if(!str || str.length < 2 || typeof str !== "string"){
    return 'hmm that is not good';
  }
  
  const backwards = []; //empty string
  const totalItems = str.length -1; //length = 13
  
  for(let i = totalItems; i >= 0; i--){
    backwards.push(str[i]);
    
  }
  console.log(backwards.join(''));
  return backwards;
  
}

reverse("MyNameisReduan")
