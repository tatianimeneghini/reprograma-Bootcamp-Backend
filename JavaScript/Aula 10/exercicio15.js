function receberQuantidade(x) {
    let arrayX = [];
    for (x = 0; x < 100; x++) {
        let x = Math.random() * 15 + 1;
        arrayX.push(x);
    }
    return arrayX;
}

console.log(receberQuantidade(3));