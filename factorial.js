




function factorialRecursive(number){
    if(number == 1){
        return 1;
    }
    return number * factorialRecursive(number-1);
}

var firstFactorial = factorialRecursive(7);
console.log(firstFactorial);


