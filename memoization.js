let cache ={};

function memoizedAddTo80(n){
  if (n in cache){
    return cache[n];
  }
  else{
    console.log("long time ");
    cache[n] = n + 80;
    console.log(cache[n]);
    console.log(cache)
    return cache[n];
  }
}

memoizedAddTo80(5)
