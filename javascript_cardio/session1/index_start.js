// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {

  // const result = Array.from(str).reverse().join('');

  // const result = str.split('').reverse().join('');

  // let result = '';
  // for(let i=str.length - 1; i>=0; i--){
  //     result += str[i];
  // }

  // let result = '';
  // for(let i=0; i<=str.length-1; i++){
  //     result = str[i] + result;
  // }

  // let result = '';
  // for (const i of str) {
  //   result = i + result;
  // }

  return str.split('').reduce((rev, char) => { return char + rev;
  }, '')
  // '' -> init val of result

  // return result;
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const reverse = str.split('').reverse().join('');
  return reverse === str;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revInt = parseInt(int.toString().split('').reverse().join(''));

  return Math.sign(int) * revInt;
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) { 
  const r = str.toLowerCase().split(' ');
  const result = r.map(e => {
    const res = e[0].toUpperCase() + e.substring(1);
    return res
  });

  return result.join(' ');
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {

  let obj = {};

  str.split('').forEach(w => {

    if(obj[w]){
      obj[w]++;
    }

    else{
      obj[w] = 1;
    }

  });

  let max = 0;
  let result = '';
  
  for (const i in obj) {
    if(obj[i] > max){
      max = obj[i];
      result = i;
    }
  }

  return result;

}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(let i=1; i<=100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      // i % 15 === 0; ? even :;
      console.log('FizzBuzz');
    }
    else if(i % 3 === 0){
      console.log('Fizz');
    }
    else if(i % 5 === 0){
      console.log('Buzz');
    }
    else{
      console.log(i);
    }
  }
}



// Call Function
const output = maxCharacter('JavaScript');

// console.log(output);

fizzBuzz();
