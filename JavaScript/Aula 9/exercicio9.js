let numero = 0;

function descobrirNumeroPrimo(numero) {
    for (let i = 2; i <= numero; i++) {
        if (numero % i === 0) {
            return false;
        }
        return numero !== 1;
    }
}

console.log(descobrirNumeroPrimo(6));
console.log(descobrirNumeroPrimo(3));