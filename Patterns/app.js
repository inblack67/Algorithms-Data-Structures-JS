function pattern(n, row=1, stair=''){
    if(n === row){
        return;
    }
    if(stair.length < row){
        stair+='*'
    }
    else{
        stair += ' '
    }
    if(n === stair.length){
        console.log(stair)
        return pattern(n, row+1)
    }
    pattern(n, row, stair)
}

pattern(4)

function iterativePattern(n){
    let i,j;
    /*
    *
    **
    ***
    */
    for(i=0; i<n; i++){

        for(j=0; j<=i; j++){
            document.write('*')     
        }
        document.write('<br/>')
    }
    document.write('===========================')
    document.write('<br/>')
    document.write('<br/>')
    /*
    1234
    5678
    */
   let count=1;
   for(i=1; i<=n; i++){
       for(j=1; j<=n; j++){
           document.write(count++)
       }
       document.write('<br/>')
   }

   document.write('===========================')
   document.write('<br/>')
   document.write('<br/>')
   /*
   ****
    ***
     **
      *
   */
  for(i=1; i<=n; i++){
      for(j=n; j>=1; j--){
          if(j>i){
            document.write('#')
          }
      }
      document.write('<br/>')
  }

  document.write('===========================')
  document.write('<br/>')
  document.write('<br/>')
  /*
  ****
  ***
  **
  *
  */
 for(i=1; i<=n; i++){
     for(j=n; j>=1; j--){
         if(i>j){
           document.write(' ')
         }
         else
         document.write('#')
     }
     document.write('<br/>')
 }

 document.write('===========================')
 document.write('<br/>')
 document.write('<br/>')
 /*
  #
 ###
#####
 */

for(i=1; i<=n; i++){

    const mid = Math.floor((2*n-1)/2)
    let level = '';

    for(j=1; j<= (2*n-1); j++){
        if((mid + i >= j) && (mid - i <= j)){
            level += '#';
        }
        else{
            level += ' '
        }
    }
    document.write(level)
    document.write('<br/>')
}

}


// iterativePattern(4);

// midpoint calculation
const arr = [1,2,3,4,5]
const mid = Math.floor(arr.length/2)
console.log(arr[mid])

const recursivePyramid = (n, row=0, level = '') => {

    if(row === n){
        return;
    }
    if(level.length === 2*n-1){
        console.log(level)
        return recursivePyramid(n, row+1)
    }

    const mid = Math.floor((2*n-1)/2)
    let add = '';

    if(mid + row >= level.length && mid - row <= level.length){
        add+='#';
    }
    else{
        add+=' '
    }

    recursivePyramid(n, row, level + add)

}

recursivePyramid(4)