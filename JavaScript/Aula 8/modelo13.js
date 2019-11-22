function criarCalculadora(numero1, numero2, operador){
    if (operador === '+'){
        return numero1 + numero2;
    } else if (operador === '-'){
        return numero1 - numero2;
    } else if (operador === '*'){
        return numero1 * numero2;
    } else if (operador === '/'){
        return numero1 / numero2;
    } else if (operador === '**'){
        return numero1 ** numero2;
    } else {
        return 'Operador inválido';
    }
}

console.log(criarCalculadora(10, 5, '+'));
console.log(criarCalculadora(10, 2, '-'));
console.log(criarCalculadora(10, 50, '*'));
console.log(criarCalculadora(10, 3, '/'));
console.log(criarCalculadora(20, 2, '**'));
console.log(criarCalculadora(10, 5, '#'));