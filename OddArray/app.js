const arr = [1,2,3,1,1,10];

let obj = {};

for (const i of arr) {
  if(!obj[i])
  {
    obj[i] = 1;
  }
  else
  {
    obj[i]++;
  }
}

for(const i in obj)
{
  if(obj[i] % 2 !== 0)
  {
    console.log(parseInt(i));
  }
}

// console.log(obj);


function findOdd(A) {

let obj = {};

for (const i of A) {
  if(!obj[i])
  {
    obj[i] = 1;
  }
  else
  {
    obj[i]++;
  }
}

for(const i in obj)
{
  if(obj[i] % 2 !== 0)
  {
    return parseInt(i);
  }
}
}


console.log(findOdd(arr));