// PERFEFT O(1)
const sum = (number) => {
    return (number * (number + 1))/2;
}

const recursiveSum = (number) => {
    if(number === 0){
        return 0;
    }

    return number + recursiveSum(number - 1);
}

const iterativeSum = (number) => {

    let sum = 0;

    for(let i=1; i<=number; i++){
        sum += i;
    }

    return sum
}


console.log(iterativeSum(5));