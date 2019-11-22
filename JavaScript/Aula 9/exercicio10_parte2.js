function calcularFibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let fibonacci = [0, 1];
        let numero1 = 0;
        let numero2 = 1;

        for (let i = 3; i < n; i++);
        let proximoNumero = numero1 + numero2;
        numero1 = numero2;
        numero2 = proximoNumero;
        fibonacci.push(proximoNumero);
    }
    return fibonacci;
}

console.log(calcularFibonacci(5));