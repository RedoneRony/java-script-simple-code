const products = [
    'hello',
    'hello',
    'apple',
    'orange',
    'number',
]


const output = [];


for (const product of products) {
    if (product.indexOf('hello') !=-1) {
        output.push(product);
    }
}
console.log(output);