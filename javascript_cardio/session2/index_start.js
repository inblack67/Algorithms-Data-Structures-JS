// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {

  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  const words = sen.match(/[a-z0-9]+/gi);
  let max = 0;
  let longestWord;
  words.forEach(w => {
    if(w.length >= max ){
      max = w.length;
      longestWord = w;
    }
  });
  
  const longestWordArray = words.filter(w => w.length === longestWord.length);
  return longestWordArray.length === 1 ? longestWordArray.join('') : longestWordArray;


  
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {

  // const chunkedArray = [];
  // for(let i=0; i<arr.length; i+=len){
  //   chunkedArray.push(arr.slice(i,i+len));
  // }
  // return chunkedArray;

  const chunky = [];
  
  arr.forEach(e => {

    const last = chunky[chunky.length - 1];

    if(!last || last.length === len){
      chunky.push([e]);
    }
    else{
      last.push(e);
    }
  })

  return chunky;

}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {

  // return arrays.reduce((a, b) => a.concat(b));
  // return [].concat.apply([], arrays);
  return [].concat(...arrays);
  // concat picks up values -> depricates one layer of array that is.
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return purifyString(str1) === purifyString(str2);
}

function purifyString(str){
  // replace anythang that's not a word char with empty str
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (s) => {
    if(s === 'z'){
      return 'a';
    }
    else{
      return String.fromCharCode(s.charCodeAt() + 1);
    }
  })

  newStr = newStr.replace(/a|e|i|o|u/gi, (v) => v.toUpperCase());

  return newStr;
}

// Call Function
const output = letterChanges('hello there');

console.log(output);
