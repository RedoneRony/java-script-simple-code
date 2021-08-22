// array of objects
const phones = [
    {name:"nokia", price:12000},
    {name:"sumsang", price:20000},
    {name:"iphone", price:50000},
]

function chepeast(phones){
const min = phones[0]
for(phone of phones){
if (phone.price < min.price){
    min = phone;
}
}
return min;
}
const minimum = chepeast(phones);
console.log(minimum);


