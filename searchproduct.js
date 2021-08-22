const products = [

    { name: "samsung", price: 10000 },
    { name: "apple", price: 11000 },
    { name: "lenovo", price: 1000 },
    { name: "asos", price: 1200 },
    { name: "nokia", price: 100 },
    
]



function searchProduct(products, searchText) {
    
    const matched =[]
    
    for (const product of products) {
        
        // const name = product.name
        if (product.name.indexOf('k') != -1) {
            
            matched.push(product);
         }
     }
    return matched;
}


const matched = searchProduct(products)
console.log(matched);

