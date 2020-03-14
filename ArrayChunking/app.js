const arr = [1,2,3,4,5];
let chunky = []

function chuckedArray1(arr, n)
{
  let chunk = [];
  let index = 0

  while (index !== arr.length) {
    chunk.push(arr.slice(index, index+n))
    index+=n
  }

  return chunk

}

console.log(chuckedArray1(arr, 2));

function chunkedArray(arr, n)
{

  for (const i of arr) {

    const last = chunky[chunky.length - 1]  

    if(!last || last.length === n)
    {
      chunky.push([i])
    }
    else
    {
      last.push(i)
    }
  }

  return chunky
}


// console.log(chunkedArray(arr, 2));