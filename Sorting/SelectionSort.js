const arr = [8,6,3,10,9,4,12,5,2,7,-1];

const selectionSort = arr => {
    for(let i=0; i<arr.length; i++){
        let j = i, k = i;
        // j must scan every element and swap with k if needed
        for(j=i; j<arr.length; j++){
            if(arr[j] < arr[k]){
                [arr[k], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    return arr;
}

console.log(selectionSort(arr));