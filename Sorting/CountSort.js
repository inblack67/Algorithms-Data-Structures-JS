const arr = [6, 3, 9, 10, 15, 6, 8, 12, 3, 6];

const countSort = arr => {
    const max = arr.sort((a , b) => b - a)[0];
    const countArray = [];
    for(let i=0; i<= max+1; i++){
        countArray[i] = 0;
    }
    arr.forEach((element) => {
        countArray[element]++;
    });
    let i = 0, j=0;
    while(i<countArray.length){
        if(countArray[i] > 0){
            arr[j++] = i;
            countArray[i]--;
        }
        else{
            i++;
        }
    }
    console.log(arr)
}

console.log(countSort(arr));