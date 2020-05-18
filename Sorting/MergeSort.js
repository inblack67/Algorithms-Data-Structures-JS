const arr = [8,2,9,6,5,3,7,4,1];
let low = 0, high = arr.length, mid = Math.floor(arr.length/2);

const merge = (arr, low, mid, high) => {
    let mergedArr = [];
    let i = low, j = mid + 1, k = low;

    while(i <= mid && j <= high){
        if(arr[i] < arr[j]){
            mergedArr[k++] = arr[i++];
        }
        else{
            mergedArr[k++] = arr[j++];
        }
    }

    for(; i <= mid; i++){
        mergedArr[k++] = arr[i];
    }

    for(; j <= high; j++){
        mergedArr[k] = arr[j];
    }

    for(i = low; i<= high; i++){
        arr[i] = mergedArr[i];
    }
}

const mergeSort = (arr, low, high) => {

    if(low < high){
        let mid = Math.floor((low + high)/2);
        mergeSort(arr, low, mid);
        mergeSort(arr, mid+1, high);
        merge(arr, low, mid, high);
    }

    return arr;
}

const iterativeMergeSort = (arr, low, mid, high) => {
    for(let p = 2; p<= arr.length; p*=2){

    }
}

console.log(mergeSort(arr, low, high));
// console.log(iterativeMergeSort(arr, low, mid, high));