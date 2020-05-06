const max = Number.MAX_SAFE_INTEGER;
const arr = [50,70,60,90,40,80,10,20,30, max];
let low = 0, high = arr.length;

const partition = (A, low, high) => {
    let pivot = A[low];
    i = low;
    j = high;

    while(i < j){
        do{ i++ }while(A[i] <= pivot);
        do{ j-- }while(A[j] > pivot);
        if(i<j){        // at least 2 elements are there
            [A[i], A[j]] = [A[j], A[i]];
        }
    }

    [A[low], A[j]] = [A[j], A[low]];
    return j;   // at which the pivot is now, after 1 partition
}

const quickSort = (arr, low, high) => {
    if(low < high){
        let j = partition(arr, low, high);
        quickSort(arr, low, j);
        quickSort(arr, j+1, high);
    }
    return arr;
}

console.log(quickSort(arr,low,high));