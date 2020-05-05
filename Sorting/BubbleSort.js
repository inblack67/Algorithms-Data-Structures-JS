const array = [8, 5, 7, 3, 2, 69, 7, 3, 1, 0, -1, 67];

const bubbleSort = array => {
    const n = array.length;
    let isSwapped = false;

    // passes loop
    for(let i=0; i<n-1; i++){     // n-1 comparisons
        // swapping loop
        for(let j=0; j<n-1-i; j++){       // for every pass swapping decreases by 1
            if(array[j] > array[j+1]){
                [array[j+1], array[j]] = [array[j], array[j+1]];
                isSwapped = true;
            }
        }
        
        if(!isSwapped){
            return;
        }
    }
}

bubbleSort(array);
console.log(array);