function addTo80(n){
    return n +80;
}

let cache ={};
function memoizedAddTo80(n){
    if(n in cache){
        return cache[n];
    }
    else{
        console.log("Long Time");
        cache[n] = n +80;
        // console.log(cache[n]);
        return cache[n];
    }
}

console.log('1',memoizedAddTo80(5));
console.log('2',memoizedAddTo80(5));
