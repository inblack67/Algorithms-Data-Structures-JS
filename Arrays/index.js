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

// console.log(recursvieBinarySearch(arrays, 0, arrays.length - 1, -2));

const maximum = () => {
    
    // return Math.max.apply(this, arrays);

    return arrays.sort((a, b) => b-a)[0];

    // let max = Number.MIN_SAFE_INTEGER;
    // arrays.forEach(element => {
    //     if(element > max){
    //         max = element;
    //     }
    // })

    // return max;
}

const minimum = () => {
    // return Math.min.apply(this, arrays);

    return arrays.sort((a, b) => a-b)[0];

    // let min = Number.MAX_SAFE_INTEGER;
    // arrays.forEach(element => {
    //     if(element < min){
    //         min = element;
    //     }
    // })

    // return min;

}

// console.log(maximum());
// console.log(minimum());

const sum = () => {

    return arrays.reduce((acc, element) => acc + element,0);

    // let sum = 0;


    // arrays.forEach(element => {
    //     sum += element;
    // });

    return sum;
}
// console.log(sum());

const reverse = () => arrays.reverse();     // changes original array

// console.log(arrays);
// console.log(reverse());

// SORTED ARRAYS
const sortedInsertion = (arrays, x) => {
    arrays.unshift(x)
    return arrays.sort((a, b) => a - b);
};

// console.log(sortedInsertion(arrays, 10));

const isSorted = arrays => {

    for(let i=0; i<arrays.length; i++){
        if(arrays[i] > arrays[i+1]){
            return false;
        }
    }
    return true;
}

// console.log(isSorted([1,53,333,2533,533]));

const mergeArrays = (arr1, arr2) => {
    // return arr1.concat(arr2);
    // return [...arr1, ...arr2];

    // no duplicates (UNIQUE)
    const arr3 = [...arr1, ...arr2];
    return arr3.filter((value, index) => {
        // only first position taken into account
        return arr3.indexOf(value) === index;
    });
}

// console.log(mergeArrays([1,2,3,4], [5,2,1,8]));

// missing elements in an array wrt to another
const missing = (arr1, arr2) => {
    return arr1.filter((v, i) => {
        if(!arr2.includes(v)){
            return v;
        }
    });
}

// console.log(missing([1,2,3,4,5], [2,3,4]));

// Hashing  Duplicates
const hashing = (arr) => {
    const hash = [];
    const duplicates = [];

    for(let i=0; i<= 71; i++){
        hash.push(0);
    }

    arr.forEach((v, i) => {
        ++hash[v];
    })

    hash.forEach((v, i) => {
        if(v > 1){
            duplicates.push(i);
        }
    })

    return duplicates;
}

console.log(hashing([66,67,,69,69, 66, 68,69,70,71, 71, 71, 4,5,2,1,12,3,4,5]));