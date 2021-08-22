
const arr=[1,2,3,3,2,4,5,2];

function removeDuplicate(arr){
    const unique = [];

    for(const element of arr){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}


const removeDuplicateArray = removeDuplicate(arr);
console.log(removeDuplicateArray);
