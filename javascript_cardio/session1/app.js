function maxChar(str){
    let result = purify(str);
    const object = {};
    result.split('').forEach(s => {
        if(!object[s]){
            object[s] = 1;
        }
        else{
            object[s]++;
        }
    })
    let max = Number.MIN_SAFE_INTEGER;
    let char = '';
    for (const k in object) {
        if(object[k] > max){
            max = object[k];
            char = k;
        }
    }
    return { char, max };
}

function purify(str){
    return str.toLowerCase().trim();
}

const output = maxChar('Aman Bhardwaj');
console.log(output)