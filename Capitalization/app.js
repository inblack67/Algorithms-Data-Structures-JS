function capitalize(str)
{
  // let words = str.split(' ');
  // let sentence = '';

  // words.forEach(w => {
  //   sentence = sentence + w.charAt(0).toUpperCase() + w.slice(1)
  // })
  
  // console.log(sentence);

  let result = str.charAt(0).toUpperCase()
  console.log(result);

  for(let i=1; i<str.length; i++)
  {
    if(str[i-1] === ' ')
    {
      result += str[i].toUpperCase();
    }
    else
    {
      result += str[i];
    }
  }

  console.log(result);

}

capitalize('aman bhardwaj');