// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...numbers) {
    // let sum = 0;

    // es5 = Array.prototype.slice.call(arguments);
    // const arr =  Array.from(arguments);
    // arr.forEach(i => sum+= i);

    // numbers.forEach(i => sum += i);

    // return sum;

    return numbers.reduce((i,current) => i += current);
}

// console.log(addAll(2,5,6,7));

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17


function isPrime(number){

    for(let i=2; i < number; i++){
        if(number % i === 0){
            return false;
        }
    }

    return true;
}

// console.log(isPrime(17));

function sumAllPrimes(num) {

    let sum = 0;

    for(let i=2; i <= num; i++){
        if(isPrime(i)){
            sum += i;
        }
    }

    return sum;
}

// console.log(sumAllPrimes(10));

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(array, ...rest) {
    return array.filter(a => !rest.includes(a));
}

// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(array) {
    const trees = [];
    const peeps = [];
    array.forEach((i, index) => {
        if(i === -1){
            trees.push(index);
        }
        else{
            peeps.push(i);
        }
    })

    const sortedPeeps = peeps.sort();
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {

    let compare = str.charCodeAt(0);
    let missing;

    const arr = str.split('');

    arr.forEach((char, index) => {
        if(str.charCodeAt(char) === compare){
            ++compare;
        }
        else if(str.charCodeAt(char) === compare){
            missing = String.fromCharCode(compare);
        }

        else{
            missing = undefined;
        }
    });

    return missing;

}

console.log(missingLetters('abce'))

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() {}
