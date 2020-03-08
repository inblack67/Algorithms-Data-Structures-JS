function reverseInt(x)
{
  const rev = x.toString().split('').reverse().join('');

  return parseInt(rev) * Math.sign(x);
}

console.log(reverseInt(410070));