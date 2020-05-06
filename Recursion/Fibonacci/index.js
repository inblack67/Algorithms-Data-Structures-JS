// n - nth term in the fibonacci series

const fibonacci = n => {
    if(n <= 1){
        return n;
    }
    else{
        return (fibonacci(n - 2) + fibonacci(n-1));
    }
}

const iterativeFibonacci = n => {

    let sum, t0 = 0, t1 = 1;

    if(n <= 1){
        return n;
    }

    for(let i = 2; i <= n; i++){
        sum = t0 + t1;
        t0 = t1;
        t1 = sum;
    }

    return sum;
}

console.log(iterativeFibonacci(5));