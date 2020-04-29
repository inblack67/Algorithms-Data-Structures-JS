const recursiveExponents = (base, exponent) => {
    if(exponent === 0){
        return 1;
    }
    else{
        return base * recursiveExponents(base, exponent - 1);
    }
}

const fasterRecursiveExponent = (base, exponent) => {
    if(exponent === 0){
        return 1;
    }
    else{
        if(exponent % 2 === 0){
            return fasterRecursiveExponent(base * base, exponent / 2);
        }

        else{
            return base * fasterRecursiveExponent(base * base, (exponent - 1) / 2);
        }
    }
}

console.log(fasterRecursiveExponent(20, 2));