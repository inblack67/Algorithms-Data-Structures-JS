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

console.log(improvedSearch(5));
console.log(improvedSearch(5));
console.log(improvedSearch(5));
console.log(improvedSearch(5));
console.log(improvedSearch(5));
console.log(improvedSearch(5));
console.log(improvedSearch(5));


// Swap 2 vars by destructuring
// let a=5, b=7;
// console.log(a,b);
// [a, b] = [b,a];
// console.log(a,b);
