const arr = [8,5,7,3,2,1,0,-3];

// O(n^2)
const insertionSort = arr => {
    for(let i=1; i<arr.length; i++){
        let j = i-1;
        let x = arr[i];
        while(arr[j] > x && j >= -1){
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = x;
    }
    return arr;
}

console.log(insertionSort(arr));
