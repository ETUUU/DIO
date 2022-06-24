const lista = [30, 30, 40, 5, 223, 2049, 3034, 5];

function numUnicos(array) {
    const set = new Set(array);

    

    return [...set];
}

console.log(numUnicos(lista));