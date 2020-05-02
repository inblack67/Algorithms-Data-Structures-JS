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

const countingVowelsAndConsonants = str => {

    let result = {};

    const vowels = [];
    const consonants = [];

    str.split('').filter(v => v.match(/[aeiou]/gi) ? vowels.push(v) : consonants.push(v))

    result.vowels = vowels;
    result.consonants = consonants;

    return result;
}

console.log(countingVowelsAndConsonants(string));