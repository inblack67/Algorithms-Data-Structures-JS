function reverseString(str){


    // const result = Array.from(str).reverse().join('');

    // const result = str.split('').reverse().join('');

    // 1 extra = \0
    let result = '';
    for(let i=str.length - 1; i>=0; i--){
        result += str[i];
    }

    console.log(str[str.length-1])

    return result;
}

const output = reverseString('hello');
console.log(output)