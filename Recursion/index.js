const recursion = (number) => {

    if(number <= 0){
        return;
    }

    else if(number > 0){
        console.log(number);
        recursion(number - 1);
    }
}

recursion(3);