  // variable
var deposit = 400;
// condition
if(deposit > 500){

}
else if(deposit < 500){
    
}
else if(deposit == 500){

}
else if(deposit != 500){

}
else if(deposit >= 500){

}
else if(deposit <= 500){

}
else{

}
// array
const numbers = [45, 6587, 124, 45, 1, 365];
const numberCount = numbers.length;
numbers.push(111);
numbers.pop();
numbers[2] = 555;
// check whether 222 included in the array
if(numbers.indexOf(222) != -1){

}
if(numbers.includes(222)){
    
} 

// loop
// while, for

for(const number of numbers){

} 

// function 
function getFullName(first, second){
    const fullName = first + ' ' + second;
    return fullName;
}

const person = getFullName('Rahim', 'Ali');
console.log(person);

// object
const bottle = {
    color: 'yellow',
    contain: 'water',
    price: '$120'
};
