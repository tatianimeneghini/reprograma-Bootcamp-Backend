let n = 5;
let arrayFibonacci = [0, 1];

for (let i = 2; i < n; i++) {
    let valor = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];
    arrayFibonacci.push(valor);
}

console.log(arrayFibonacci);