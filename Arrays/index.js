const arrays = [1,2,3,4,5];

// // ADT

// // Display
// // arrays.forEach(element => console.log(element));

// // Add Element
// arrays.push(6);     // At End
// arrays.unshift(7);  // At Beginning

// // Insert at particular index
// const indexInsertion = (index, x) => arrays.splice(index, 0, x);

// indexInsertion(0, 69);

// // DELETE 
// // arrays.pop();      // Last element gone
// // arrays.shift();     // First Element gone
// // Deletion by index
// const indexDeletion = index => arrays.splice(index, 1);    

// indexDeletion(4);

// SEARCHING
const search = x => {
    
    for(let i=0; i<arrays.length; i++){
        if(x === arrays[i]){
            return i;
        }
    }
}

const improvedSearch = x => {

    for(let i=0; i<arrays.length; i++){
        if(x === arrays[i]){
            if(i > 0){
                [arrays[i], arrays[i-1]] = [arrays[i-1], arrays[i]];    // swap
            }
            return i;
        }
    }

    return 'not found';
}
// Becomes O(1) after sometime as the key element keep on comming at the 0th index
// console.log(improvedSearch(5));
// console.log(improvedSearch(5));
// console.log(improvedSearch(5));
// console.log(improvedSearch(5));
// console.log(improvedSearch(5));
// console.log(improvedSearch(5));
// console.log(improvedSearch(5));


// Swap 2 vars by destructuring
// let a=5, b=7;
// console.log(a,b);
// [a, b] = [b,a];
// console.log(a,b);


// BINARY Search Array MUST be Sorted
const binarySearch = key => {

    let low = 0, high = arrays.length, mid;

    while(low <= high){

        console.log('I tried');     // only 2 times

        mid = Math.floor((low + high)/2);
        if(key === arrays[mid]){
            return mid;
        }
        else if(key < arrays[mid]){
            high = mid - 1;
        }

        else if(key > arrays[mid]){
            low = mid + 1;
        }
    }
}
// console.log(binarySearch(3));

const recursvieBinarySearch = (array, low , high, key) => {
    
    if(low <= high){
        const mid = Math.floor((high + low) / 2);
        if(key === array[mid]){
            return mid;
        }
        else if(key < arrays[mid]){
            return recursvieBinarySearch(array, low, mid - 1, key);
        }
        
        else if(key > arrays[mid]){
            return recursvieBinarySearch(array, mid + 1, high, key);
        }
    }
    
    return -1;
}

console.log(recursvieBinarySearch(arrays, 0, arrays.length - 1, -2));