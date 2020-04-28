const normalSearch = (x, array) => {

    for(let i=0; i<array.length; i++){
        console.log('I tried');
        if(array[i] === x){
            return i;
        }
    }

    return -1;
}

const binarySearch = (x, arr) => {

    let low = 0;
    let high = arr.length - 1;
    
    while(low <= high){

        console.log('I tried');

        const middle = low + Math.floor((high - low) / 2);

        if(arr[middle] === x){
            return middle;
        }

        if(x < arr[middle]){
            high = middle - 1;
        }

        if(x > arr[middle]){
            low = middle + 1;
        }
    }

    return -1;
}


const arr = [0,1,2,3,4,5,6,7,8,9,10];

console.log(normalSearch(10, arr));
console.log(binarySearch(10, arr));