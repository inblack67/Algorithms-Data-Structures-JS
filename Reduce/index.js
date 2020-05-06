const peeps = [
    { id: "1", name: 'John', age: 27 },
    { id: "2", name: 'Watson', age: 30 },
    { id: "3", name: 'Sherlock', age: 21 },
];

let result;

// COUNT
result = peeps.reduce((acc, peep) => acc + 1, 0);

// SUM of ages
result = peeps.reduce((acc, peep) => acc + peep.age, 0);

// MAP array of names
result = peeps.reduce((acc, peep) =>  [...acc, peep.name], []);

// DICTIONARY
result = peeps.reduce((acc, peep) => {
    return {...acc, [peep.id]: peep}
} , {});

// console.log(result['3']);

// MAX age
result = peeps.reduce((acc, peep) => {
    if(acc === null || peep.age > acc){
        return peep.age;
    }
    return acc;
}, null);

// MIN age
result = peeps.reduce((acc, peep) => {
    if(acc === null || peep.age < acc){
        return peep.age;
    }
    return acc;
}, null); 


// FIND by name
// If wanna pass name as an argument, find method would be more efficient
result = peeps.reduce((acc, peep) => {
    if(acc === peep.name){
        return peep;
    }
    else {
        return acc;
    }
}, 'Sherlock');


// ALL persons over 18
result = peeps.reduce((acc, peep) => peep.age > 18 ? [...acc, peep] : acc, []);

// ALL over 18?
result = peeps.reduce((acc, peep) => {
    if(peep.age > 18){
        acc = true;
    }
    else{
        acc = false;
    }
    return acc;
}, false);


// AT LEAST ONE over 18?
result = peeps.reduce((acc, peep) => peep.age > 18 ? [...acc, peep] : acc, []);

// ALL over 18?
result = peeps.reduce((acc, peep) => peep.age > 18, false);


// ===========================================================


const orders = [
    { id: "1", status: "pending" },
    { id: "1", status: "pending" },
    { id: "1", status: "cancelled" },
    { id: "1", status: "shipped" },
];

// OCCURRENCES
result = (status) => {
    return orders.reduce((acc, order) => order.status === status ? ++acc : acc, 0);
}

// DETAILED OCCURRENCES     ***
result = orders.reduce((acc, order) => {
    return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
}, {});


// ===========================================================

const folders = [
    'index.js',
    ['Navbar.js', 'index.html'],
    ['some.js', ['all.js'], 'reduce.js']
]

// FLATTEN ***
function flatten(acc, item){

    if(Array.isArray(item)){
        return item.reduce(flatten, acc)
    }

    return [...acc, item];
}

result = folders.reduce(flatten, []);


// ===========================================================

// CUSTOM REDUCE fn

function reduce(arr, callback, initial){
    let acc = initial;

    for (let i = 0; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr);
    }

    return acc;
}

result = reduce([1,2,3,56], (acc, num) => acc + num, 0)


console.log(result);