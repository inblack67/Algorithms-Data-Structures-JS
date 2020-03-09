function countVowels(str)
{
  let count = 0;

  let re = /^[aeiou]/gi;

  for (const i of str) {
  if(i.match(re))
  {
    count++;
  }
}

  return count;
}

console.log(countVowels('AEIOU'));



// function countVowels(str)
// {
//   let count = 0;
//   for(i of str)
//   {
//     if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u')
//     {
//       count++
//     }
//   }
//   return count;
// }

// console.log(countVowels('aman bhardwaj'));

// function countVowels(str)
// {
//   let count = 0;
//   let vowels = ['a', 'e', 'i', 'o', 'u'];

//   for (const i of str) {

//     if(vowels.includes(i))
//     {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels('aman bhardwaj'));