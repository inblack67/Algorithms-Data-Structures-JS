function maxChars(str)
{
  let obj = {}

  for(let char of str)
  {
    if(!obj[char])
    {
      obj[char] = 1;
    }
    else
    {
      obj[char]++;
    }
  }

  let max = 0;
  let charMax = ''

  for(let i in obj)
  {
    if(obj[i] > max)
    {
      max = obj[i];
      charMax = i;
    }
  }

  let result = {};
  result.max = max;
  result.charMax = charMax;
  return result

}

console.log(maxChars('aaabbbggg11111111'));