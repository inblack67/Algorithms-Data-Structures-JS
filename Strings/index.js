const string = 'Anagram sucks';

const length = str => {
    // return str.length;
    // return str.split('');
    return [...string].reduce(acc => acc + 1, 0);
};

const iterativeLength = str => {

    let length = 0;

    for(let i=0; str[i] !== undefined; i++){
        length++;
    }

    return length;
}


// console.log(length(string));

const toggleCases = str => {
    return str.split('').map((v, i) => {
        if(str.charCodeAt(i) >= 97){
            return str[i].toUpperCase();
        }
        else if(str.charCodeAt(i) <= 97){
            return str[i].toLowerCase();
        }
    }).join('');
}

// console.log(toggleCases(string));

const vowelsAndConsonants = str => {

    let result = {};

    const vowels = [];
    const consonants = [];

    const arr = str.toLowerCase().split('');

    arr.filter((v, i) => {
        if(v !== ' '){
        if(v.match(/[aeiou]/gi) && arr.indexOf(v) === i){
            vowels.push(v) 
        }
        else if(!v.match(/[aeiou]/gi) && arr.indexOf(v) === i){
            consonants.push(v)
        }
        }
        
    })

    result.vowels = vowels;
    result.consonants = consonants;

    return result;
}

// console.log(vowelsAndConsonants(string));

const purifyString = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

const isPallindrome = str => {
    return str.split('').reverse().join('') === str;
}

// console.log(isPallindrome('racecar'));

const isAnagram = (str1, str2) => purifyString(str1) === purifyString(str2);

console.log(isAnagram('dormitory', 'dirtyroom###'));