function purify(str)
{

  // [^...] anything but them (1, _ , a , A)
  const string = str.replace(/[^\w]/g, '');

  return (string.toLowerCase())

}

function isAnagram2(str1, str2)
{
  let string1 = str1.split('').sort().join('');
  let string2 = str2.split('').sort().join('');

  string1 = purify(string1);
  string2 = purify(string2);

  return string1 === string2;

}


function isAnagram(str1, str2)
{
  let obj1 = buildCharMap(str1);
  let obj2 = buildCharMap(str2);

  if(Object.keys(obj2).length !== Object.keys(obj1).length)
  {
    return false;
  }

  for(i in obj1 && i in obj2)
  {
    if(obj1[i] !== obj2[i])   // checking the actual count of the keys' values.
    {
      return false;
    }
  }

  return true;
}

function buildCharMap(str){

  const string = purify(str);

  let obj = {}

  for(i of string)
  {
    if(!obj[i])
    {
      obj[i] = 1;
    }
    else
    {
      obj[i]++;
    }
  }

  return obj;
}


console.log(isAnagram('rain!', 'nari@'));
console.log(isAnagram2('nama#$%^','aman'));
