// Iterating Through Objects

const users = {
    user1: {
        name: 'Aman',
        age: 22,
        profession: 'webdev' 
    },
    user2: {
        name: 'John',
        age: 21,
        profession: 'webdev' 
    },
    user3: {
        name: 'Doe',
        age: 20,
        profession: 'webdev' 
    },
    user3: {
        name: 'Smith',
        age: 18,
        profession: 'webdev' 
    }
}

let res;


// ONLY KEYS
// res = Object.keys(users);
// res.map(key => console.log(users[key].name));


// ONLY VALUES
// res = Object.values(users);
// res.map(u => console.log(u.name));
// res.forEach(u => console.log(u.name));

// BOTH
res = Object.entries(users);
res.map(([key, value]) => {
    console.log(key);
    console.log(value);
})

// console.log(res);