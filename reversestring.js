const arr = "Hello bro";



function reverse(arr){
    let arr1 = '';
    for(const element of arr){
       arr1 = element + arr1;
    }
    return arr1;
}

const reverseArray = reverse(arr);
console.log(reverseArray);