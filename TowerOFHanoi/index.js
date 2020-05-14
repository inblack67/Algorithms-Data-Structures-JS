const TOH = (n, A, B, C) => {
    if(n > 0){
        TOH(n-1, A, C, B);
        console.log(`(${A}, ${C})`);
        TOH(n-1, B, A, C);
    }
}

TOH(64, 1, 2, 3);