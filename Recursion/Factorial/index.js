const recursiveFactorial = 
number => number === 0 ? 1 : (number * recursiveFactorial(number-1));

const iterativeFactorial = number => {
    let factorial = 1;

    for(let i=1; i<= number; i++){
        factorial *= i;
    }

    return factorial;
}

console.log(iterativeFactorial(5));