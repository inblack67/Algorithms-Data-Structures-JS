// function reverseString1(str) {

//   const arr = str.split('');

//   str = arr.reverse().join('');

//   console.log(str)

// }

// reverseString1('js');

// function reverseString2(str) {

//   let reverse = '';

//   // for of
//   for(let char of str)
//   {
//     reverse = char + reverse;
//   }

//   console.log(reverse);

// }

// reverseString2('js');

// function reverseString3(str) {

//   const arr = str.split('');

//   const rev = arr.reduce((reversed, char) => char + reversed, '');

//   console.log(rev);

// }

// reverseString3('aman');


function isPallindrome(str) {

  // const reverse = str.split('').reverse().join('');

  // return reverse === str;

  const arr = str.split('');

  return arr.every((char ,i) => {
    return char === arr[arr.length -1 -i]
  });

}

console.log(isPallindrome('abba'));
